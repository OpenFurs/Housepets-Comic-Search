"use client"

import { Popover } from "@headlessui/react"
import { Button } from "../button"
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
              className="absolute z-10 top-3 border border-purple-500 right-0 p-3.5 shadow-md rounded-md flex flex-col bg-white"
            >
              <SettingItem heading="Theme" description="" control={<>wip</>} />
              <SettingItem
                heading="Clear all settings"
                description=""
                control={<Button>Clear all settings</Button>}
              />
            </Popover.Panel>
          </TransitionWrapper>
        </>
      )}
    </Popover>
  )
}

function SettingItem({
  heading,
  description,
  control
}: {
  heading: string
  description: string
  control: React.ReactElement
}) {
  return (
    <div className="flex items-center">
      <div className="flex-1 flex flex-col items-start text-left">
        <h2>{heading}</h2>
        <span className="empty:hidden">{description}</span>
      </div>
      <div className="flex-shrink-0">{control}</div>
    </div>
  )
}
