import Link from "next/link"

export function Hyperlink({
  children,
  href,
  noExplicitUrl
}: {
  children: React.ReactNode
  href: string
  noExplicitUrl?: boolean
}) {
  return (
    <Link
      href={href}
      className="underline text-blue-600 hover:text-blue-800 hover:no-underline"
    >
      {children}
    </Link>
  )
}
