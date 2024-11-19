from datetime import datetime
from dotenv import load_dotenv
import os

# loads any environment variables that are gonna be used
load_dotenv()

# This is so that we'll have control when "from constants import *" is defined
__all__ = [
    "initial_year",
    "current_year",
    "HP_BASE_URL",
    "HP_WIKI_URL",
    "MONGO_URL",
]

initial_year: int = int(2008)
current_year: int = datetime.now().year

HP_BASE_URL = "https://www.housepetscomic.com"
HP_WIKI_URL = "https://housepetscomic.fandom.com"

MONGO_URL = os.getenv("MONGO_URL")
