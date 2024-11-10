import { CharacterView } from "@/components"
import { headers } from "next/headers"

export default async function CharacterListPage() {
  const urlBase = (await headers()).get("x-origin-url")

  const req = await fetch(`${urlBase}/api/characters`)
  const characters = await req.json()

  return (
    <>
      <h1 className="my-6 flex justify-between font-bold text-3xl">
        Characters
      </h1>
      <CharacterView data={characters} />
    </>
  )
}
