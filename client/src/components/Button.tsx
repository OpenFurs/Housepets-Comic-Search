import { cn } from "@/utils"
import { forwardRef } from "react"
import type { IconType } from "react-icons"

const Button = forwardRef(
  (
    {
      children,
      icon,
      prefix: prefixElement,
      suffix: suffixElement,
      a11yLabel,
      className,
      ...attrs
    }: Partial<{
      children: React.ReactNode
      icon: NonNullable<React.ReactElement<IconType>>
      prefix: NonNullable<React.ReactElement>
      suffix: NonNullable<React.ReactElement>
      a11yLabel: string
      className: string
      onClick: React.MouseEventHandler<HTMLButtonElement>
    }>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "py-2.5 rounded-md border border-red-400 flex items-center gap-x-1.5",
          icon ? "px-2.5" : "px-4",
          className
        )}
        aria-label={a11yLabel}
        style={{
          maxWidth: "fit-content"
        }}
      >
        {prefixElement}
        <span id="children-slot" className="overflow-ellipsis">
          {icon}
          {children}
        </span>
        {suffixElement}
      </button>
    )
  }
)

Button.displayName = "Button"

export default Button
