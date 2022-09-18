import { createClient } from "redis"

const client = createClient({
  url: process.env.REDIS_URL
})

export async function searchComics(years: string[], characters: string[]) {
  client.connect()

  try {
    years = Array.isArray(years) ? years : [years]
    characters = Array.isArray(characters) ? characters : [characters]

    let comicsOutput: ComicItems[] = []

    console.log(years)
    console.log(characters)

    const character_query = characters
      .map((character) => {
        return `@characters:{${character}}`
      })
      .join(" ")

    console.log(character_query)

    for (const year of years) {
      console.log(year)
      console.log("this needs to run after the above")

      await client.ft
        .search(year, character_query, { LIMIT: { from: 0, size: 500 } })
        .then((result) => {
          result.documents.forEach((doc) => {
            const comic: ComicItems = {
              title: doc.value.title as string,
              characters: (doc.value.characters as string).split(", "),
              comic_link: doc.value.comic_link as string,
              image: doc.value.image as string
            }
            comicsOutput.push(comic)
          })
        })
    }

    client.quit()
    return { comics: comicsOutput }
  } catch {
    client.quit()

    return { comics: "ERROR: Search failed!" }
  }
}

export async function grabData() {
  client.connect()
  let comicCount = 0
  let charCount = 0

  await client.DBSIZE().then((result) => {
    console.log(result - 1)
    comicCount = result - 1
  })

  await client.LLEN("characters_db").then((result) => {
    console.log(result)
    charCount = result
  })

  client.quit()
  return { comicCount: comicCount, charCount: charCount }
}

export async function grabCharacters() {
  client.connect()

  let characters: string[] | undefined

  await client.LRANGE("characters_db", 0, -1).then((result) => {
    client.quit()
    characters = result
  })

  return { characters_db: characters }
}
