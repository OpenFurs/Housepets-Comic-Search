import { cn } from "@/utils"
import type { IconType } from "react-icons"

export function Group({
  children,
  headingIcon: HeadingIcon,
  headingTitle,
  headingRight,
  className
}: {
  children?: React.ReactNode
  headingIcon?: IconType
  headingTitle: string
  headingRight?: React.ReactNode
  className?: string
}) {
  return (
    <div
      id="group-container"
      className={cn(
        "overflow-hidden rounded-md border-purple-300 border-2 [&_div]:px-4 [&_div]:py-3",
        className
      )}
    >
      <div className="flex justify-between bg-purple-50">
        <h2 className="flex items-center text-base font-semibold gap-x-2">
          {HeadingIcon ? <HeadingIcon size={21} /> : null}
          <span>{headingTitle}</span>
        </h2>
        {headingRight ? <span>{headingRight}</span> : null}
      </div>
      <div id="children-wrapper">{children}</div>
    </div>
  )
}
