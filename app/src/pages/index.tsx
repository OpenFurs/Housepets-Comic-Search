import { useEffect, useState } from "react"
import { GetStaticProps } from "next"
import dynamic from "next/dynamic"
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { ComicItemLoading } from "@/components/ComicItem"
import BaseHead from "@/components/BaseHead"
import Container from "@/components/Container"
import HeaderHero from "@/components/layouts/HeaderHero"
import YearPickerItem from "@/components/YearPickerItem"
import BackToTopButton from "@/components/BackToTop"

const ComicItem = dynamic(() => import("../components/ComicItem"), {
  loading: () => <ComicItemLoading />,
  ssr: false,
})

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:5000/data")
  const data = await res.json()
  // console.log(data)

  return {
    props: data,
  }
}

export default function Home({ comicCount, charCount }) {
  // #region Communicating with the Flask server and some UI stuff
  const [comics, setComics] = useState([])
  const [characters, setCharacters] = useState([])
  const [years, setYears] = useState([])

  // load the data from localstorage
  useEffect(() => {
    const comics = localStorage.getItem("comics")
    const characters = localStorage.getItem("characters")
    const years = localStorage.getItem("years")

    if (comics) {
      setComics(JSON.parse(comics))
    }
    if (characters) {
      setCharacters(characters.split(", "))
    }
    if (years) {
      setYears(years.split(","))
      // for every yearpicker item, check if it's checked
      years.split(",").forEach((year) => {
        const year_id = document.getElementById(
          `year-${year}`
        ) as HTMLInputElement
        if (year_id) {
          year_id.checked = true
        }
      })
    }
  }, [])

  // generate a list of years from 2008 to the current year in strings
  const generateYears = () => {
    const currentYear = new Date().getFullYear()
    const years = []
    for (let i = 2008; i <= currentYear; i++) {
      years.push(i.toString())
    }
    return years
  }

  const year_list = generateYears()

  const onChangeCharacters = (e: any) => {
    setCharacters(e.target.value.toLowerCase().split(", "))
    console.log(e.target.value.toLowerCase())
    // were storing the characters in localstorage as a string
    localStorage.setItem("characters", e.target.value.toLowerCase())
  }

  const requestHousepetsData = () => {
    console.info(`🚧 DEBUG: Searching on year ${years}`)
    console.info(`🚧 DEBUG: ${characters}`)

    if (years.length === 0) {
      console.log("🚧 DEBUG: No year selected")
      return
    }

    if (characters.join(", ") === "") {
      console.log("🚧 DEBUG: No character selected")
      return
    }

    fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        year: years.sort(),
        characters: characters,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setComics(res.comics)
        localStorage.setItem("comics", JSON.stringify(res.comics))
      })
  }

  const ClickedYears = (year) =>
    years.includes(year)
      ? setYears(years.filter((y) => y !== year))
      : setYears(years.concat(year))

  useEffect(() => {
    console.info(`🚧 DEBUG: ${years}`)
    localStorage.setItem("years", years.join(","))

    const resultText: any = document.querySelector(".result-container")
    const heroMargin: any = document.querySelector(".hero-header-container")

    if (comics.length !== 0) {
      resultText.classList.remove("hidden")
      heroMargin.style.marginTop = "1vh"
      heroMargin.style.display = "none"
      return
    }

    resultText.classList.add("hidden")
    heroMargin.style.marginTop = "12vh"
    heroMargin.style.display = "flex"
  }, [comics, years])

  const title = "Search characters and texts from Housepets!"
  let description = `Search through ${comicCount} pages and ${charCount} characters from the entire Housepets! comic catalog!`

  // #endregion

  return (
    <>
      <BaseHead title={title} description={description} />
      <BackToTopButton />
      <Container>
        {/* main */}
        <HeaderHero characterCount={charCount} comicCount={comicCount} />
        {/* Search box */}
        <div className="search-box-wrapper">
          <div className="search-box">
            <input
              type="text"
              className="search-box__input"
              placeholder="Search for characters"
              onChange={onChangeCharacters}
              onKeyDown={(e) => e.key === "Enter" && requestHousepetsData()}
              value={characters.join(", ")}
            />
            <div className="flex items-center pr-3">
              <button className="search-btn" onClick={requestHousepetsData}>
                <FaIcon icon={faMagnifyingGlass} size="lg" />
              </button>
            </div>
          </div>
        </div>
        {/* Year picker */}
        <div className="year-picker-wrapper">
          <div className="year-picker">
            {year_list.map((year) => (
              <YearPickerItem
                key={year}
                years={year}
                onClick={() => ClickedYears(year)}
              />
            ))}
          </div>
        </div>
        {/* Search results */}
        <div className="result-container">
          <div className="result-text">
            <h2>
              Showing <strong>{comics.length}</strong> results
            </h2>
            <button
              id="clear-btn"
              onClick={() => {
                setComics([])
                localStorage.removeItem("comics")
              }}
            >
              <FaIcon icon={faTimes} className="mr-2" />
              Clear results
            </button>
          </div>
          <div className="result-grid">
            {comics.map((comic) => {
              return (
                <ComicItem
                  key={comic.comic_link}
                  characters={comic.characters.join(", ")}
                  link={comic.comic_link}
                  title={comic.title}
                  image={comic.image}
                />
              )
            })}
          </div>
        </div>
      </Container>
    </>
  )
}
