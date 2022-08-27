import { cli } from "cypress"
import { result } from "cypress/types/lodash"
import { createClient } from "redis"
import internal from "stream"

export async function searchComics(years: string[], characters: string[]) {
  const client = createClient({
    url: process.env.REDIS_URL
  })
  client.connect()

  let comicsOutput: string[] = []
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
        // console.log(result.documents)
        result.documents.forEach((doc) => {
          console.log(doc.value.title)
          const comic: any = {
            title: doc.value.title,
            characters: (doc.value.characters as string).split(","),
            comic_link: doc.value.comic_link,
            image: doc.value.image
          }
          comicsOutput.push(comic)
        })
      })
  }
  client.quit()
  console.log(comicsOutput)
  return { comics: comicsOutput }
}

export async function grabData() {
  const client = createClient({
    url: process.env.REDIS_URL
  })
  client.connect()
  let comicCount = 0, charCount = 0
  await client.DBSIZE().then(
    (result) => {
      console.log(result-1)
      comicCount = result-1
    }
  )
  await client.LLEN("characters_db").then((result) => {
    console.log(result)
    charCount = result
  })
  client.quit()
  return {comicCount: comicCount, charCount: charCount}
}

export async function grabCharacters() {
  const client = createClient({
    url: process.env.REDIS_URL
  })
  client.connect()
  let characters
  await client.LRANGE("characters_db", 0, -1).then((result) => {
    client.quit()
    characters = result
  })
  return {characters_db: characters}
}