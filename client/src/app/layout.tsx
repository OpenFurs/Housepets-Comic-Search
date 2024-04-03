import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Footer, Navbar } from "./layouts"
import { cn } from "@/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s - Searchpets",
    default: "Title not set"
  },
  description: ""
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
      <body className={cn(inter.className, "overflow-x-hidden")}>
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
