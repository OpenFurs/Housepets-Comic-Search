"use client"

import { BookmarkItemProvider, ComicViewProvider } from "@/contexts"
import { ComicItem } from "./ComicItem"

export function ComicView({ comics }: { comics: unknown }) {
  return (
    <ComicViewProvider>
      <div className="py-4 flex">
        <div>View</div>
        <div>Filters</div>
      </div>
      <BookmarkItemProvider>
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
      </BookmarkItemProvider>
    </ComicViewProvider>
  )
}
