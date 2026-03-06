"use client"

// Renders the Footer for all routes except "/" where it lives inside the last HorizontalCard.
import { usePathname } from "next/navigation"
import { Footer } from "./footer"

export function LayoutFooter() {
  const pathname = usePathname()
  if (pathname === "/") return null
  return <Footer />
}
