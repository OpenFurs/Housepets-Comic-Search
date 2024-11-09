export const dynamic = "force-dynamic"
export const revalidate = 60

import type { Metadata } from "next"
import { headers } from "next/headers"
import { ComicView } from "@/components"
import { SITE_NAME } from "@/constants"
import type { RouteParams } from "@/types"

export async function generateMetadata(): Promise<Metadata> {
  const title = "Search results for {dynamic title}"

  return {
    title,
    openGraph: {
      title,
      siteName: SITE_NAME
    }
  }
}

export default async function SearchPage({ searchParams }: RouteParams) {
  const urlBase = (await headers()).get("x-origin-url")

  const req = await fetch(`${urlBase}/api/comics`)
  const comics = await req.json()

  return <ComicView comics={comics} />
}
