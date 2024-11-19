"use client"

import { useId } from "react"
import type { HPCharacter } from "@/types"
import Image from "next/image"
import Link from "next/link"

export function CharacterItem({ slug, name, appearances }: HPCharacter) {
  const ariaLabel = `character-item-${useId()}`

  return (
    <Link
      href={`/characters/${slug}`}
      className="flex items-center gap-x-2 px-3 py-2.5 rounded-md border border-purple-300"
      aria-labelledby={ariaLabel}
    >
      <div className="size-12 bg-purple-400 rounded-full overflow-hidden relative">
        <Image
          src="/placeholder.png"
          fill
          alt=""
          className="object-fill"
          quality={70}
          priority
          fetchPriority="high"
        />
      </div>
      <div className="flex-1">
        <h2 id={ariaLabel} className="text-lg font-semibold">
          {name}
        </h2>
        <span className="opacity-65">N appearances</span>
      </div>
    </Link>
  )
}
