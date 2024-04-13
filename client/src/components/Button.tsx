"use client"

import { cn } from "@/utils"
import { forwardRef } from "react"
import type { IconType } from "react-icons"

type ButtonVariants = "primary" | "secondary" | "tritery"

const Button = forwardRef(
  (
    {
      children,
      icon,
      prefix: prefixElement,
      suffix: suffixElement,
      a11yLabel,
      className,
      variant = "primary",
      ...attrs
    }: Partial<{
      children: React.ReactNode
      icon: NonNullable<React.ReactElement<IconType>>
      prefix: NonNullable<React.ReactElement>
      suffix: NonNullable<React.ReactElement>
      a11yLabel: string
      className: string
      variant?: ButtonVariants
      onClick: React.MouseEventHandler<HTMLButtonElement>
    }>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const buttonVariants: Record<ButtonVariants, string> = {
      primary: "bg-purple-200 hover:bg-purple-300",
      secondary: "bg-purple-400 text-white hover:bg-purple-500",
      tritery: "hover:bg-purple-300"
    }

    return (
      <button
        data-variant-debug={variant}
        {...attrs}
        ref={ref}
        aria-label={a11yLabel}
        className={cn(
          "max-w-fit rounded-md flex items-center gap-x-1.5 transition-colors duration-100",
          icon ? "p-2.5" : "px-3 py-1.5",
          buttonVariants[variant],
          className
        )}
      >
        {prefixElement}
        <span className="select-none overflow-hidden whitespace-nowrap text-ellipsis">
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
