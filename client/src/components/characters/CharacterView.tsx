import { BookmarkItemProvider } from "@/contexts"
import type { HPCharacter } from "@/types"
import { CharacterItem } from "./CharacterItem"

export function CharacterView({ data }: { data: Partial<HPCharacter[]> }) {
  return (
    <div id="__item-grouper-context-placeholder" className="contents">
      <div className="pb-4 flex">
        <div>View</div>
        <div>Filters</div>
      </div>
      <BookmarkItemProvider>
        <div className="grid grid-cols-3 gap-2">
          {data.map((item, i) => (
            <CharacterItem key={i} name={item?.name} slug={item?.slug} />
          ))}
        </div>
      </BookmarkItemProvider>
    </div>
  )
}
