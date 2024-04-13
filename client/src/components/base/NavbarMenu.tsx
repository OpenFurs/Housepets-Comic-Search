"use client"

import Link from "next/link"
import { Menu } from "@headlessui/react"
import { FaGithub } from "react-icons/fa6"
import { LuBookMarked, LuCat, LuInfo, LuMenu } from "react-icons/lu"
import Button from "../Button"
import TransitionWrapper from "../TransitionWrapper"

export default function NavbarMenu() {
  const menuItems = [
    { icon: LuCat, label: "Characters" },
    { icon: LuBookMarked, label: "Chapter/Arcs" },
    { icon: LuInfo, label: "About Searchpets" },
    { icon: FaGithub, label: "View source code" }
  ]

  return (
    <Menu as="div" className="relative z-10">
      <Menu.Button as={Button} icon={<LuMenu size={19} />} variant="tritery" />
      <TransitionWrapper>
        <Menu.Items className="absolute top-2 left-0 overflow-hidden bg-white rounded-md shadow-md">
          {menuItems.map(({ icon: Icon, label }) => (
            <Menu.Item
              key={label}
              as={Link}
              href={`/${label.toLowerCase()}`}
              className="ui-active:bg-purple-600 ui-active:text-white flex gap-x-1.5 items-center px-4 py-2.5"
            >
              <Icon size={20} />
              <span className="whitespace-nowrap">{label}</span>
            </Menu.Item>
          ))}
        </Menu.Items>
      </TransitionWrapper>
    </Menu>
  )
}
