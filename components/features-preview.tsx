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
    <section className="relative h-full min-h-0 flex flex-col py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 bg-light-gray overflow-hidden">
      {/* Abstract background decorations */}
      <GradientOrb className="top-[-100px] right-[-100px]" color="rgba(16, 185, 129, 0.06)" size={500} />
      <AbstractLines className="top-20 left-0 opacity-40" />
      <DotGrid className="bottom-10 right-10 w-[180px] h-[180px] opacity-20" />
      <CrossGrid className="top-40 right-20 opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col flex-1 min-h-0">
        {/* Header — compact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-end mb-4 sm:mb-6">
          <div>
            <Reveal>
              <p className="text-xs sm:text-sm font-medium text-primary mb-2">Core Platform</p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-foreground leading-tight text-balance">
                Everything your business needs to thrive
              </h2>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-2 sm:line-clamp-none">
              Nepali businesses have been stitching together Excel sheets,
              WhatsApp groups, and paper records for too long. Shaman Yantra
              replaces all of it with one unified, powerful platform.
            </p>
          </Reveal>
        </div>

        {/* Feature cards — smaller image and padding */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 flex-1 min-h-0">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <Reveal key={f.label} delay={i} direction="scale">
                <div className="bg-background rounded-xl sm:rounded-2xl border border-border group hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full overflow-hidden flex flex-col">
                  <div className="relative h-28 sm:h-36 lg:h-40 overflow-hidden bg-muted shrink-0">
                    <Image
                      src={f.image}
                      alt={`${f.title} demo screenshot`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={i === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10 pointer-events-none" />
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-1 min-h-0">
                    <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">{f.label}</p>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 line-clamp-3">
                      {f.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {f.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] sm:text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full border border-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={f.href}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded mt-auto"
                    >
                      Learn more
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={2} className="text-center mt-4 shrink-0">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
          >
            View all features
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
