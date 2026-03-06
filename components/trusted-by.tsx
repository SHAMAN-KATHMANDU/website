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
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}
const logoItem = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "tween" as const, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
}

const statsContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const statsItem = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { type: "tween" as const, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
}

export function TrustedBy() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-center text-sm text-muted-foreground mb-10">
            Trusted by leading Nepali businesses
          </p>
        </Reveal>

        {/* Logos — hover reveals color */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
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
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-background cursor-default select-none"
              style={{ filter: "grayscale(30%) brightness(0.9)", transition: "filter 0.3s ease" }}
              title={logo.name}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: logo.bg }}
              >
                <span className="text-xs font-extrabold" style={{ color: logo.color }}>
                  {logo.abbr}
                </span>
              </div>
              <span className="text-sm font-semibold text-foreground">{logo.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats — stagger + hover spring */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          variants={statsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={statsItem}
              whileHover={{ scale: 1.06, y: -2, transition: HOVER_SPRING }}
              className="flex items-center gap-2 bg-secondary border border-border rounded-full px-5 py-2.5"
            >
              <span className="text-sm font-semibold text-foreground">{s.value}</span>
              <span className="text-xs text-muted-foreground">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
