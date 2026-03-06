"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Reveal } from "@/components/reveal"
import { CtaSection } from "@/components/cta-section"
import Link from "next/link"
import { Check, X, ArrowRight, ChevronDown } from "lucide-react"


const HOVER_SPRING = { type: "spring" as const, stiffness: 300, damping: 24 }

// ── PRICING DATA ──────────────────────────────────────────
const plans = [
  {
    tier: "Starter",
    monthly: "2,999",
    annual: "29,990",
    annualMonthly: "2,499",
    savings: "NPR 5,998",
    period: "Solo entrepreneurs, small shops",
    desc: "Everything you need to replace Excel and paper records with a real business system.",
    features: [
      "Inventory management",
      "Basic CRM (up to 100 contacts)",
      "eSewa & IPS payments",
      "Team chat (1 channel)",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    tier: "Pro",
    monthly: "6,999",
    annual: "69,990",
    annualMonthly: "5,833",
    savings: "NPR 13,998",
    period: "Growing businesses, teams",
    desc: "Full-featured platform for growing teams ready to scale operations and close more deals.",
    features: [
      "Unlimited inventory SKUs",
      "Full CRM with pipeline",
      "eSewa & IPS payments",
      "Team messaging + SMS",
      "Custom reporting",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    tier: "Business",
    monthly: "14,999",
    annual: "1,49,990",
    annualMonthly: "12,499",
    savings: "NPR 29,998",
    period: "Multi-location operations",
    desc: "Advanced tools for multi-location businesses with complex inventory and team needs.",
    features: [
      "Multi-warehouse management",
      "Advanced analytics",
      "API access",
      "Dedicated onboarding",
      "Phone + chat support",
      "Custom integrations",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    tier: "Enterprise",
    monthly: null,
    annual: null,
    annualMonthly: null,
    savings: null,
    period: "Large chains, custom needs",
    desc: "Tailored platform for large retailers and chains. NPR 30,000-2,00,000/month based on requirements.",
    features: [
      "White-label options",
      "Dedicated infrastructure",
      "99.9% uptime SLA",
      "Custom contract terms",
      "24/7 dedicated support",
      "Full API + webhooks",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

// ── COMPARISON DATA ───────────────────────────────────────
const planHeaders = ["Starter", "Pro", "Business", "Enterprise"]
const planPrices = ["NPR 2,999/mo", "NPR 6,999/mo", "NPR 14,999/mo", "Custom"]

type CellType =
  | { type: "check"; txt?: string }
  | { type: "cross" }
  | { type: "val"; val: string }

const ck = (txt?: string): CellType => ({ type: "check", txt })
const cx = (): CellType => ({ type: "cross" })
const val = (v: string): CellType => ({ type: "val", val: v })

const comparisonGroups = [
  {
    label: "Scale Limits",
    rows: [
      { feature: "Users", cols: [val("1"), val("10"), val("Unlimited"), val("Unlimited")] },
      { feature: "Products", cols: [val("100"), val("1,000"), val("Unlimited"), val("Unlimited")] },
      { feature: "CRM Contacts", cols: [val("100"), val("1,000"), val("Unlimited"), val("Unlimited")] },
      { feature: "Locations", cols: [val("1"), val("5"), val("Unlimited"), val("Unlimited")] },
      { feature: "Storage", cols: [val("5 GB"), val("25 GB"), val("100 GB"), val("500 GB+")] },
      { feature: "Monthly Transactions", cols: [val("500"), val("1,000"), val("Unlimited"), val("Unlimited")] },
    ],
  },
  {
    label: "Inventory",
    rows: [
      { feature: "Product catalog & SKU", cols: [ck(), ck(), ck(), ck()] },
      { feature: "Real-time stock tracking", cols: [ck(), ck(), ck(), ck()] },
      { feature: "Low stock alerts", cols: [ck(), ck(), val("Advanced"), val("Advanced")] },
      { feature: "Barcode scanning", cols: [ck(), ck(), ck(), ck()] },
      { feature: "Multi-warehouse transfers", cols: [cx(), ck(), ck(), ck()] },
      { feature: "Purchase orders", cols: [ck(), ck(), ck(), val("Auto-draft")] },
      { feature: "Supplier management", cols: [ck(), ck(), ck(), ck()] },
    ],
  },
  {
    label: "CRM",
    rows: [
      { feature: "Customer profiles", cols: [val("Basic"), val("Full"), val("Full"), val("Full")] },
      { feature: "Sales pipeline & deals", cols: [cx(), ck(), ck(), ck()] },
      { feature: "Activity timeline", cols: [ck(), ck(), ck(), ck()] },
      { feature: "Task management", cols: [ck(), ck(), ck(), val("Advanced")] },
      { feature: "Contact segmentation", cols: [cx(), ck(), val("Advanced"), val("Advanced")] },
      { feature: "Lead scoring", cols: [cx(), cx(), ck(), ck()] },
      { feature: "WhatsApp Integration", cols: [cx(), cx(), ck("Business API"), val("+ Priority")] },
    ],
  },
  {
    label: "Reporting",
    rows: [
      { feature: "Data history", cols: [val("30 days"), val("12 months"), val("Full"), val("Full")] },
      { feature: "Pre-built reports", cols: [val("3 basic"), val("All"), val("All"), val("All")] },
      { feature: "Custom report builder", cols: [cx(), val("5 saved"), val("Unlimited"), val("Unlimited")] },
      { feature: "Report exports", cols: [val("3/month"), val("Unlimited"), val("Unlimited"), val("Unlimited")] },
      { feature: "Scheduled reports", cols: [cx(), ck(), ck(), ck()] },
      { feature: "Advanced analytics", cols: [cx(), val("Basic trends"), val("Full"), val("Full + Custom")] },
      { feature: "Real-time dashboards", cols: [cx(), cx(), ck(), ck()] },
      { feature: "API data access", cols: [cx(), cx(), val("Raw data"), val("Full")] },
    ],
  },
  {
    label: "Support",
    rows: [
      { feature: "Email support", cols: [val("24hr"), val("12hr"), val("4hr"), val("1hr")] },
      { feature: "Phone support", cols: [cx(), val("Business hrs"), val("Business hrs"), val("24/7")] },
      { feature: "Account manager", cols: [cx(), cx(), cx(), ck("Dedicated")] },
      { feature: "Onboarding training", cols: [cx(), cx(), val("1-hour"), val("Full-day")] },
    ],
  },
]

const addons = [
  { name: "Extra Users", price: "NPR 500 / user / month", detail: "Beyond plan user limit" },
  { name: "Extra Locations", price: "NPR 1,000 / location / month", detail: "Additional warehouses" },
  { name: "WhatsApp Integration", price: "NPR 2,000 / month", detail: "For Starter, Pro & Business plans" },
  { name: "Extra Storage", price: "NPR 500 per 5 GB / month", detail: "Additional file storage" },
]

function CellContent({ cell }: { cell: CellType }) {
  if (cell.type === "cross") return <X className="w-4 h-4 text-muted-foreground/60" aria-label="Not included" />
  if (cell.type === "check")
    return (
      <span className="flex items-center flex-wrap gap-1.5">
        <Check className="w-4 h-4 text-primary" strokeWidth={2.5} />
        {cell.txt && cell.txt !== "Yes" && (
          <span className="text-xs text-muted-foreground">{cell.txt}</span>
        )}
      </span>
    )
  if (cell.type === "val") return <span className="text-sm text-foreground">{cell.val}</span>
  return null
}

// Stagger container for pricing cards
const cardContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const EASE_OUT: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]
const cardItem = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "tween" as const, duration: 0.5, ease: EASE_OUT } },
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)
  const [activeGroup, setActiveGroup] = useState("All")
  const groups = ["All", ...comparisonGroups.map((g) => g.label)]
  const visibleGroups =
    activeGroup === "All" ? comparisonGroups : comparisonGroups.filter((g) => g.label === activeGroup)

  return (
    <div className="pt-24 bg-grid">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center max-w-4xl mx-auto">
        <Reveal>
          <p className="text-sm font-medium text-primary mb-4">Transparent Pricing</p>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-foreground mb-6 text-balance leading-tight">
            Plans for every stage
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            14-day free trial on all plans. No credit card required. Cancel anytime.
          </p>
        </Reveal>
      </section>

      {/* Billing Toggle — accessible radiogroup */}
      <Reveal delay={2} className="flex items-center justify-center gap-4 mb-12 sm:mb-14 px-4">
        <div role="radiogroup" aria-label="Billing period" className="flex items-center gap-3">
          <button
            role="radio"
            aria-checked={!annual}
            className={`text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 ${
              !annual ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setAnnual(false)}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual((v) => !v)}
            className={`w-12 h-7 rounded-full relative transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
              annual ? "bg-primary" : "bg-medium-gray"
            }`}
            aria-label={annual ? "Switch to monthly billing" : "Switch to annual billing"}
            tabIndex={-1}
          >
            <motion.div
              className="w-5 h-5 rounded-full bg-background absolute top-1 shadow-sm"
              animate={{ x: annual ? 20 : 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            />
          </button>
          <button
            role="radio"
            aria-checked={annual}
            className={`text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 ${
              annual ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setAnnual(true)}
          >
            Annual
          </button>
        </div>
        <AnimatePresence>
          {annual && (
            <motion.span
              initial={{ opacity: 0, scale: 0.85, x: -8 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.85, x: -8 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-xs font-medium text-primary-foreground bg-primary px-3 py-1 rounded-full"
            >
              2 months free
            </motion.span>
          )}
        </AnimatePresence>
      </Reveal>

      {/* Pricing Cards — staggered entrance + hover lift */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6"
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.tier}
              variants={cardItem}
              whileHover={
                plan.popular
                  ? { y: -8, boxShadow: "0 28px 56px rgba(11,22,40,0.18)", transition: HOVER_SPRING }
                  : { y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)", transition: HOVER_SPRING }
              }
              className={`rounded-2xl p-7 sm:p-8 lg:p-9 relative h-full flex flex-col border ${
                plan.popular
                  ? "bg-navy text-white border-primary shadow-xl shadow-navy/10 ring-2 ring-primary ring-offset-2"
                  : "bg-background border-border"
              }`}
              style={{
                willChange: "transform",
                ...(plan.popular ? { boxShadow: "0 0 0 2px #10B981, 0 0 24px 4px rgba(16,185,129,0.18)" } : {}),
              }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium bg-primary text-primary-foreground px-4 py-1 rounded-full shadow-md shadow-primary/30">
                  Most Popular
                </div>
              )}
              <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${plan.popular ? "text-emerald-light" : "text-primary"}`}>
                {plan.tier}
              </p>

              {plan.monthly ? (
                <>
                  <div className={`text-4xl font-serif leading-none mb-1 ${plan.popular ? "text-white" : "text-foreground"}`}>
                    <span className={`text-base align-top mr-0.5 ${plan.popular ? "text-white/50" : "text-muted-foreground"}`}>NPR</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={annual ? "annual" : "monthly"}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="inline-block"
                      >
                        {annual ? plan.annualMonthly : plan.monthly}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <span className={`text-sm block mb-1 ${plan.popular ? "text-white/50" : "text-muted-foreground"}`}>
                    {annual ? "per month, billed annually" : "per month"}
                  </span>
                  <span className={`text-xs block h-5 ${plan.popular ? "text-emerald-light" : "text-primary"}`}>
                    {annual ? `Save ${plan.savings} vs monthly` : ""}
                  </span>
                </>
              ) : (
                <>
                  <div className={`text-4xl font-serif leading-none mb-1 ${plan.popular ? "text-white" : "text-foreground"}`}>
                    Custom
                  </div>
                  <span className={`text-sm block mb-1 ${plan.popular ? "text-white/50" : "text-muted-foreground"}`}>
                    NPR 30,000-2,00,000 / month
                  </span>
                  <span className="h-5 block" />
                </>
              )}

              <p className={`text-sm leading-relaxed mt-4 mb-6 pb-6 border-b ${
                plan.popular ? "text-white/60 border-white/10" : "text-muted-foreground border-border"
              }`}>
                {plan.desc}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${
                    plan.popular ? "text-white/70" : "text-muted-foreground"
                  }`}>
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? "text-emerald-light" : "text-primary"}`} strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={plan.tier === "Enterprise" ? "mailto:sales@shamanyantra.com" : "/pricing#trial"}
                  className={`flex items-center justify-center gap-2 py-3 text-sm font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-accent"
                      : "border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Section divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Comparison Table */}
      <section className="py-16 sm:py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-8 sm:mb-10">
              <p className="text-sm font-medium text-primary mb-4">Full Feature Breakdown</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
                Compare every feature side by side
              </h2>
            </div>
          </Reveal>

          {/* Group Filter */}
          <Reveal delay={1}>
            <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
              {groups.map((g) => (
                <motion.button
                  key={g}
                  onClick={() => setActiveGroup(g)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`text-sm px-4 py-2 rounded-lg transition-all duration-200 border ${
                    activeGroup === g
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
                  }`}
                >
                  {g}
                </motion.button>
              ))}
            </div>
          </Reveal>

          {/* Mobile — ngrok-style feature cards (vertical scroll, no horizontal swipe) */}
          <div className="md:hidden space-y-4">
            {/* Plan headers — compact row */}
            <div className="grid grid-cols-4 gap-2 text-center">
              {planHeaders.map((p, i) => (
                <div
                  key={p}
                  className={`rounded-lg py-2 px-2 ${
                    i === 2 ? "bg-primary/10 text-primary font-semibold" : "bg-muted/50 text-muted-foreground"
                  }`}
                >
                  <div className="text-xs font-medium truncate">{p}</div>
                  <div className="text-[10px] opacity-80 mt-0.5">
                    {annual && i < 3 ? planPrices[i].replace("/mo", "/yr") : planPrices[i]}
                  </div>
                </div>
              ))}
            </div>

            {/* Feature cards — one per feature, vertically stacked */}
            {visibleGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 px-1">
                  {group.label}
                </p>
                <div className="space-y-3">
                  {group.rows.map((row) => (
                    <div
                      key={row.feature}
                      className="rounded-xl border border-border bg-background p-4 shadow-sm"
                    >
                      <p className="text-sm font-semibold text-foreground mb-3">{row.feature}</p>
                      <div className="grid grid-cols-4 gap-2">
                        {row.cols.map((cell, ci) => (
                          <div
                            key={ci}
                            className={`flex flex-col items-center justify-center min-h-[36px] rounded-lg py-2 ${
                              ci === 2 ? "bg-primary/5" : "bg-muted/30"
                            }`}
                          >
                            <CellContent cell={cell} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop — full comparison table */}
          <Reveal delay={1} className="hidden md:block">
            <div
              className="relative overflow-x-auto bg-background rounded-2xl border border-border shadow-sm"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {/* Header */}
              <div
                className="grid gap-0 sticky top-[64px] z-10 border-b border-border min-w-[700px] bg-light-gray rounded-t-2xl"
                style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr" }}
              >
                <div className="p-3 sm:p-4 lg:p-5 text-sm text-muted-foreground font-medium" />
                {planHeaders.map((p, i) => (
                  <div key={p} className={`p-3 sm:p-4 lg:p-5 ${i === 2 ? "bg-primary/8 border-x border-primary/15" : ""}`}>
                    <div className={`text-sm font-semibold ${i === 2 ? "text-primary" : "text-foreground"}`}>{p}</div>
                    <div className="text-xs text-primary mt-1">
                      {annual && i < 3 ? planPrices[i].replace("/mo", "/yr") : planPrices[i]}
                    </div>
                  </div>
                ))}
              </div>

              {/* Groups */}
              {visibleGroups.map((group) => (
                <div key={group.label} className="min-w-[700px]">
                  <div
                    className="grid bg-light-gray border-y border-border"
                    style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr" }}
                  >
                    <div className="p-3 sm:p-4 text-xs font-semibold text-foreground uppercase tracking-wider col-span-5">
                      {group.label}
                    </div>
                  </div>
                  {group.rows.map((row, ri) => (
                    <motion.div
                      key={row.feature}
                      className={`grid border-b border-border/50 min-w-[700px] ${ri % 2 === 0 ? "" : "bg-muted/10"}`}
                      style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr" }}
                      whileHover={{ backgroundColor: "rgba(16,185,129,0.03)" }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="p-3 sm:p-4 lg:p-5 text-sm text-foreground flex items-center">
                        {row.feature}
                      </div>
                      {row.cols.map((cell, ci) => (
                        <div
                          key={ci}
                          className={`p-3 sm:p-4 lg:p-5 flex items-center justify-center ${ci === 2 ? "bg-primary/5 border-x border-primary/10" : ""}`}
                        >
                          <CellContent cell={cell} />
                        </div>
                      ))}
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Add-ons */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-10 sm:mb-12">
              <p className="text-sm font-medium text-primary mb-3">Add-On Services</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground text-balance">
                Extend your plan as needed
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {addons.map((a, i) => (
              <Reveal key={a.name} delay={i % 4} direction="scale">
                <motion.div
                  className="bg-background rounded-xl p-6 border border-border h-full"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 12px 28px rgba(0,0,0,0.07)",
                    borderColor: "rgba(16,185,129,0.2)",
                    transition: HOVER_SPRING,
                  }}
                >
                  <h3 className="text-sm font-semibold text-foreground mb-1">{a.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{a.price}</p>
                  <p className="text-xs text-muted-foreground">{a.detail}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2}>
            <div className="mt-10 rounded-xl border border-primary/20 bg-secondary/50 px-5 sm:px-6 py-5 text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">AI add-ons coming Q2 2026 —</span>{" "}
              Model upgrades, custom training, and chatbot credits will be available starting Q2 2026 when AI features launch across all plans.
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* FAQ Section */}
      <section id="trial" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-background">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-primary mb-4">Common Questions</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground text-balance">
                Frequently asked questions
              </h2>
            </div>
          </Reveal>
          <FaqList />
        </div>
      </section>

      <CtaSection />
    </div>
  )
}

const faqs = [
  {
    q: "What happens after the 14-day free trial?",
    a: "Your trial includes full access to all features of your chosen plan. At the end of 14 days, you can choose to subscribe or your account will be paused — your data is never deleted. You can reactivate at any time.",
  },
  {
    q: "Can I change my plan later?",
    a: "Yes, you can upgrade or downgrade your plan at any time from your account settings. Upgrades take effect immediately; downgrades apply at the next billing cycle.",
  },
  {
    q: "Is my business data safe?",
    a: "Absolutely. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We maintain regular backups and our infrastructure is hosted on enterprise-grade servers with 99.9% uptime SLA on Business and Enterprise plans.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept eSewa, IME Pay, and bank transfer (IPS). For Enterprise plans, we also support custom invoicing and purchase orders.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, there are no lock-in contracts on Starter, Pro, or Business plans. You can cancel at any time and your subscription will remain active until the end of the current billing period.",
  },
  {
    q: "Do you offer discounts for NGOs or educational institutions?",
    a: "Yes — we offer special pricing for registered NGOs, schools, and government institutions in Nepal. Contact us at info@shamanyantra.com with your registration details.",
  },
  {
    q: "Is there a setup fee?",
    a: "No setup fees on any plan. Business plans include a complimentary 1-hour onboarding session, and Enterprise plans include a full-day onboarding with your team.",
  },
]

function FaqList() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <Reveal key={i} delay={i % 4}>
          <div className="border border-border rounded-xl overflow-hidden bg-background">
            <button
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="text-sm font-medium text-foreground">{faq.q}</span>
              <motion.span
                animate={{ rotate: open === i ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0 text-muted-foreground"
              >
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
