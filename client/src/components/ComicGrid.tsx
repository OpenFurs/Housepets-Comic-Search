"use client"

import dynamic from "next/dynamic"

const ComicItem = dynamic(
  () => import("./ComicItem").then((c) => c.ComicItem),
  { ssr: false }
)

export function ComicGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2.5">
      {[...Array(7)].map((_, i) => (
        <ComicItem
          key={i}
          image="/placeholder.png"
          title="Title Placeholder"
          isBookmarked={false}
          date="1/1/2024"
          characters={["a", "c"]}
        />
      ))}
    </div>
  )
}
