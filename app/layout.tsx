import "@/styles/globals.css"

import Link from "next/link"
import { cn } from "@/utils"
import { inter } from "@/utils/fonts"

export const metadata = {
  title: "Hung Nguyen ",
  description: "This is Hung's Website",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <Link
          href="/"
          className="fixed left-5 top-4 z-10 p-8 text-sm font-medium uppercase leading-none"
        >
          HUNG NGUYEN
        </Link>
        <Link
          href="/contact"
          className="fixed -right-1 top-12 z-10 rotate-90 p-8 text-sm font-medium uppercase leading-none"
        >
          CONTACT
        </Link>
        {children}
      </body>
    </html>
  )
}
