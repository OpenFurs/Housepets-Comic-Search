"use client"

import Image from "next/image"
import Button from "./Button"
import { LuBookmark } from "react-icons/lu"

export default function ComicItem({
  title,
  isBookmarked,
  bookmarkHandler,
  image,
  date,
  characters,
  arc
}: {
  title?: string
  isBookmarked?: boolean
  bookmarkHandler?: () => void
  image: string
  date?: string
  characters: string[]
  arc?: string
}) {
  const characterLength = characters.length
  const stackedCharImg = characters.slice(0, 3)

  const parsedDate = new Date(date as string).toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "2-digit"
  })

  return (
    <div id="comic-item" className="flex flex-col p-3 rounded-md">
      {/* Title card */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">{title}</span>
        <Button
          onClick={bookmarkHandler}
          className="p-2"
          icon={<LuBookmark size={19} />}
        />
      </div>
      {/* Image */}
      <div className="relative overflow-hidden rounded-md size-full aspect-[15/12.5] my-2.5">
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover select-none"
          draggable={false}
        />
      </div>
      {/* Details for Character, date, and arcs */}
      <div className="flex items-center gap-x-2">
        <div className="flex-1">
          <Button variant="tritery">
            <div className="flex items-center gap-x-1">
              <span className="inline-flex ml-3">
                {stackedCharImg.map((e, i) => (
                  <div
                    key={i}
                    className="size-6 bg-emerald-100 border-2 rounded-full -ml-3"
                  ></div>
                ))}
              </span>
              <span>{`+${characterLength} character(s)`}</span>
            </div>
          </Button>
        </div>
        <div>{parsedDate}</div>
        <div>{arc}</div>
      </div>
    </div>
  )
}
