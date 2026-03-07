"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"

const HOVER_SPRING = { type: "spring" as const, stiffness: 300, damping: 24 }

const logos = [
  { name: "Daraz Nepal", abbr: "DZ", color: "#FF6B35", bg: "#FFF3EE" },
  { name: "Foodmandu", abbr: "FM", color: "#E63946", bg: "#FFF0F0" },
  { name: "Sastodeal", abbr: "SD", color: "#2563EB", bg: "#EFF6FF" },
  { name: "Pathao Nepal", abbr: "PT", color: "#7C3AED", bg: "#F5F3FF" },
  { name: "IME Pay", abbr: "IM", color: "#059669", bg: "#ECFDF5" },
  { name: "Hamrobazar", abbr: "HB", color: "#D97706", bg: "#FFFBEB" },
]

const stats = [
  { value: "500+", label: "Active Businesses" },
  { value: "NPR 2B+", label: "Transactions Processed" },
  { value: "4.9★", label: "Average Rating" },
]

const logoContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
}
const logoItem = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const statsContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
}
const statsItem = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const platformStats = [
  { value: "3-in-1", label: "Unified platform" },
  { value: "5 min", label: "Setup time" },
  { value: "14 days", label: "Free trial" },
]

export function TrustedBy() {
  return (
    <section className="flex-1 min-h-0 flex flex-col py-6 md:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full flex flex-col flex-1 min-h-0">
        {/* Platform stats */}
        <motion.div
          className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-border"
          variants={statsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
        >
          {platformStats.map((stat) => (
            <motion.div key={stat.label} variants={statsItem} className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-serif text-foreground leading-none mb-1">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal>
          <p className="text-center text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            Trusted by leading Nepali businesses
          </p>
        </Reveal>

        {/* Logos — tighter grid, smaller on mobile */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6"
          variants={logoContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
        >
          {logos.map((logo) => (
            <motion.div
              key={logo.name}
              variants={logoItem}
              whileHover={{
                scale: 1.06,
                filter: "grayscale(0%) brightness(1)",
                transition: HOVER_SPRING,
              }}
              className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-border bg-background cursor-default select-none"
              style={{ filter: "grayscale(30%) brightness(0.9)", transition: "filter 0.3s ease" }}
              title={logo.name}
            >
              <div
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: logo.bg }}
              >
                <span className="text-[10px] sm:text-xs font-extrabold" style={{ color: logo.color }}>
                  {logo.abbr}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-foreground">{logo.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          variants={statsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={statsItem}
              whileHover={{ scale: 1.04, transition: HOVER_SPRING }}
              className="flex items-center gap-2 bg-secondary border border-border rounded-full px-3 sm:px-5 py-1.5 sm:py-2.5"
            >
              <span className="text-xs sm:text-sm font-semibold text-foreground">{s.value}</span>
              <span className="text-[10px] sm:text-xs text-muted-foreground">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
