export const dynamic = "force-dynamic"

import { ComicGrid } from "@/components"

export default async function SearchPage() {
  const req = await fetch("http://localhost:3000/api/comics")
  const comics = await req.json()

  return <ComicGrid comics={comics} />
}
