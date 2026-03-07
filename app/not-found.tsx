import Link from "next/link"
import { ArrowRight, Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background bg-grid flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-lg mx-auto text-center">
        {/* 404 number */}
        <div className="font-serif text-[120px] sm:text-[160px] leading-none text-primary/10 select-none mb-2">
          404
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-secondary px-4 py-2 rounded-full border border-primary/20 mb-6">
          <Search className="w-3.5 h-3.5" aria-hidden="true" />
          Page not found
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl text-foreground mb-4 leading-tight">
          This page doesn&apos;t exist
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-10 max-w-sm mx-auto">
          The page you&apos;re looking for may have been moved, renamed, or doesn&apos;t exist.
          Let&apos;s get you back on track.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-accent transition-colors duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Go home
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Explore features
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground mb-4">Quick links</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { href: "/pricing", label: "Pricing" },
              { href: "/testimonials", label: "Testimonials" },
              { href: "/team", label: "Team" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
