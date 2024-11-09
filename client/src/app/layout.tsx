import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Footer, Navbar } from "@/components/base"
import { cn } from "@/utils"
import { SITE_NAME } from "@/constants"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `Home | ${SITE_NAME}`
  },
  openGraph: {
    siteName: SITE_NAME
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
      <body
        className={cn(inter.className, "overflow-x-hidden text-sm antialiased")}
      >
        <Navbar />
        <div className="min-h-[calc(100dvh-4rem)] mx-auto max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl px-7">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
