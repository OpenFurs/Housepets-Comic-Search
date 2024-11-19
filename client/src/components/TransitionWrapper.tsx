"use client"

import { Transition } from "@headlessui/react"

export default function TransitionWrapper({
  children,
  show
}: {
  children?: React.ReactNode
  show?: boolean
}) {
  return (
    <Transition
      show={show}
      enter="transition duration-[200ms] ease-out"
      enterFrom="transform-gpu translate-y-5 opacity-0"
      enterTo="transform-gpu opacity-100"
      leave="transition duration-[200ms] ease-out"
      leaveFrom="transform-gpu opacity-100"
      leaveTo="transform-gpu translate-y-5 opacity-0"
    >
      {children}
    </Transition>
  )
}
