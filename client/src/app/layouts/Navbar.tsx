import { Button } from "@/components"
import Link from "next/link"
import { LuBookmark, LuMenu, LuSettings } from "react-icons/lu"
import SearchBox from "./NavbarSearchBox"

export default function Navbar() {
  return (
    <nav className="flex px-8 py-4 justify-between odd:[&_div]:flex odd:[&_div]:items-center sticky top-0">
      {/* Menu navigation and wordmark */}
      <div className="gap-x-2">
        <Button icon={<LuMenu size={19} />} />
        <Link
          href="/"
          translate="no"
          className="text-2xl font-bold select-none cursor-default"
        >
          Searchpets!
        </Link>
      </div>
      {/* Search box */}
      <SearchBox />
      {/* Other actions */}
      <div className="gap-x-1.5">
        <Link href="/saves">
          <Button icon={<LuBookmark size={19} />} />
        </Link>
        <Button icon={<LuSettings size={19} />} />
      </div>
    </nav>
  )
}
