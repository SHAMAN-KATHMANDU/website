"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { CtaSection } from "@/components/cta-section"
import { GradientOrb, DotGrid, RingDecoration } from "@/components/abstract-elements"
import { Check, ArrowLeft } from "lucide-react"
import { mainFeatures } from "@/lib/features-data"

const HOVER_SPRING = { type: "spring" as const, stiffness: 300, damping: 24 }

export function FeatureDetailClient({ featureId }: { featureId: string }) {
  const feature = mainFeatures.find((f) => f.id === featureId)

  if (!feature) return null

  const Icon = feature.icon

  return (
    <div className="pt-24 bg-grid">
      {/* Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 overflow-hidden">
        <GradientOrb className="top-[-200px] left-1/2 -translate-x-1/2" color="rgba(16, 185, 129, 0.07)" size={600} />
        <DotGrid className="top-10 right-0 w-[160px] h-[160px] opacity-25" />

        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Features
          </Link>

          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium text-primary uppercase tracking-wide">{feature.label}</p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 text-balance leading-tight">
              {feature.title}
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl">
              {feature.desc}
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="flex flex-wrap gap-2 mt-6">
              {feature.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Demo image / video placeholder */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <motion.div
              className="rounded-2xl overflow-hidden border border-border shadow-lg bg-muted"
              whileHover={{ scale: 1.01, transition: HOVER_SPRING }}
            >
              <div className="relative aspect-video">
                <Image
                  src={feature.image}
                  alt={`${feature.title} product demo`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 60%)" }}
                />
              </div>
              <div className="px-6 py-4 bg-background/80 backdrop-blur-sm border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Live demo and walkthrough videos coming soon. Contact us for a personalized tour.
                </p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* Key capabilities */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-light-gray overflow-hidden">
        <RingDecoration className="top-10 right-10 opacity-15" size={200} />

        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-10">
              Key Capabilities
            </h2>
          </Reveal>

          <motion.div
            className="rounded-2xl border border-border bg-background p-6 sm:p-8 lg:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ul className="space-y-4 sm:space-y-5">
              {feature.details.map((d, i) => (
                <Reveal key={i} delay={i % 6}>
                  <li className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-muted-foreground leading-relaxed">{d}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
