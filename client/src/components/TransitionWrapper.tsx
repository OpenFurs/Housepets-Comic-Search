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
      enterFrom="transform-gpu translate-y-2 opacity-0"
      enterTo="transform-gpu translate-y-0 opacity-100"
      leave="transition duration-[200ms] ease-out"
      leaveFrom="transform-gpu translate-y-0 opacity-100"
      leaveTo="transform-gpu translate-y-2 opacity-0"
      className="translate-y-0"
    >
      {children}
    </Transition>
  )
}
