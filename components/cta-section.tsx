"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Zap } from "lucide-react"
import { GradientOrb, DotGrid, RingDecoration } from "./abstract-elements"
import { spring, stagger, ease } from "@/lib/motion"

const container = {
  hidden: {},
  visible: { transition: stagger.fast },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: ease.ios } },
}

export function CtaSection() {
  return (
    <section className="relative flex-1 min-h-0 flex flex-col justify-center py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background border-t border-border">
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
          className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-foreground mb-4 sm:mb-6 text-balance leading-tight"
        >
          Your business, simplified.
        </motion.h2>

        <motion.p
          variants={item}
          className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto"
        >
          Join the growing community of Nepali businesses replacing disconnected tools with one unified platform.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <motion.div
            whileHover={{ scale: 1.04, y: -2, transition: spring.snappy }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/20 hover:bg-accent transition-colors duration-200"
            >
              Try Free for 14 Days
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03, y: -1, transition: spring.snappy }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-muted hover:border-foreground/20 transition-all duration-200"
            >
              Schedule a Demo
            </Link>
          </motion.div>
        </motion.div>

        {/* Stat strip — visual anchor */}
        <motion.div variants={item} className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">500+ businesses</span>
          <span aria-hidden="true">·</span>
          <span>5 min setup</span>
          <span aria-hidden="true">·</span>
          <span>14-day free trial</span>
        </motion.div>

        <motion.p variants={item} className="mt-4 sm:mt-5 text-xs text-muted-foreground">
          No credit card required · Cancel anytime
        </motion.p>
      </motion.div>
    </section>
  )
}
