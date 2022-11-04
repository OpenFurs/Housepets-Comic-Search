import json
import re
import sys
import time
from concurrent.futures import ThreadPoolExecutor

import redis
import requests
from bs4 import BeautifulSoup
from colorama import *
from redis.commands.search.field import NumericField
from redis.commands.search.field import TagField
from redis.commands.search.field import TextField
from redis.commands.search.indexDefinition import IndexDefinition
from scraper import *

base_url = "https://www.housepetscomic.com"
user_agent = {
        "user-agent": ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5)"
                       "AppleWebKit/537.36 (KHTML, like Gecko)"
                       "Chrome/45.0.2454.101 Safari/537.36"),
        "referer":base_url,
    }
rs = requests.session()

init(wrap=False)
stream = AnsiToWin32(sys.stderr).stream

def get_comics(ch_link: str):
    url_set = ch_link
    gc_url = rs.get(url_set, headers=user_agent, timeout=None)
    comic_item = BeautifulSoup(gc_url.text, "html.parser").find_all("article", id=re.compile("^post-"))

    first_comic = comic_item[0]
    comic_link: str = first_comic.find("a")["href"]
    comic_title: str = first_comic.find(
        "a", {"rel": "bookmark"}).get_text().strip()
    comic_date: str = first_comic.find(
        "span", class_=re.compile("^mh-meta-date")).get_text()

    return {
        'comic_title': comic_title,
        'comic_link': comic_link,
        'comic_date': comic_date,
    }


def grab_chapters_comic():
    print("Grabbing the first comic for each chapter...")
    # grab the chapters
    archive_url = rs.get(f"{base_url}/archive/", headers=user_agent)
    chapter_dropdown = BeautifulSoup(archive_url.text, "html.parser").find_all("option", class_="level-0")

    for index, chapters in enumerate(chapter_dropdown, start=1):
        name_parse = re.sub("^(-|\d)(\d\d).\s", "", chapters.get_text())
        ct_out = {
            'id': index,
            'name': name_parse,
            'link': chapters["value"],
        }
        ch_link, ch_name = chapters["value"], name_parse

def main():
    with open("./redis_config.json") as f:
        redis_config = json.load(f)

    print("Connecting to redis...")
    if redis_config["database"]["password"] is None:
        RedisDB = redis.StrictRedis(
            host=redis_config["database"]["host"],
            port=int(redis_config["database"]["port"]),
            username=redis_config["database"]["username"],
            decode_responses=True
        )
    else:
        RedisDB = redis.StrictRedis(
            host=redis_config["database"]["host"],
            port=int(redis_config["database"]["port"]),
            username=redis_config["database"]["username"],
            password=redis_config["database"]["password"],
            decode_responses=True
        )
    schema = (
        TextField("title"),
        TextField("comic_link"),
        TagField("characters"),
        TextField("image"),
        NumericField("guest"),
        NumericField("index", sortable=True),
    )

    # generate a list of years from 2008 to todays year
    years = [str(x) for x in range(2008, int(time.strftime("%Y")) + 1)]

    # housepets_db = {}
    print(
        f"{Back.YELLOW}{Fore.LIGHTWHITE_EX}{Style.BRIGHT} Generating Housepets database... {Style.RESET_ALL}"
    )

    characters_db = set()

    for year in years:
        # create an index for the comics specific year
        index_def = IndexDefinition(prefix=[f"{year}:"],
                                    score=0.5,
                                    score_field="doc_score")

        try:
            print(
                f"{Back.YELLOW}{Fore.LIGHTWHITE_EX}{Style.BRIGHT} Setting up {year} index... {Style.RESET_ALL}"
            )
            RedisDB.ft(f"{year}").create_index(schema, definition=index_def)
        except Exception as e:
            print(
                f"{Back.RED}{Fore.LIGHTWHITE_EX}{Style.BRIGHT} {year} index already exists {Style.RESET_ALL}"
            )

        print(
            f"Searching in year {Fore.GREEN}{Style.BRIGHT}{year}{Style.RESET_ALL}"
        )

        web = rs.get(
            f"https://www.housepetscomic.com/archive/?archive_year={year}",
            headers=user_agent,
            timeout=None,
        )
        soup = BeautifulSoup(web.text, "html.parser")
        link_tag = soup.find_all("a", {
            "rel": "bookmark",
            "href": re.compile("^https://")
        })
        print(
            f"Found {Fore.GREEN}{Style.BRIGHT}{len(link_tag)}{Style.RESET_ALL} tags!"
        )

        for index, link in enumerate(link_tag, start=1):
                link = link.get("href")

                data = scrape_comic(link, year, index, characters_db)

                RedisDB.hset(
                    data["key_name"],
                    mapping=data["comic"]
                )
                characters_db = data["characters"]

    #   put the character list into redis
    RedisDB.lpush("characters_db", *characters_db)


with ThreadPoolExecutor(max_workers=50) as executor:
    executor.map(main, range(155))

if __name__ == "__main__":
    main()
