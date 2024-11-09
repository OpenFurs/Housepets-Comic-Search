"use client"

import Image from "next/image"
import { Button } from "./Button"
import { LuBookmark } from "react-icons/lu"
import { useState, useId } from "react"
import { cn } from "@/utils"
import Link from "next/link"
import { InlineImageStack } from "./InlineImageStack"

export function ComicItem({
  title,
  image,
  date,
  characters
}: {
  title?: string
  image: string
  date?: string
  characters: string[]
}) {
  const characterLength = characters.length
  const characterPlural = characterLength === 1 ? "character" : "characters"

  const _id = useId()
  const a11yHeading = `heading-${_id}`

  const stackedCharImg = characters.slice(0, 3).map((i) => ({
    src: i
  }))

  // TODO: move this to react context once API is done
  const [hasBookmarked, setBookmark] = useState(false)

  // TODO: this is temporary, for prototype purposes
  const bookmarkHandler = () => {
    setBookmark(!hasBookmarked)
  }

  const _date = new Date(date as string)
  const parsedDate = _date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  })

  return (
    <div
      id="comic-item"
      className="flex flex-col px-3.5 py-2.5 gap-y-2 rounded-md border"
      aria-labelledby={a11yHeading}
    >
      {/* Title card */}
      <div className="flex justify-between items-center">
        <h2
          id={a11yHeading}
          className="text-lg font-semibold overflow-hidden whitespace-nowrap text-ellipsis"
        >
          {title}
        </h2>
        <Button
          onClick={bookmarkHandler}
          className={cn(
            "p-2",
            !hasBookmarked ? "" : "bg-purple-500 hover:bg-purple-600 text-white"
          )}
          variant="tritery"
          icon={<LuBookmark size={19} />}
        />
      </div>
      {/* Image */}
      <div className="relative overflow-hidden rounded-md size-full aspect-[15/12.5]">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover select-none"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          draggable={false}
          priority={true}
          quality={69}
        />
      </div>
      {/* Details for Character, date, and arcs */}
      <div className="flex items-center gap-x-2">
        {/* Character button */}
        <div className="flex-1 relative">
          <div data-link="/comic/slug_placeholder">
            <div className="flex items-center gap-x-1.5">
              <InlineImageStack images={stackedCharImg} />
              <span>{`${characterLength} ${characterPlural}`}</span>
            </div>
          </div>
        </div>
        {/* Date */}
        <time dateTime={_date.toISOString()}>{parsedDate}</time>
      </div>
    </div>
  )
}
