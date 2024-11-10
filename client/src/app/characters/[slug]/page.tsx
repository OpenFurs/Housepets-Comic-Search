import type { HPCharacter, RouteParams } from "@/types"
import type { Metadata } from "next"
import { headers } from "next/headers"

type CharacterPageRoute = RouteParams<{ slug: string }>

export async function generateMetadata({
  params
}: CharacterPageRoute): Promise<Metadata> {
  const title = "{char}"
  const description = "yes"

  return {
    title,
    description,
    openGraph: {
      title,
      description
    }
  }
}

export default async function CharacterPage({
  params,
  searchParams
}: CharacterPageRoute) {
  const urlBase = (await headers()).get("x-origin-url")

  const req: HPCharacter[] = await fetch(`${urlBase}/api/characters`).then(
    (r) => r.json()
  )

  const charFiltered = req.filter((x) => x.slug === params.slug)[0]

  return (
    <>
      <section>
        <h1 className="text-2xl font-bold">{charFiltered.name}</h1>
        <div>
          <span>N comics</span>
          <span>N chapter arcs</span>
        </div>
      </section>
      <div>comics</div>
    </>
  )
}
