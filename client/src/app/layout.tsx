import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Footer, Navbar } from "@/components/base"
import { cn } from "@/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Searchpets",
    default: "Home | Searchpets"
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
        <div className="contents">
          <Navbar />
          <div className="min-h-[calc(100dvh-4rem)]">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
