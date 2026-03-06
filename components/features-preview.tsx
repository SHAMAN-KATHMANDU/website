"use client"

import Link from "next/link"
import Image from "next/image"
import { Reveal } from "./reveal"
import { GradientOrb, DotGrid, AbstractLines, CrossGrid } from "./abstract-elements"
import { Package, Users, BarChart3, ArrowRight } from "lucide-react"

const features = [
  {
    label: "Inventory",
    title: "Smart Inventory",
    icon: Package,
    desc: "Real-time stock tracking with barcode support, multi-warehouse management, supplier ordering, and automatic low-stock alerts. Never run out of what matters.",
    tags: ["Multi-Warehouse", "Barcode", "Auto-Reorder"],
    image: "/images/inventory-demo.jpg",
    href: "/features#inventory",
  },
  {
    label: "CRM",
    title: "Customer Relationships",
    icon: Users,
    desc: "Gain complete visibility over your sales pipeline, customer interactions, and revenue performance. Know your customers. Close more deals. Build lasting relationships.",
    tags: ["Sales Pipeline", "Deal Tracking", "Activity Log"],
    image: "/images/crm-demo.jpg",
    href: "/features#crm",
  },
  {
    label: "Analytics",
    title: "Advanced Analytics",
    icon: BarChart3,
    desc: "Transform raw operational data into clear, strategic intelligence. Real-time dashboards, professional reports, and actionable insights — move from assumption to precision.",
    tags: ["Real-Time Dashboards", "Custom Reports", "Business Insights"],
    image: "/images/dashboard-demo.jpg",
    href: "/features#analytics",
  },
]

export function FeaturesPreview() {
  return (
    <section className="relative py-28 px-6 lg:px-8 bg-light-gray overflow-hidden">
      {/* Abstract background decorations */}
      <GradientOrb className="top-[-100px] right-[-100px]" color="rgba(16, 185, 129, 0.06)" size={500} />
      <AbstractLines className="top-20 left-0 opacity-40" />
      <DotGrid className="bottom-10 right-10 w-[180px] h-[180px] opacity-20" />
      <CrossGrid className="top-40 right-20 opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <Reveal>
              <p className="text-sm font-medium text-primary mb-4">Core Platform</p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-serif text-4xl lg:text-5xl text-foreground leading-tight text-balance">
                Everything your business needs to thrive
              </h2>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <p className="text-muted-foreground leading-relaxed">
              Nepali businesses have been stitching together Excel sheets,
              WhatsApp groups, and paper records for too long. Shaman Yantra
              replaces all of it with one unified, powerful platform.
            </p>
          </Reveal>
        </div>

        {/* Feature cards with images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <Reveal key={f.label} delay={i} direction="scale">
                <div className="bg-background rounded-2xl border border-border group hover:border-primary/20 hover:shadow-lg transition-all duration-500 h-full overflow-hidden">
                  {/* Demo image placeholder */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={f.image}
                      alt={`${f.title} demo screenshot`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10 pointer-events-none" />
                    <div className="absolute top-3 left-3">
                      <div className="w-8 h-8 rounded-lg bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                        <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <p className="text-xs font-medium text-primary uppercase tracking-wide">
                        {f.label}
                      </p>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{f.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {f.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {f.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full border border-border group-hover:border-primary/15 group-hover:text-primary/80 transition-all duration-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={f.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                    >
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={2} className="text-center mt-12">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
          >
            View all features
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
