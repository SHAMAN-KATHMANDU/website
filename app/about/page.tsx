"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { CtaSection } from "@/components/cta-section"
import { TeamCarousel } from "@/components/team-carousel"
import { Roadmap } from "@/components/roadmap"
import { GradientOrb, DotGrid, RingDecoration } from "@/components/abstract-elements"
import { Target, Megaphone, BarChart3 } from "lucide-react"
import { spring } from "@/lib/motion"

// Three Laws
const threeLaws = [
  {
    title: "Think Exponential, Act Linear",
    desc: "Hold a ten-year vision. Execute the next ninety days. The map is exponential — but the steps are linear. Confusing the two is how businesses either stall or collapse.",
  },
  {
    title: "Resource-Driven, Not Market-Driven",
    desc: "Market-driven companies chase what already exists. Resource-driven companies build capabilities that create what doesn't exist yet. Capabilities outlast markets. Always.",
  },
  {
    title: "The Greatest Resource Is Human",
    desc: "Technology scales execution. Capital scales speed. Humans supply the only thing that cannot be replicated at any price: judgment, trust, and the ability to adapt to what has never happened before.",
  },
]

// What We Do pillars
const whatWeDo = [
  {
    icon: Target,
    title: "Strategy",
    desc: "Get clear on where you're going and what's standing in the way.",
    items: [
      "Business & growth planning",
      "Competitive positioning",
      "Market entry & expansion",
      "90-day priority roadmaps",
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing",
    desc: "Build the systems that get the right people to notice you — and choose you.",
    items: [
      "Brand & messaging",
      "Digital campaigns",
      "Content & social media",
      "Campaign strategy & execution",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics",
    desc: "Turn your data into decisions. Stop guessing. Start knowing.",
    items: [
      "Performance tracking",
      "Customer & market analysis",
      "Revenue & margin clarity",
      "Reporting dashboards",
    ],
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24 bg-grid">
      {/* Section 1 — Brand Statement Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center max-w-4xl mx-auto overflow-hidden">
        <GradientOrb className="top-[-200px] left-1/2 -translate-x-1/2" color="rgba(16, 185, 129, 0.07)" size={600} />
        <DotGrid className="top-10 right-0 w-[160px] h-[160px] opacity-25" />

        <div className="relative z-10">
          <Reveal>
            <p className="text-xs sm:text-sm font-medium text-primary mb-4">Built in Nepal. Built for Nepal.</p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-foreground mb-6 text-balance leading-tight">
              Your Business. Permanently Relevant.
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We didn&apos;t build software for the sake of it. We spent years sitting with Nepali businesses — watching them struggle with disconnected tools, guesswork, and wasted money. Shaman Yantra is what we built when we decided the tools needed to change.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Section 2 — Three Laws */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden bg-light-gray">
        <GradientOrb className="top-[-100px] right-0" color="rgba(16, 185, 129, 0.05)" size={400} />

        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal>
            <p className="text-xs sm:text-sm font-medium text-primary mb-4">How We Think</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 text-balance leading-tight">
              Three Laws. Everything Else Follows.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mb-12 leading-relaxed">
              These aren&apos;t values on a wall. They&apos;re operating constraints — the principles that shape every decision we make, every product we build, every business we sit with.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {threeLaws.map((law, i) => (
              <Reveal key={law.title} delay={i} direction="up">
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 16px 32px rgba(0,0,0,0.06)", transition: spring.snappy }}
                  className="bg-background rounded-2xl border border-border p-7 sm:p-8 h-full"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">{law.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{law.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Section 3 — Our Story */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden">
        <RingDecoration className="bottom-0 right-10 opacity-15" size={180} />

        <div className="max-w-3xl mx-auto relative z-10">
          <Reveal>
            <p className="text-xs sm:text-sm font-medium text-primary mb-4">Our Story</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8 text-balance leading-tight">
              Thirty Years of Doing. Then Building.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <div className="space-y-6 text-muted-foreground text-base leading-relaxed">
              <p>
                Shaman Yantra didn&apos;t start in a boardroom. It started in Nepal — with a teenager who didn&apos;t wait for permission.
              </p>
              <p>
                Our founder, Deepak Raj Pandey, built his first business before most of his peers had figured out what they wanted to do. What followed was thirty years of real commerce — connecting Nepali craftsmanship, spirituality, and business into ventures that served both local and global markets.
              </p>
              <p>
                Across all of it, one problem kept showing up. Nepali businesses were stitching together Excel sheets, WhatsApp groups, and paper records just to run their day-to-day. Tools existed — but none of them were built for how Nepal actually does business.
              </p>
              <p className="font-medium text-foreground">So we built one.</p>
              <p>
                Shaman Yantra is the platform we wished existed thirty years ago. Inventory. CRM. Analytics. One place. Built from the ground up for Nepali businesses — and the South Asian market that thinks the same way.
              </p>
            </div>
          </Reveal>
          <Reveal delay={3}>
            <blockquote className="mt-10 rounded-xl border border-primary/20 bg-secondary/50 px-6 py-6 italic text-foreground text-lg">
              &quot;Thirty years of hard-won perspective, distilled into one platform.&quot;
            </blockquote>
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Section 4 — What We Do */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden bg-light-gray">
        <GradientOrb className="top-[100px] left-[-100px]" color="rgba(16, 185, 129, 0.05)" size={400} />

        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal>
            <p className="text-xs sm:text-sm font-medium text-primary mb-4">What We Do</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 text-balance leading-tight">
              Strategy. Marketing. Analytics. And now — a platform.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mb-4 leading-relaxed">
              Before Shaman Yantra was a product, it was a practice. We&apos;ve worked with 100+ businesses across retail, hospitality, automotive, fashion, tech, and real estate in Nepal — building growth frameworks, fixing leaking revenue, and helping teams move in one direction.
            </p>
            <p className="text-muted-foreground text-base mb-12 leading-relaxed">
              We still do that work. And now we&apos;ve built the infrastructure to do it at scale.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatWeDo.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <Reveal key={pillar.title} delay={i} direction="scale">
                  <motion.div
                    whileHover={{ y: -4, boxShadow: "0 16px 32px rgba(0,0,0,0.06)", transition: spring.snappy }}
                    className="bg-background rounded-2xl border border-border p-7 sm:p-8 h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{pillar.desc}</p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {pillar.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Section 5 — The Team */}
      <TeamCarousel />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Section 6 — Vision / Roadmap */}
      <section id="vision" className="relative scroll-mt-24">
        <Roadmap />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-center">
          <Reveal>
            <p className="text-sm text-muted-foreground">
              Our roadmap is shaped by what our customers actually need. Every feature starts as a conversation.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Section 7 — CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden bg-navy text-white">
        <GradientOrb className="top-[-100px] right-[-100px]" color="rgba(16, 185, 129, 0.1)" size={500} />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6 text-balance leading-tight">
              Start with a conversation.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-white/80 text-base sm:text-lg mb-10 leading-relaxed">
              The organisations that thrive through change build intelligence before they need it. If that sounds like where you want to be, we&apos;d like to hear about your business.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} transition={spring.snappy}>
              <Link
                href="mailto:hello@shamanyantra.com?subject=Free Discovery Call"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-accent transition-colors"
              >
                Schedule a Free Discovery Call
              </Link>
            </motion.div>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-white/60 text-sm mt-6">No forms. No proposals. No commitment.</p>
            <p className="text-white/50 text-sm mt-2">hello@shamanyantra.com · shamanyantra.com</p>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
