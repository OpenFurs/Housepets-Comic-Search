import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Footer, Navbar } from "./layouts"
import { cn } from "@/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Searchpets",
    default: "Searchpets"
  }
}

export const viewport: Viewport = {
  initialScale: 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "overflow-x-hidden text-sm")}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
