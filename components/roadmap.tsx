"use client"

import Link from "next/link"
import { Reveal } from "./reveal"
import { GradientOrb, DotGrid, CrossGrid } from "./abstract-elements"
import { Bell } from "lucide-react"

const milestones = [
  {
    status: "now",
    label: "NOW",
    quarter: "Live Today",
    title: "Core Platform",
    desc: "Inventory, CRM, team communication, payments, reports, and mobile access.",
    features: [
      "Inventory & multi-warehouse management",
      "CRM & sales pipeline",
      "Team messaging & support tickets",
      "eSewa & IPS payments",
      "Real-time analytics & custom reports",
      "Mobile-first design",
    ],
  },
  {
    status: "upcoming",
    label: "Q2 2026",
    quarter: "Coming Soon",
    title: "AI Messaging & Insights",
    desc: "Smart auto-replies, customer sentiment analysis, chatbot assistant, demand forecasting, sales predictions, smart reorder suggestions.",
    features: [
      "AI chatbot assistant",
      "Smart auto-replies",
      "Customer sentiment analysis",
      "Demand forecasting",
      "Sales predictions",
      "Smart reorder suggestions",
    ],
  },
  {
    status: "upcoming",
    label: "Q3 2026",
    quarter: "Planned",
    title: "HRMS",
    desc: "Attendance management, payroll tracker, commission tracker, productivity tracking.",
    features: [
      "Attendance management",
      "Payroll tracker",
      "Commission tracker",
      "Productivity tracking",
    ],
  },
  {
    status: "upcoming",
    label: "Q4 2026",
    quarter: "Planned",
    title: "Voice & Beyond",
    desc: "Voice calling integration, WhatsApp Business, advanced analytics.",
    features: [
      "Voice calling integration",
      "WhatsApp Business",
      "Advanced analytics",
    ],
  },
]

export function Roadmap() {
  return (
    <section className="relative h-full min-h-0 flex flex-col py-6 md:py-10 px-4 sm:px-6 lg:px-8 bg-background bg-grid overflow-hidden">
      <GradientOrb className="top-[-100px] right-[-100px]" color="rgba(16, 185, 129, 0.06)" size={500} />
      <DotGrid className="bottom-10 left-10 w-[180px] h-[180px] opacity-20" />
      <CrossGrid className="top-40 left-20 opacity-15" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col flex-1 min-h-0">
        <div className="text-center mb-4 sm:mb-6 shrink-0">
          <Reveal>
            <p className="text-xs sm:text-sm font-medium text-primary mb-2">What&apos;s Coming Next</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-foreground text-balance leading-tight">
              Our roadmap is shaped by what<br className="hidden lg:block" /> Nepali businesses actually need.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 flex-1 min-h-0 content-start">
          {milestones.map((m, i) => (
            <Reveal key={m.label} delay={i} direction="scale">
              <div
                className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 border h-full flex flex-col transition-all duration-300 min-h-0 ${
                  m.status === "now"
                    ? "bg-navy text-white border-primary shadow-xl shadow-navy/10 ring-2 ring-primary ring-offset-2"
                    : "bg-background border-border hover:border-primary/20 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 sm:px-3 py-0.5 sm:py-1 rounded-full ${
                      m.status === "now"
                        ? "bg-primary/20 text-emerald-300"
                        : "bg-secondary text-primary"
                    }`}
                  >
                    {m.label}
                  </span>
                </div>

                <p
                  className={`text-[10px] sm:text-xs font-medium mb-1 ${
                    m.status === "now" ? "text-white/50" : "text-muted-foreground"
                  }`}
                >
                  {m.quarter}
                </p>

                <h3
                  className={`text-sm sm:text-base font-semibold mb-2 leading-tight ${
                    m.status === "now" ? "text-white" : "text-foreground"
                  }`}
                >
                  {m.title}
                </h3>

                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-3 flex-1 line-clamp-2 min-h-0 ${
                    m.status === "now" ? "text-white/60" : "text-muted-foreground"
                  }`}
                >
                  {m.desc}
                </p>

                <ul className="space-y-1 flex-1 min-h-0 overflow-hidden">
                  {m.features.slice(0, 4).map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-1.5 text-[10px] sm:text-xs ${
                        m.status === "now" ? "text-white/70" : "text-muted-foreground"
                      }`}
                    >
                      <span
                        className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full mt-1 sm:mt-1.5 shrink-0 ${
                          m.status === "now" ? "bg-emerald-400" : "bg-primary/40"
                        }`}
                      />
                      <span className="truncate">{f}</span>
                    </li>
                  ))}
                </ul>

                {m.status === "upcoming" && (
                  <div className="mt-3 pt-3 border-t border-border/50 shrink-0">
                    <Link
                      href="mailto:info@shamanyantra.com?subject=Notify me about upcoming features"
                      className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-medium text-primary hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                    >
                      <Bell className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                      Notify me
                    </Link>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2} className="shrink-0 mt-4">
          <p className="text-center text-xs sm:text-sm text-muted-foreground">
            Roadmap shaped by customer feedback. Your input drives what we build next.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
