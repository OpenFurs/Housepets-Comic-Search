"use client"

import { usePathname } from "next/navigation"

export function useIsExactRoute(specifiedPath: string) {
  const currentPath = usePathname()

  return currentPath === specifiedPath
}
