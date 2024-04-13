import { Button } from "@/components"
import Link from "next/link"
import { LuBookmark, LuMenu, LuSettings } from "react-icons/lu"
import SearchBox from "./NavbarSearchBox"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="z-[1] flex px-8 py-4 justify-between odd:[&_div]:flex odd:[&_div]:items-center sticky top-0 bg-white">
      {/* Menu navigation and wordmark */}
      <div className="gap-x-2">
        <Button icon={<LuMenu size={19} />} variant="tritery" />
        <Link
          href="/"
          translate="no"
          className="flex items-center text-2xl font-bold cursor-pointer select-none gap-x-2.5"
        >
          <Image
            src="/icon.png"
            alt=""
            width={40}
            height={40}
            className="border-2 rounded-md"
          />
          <span className="[letter-spacing:-0.03rem]">Searchpets!</span>
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
