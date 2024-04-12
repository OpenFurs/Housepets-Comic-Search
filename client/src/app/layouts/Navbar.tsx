import { Button } from "@/components"
import { LuBookmark, LuMenu, LuSearch, LuSettings } from "react-icons/lu"

export default function Navbar() {
  return (
    <nav className="flex px-8 py-4 justify-between [&_div]:flex [&_div]:items-center">
      {/* Menu navigation and wordmark */}
      <div>
        <Button icon={<LuMenu size={19} />} />
        <span translate="no">Searchpets!</span>
      </div>
      {/* Search box */}
      <div className="relative">
        <div className="rounded-md border border-black overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            aria-label="Search stuff"
            className="px-3 py-1.5"
          />
          <Button icon={<LuSearch size={19} />}></Button>
        </div>
      </div>
      {/* Other actions */}
      <div className="gap-x-0.5">
        <Button icon={<LuBookmark size={19} />} />
        <Button icon={<LuSettings size={19} />} />
      </div>
    </nav>
  )
}
