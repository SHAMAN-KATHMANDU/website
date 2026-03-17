"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Reveal } from "@/components/reveal"
import { GradientOrb, DotGrid, RingDecoration } from "@/components/abstract-elements"
import { ArrowRight } from "lucide-react"
import { spring, stagger } from "@/lib/motion"

// Pain points from PAGE-Home.md
const painPoints = [
  '"Dashain ma sales huncha, but by Mangsir everything is quiet again — and I don\'t know how to change that."',
  '"Facebook ma spend garcha, likes aaunchha — but I genuinely can\'t tell if it\'s bringing in customers."',
  '"Business is running but the money never feels like enough. Something is leaking and I can\'t find where."',
  '"My product is good — better than what the guy down the road is selling — but he has more customers."',
  '"We\'ve been talking about expanding for two years. Everyone has an opinion. No one\'s made a decision."',
  '"I know what needs to change. I just don\'t have the bandwidth or the right people to actually do it."',
]

// Platform pillars from PAGE-Home.md
const pillars = [
  {
    title: "Inventory",
    tags: ["Multi-Warehouse", "Barcode", "Auto-Reorder"],
    desc: "Real-time stock tracking across every product, variation, and location — with barcode scanning, supplier management, and automatic low-stock alerts. Never run out of what matters.",
    href: "/products#inventory",
  },
  {
    title: "CRM",
    tags: ["Sales Pipeline", "Follow-Ups", "Activity Log"],
    desc: "Track every customer interaction, build your sales pipeline, automate follow-ups, and close more deals. Your entire customer history — in one place.",
    href: "/products#crm",
  },
  {
    title: "Analytics",
    tags: ["Live Dashboard", "Custom Reports", "Trends"],
    desc: "A live view of your entire business — today's sales, stock alerts, team performance, and financial reports. Stop guessing. Start knowing.",
    href: "/products#analytics",
  },
]

// Social proof stats
const stats = [
  { value: "500+", label: "Active Businesses" },
  { value: "98%", label: "Customer Retention" },
  { value: "4.9 / 5", label: "Average Rating" },
  { value: "< 5 min", label: "Average Setup Time" },
]

// Testimonials (3 from PAGE-Home.md)
const testimonials = [
  {
    quote: "We used to lose track of stock constantly. Now I know exactly what's on every shelf in both our locations — and my phone tells me when to reorder.",
    name: "Ram Shrestha",
    role: "Owner, Shrestha General Store",
    location: "Kathmandu",
  },
  {
    quote: "The CRM pipeline changed how we sell. We can see exactly where each deal stands, and the automated follow-ups mean we never forget a lead.",
    name: "Bikash Rai",
    role: "Sales Manager, Rai Tech Solutions",
    location: "Biratnagar",
  },
  {
    quote: "Switching from three separate tools to one platform saved us time we didn't even know we were losing. Our team is finally on the same page.",
    name: "Sunita Tamang",
    role: "Director, Tamang Wholesale",
    location: "Pokhara",
  },
]

const cardContainer = {
  hidden: {},
  visible: { transition: stagger.fast },
}
const cardItem = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: spring.gentle },
}

export default function HomePage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Section 1 — Hero */}
      <Hero />

      {/* Scrolling Feature Ticker */}
      <Marquee />

      {/* Section 2 — Pain Points */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden bg-light-gray">
        <GradientOrb className="top-[-100px] right-0" color="rgba(16, 185, 129, 0.05)" size={400} />
        <DotGrid className="top-10 left-10 w-[120px] h-[120px] opacity-20" />

        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal>
            <p className="text-xs sm:text-sm font-medium text-primary mb-4">Who It&apos;s For</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 text-balance leading-tight">
              Any of these sound familiar?
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mb-12 leading-relaxed">
              If you&apos;re running a Nepali business, at least one of these keeps you up at night. You&apos;re not alone — and you&apos;re not stuck.
            </p>
          </Reveal>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          >
            {painPoints.map((quote, i) => (
              <motion.div
                key={i}
                variants={cardItem}
                whileHover={{ y: -3, boxShadow: "0 16px 32px rgba(0,0,0,0.06)", transition: spring.snappy }}
                className="bg-background rounded-xl border border-border p-6 sm:p-7 italic text-muted-foreground text-sm sm:text-base leading-relaxed"
              >
                {quote}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 3 — Platform Overview */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden">
        <RingDecoration className="bottom-0 right-10 opacity-15" size={180} />

        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal>
            <p className="text-xs sm:text-sm font-medium text-primary mb-4">The Platform</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 text-balance leading-tight">
              Three Systems. One Truth.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mb-4 leading-relaxed">
              Everything your business needs to thrive — in one place.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mb-12 leading-relaxed">
              Nepali businesses have been stitching together Excel sheets, WhatsApp groups, and paper records for too long. Shaman Yantra replaces all of it with one unified, powerful platform.
            </p>
          </Reveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          >
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={cardItem}
                whileHover={{ y: -5, boxShadow: "0 24px 48px rgba(0,0,0,0.08)", borderColor: "rgba(16,185,129,0.2)", transition: spring.snappy }}
                className="bg-background rounded-2xl border border-border p-7 sm:p-8 h-full flex flex-col"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">{p.desc}</p>
                <Link
                  href={p.href}
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors"
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 4 — Social Proof */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden bg-light-gray">
        <GradientOrb className="top-[100px] left-[-100px]" color="rgba(16, 185, 129, 0.05)" size={400} />

        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal>
            <p className="text-xs sm:text-sm font-medium text-primary mb-4">Trusted By</p>
          </Reveal>

          {/* Stats row */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={cardItem}
                className="bg-background rounded-xl border border-border p-5 sm:p-6 text-center"
              >
                <span className="block font-serif text-2xl sm:text-3xl text-foreground font-semibold">{s.value}</span>
                <span className="block text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={cardItem}
                whileHover={{ y: -3, boxShadow: "0 16px 32px rgba(0,0,0,0.06)", transition: spring.snappy }}
                className="bg-background rounded-xl border border-border p-6 sm:p-7"
              >
                <blockquote className="text-sm text-foreground leading-relaxed mb-4 italic">
                  &quot;{t.quote}&quot;
                </blockquote>
                <p className="text-xs font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role} · {t.location}</p>
              </motion.div>
            ))}
          </motion.div>

          <Reveal>
            <div className="text-center">
              <Link
                href="/testimonials"
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                Read all stories
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 5 — CTA Banner */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden bg-navy text-white">
        <GradientOrb className="top-[-100px] right-[-100px]" color="rgba(16, 185, 129, 0.1)" size={500} />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6 text-balance leading-tight">
              Your business, simplified.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-white/80 text-base sm:text-lg mb-10 leading-relaxed">
              Join the growing community of Nepali businesses replacing disconnected tools with one unified platform.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} transition={spring.snappy}>
                <Link
                  href="/pricing"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-accent transition-colors"
                >
                  Try Free for 14 Days
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} transition={spring.snappy}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  Schedule a Demo
                </Link>
              </motion.div>
            </div>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-white/60 text-sm mt-6">No credit card required · Cancel anytime</p>
          </Reveal>
        </div>
      </section>

      {/* Section 6 — Press Strip */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-serif text-lg sm:text-xl text-muted-foreground leading-relaxed italic">
            &quot;Shaman Yantra is the most complete business platform we&apos;ve seen built specifically for Nepal. It simply works.&quot;
          </blockquote>
          <p className="text-sm text-muted-foreground mt-4">— Nepal Tech Review, 2025</p>
        </div>
      </section>
    </div>
  )
}
