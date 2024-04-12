import { Button } from "@/components"
import Link from "next/link"
import { LuBookmark, LuMenu, LuSettings } from "react-icons/lu"
import SearchBox from "./NavbarSearchBox"

export default function Navbar() {
  return (
    <nav className="flex px-8 py-4 justify-between [&_div]:flex [&_div]:items-center">
      {/* Menu navigation and wordmark */}
      <div>
        <Button icon={<LuMenu size={19} />} />
        <Link
          href="/"
          translate="no"
          className="text-2xl font-bold select-none"
        >
          Searchpets!
        </Link>
      </div>
      {/* Search box */}
      <SearchBox />
      {/* Other actions */}
      <div className="gap-x-0.5">
        <Button icon={<LuBookmark size={19} />} />
        <Button icon={<LuSettings size={19} />} />
      </div>
    </nav>
  )
}
