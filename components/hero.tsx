"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, TrendingUp, ShoppingCart, Users } from "lucide-react"
import { GradientOrb, DotGrid, RingDecoration, CrossGrid, FloatingParticles, DemoImage, MeshGrid, HexGrid } from "./abstract-elements"
import { motion } from "framer-motion"

function FloatingCard({ children, className, delay }: { children: React.ReactNode; className?: string; delay: number }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return (
    <div
      className={`absolute bg-background rounded-xl shadow-lg border border-border p-4 ${className}`}
      style={
        prefersReducedMotion
          ? undefined
          : { animation: `float ${5 + delay}s ease-in-out ${delay * 0.3}s infinite` }
      }
    >
      {children}
    </div>
  )
}

export function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section className="relative h-full min-h-0 flex flex-col justify-center overflow-hidden bg-background bg-grid">
      {/* Abstract background elements */}
      <GradientOrb className="top-[-200px] right-[-100px]" color="rgba(16, 185, 129, 0.08)" size={800} />
      <GradientOrb className="bottom-[-300px] left-[-200px]" color="rgba(16, 185, 129, 0.05)" size={600} />
      <MeshGrid className="inset-0 w-full h-full opacity-60" />
      <DotGrid className="top-20 left-10 w-[200px] h-[200px] opacity-30" />
      <RingDecoration className="top-10 right-10 opacity-40" size={200} />
      <CrossGrid className="bottom-40 left-20 opacity-30" />
      <HexGrid className="bottom-20 right-20 opacity-50" />
      <FloatingParticles className="z-0" />

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
              }}
            >
              <div className="inline-flex items-center gap-2 text-sm bg-secondary text-primary rounded-full px-4 py-1.5 mb-8 border border-primary/10">
                <span className="w-2 h-2 rounded-full bg-primary" style={{ animation: "softPulse 2s ease infinite" }} />
                Now Available · Nepal&apos;s All-in-One Business Platform
              </div>
            </div>

            <h1
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-foreground mb-6"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
              }}
            >
              <span className="text-balance">
                Inventory. CRM. Analytics.{" "}
                <span className="text-primary">One Platform.</span>{" "}
                Total Control.
              </span>
            </h1>

            <p
              className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed mb-10"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
              }}
            >
              Shaman Yantra unifies inventory, customer relationships, and team
              communication into a single platform — built from the ground up
              for Nepali businesses.
            </p>

            <div
              className="flex gap-4 flex-wrap mb-8"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
              }}
            >
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-base font-medium px-7 py-3.5 rounded-lg bg-primary text-primary-foreground hover:bg-accent transition-all duration-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                View Plans &amp; Pricing
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-base font-medium px-7 py-3.5 rounded-lg border border-border text-foreground hover:bg-muted transition-all duration-200"
              >
                Explore Features
              </Link>
            </div>

            <p
              className="text-sm text-muted-foreground"
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
              }}
            >
              No credit card required
            </p>
          </div>

          {/* Mobile social proof strip — visible only on mobile/tablet */}
          <div
            className="flex lg:hidden items-center gap-6 flex-wrap"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.45s",
            }}
          >
            <div className="flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2">
              <ShoppingCart className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              <span className="text-xs font-medium text-foreground">NPR 45,000 order just placed</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2">
              <TrendingUp className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              <span className="text-xs font-medium text-foreground">Revenue +24% this month</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2">
              <Users className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              <span className="text-xs font-medium text-foreground">98% retention rate</span>
            </div>
          </div>

          {/* Right visual — demo image with floating cards */}
          <div
            className="relative hidden lg:flex items-center justify-center"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0)" : "translateX(40px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
            }}
          >
            {/* Abstract ring behind image */}
            <RingDecoration className="-top-10 -right-10 opacity-20" size={350} />

            <DemoImage
              src="/images/dashboard-demo.jpg"
              alt="Shaman Yantra dashboard showing revenue analytics and business insights"
              className="w-full max-w-[520px]"
            />

            {/* Floating stat card — top-left */}
            <FloatingCard className="-left-8 top-4 z-20" delay={0}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 1v12M1 7h12" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">New Order</p>
                  <p className="text-xs text-muted-foreground">NPR 45,000</p>
                </div>
              </div>
            </FloatingCard>

            {/* Floating stat card — bottom-right */}
            <FloatingCard className="-right-4 bottom-12 z-20" delay={1.5}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-sm font-bold">98%</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">Retention Rate</p>
                  <p className="text-xs text-primary">+4% this month</p>
                </div>
              </div>
            </FloatingCard>

            {/* Floating mini chart card — bottom-left */}
            <FloatingCard className="-left-4 bottom-0 z-20" delay={2.5}>
              <div className="flex items-center gap-2">
                <div className="flex gap-[2px] items-end h-6" aria-hidden="true">
                  {[40, 60, 35, 80, 55, 90, 70].map((h, i) => (
                    <div
                      key={i}
                      className="w-[4px] rounded-full bg-primary/60"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">Revenue</p>
                  <p className="text-xs text-primary">+24%</p>
                </div>
              </div>
            </FloatingCard>

          </div>
        </div>
      </div>
    </section>
  )
}
