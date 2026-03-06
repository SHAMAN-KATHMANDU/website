"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { CtaSection } from "@/components/cta-section"
import { GradientOrb, DotGrid, AbstractLines, CrossGrid, RingDecoration } from "@/components/abstract-elements"
import {
  Package, Users, BarChart3,
  Globe, Smartphone, Database,
  Check,
} from "lucide-react"


const HOVER_SPRING = { type: "spring" as const, stiffness: 300, damping: 24 }

const mainFeatures = [
  {
    label: "Inventory",
    title: "Smart Inventory Management",
    icon: Package,
    desc: "Take full control of your stock with a powerful inventory system designed to eliminate guesswork, reduce losses, and increase profitability. Whether you manage one store or multiple warehouses, keep your operations accurate, automated, and efficient.",
    tags: ["Multi-Warehouse", "Barcode", "Auto-Reorder"],
    image: "/images/inventory-demo.jpg",
    details: [
      "Real-time stock levels — auto-updated on every sale, purchase, return, or transfer",
      "Multi-location control — separate tracking per branch with easy internal transfers",
      "Low-stock alerts with configurable thresholds — never run out of best-sellers",
      "Barcode scanning — add stock, process sales, and count inventory in seconds",
      "Product variants — manage sizes, colors, and models under one parent product",
      "Reports & export — sales performance, stock valuation, and movement history",
    ],
  },
  {
    label: "CRM",
    title: "Customer Relationships",
    icon: Users,
    desc: "A centralized CRM system designed to give you complete visibility over your sales pipeline, customer interactions, and revenue performance. Know your customers. Close more deals. Build lasting relationships.",
    tags: ["Sales Pipeline", "Deal Tracking", "Activity Log"],
    image: "/images/crm-demo.jpg",
    details: [
      "Sales pipeline view — track leads, proposals, negotiations, and closed deals",
      "Customer profiles — contact info, purchase history, deal values, and internal notes",
      "Deal tracking — size, stage, probability scoring, and expected close dates",
      "Activity timeline — logged calls, meetings, emails, and scheduled reminders",
      "Task management — automated reminders, role-based assignments, deadline tracking",
      "Sales reports — conversion rates, rep performance, average deal size, revenue targets",
    ],
  },
  {
    label: "Analytics",
    title: "Advanced Analytics",
    icon: BarChart3,
    desc: "Transform raw operational data into clear, strategic intelligence. Our Analytics platform delivers real-time visibility, professional reporting, and actionable insights — so you can move from assumption to precision.",
    tags: ["Real-Time Dashboards", "Custom Reports", "Business Insights"],
    image: "/images/dashboard-demo.jpg",
    details: [
      "Professional reports — Revenue by Category, ABC Classification, Stock Heatmap",
      "Real-time analytics — sales velocity, inventory movements, revenue fluctuations",
      "Role-based dashboards — sales, operations, management, and marketing views",
      "Business insights — identify high-margin products, detect slow-moving inventory",
      "Automated alerts — low stock, revenue thresholds, sales targets, discount variance",
      "Download & upload — export CSV/PDF, import bulk data, integrate with existing systems",
    ],
  },
]

const additionalFeatures = [
  { icon: Globe, title: "Multi-Location", desc: "Manage multiple warehouses, storefronts, and teams from one centralized dashboard." },
  { icon: Smartphone, title: "Mobile-First", desc: "Responsive design optimized for mobile devices. Manage your business from anywhere." },
  { icon: Database, title: "Data Export", desc: "Export your data anytime. CSV, PDF, and custom format support for all reports." },
]

const featureTabs = [
  { id: "inventory", label: "Inventory" },
  { id: "crm", label: "CRM" },
  { id: "analytics", label: "Analytics" },
  { id: "more", label: "More" },
]

function StickyFeatureNav() {
  const [active, setActive] = useState("inventory")

  useEffect(() => {
    const sectionIds = featureTabs.map((t) => t.id)
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: "-40% 0px -55% 0px" }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-xl border-b border-border shadow-sm -mt-px">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex gap-1 py-1.5 sm:py-2 overflow-x-auto scrollbar-none" aria-label="Feature sections">
          {featureTabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`shrink-0 text-sm px-4 py-2 rounded-lg transition-all duration-200 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                active === tab.id
                  ? "bg-secondary text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(tab.id)?.scrollIntoView({ behavior: "smooth", block: "start" })
              }}
            >
              {tab.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
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

      <StickyFeatureNav />

      {/* Main Features — staggered entrance, hover lift */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto space-y-8">
          {mainFeatures.map((f, i) => {
            const Icon = f.icon
            const isReversed = i % 2 === 1
            return (
              <Reveal key={f.label} direction={isReversed ? "right" : "left"}>
                <div id={f.label.toLowerCase()} className="scroll-mt-36" />
                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border bg-background shadow-sm"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                    transition: HOVER_SPRING,
                  }}
                  style={{ willChange: "transform, box-shadow" }}
                >
                  {/* Text column */}
                  <div className={`p-7 sm:p-10 lg:p-14 ${isReversed ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <p className="text-xs font-medium text-primary uppercase tracking-wide">
                        {f.label}
                      </p>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4 leading-tight">
                      {f.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {f.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {f.tags.map((t) => (
                        <span key={t} className="text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full border border-border">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                      Key Capabilities
                    </h3>
                    <ul className="space-y-3">
                      {f.details.map((d, di) => (
                        <li key={di} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image column — hover scale */}
                  <div className={`relative bg-light-gray flex items-center justify-center p-6 sm:p-8 lg:p-12 ${isReversed ? "lg:order-1" : ""}`}>
                    <RingDecoration className="top-4 right-4 opacity-15" size={120} />
                    <motion.div
                      className="relative rounded-xl overflow-hidden shadow-lg border border-border/40 w-full"
                      whileHover={{ scale: 1.03, transition: HOVER_SPRING }}
                      style={{ willChange: "transform" }}
                    >
                      <Image
                        src={f.image}
                        alt={`${f.title} product demo showing the ${f.label.toLowerCase()} interface`}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)" }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Section divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Additional Features Grid */}
      <section id="more" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-light-gray overflow-hidden scroll-mt-36">
        <AbstractLines className="top-0 right-0 opacity-30" />
        <GradientOrb className="bottom-[-200px] left-[-100px]" color="rgba(16, 185, 129, 0.05)" size={500} />

        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-sm font-medium text-primary mb-4">And Much More</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
                Every tool your team needs
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {additionalFeatures.map((f, i) => {
              const Icon = f.icon
              return (
                <Reveal key={f.title} delay={i % 4} direction="scale">
                  <motion.div
                    className="bg-background rounded-xl p-6 sm:p-7 border border-border group h-full"
                    whileHover={{
                      y: -4,
                      boxShadow: "0 12px 28px rgba(0,0,0,0.07)",
                      borderColor: "rgba(16,185,129,0.2)",
                      transition: HOVER_SPRING,
                    }}
                    style={{ willChange: "transform" }}
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
