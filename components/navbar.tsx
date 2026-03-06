"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { LogoMark } from "./logo"
import { Menu, X, ArrowRight } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/team", label: "Team" },
]

const HOVER_SPRING = { type: "spring" as const, stiffness: 350, damping: 28 }

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-background/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] border-b border-border"
          : "py-4 bg-background/80 backdrop-blur-md border-b border-border/50"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8">
        {/* Logo — spring hover scale */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Shaman Yantra Home">
          <motion.div
            whileHover={{ scale: 1.06, transition: HOVER_SPRING }}
            style={{ willChange: "transform" }}
          >
            <LogoMark />
          </motion.div>
          <span className="text-base font-semibold tracking-tight text-foreground">
            Shaman<span className="text-primary font-bold">Yantra</span>
          </span>
        </Link>

        {/* Desktop nav — sliding active indicator */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm px-4 py-2 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                style={{ color: isActive ? "var(--primary)" : undefined }}
              >
                {/* Active background pill — shared layout */}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-bg"
                    className="absolute inset-0 rounded-lg bg-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    style={{ zIndex: -1 }}
                  />
                )}
                <motion.span
                  className={`relative z-10 font-medium ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                  whileHover={{ color: "var(--foreground)" }}
                  transition={{ duration: 0.15 }}
                >
                  {link.label}
                </motion.span>
              </Link>
            )
          })}
        </div>

        {/* CTA buttons — spring hover */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="https://app.shamanyantra.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -1, transition: HOVER_SPRING }}
            whileTap={{ scale: 0.97 }}
            style={{ willChange: "transform" }}
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Go to App
          </motion.a>
          <motion.div
            whileHover={{ scale: 1.03, y: -1, transition: HOVER_SPRING }}
            whileTap={{ scale: 0.97 }}
            style={{ willChange: "transform" }}
          >
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-accent transition-colors duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Mobile hamburger */}
        <motion.button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          whileTap={{ scale: 0.93 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu — animated via max-height + opacity */}
      <div
        id="mobile-menu"
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        aria-hidden={!mobileOpen}
        style={{
          maxHeight: mobileOpen ? "400px" : "0px",
          opacity: mobileOpen ? 1 : 0,
          visibility: mobileOpen ? "visible" : "hidden",
        }}
      >
        <div className="bg-background/95 backdrop-blur-xl border-b border-border shadow-lg">
          <div className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                tabIndex={mobileOpen ? 0 : -1}
                className={`text-sm py-3 px-4 rounded-lg transition-all duration-200 ${
                  pathname === link.href
                    ? "text-primary font-medium bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border mt-2 pt-3 flex flex-col gap-2">
              <a
                href="https://app.shamanyantra.com"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={mobileOpen ? 0 : -1}
                className="inline-flex items-center justify-center gap-2 text-sm font-medium py-3 px-4 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Go to App
              </a>
              <Link
                href="/pricing"
                tabIndex={mobileOpen ? 0 : -1}
                className="inline-flex items-center justify-center gap-2 text-sm font-medium py-3 px-4 rounded-lg bg-primary text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                View Pricing
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
