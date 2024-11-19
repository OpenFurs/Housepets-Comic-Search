"use client"

import { noop } from "lodash"
import { OptionalArray } from "@/types"
import { createContext, useReducer } from "react"
import type { DefineAction } from "./shared"

interface BookmarkItemStore {
  slug: string
  title: string
  image: string
  bookmarkDate: Date
}

type BookmarkAction =
  | DefineAction<"add", BookmarkItemStore>
  | DefineAction<"remove", BookmarkItemStore>
  | DefineAction<"clear">

const BookmarkItemsContext = createContext<BookmarkItemStore[]>([])
const BookmarkItemDispatchContext =
  createContext<React.Dispatch<BookmarkAction>>(noop)

export function BookmarkItemProvider(
  props: Readonly<{ children: React.ReactNode }>
) {
  const [bookmarks, dispatch] = useReducer(
    (item: OptionalArray<BookmarkItemStore>, action: BookmarkAction) => {
      switch (action.type) {
        case "add":
          return item
        case "remove":
          return item
        case "clear":
          return item
        default:
          throw new Error(
            "Invalid action, accepted actions are: 'add', 'remove', and 'clear'"
          )
      }
    },
    []
  )

  // TODO: check for localStorage if user has existing bookmarks to append from

  return (
    <BookmarkItemsContext.Provider value={bookmarks}>
      <BookmarkItemDispatchContext.Provider value={dispatch}>
        {props.children}
      </BookmarkItemDispatchContext.Provider>
    </BookmarkItemsContext.Provider>
  )
}
