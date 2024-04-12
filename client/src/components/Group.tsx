import type { IconType } from "react-icons"

export default function Group({
  children,
  headingIcon: HeadingIcon,
  headingTitle,
  headingRight
}: {
  children?: React.ReactNode
  headingIcon?: IconType
  headingTitle: string
  headingRight?: React.ReactNode
}) {
  return (
    <div
      id="group"
      className="overflow-hidden rounded-md border-red-200 border-2 *:px-4 *:py-3"
    >
      <div className="flex justify-between bg-red-200">
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
