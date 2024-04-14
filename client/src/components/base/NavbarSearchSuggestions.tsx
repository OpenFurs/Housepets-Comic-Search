"use client"

import { cn } from "@/utils"

export default function SearchSuggestions({ show }: { show?: boolean }) {
  return (
    <div
      className={cn(
        "absolute top-10 inset-x-0 bg-white shadow-md px-3 py-2 mt-1 rounded-md transition",
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-1 pointer-events-none"
      )}
    >
      suggestions
    </div>
  )
}
