"use client"

import { ComicItem } from "./ComicItem"

export function ComicGrid({ comics }: { comics: unknown }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2.5">
      {comics.map((item, i) => (
        <ComicItem
          key={i}
          image={item.image}
          title={item.title}
          date={item.date}
          characters={item.characters}
        />
      ))}
    </div>
  )
}
