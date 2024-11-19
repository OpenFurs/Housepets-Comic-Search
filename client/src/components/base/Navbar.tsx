"use client"

import { Button } from "@/components"
import Link from "next/link"
import { LuBookmark } from "react-icons/lu"
import SearchBox from "./NavbarSearchBox"
import Image from "next/image"
import SettingsPopover from "./NavbarSettingsPopup"
import NavbarMenu from "./NavbarMenu"
import { useIsExactRoute } from "@/hooks"

import spIcon from "../../assets/icon.png"

export function Navbar() {
  const isSavesPage = useIsExactRoute("/saves")
  const isMainPage = useIsExactRoute("/")

  return (
    <nav className="z-[1] flex px-4 py-3.5 justify-between odd:*:flex odd:*:items-center sticky top-0 bg-white">
      {/* Menu navigation and wordmark */}
      <div className="gap-x-2">
        <NavbarMenu />
        <Link
          href="/"
          className="inline-flex items-center cursor-pointer select-none gap-x-2.5"
        >
          {/* Use the image as CSS so Google won't index it as a standalone image */}
          <div
            className="size-10 border-2 rounded-md !bg-cover"
            style={{ background: `url(${spIcon.src})` }}
          />
          <span
            className="leading-none text-[1.33rem] font-bold"
            translate="no"
          >
            Searchpets!
          </span>
        </Link>
      </div>
      {/* Search box */}
      {!isMainPage ? <SearchBox /> : <div />}
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
