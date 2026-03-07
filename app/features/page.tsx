"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { CtaSection } from "@/components/cta-section"
import { GradientOrb, DotGrid, AbstractLines, CrossGrid, RingDecoration } from "@/components/abstract-elements"
import { ArrowRight } from "lucide-react"
import { mainFeatures, additionalFeatures } from "@/lib/features-data"

const HOVER_SPRING = { type: "spring" as const, stiffness: 300, damping: 24 }

const cardContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const cardItem = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween" as const, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
}

export default function FeaturesPage() {
  return (
    <div className="pt-24 bg-grid">
      {/* Page Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center max-w-4xl mx-auto overflow-hidden">
        <GradientOrb className="top-[-200px] left-1/2 -translate-x-1/2" color="rgba(16, 185, 129, 0.07)" size={600} />
        <DotGrid className="top-10 right-0 w-[160px] h-[160px] opacity-25" />
        <CrossGrid className="bottom-0 left-10 opacity-20" />

        <div className="relative z-10">
          <Reveal>
            <p className="text-sm font-medium text-primary mb-4">Platform Capabilities</p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-foreground mb-6 text-balance leading-tight">
              Built for the way Nepal does business
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Three core systems working together as one unified platform.
              Every feature designed for the Nepali business landscape.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Features — card grid with See more */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 overflow-hidden">
        <GradientOrb className="top-[200px] right-[-100px]" color="rgba(16, 185, 129, 0.04)" size={500} />

        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10"
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          {mainFeatures.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div key={f.id} variants={cardItem}>
                <Link href={`/features/${f.id}`} className="block h-full group">
                  <motion.div
                    className="bg-background rounded-2xl border border-border overflow-hidden h-full flex flex-col hover:border-primary/20 hover:shadow-lg transition-all duration-500"
                    whileHover={{
                      y: -6,
                      boxShadow: "0 24px 48px rgba(0,0,0,0.08)",
                      transition: HOVER_SPRING,
                    }}
                  >
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <Image
                        src={f.image}
                        alt={`${f.title} demo screenshot`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10 pointer-events-none" />
                      <div className="absolute top-3 left-3">
                        <div className="w-8 h-8 rounded-lg bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                          <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>

                    <div className="p-8 lg:p-10 flex-1 flex flex-col">
                      <p className="text-xs font-medium text-primary uppercase tracking-wide mb-4">{f.label}</p>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{f.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{f.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {f.tags.map((t) => (
                          <span
                            key={t}
                            className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full border border-border"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:text-accent transition-colors">
                        See more
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* Section divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Additional Features Grid — Dashboard */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-light-gray overflow-hidden">
        <AbstractLines className="top-0 right-0 opacity-30" />
        <GradientOrb className="bottom-[-200px] left-[-100px]" color="rgba(16, 185, 129, 0.05)" size={500} />

        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-sm font-medium text-primary mb-4">And Much More</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
                Dashboard
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {additionalFeatures.map((f, i) => {
              const Icon = f.icon
              return (
                <Reveal key={f.title} delay={i % 4} direction="scale">
                  <motion.div
                    className="bg-background rounded-2xl p-6 sm:p-7 border border-border group h-full"
                    whileHover={{
                      y: -4,
                      boxShadow: "0 12px 28px rgba(0,0,0,0.07)",
                      borderColor: "rgba(16,185,129,0.2)",
                      transition: HOVER_SPRING,
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </motion.div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={2}>
            <div className="mt-10 rounded-xl border border-primary/20 bg-secondary/50 px-5 sm:px-6 py-5 text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">AI features coming Q2 2026 —</span>{" "}
              Chatbot, predictive analytics, and smart insights are in active development and will roll out across all plans. See the Roadmap section for details.
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
