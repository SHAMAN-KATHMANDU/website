"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogoMark } from "./logo"

const footerLinks = {
  Product: [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/team", label: "Team" },
  ],
  Company: [
    { href: "/team", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "mailto:careers@shamanyantra.com", label: "Careers" },
  ],
  Legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/cookie-policy", label: "Cookie Policy" },
  ],
}

export function Footer() {
  const pathname = usePathname()

  function handleScrollTop() {
    if (pathname === "/") {
      const deck = document.querySelector(".horizontal-deck")
      if (deck) {
        deck.scrollTo({ left: 0, behavior: "smooth" })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-navy text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:max-w-xs flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg">
              <LogoMark size={28} variant="light" />
              <span className="text-base font-semibold tracking-tight text-white">
                Shaman<span className="text-emerald-light font-bold">Yantra</span>
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-4">
              Nepal&apos;s unified business platform for inventory, CRM, payments, and team communication.
            </p>
            <div className="text-sm text-white/50 space-y-1">
              <p>
                <a
                  href="mailto:info@shamanyantra.com"
                  className="hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  info@shamanyantra.com
                </a>
              </p>
              <p>Kathmandu, Nepal</p>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-8 sm:gap-12 lg:gap-16 flex-1 justify-start lg:justify-end">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold text-white mb-4">{title}</h3>
                <ul className="flex flex-col gap-3">
                  {links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-white/50 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <span className="text-xs text-white/50">
            All rights reserved. &copy; 2026 Shaman Yantra
          </span>
          <button
            onClick={handleScrollTop}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Scroll to top"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white/50" aria-hidden="true">
              <path d="M7 12V2M7 2L2 7M7 2L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
