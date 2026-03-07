"use client"

import { motion } from "framer-motion"
import { Reveal } from "@/components/reveal"
import { CtaSection } from "@/components/cta-section"
import { GradientOrb, DotGrid, RingDecoration } from "@/components/abstract-elements"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

const HOVER_SPRING = { type: "spring" as const, stiffness: 300, damping: 24 }

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    value: "info@shamanyantra.com",
    href: "mailto:info@shamanyantra.com",
    detail: "Average response time under 2 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+977 1-4000000",
    href: "tel:+97714000000",
    detail: "Available Mon–Sat, 9 AM – 6 PM NPT",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Kathmandu, Nepal",
    href: null,
    detail: "Nepal-based team, locally focused",
  },
]

const cardContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
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

export default function ContactPage() {
  return (
    <div className="pt-24 bg-grid">
      {/* Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center max-w-4xl mx-auto overflow-hidden">
        <GradientOrb className="top-[-200px] left-1/2 -translate-x-1/2" color="rgba(16, 185, 129, 0.07)" size={600} />
        <DotGrid className="top-10 right-0 w-[160px] h-[160px] opacity-25" />
        <RingDecoration className="bottom-0 right-10 opacity-20" size={180} />

        <div className="relative z-10">
          <Reveal>
            <p className="text-xs sm:text-sm font-medium text-primary mb-4">Get in Touch</p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-foreground mb-6 text-balance leading-tight">
              We&apos;re here to help
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Have questions about Shaman Yantra? Need support or want to learn more?
              Reach out and our team will get back to you quickly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden">
        <GradientOrb className="top-[200px] left-[-200px]" color="rgba(16, 185, 129, 0.04)" size={500} />

        <motion.div
          className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 relative z-10"
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          {contactCards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                variants={cardItem}
                whileHover={{
                  y: -6,
                  boxShadow: "0 24px 48px rgba(0,0,0,0.08)",
                  borderColor: "rgba(16,185,129,0.2)",
                  transition: HOVER_SPRING,
                }}
                className="bg-background rounded-2xl border border-border p-7 sm:p-8 h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">{card.title}</h3>
                {card.href ? (
                  <a
                    href={card.href}
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="text-lg font-semibold text-foreground">{card.value}</p>
                )}
                <p className="text-sm text-muted-foreground mt-2">{card.detail}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <Reveal delay={2} className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            For sales inquiries or Enterprise plans, email{" "}
            <Link
              href="mailto:sales@shamanyantra.com"
              className="text-primary hover:text-accent underline underline-offset-2 transition-colors"
            >
              sales@shamanyantra.com
            </Link>
          </p>
        </Reveal>
      </section>

      <CtaSection />
    </div>
  )
}
