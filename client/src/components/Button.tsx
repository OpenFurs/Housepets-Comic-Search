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
      className
    }: Partial<{
      children: React.ReactNode
      icon: NonNullable<React.ReactElement<IconType>>
      prefix: NonNullable<React.ReactElement>
      suffix: NonNullable<React.ReactElement>
      a11yLabel: string
      className: string
    }>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        className={cn("px-3.5 py-1 rounded-md", className)}
        aria-label={a11yLabel}
        style={{
          maxWidth: "fit-content"
        }}
      >
        {prefixElement}
        {children}
        {suffixElement}
      </button>
    )
  }
)

Button.displayName = "Button"

export default Button
