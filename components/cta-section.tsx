"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Zap } from "lucide-react"
import { GradientOrb, DotGrid, RingDecoration } from "./abstract-elements"

const HOVER_SPRING = { type: "spring" as const, stiffness: 300, damping: 24 }

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "tween" as const, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
}

export function CtaSection() {
  return (
    <section className="relative flex-1 min-h-0 flex flex-col justify-center py-6 md:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background border-t border-border">
      {/* Decorative background */}
      <GradientOrb className="top-[-200px] left-1/2 -translate-x-1/2" color="rgba(16, 185, 129, 0.06)" size={700} />
      <DotGrid className="top-10 left-10 w-[160px] h-[160px] opacity-20" />
      <RingDecoration className="bottom-10 right-10 opacity-15" size={200} />

      <motion.div
        className="max-w-3xl mx-auto text-center relative z-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      >
        <motion.div variants={item}>
          <div className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-secondary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-primary/20 mb-4 sm:mb-6">
            <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            14-day free trial · No credit card required
          </div>
        </motion.div>

        <motion.h2
          variants={item}
          className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-foreground mb-4 sm:mb-6 text-balance leading-tight"
        >
          Ready to transform your business?
        </motion.h2>

        <motion.p
          variants={item}
          className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto"
        >
          Join 500+ Nepali businesses already running smarter with Shaman Yantra.
          Set up in under 5 minutes.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <motion.div
            whileHover={{ scale: 1.04, y: -2, transition: HOVER_SPRING }}
            whileTap={{ scale: 0.97 }}
            style={{ willChange: "transform" }}
          >
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/20 hover:bg-accent transition-colors duration-200"
            >
              Start Free Trial
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03, y: -1, transition: HOVER_SPRING }}
            whileTap={{ scale: 0.97 }}
            style={{ willChange: "transform" }}
          >
            <Link
              href="/features"
              className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-muted hover:border-foreground/20 transition-all duration-200"
            >
              Explore Features
            </Link>
          </motion.div>
        </motion.div>

        <motion.p variants={item} className="mt-4 sm:mt-6 text-xs text-muted-foreground">
          No setup fees · Cancel anytime · Nepal-based support
        </motion.p>
      </motion.div>
    </section>
  )
}
