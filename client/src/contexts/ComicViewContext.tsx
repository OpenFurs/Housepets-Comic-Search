"use client"

import { noop } from "lodash"
import { createContext, useReducer, useState } from "react"
import { DefineAction } from "./shared"

type ComicViewDisplay = "grid" | "view"

interface ComicViewOptions {
  view: ComicViewDisplay
  isExpandViewport: boolean
  comicImgFill: boolean
}

type ComicViewAction =
  | DefineAction<"change", ComicViewOptions>
  | DefineAction<"reset">

const INITIAL_DATA: ComicViewOptions = {
  view: "grid",
  isExpandViewport: false,
  comicImgFill: true
}

export const ComicViewOptionsContext = createContext<ComicViewOptions>(INITIAL_DATA)
export const ComicViewOptionsDispatchContext = createContext<React.Dispatch<ComicViewAction>>(noop)

export function ComicViewProvider(
  props: Readonly<{ children?: React.ReactNode }>
) {
  const [options, dispatch] = useReducer(
    (item: ComicViewOptions, action: ComicViewAction) => {
      switch (action.type) {
        case "change":
          return item
        case "reset":
          return item
        default:
          throw new Error("Invalid action")
      }
    },
    INITIAL_DATA
  )

  return (
    <ComicViewOptionsContext.Provider value={options}>
      <ComicViewOptionsDispatchContext.Provider value={dispatch}>
        {props.children}
      </ComicViewOptionsDispatchContext.Provider>
    </ComicViewOptionsContext.Provider>
  )
}
