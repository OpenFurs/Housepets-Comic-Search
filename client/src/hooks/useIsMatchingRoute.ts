"use client"

import { usePathname } from "next/navigation"

/**
 * Use this if you have the `"use client"` directive! Server
 * components and pages won't work!
 *
 * A custom hook that checks if you're in a specified current path.
 *
 * @example
 * "use client"
 *
 * function Component() {
 *  const isAboutPage = useIsExactRoute("/about")
 *
 *  return (
 *    <div>
 *      {isAboutPage ? "About Us" : "Recent Activity"}
 *    </div>
 *  )
 * }
 *
 * @param specifiedPath A path string that will be compared to the current path
 * @returns True or false
 */
export function useIsExactRoute(specifiedPath: string) {
  const currentPath = usePathname()

  return currentPath === specifiedPath
}
