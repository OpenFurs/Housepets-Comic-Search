"use client"

import { Button } from "@/components"
import Link from "next/link"
import { LuBookmark } from "react-icons/lu"
import SearchBox from "./NavbarSearchBox"
import Image from "next/image"
import SettingsPopover from "./NavbarSettingsPopup"
import NavbarMenu from "./NavbarMenu"
import { useIsExactRoute } from "@/hooks"

export function Navbar() {
  const isSavesPage = useIsExactRoute("/saves")

  return (
    <nav className="z-[1] flex px-8 py-4 justify-between odd:*:flex odd:*:items-center sticky top-0 bg-white">
      {/* Menu navigation and wordmark */}
      <div className="gap-x-2">
        <NavbarMenu />
        <Link
          href="/"
          className="flex items-center text-2xl font-bold cursor-pointer select-none gap-x-2.5"
        >
          <Image
            src="/icon.png"
            alt=""
            width={40}
            height={40}
            className="border-2 rounded-md"
          />
          <span className="[letter-spacing:-0.03rem]" translate="no">
            Searchpets!
          </span>
        </Link>
      </div>
      {/* Search box */}
      <SearchBox />
      {/* Other actions */}
      <div className="gap-x-1.5">
        <Link href="/saves">
          <Button
            prefix={<span className="font-semibold">0</span>}
            icon={<LuBookmark size={19} />}
            variant={!isSavesPage ? "primary" : "secondary"}
          />
        </Link>
        {/* Settings */}
        <SettingsPopover />
      </div>
    </nav>
  )
}
