"use client"

import { Popover } from "@headlessui/react"
import Button from "../Button"
import { LuSettings } from "react-icons/lu"
import TransitionWrapper from "../TransitionWrapper"

export default function SettingsPopover() {
  return (
    <Popover className="relative z-10">
      {({ open }) => (
        <>
          <Popover.Button as={Button} icon={<LuSettings size={19} />} />
          <TransitionWrapper show={open}>
            <Popover.Panel
              static
              className="absolute z-10 top-0 right-0 p-3.5 shadow-md rounded-md flex flex-col bg-white"
            ></Popover.Panel>
          </TransitionWrapper>
        </>
      )}
    </Popover>
  )
}
