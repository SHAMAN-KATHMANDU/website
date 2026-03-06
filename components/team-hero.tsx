"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, HeadphonesIcon } from "lucide-react"
import { GradientOrb, MeshGrid, DotGrid, RingDecoration } from "./abstract-elements"

function AnimatedUnderline({ children }: { children: React.ReactNode }) {
  const [drawn, setDrawn] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <span className="relative inline-block">
      {children}
      <svg
        aria-hidden="true"
        className="absolute -bottom-2 left-0 w-full overflow-visible pointer-events-none"
        height="12"
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
      >
        <path
          d="M2,8 C40,2 80,12 120,6 C160,0 180,10 198,6"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="200"
          strokeDasharray="200"
          style={{
            strokeDashoffset: drawn ? 0 : 200,
            transition: "stroke-dashoffset 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </svg>
    </span>
  )
}

export function TeamHero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background pt-24 pb-20 px-6">
      {/* Background layers */}
      <MeshGrid className="inset-0 w-full h-full opacity-50" />
      <GradientOrb className="top-[-180px] left-1/2 -translate-x-1/2" color="rgba(16, 185, 129, 0.07)" size={700} />
      <GradientOrb className="bottom-[-200px] right-[-100px]" color="rgba(16, 185, 129, 0.04)" size={500} />
      <DotGrid className="top-16 right-10 w-[180px] h-[180px] opacity-25" />
      <DotGrid className="bottom-16 left-10 w-[140px] h-[140px] opacity-20" />
      <RingDecoration className="top-8 left-8 opacity-20" size={160} />
      <RingDecoration className="bottom-8 right-8 opacity-15" size={120} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.05s",
          }}
        >
          <div className="inline-flex items-center gap-2 text-sm bg-secondary text-primary rounded-full px-4 py-1.5 mb-8 border border-primary/10">
            <HeadphonesIcon className="w-3.5 h-3.5" />
            Meet the people behind the platform
          </div>
        </div>

        {/* Headline */}
        <h1
          className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] tracking-tight text-foreground mb-7 text-balance"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
          }}
        >
          We&apos;ve got an{" "}
          <AnimatedUnderline>
            <span className="text-primary">entire</span>
          </AnimatedUnderline>{" "}
          team dedicated to supporting you and your business
        </h1>

        {/* Subheading */}
        <p
          className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.25s",
          }}
        >
          From onboarding to ongoing success, our specialists are here every step
          of the way — real people who understand Nepali businesses and are
          committed to your growth.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center sm:items-start"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.35s",
          }}
        >
          <a
            href="#team-carousel"
            className="inline-flex items-center justify-center gap-2 text-base font-medium px-7 py-3.5 rounded-lg bg-primary text-primary-foreground hover:bg-accent transition-all duration-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Meet the team
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="mailto:info@shamanyantra.com"
            className="inline-flex items-center justify-center gap-2 text-base font-medium px-7 py-3.5 rounded-lg border border-border text-foreground hover:bg-muted transition-all duration-200 w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Contact support
          </a>
        </div>

        {/* Trust note */}
        <p
          className="text-sm text-muted-foreground mt-8"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.45s",
          }}
        >
          Average response time under 2 hours &middot; Available Mon–Sat
        </p>
      </div>
    </section>
  )
}
