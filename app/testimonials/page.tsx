"use client"

import { motion } from "framer-motion"
import { Reveal } from "@/components/reveal"
import { CtaSection } from "@/components/cta-section"
import { GradientOrb, DotGrid, CrossGrid, RingDecoration, AbstractLines, WaveDecoration, HexGrid, GlowLine } from "@/components/abstract-elements"
import { Star, Quote } from "lucide-react"


const HOVER_SPRING = { type: "spring" as const, stiffness: 300, damping: 24 }

const testimonials = [
  {
    initial: "R",
    gradientFrom: "#10B981",
    gradientTo: "#34D399",
    quote: "We used to lose track of stock constantly. Now I know exactly what's on every shelf in both our locations — and my phone tells me when to reorder.",
    name: "Ram Shrestha",
    role: "Owner, Shrestha General Store",
    location: "Kathmandu",
    rating: 5,
  },
  {
    initial: "S",
    gradientFrom: "#3B82F6",
    gradientTo: "#60A5FA",
    quote: "Switching from three separate tools to one platform saved us time we didn't even know we were losing. Our team is finally on the same page.",
    name: "Sunita Tamang",
    role: "Director, Tamang Wholesale",
    location: "Pokhara",
    rating: 4,
  },
  {
    initial: "P",
    gradientFrom: "#F59E0B",
    gradientTo: "#FCD34D",
    quote: "Setup took under 10 minutes. Our entire team switched from WhatsApp to Shaman Yantra in one afternoon. The difference is night and day.",
    name: "Priya Karki",
    role: "Founder, Karki Fashion House",
    location: "Lalitpur",
    rating: 5,
  },
  {
    initial: "A",
    gradientFrom: "#EF4444",
    gradientTo: "#F87171",
    quote: "The eSewa integration alone saved us hours every week. No more manual reconciliation. Every payment matches perfectly with our invoice system.",
    name: "Arun Maharjan",
    role: "CFO, Maharjan Electronics",
    location: "Bhaktapur",
    rating: 5,
  },
  {
    initial: "K",
    gradientFrom: "#8B5CF6",
    gradientTo: "#A78BFA",
    quote: "We manage 3 warehouses across the valley. Before Shaman Yantra, transferring stock was chaos. Now it's one click and fully tracked.",
    name: "Kavita Gurung",
    role: "Operations Head, Gurung Distributors",
    location: "Kathmandu",
    rating: 5,
  },
  {
    initial: "B",
    gradientFrom: "#14B8A6",
    gradientTo: "#2DD4BF",
    quote: "The CRM pipeline changed how we sell. We can see exactly where each deal stands, and the automated follow-ups mean we never forget a lead.",
    name: "Bikash Rai",
    role: "Sales Manager, Rai Tech Solutions",
    location: "Biratnagar",
    rating: 4,
  },
]

const stats = [
  { value: "500+", label: "Active Businesses" },
  { value: "98%", label: "Customer Retention" },
  { value: "4.8/5", label: "Average Rating" },
  { value: "5 min", label: "Avg. Setup Time" },
]

// Stagger containers
const statsContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const statsItem = {
  hidden: { opacity: 0, scale: 0.94, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "tween" as const, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
}

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const gridItem = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "tween" as const, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
}

export default function TestimonialsPage() {
  return (
    <div className="pt-24 bg-grid">
      {/* Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center max-w-4xl mx-auto overflow-hidden">
        <GradientOrb className="top-[-200px] right-[-100px]" color="rgba(16, 185, 129, 0.06)" size={500} />
        <DotGrid className="top-10 left-0 w-[160px] h-[160px] opacity-25" />
        <RingDecoration className="bottom-0 right-10 opacity-20" size={180} />
        <HexGrid className="top-10 left-10 opacity-40" />
        <GlowLine className="bottom-0 left-1/4 right-1/4" />

        <div className="relative z-10">
          <Reveal>
            <p className="text-xs sm:text-sm font-medium text-primary mb-4">What Businesses Say</p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-foreground mb-6 text-balance leading-tight">
              Trusted by Nepali businesses
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              From solo shops to multi-location chains, hear how Shaman Yantra
              is transforming the way Nepal does business.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats — staggered entrance + hover scale */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden">
        <CrossGrid className="top-0 right-20 opacity-15" />
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10"
          variants={statsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={statsItem}
              whileHover={{
                scale: 1.04,
                y: -4,
                boxShadow: "0 16px 32px rgba(0,0,0,0.06)",
                borderColor: "rgba(16,185,129,0.2)",
                transition: HOVER_SPRING,
              }}
              className="bg-background rounded-2xl p-5 sm:p-6 lg:p-8 text-center border border-border shadow-sm"
            >
              <span className="block font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground leading-none mb-2">
                {s.value}
              </span>
              <span className="block text-xs sm:text-sm text-muted-foreground">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Section divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Testimonials Grid — staggered + hover lift */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden">
        <WaveDecoration className="top-0 left-0 opacity-60" />
        <GradientOrb className="top-[200px] left-[-200px]" color="rgba(16, 185, 129, 0.04)" size={500} />
        <AbstractLines className="bottom-0 right-0 opacity-20" />

        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 relative z-10"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={gridItem}
              whileHover={{
                y: -6,
                boxShadow: "0 24px 48px rgba(0,0,0,0.08)",
                borderColor: "rgba(16,185,129,0.15)",
                transition: HOVER_SPRING,
              }}
              className="bg-background rounded-2xl border border-border p-7 sm:p-8 lg:p-9 relative group h-full flex flex-col"
            >
              {/* Quote icon — entrance animation */}
              <motion.div
                className="mb-6"
                initial={{ scale: 0, rotate: -15, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
              >
                <Quote className="w-8 h-8 text-primary/20" />
              </motion.div>

              <div className="flex gap-0.5 mb-5" role="img" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`w-4 h-4 ${si < t.rating ? "text-amber-400 fill-amber-400" : "text-muted-foreground/30 fill-none"}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed mb-8 flex-1">
                {`"${t.quote}"`}
              </blockquote>
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full shrink-0 overflow-hidden shadow-sm">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <defs>
                      <linearGradient id={`avatar-grad-${t.initial}`} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stopColor={t.gradientFrom} />
                        <stop offset="1" stopColor={t.gradientTo} />
                      </linearGradient>
                    </defs>
                    <circle cx="20" cy="20" r="20" fill={`url(#avatar-grad-${t.initial})`} />
                    <circle cx="20" cy="15" r="6" fill="white" fillOpacity="0.9" />
                    <ellipse cx="20" cy="30" rx="9" ry="7" fill="white" fillOpacity="0.7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role} &middot; {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Trust Banner — card */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
        <DotGrid className="top-5 left-5 w-[120px] h-[120px] opacity-20" />
        <RingDecoration className="bottom-5 right-5 opacity-15" size={140} />

        <div className="max-w-3xl mx-auto relative z-10">
          <Reveal>
            <motion.div
              className="rounded-2xl border border-border bg-background p-8 sm:p-12 shadow-sm"
              whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.06)", transition: HOVER_SPRING }}
            >
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="flex items-center gap-1" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-foreground leading-relaxed text-balance">
                {`"Shaman Yantra is the most complete business platform we've seen built specifically for Nepal. It simply works."`}
              </p>
              <span className="text-sm text-muted-foreground">
                  — Nepal Tech Review, 2025{" "}
                  <a
                    href="mailto:info@shamanyantra.com?subject=Nepal Tech Review article"
                    className="underline underline-offset-2 hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    (source available on request)
                  </a>
                </span>
            </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
