"use client"

import { motion } from "framer-motion"
import { TeamHero } from "@/components/team-hero"
import { TeamCarousel } from "@/components/team-carousel"
import { CtaSection } from "@/components/cta-section"
import { Reveal } from "@/components/reveal"
import { GradientOrb, DotGrid, RingDecoration } from "@/components/abstract-elements"
import { Heart, Zap, Target } from "lucide-react"
import { spring } from "@/lib/motion"

const values = [
  {
    icon: Zap,
    title: "Think Exponential, Act Linear",
    desc: "Hold a ten-year vision. Execute the next ninety days. The map is exponential — but the steps are linear. Confusing the two is how businesses either stall or collapse.",
    colorVar: "#F59E0B",
    bgVar: "rgba(245, 158, 11, 0.08)",
  },
  {
    icon: Target,
    title: "Resource-Driven, Not Market-Driven",
    desc: "Market-driven companies chase what already exists. Resource-driven companies build capabilities that create what doesn't exist yet. Capabilities outlast markets. Always.",
    colorVar: "var(--primary)",
    bgVar: "rgba(16, 185, 129, 0.08)",
  },
  {
    icon: Heart,
    title: "The Greatest Resource Is Human",
    desc: "Technology scales execution. Capital scales speed. Humans supply the only thing that cannot be replicated at any price: judgment, trust, and the ability to adapt to what has never happened before.",
    colorVar: "var(--destructive)",
    bgVar: "rgba(239, 68, 68, 0.08)",
  },
]

export default function TeamPage() {
  return (
    <div>
      {/* TeamHero already has pt-24 internally */}
      <TeamHero />

      {/* Emerald gradient divider between hero and carousel */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-light/60 to-transparent" />

      {/* Infinite marquee carousel */}
      <TeamCarousel />

      {/* Section divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Values section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden">
        <GradientOrb className="top-[-200px] left-1/2 -translate-x-1/2" color="rgba(16,185,129,0.06)" size={600} />
        <DotGrid className="top-10 right-10 w-[160px] h-[160px] opacity-20" />
        <RingDecoration className="bottom-10 left-10 opacity-15" size={180} />

        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-xs sm:text-sm font-medium text-primary mb-4">How We Think</p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-foreground text-balance leading-tight">
                Three Laws. Everything Else Follows.
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
                These aren&apos;t values on a wall. They&apos;re operating constraints — the principles that shape every decision we make, every product we build, every business we sit with.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <Reveal key={v.title} delay={i} direction="scale">
                  <motion.div
                    className="bg-background rounded-2xl border border-border p-7 sm:p-8 h-full group shadow-sm"
                    whileHover={{
                      y: -6,
                      boxShadow: "0 24px 48px rgba(0,0,0,0.08)",
                      borderColor: "rgba(16,185,129,0.2)",
                      transition: spring.snappy,
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                      style={{ background: v.bgVar }}
                    >
                      <Icon className="w-6 h-6" style={{ color: v.colorVar }} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </motion.div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
