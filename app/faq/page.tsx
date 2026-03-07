"use client"

import { Reveal } from "@/components/reveal"
import { FaqList } from "@/components/faq-list"
import { CtaSection } from "@/components/cta-section"
import { GradientOrb, DotGrid, RingDecoration } from "@/components/abstract-elements"

export default function FaqPage() {
  return (
    <div className="pt-24 bg-grid">
      {/* Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center max-w-4xl mx-auto overflow-hidden">
        <GradientOrb className="top-[-200px] left-1/2 -translate-x-1/2" color="rgba(16, 185, 129, 0.07)" size={600} />
        <DotGrid className="top-10 right-0 w-[160px] h-[160px] opacity-25" />
        <RingDecoration className="bottom-0 right-10 opacity-20" size={180} />

        <div className="relative z-10">
          <Reveal>
            <p className="text-xs sm:text-sm font-medium text-primary mb-4">Common Questions</p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-foreground mb-6 text-balance leading-tight">
              Frequently asked questions
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Find answers to the most common questions about Shaman Yantra, our plans, and how we can help your business.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ List */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <FaqList />
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
