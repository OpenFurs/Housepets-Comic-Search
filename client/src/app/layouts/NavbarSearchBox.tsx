"use client"

import { Button } from "@/components"
import { cn } from "@/utils"
import { useState } from "react"
import { LuSearch } from "react-icons/lu"

export default function SearchBox() {
  const [isInputFocused, setInputFocused] = useState(false)

  return (
    <div className="relative w-2/5">
      {/* Search box wrapper */}
      <div
        className={cn(
          "flex items-center rounded-md border overflow-hidden w-full transition-colors duration-100",
          isInputFocused ? "border-blue-600" : "border-gray-400"
        )}
      >
        <input
          type="text"
          role="searchbox"
          placeholder="Search"
          aria-label="Search stuff"
          className="px-3.5 py-1.5 h-full flex-1 focus:outline-none"
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
        <Button icon={<LuSearch size={18} />}></Button>
      </div>
      {/* Suggestions panel */}
      <div id="suggestions"></div>
    </div>
  )
}
