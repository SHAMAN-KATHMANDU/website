"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Reveal } from "@/components/reveal"
import { CtaSection } from "@/components/cta-section"
import Link from "next/link"
import { Check, X, ArrowRight } from "lucide-react"
import { FaqList } from "@/components/faq-list"
import { spring, ease } from "@/lib/motion"

// ── PRICING DATA ──────────────────────────────────────────
const plans = [
  {
    tier: "Starter",
    monthly: "2,999",
    annual: "29,990",
    annualMonthly: "2,499",
    savings: "NPR 5,998",
    period: "Replacing Excel & paper records",
    desc: "For the solo operator or small team getting off spreadsheets and into a real system.",
    features: [
      "1 user · 100 products · 100 CRM contacts",
      "1 location · 5 GB storage",
      "500 transactions/month · 3 active workflows",
      "Inventory management",
      "Basic CRM (contacts + activity log)",
      "eSewa & IPS payments",
      "Team chat (1 channel)",
      "3 basic pre-built reports · 30-day data history",
      "Email support (24hr response)",
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
    period: "Growing teams ready to scale",
    desc: "For businesses with real momentum — more products, more customers, more team.",
    features: [
      "10 users · 1,000 products · 1,000 CRM contacts",
      "5 locations · 25 GB storage",
      "1,000 transactions/month · 10 active workflows",
      "Full inventory management",
      "Full CRM with sales pipeline",
      "eSewa & IPS payments",
      "Team messaging + SMS",
      "All pre-built reports · 5 saved custom reports",
      "Unlimited report exports · Scheduled reports",
      "Basic trends analytics · 12-month data history",
      "Priority support (12hr) · Phone support (business hrs)",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    tier: "Business",
    monthly: "14,999",
    annual: "1,49,990",
    annualMonthly: "12,499",
    savings: "NPR 29,998",
    period: "Multi-location operations",
    desc: "For businesses managing multiple warehouses, storefronts, or teams from one place.",
    features: [
      "Unlimited users, products, contacts, locations",
      "100 GB storage · Unlimited transactions",
      "Full inventory + multi-warehouse transfers",
      "Full CRM + advanced segmentation · Lead scoring",
      "WhatsApp integration · Deals pipeline",
      "Full analytics suite + real-time dashboards",
      "Unlimited custom report builder",
      "Raw API data access",
      "4hr email SLA · Phone support",
      "1-hour dedicated onboarding · Custom integrations",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    tier: "Enterprise",
    monthly: null,
    annual: null,
    annualMonthly: null,
    savings: null,
    period: "Large retailers, chains & multi-entity",
    desc: "Built around your requirements. Priced accordingly.",
    features: [
      "Everything in Business, plus:",
      "500 GB+ storage (expandable)",
      "Auto-draft purchase orders",
      "Full B2B CRM · WhatsApp Business API",
      "Full API + webhooks",
      "Dedicated infrastructure · White-label",
      "99.9% uptime SLA · Custom contract terms",
      "Dedicated account manager",
      "Full-day onboarding · 24/7 phone support",
      "1hr email SLA · Priority onboarding included",
    ],
    cta: "Contact Us for a Quote",
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

const POPULAR_COL = 1 // Pro column

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
      { feature: "Active Workflows", cols: [val("3"), val("10"), val("Unlimited"), val("Unlimited")] },
    ],
  },
  {
    label: "Inventory Features",
    rows: [
      { feature: "Product catalog & SKU", cols: [ck(), ck(), ck(), ck()] },
      { feature: "Variations (size, colour, etc.)", cols: [ck(), ck(), ck(), ck()] },
      { feature: "Real-time stock tracking", cols: [ck(), ck(), ck(), ck()] },
      { feature: "Barcode scanning", cols: [ck(), ck(), ck(), ck()] },
      { feature: "Low-stock alerts", cols: [ck(), ck(), val("Advanced"), val("Advanced")] },
      { feature: "Multi-warehouse transfers", cols: [cx(), ck(), ck(), ck()] },
      { feature: "Purchase orders", cols: [ck(), ck(), ck(), val("Auto-draft")] },
      { feature: "Supplier management", cols: [ck(), ck(), ck(), ck()] },
      { feature: "Bulk import & export", cols: [ck(), ck(), ck(), ck()] },
      { feature: "Discounts & promo codes", cols: [ck(), ck(), ck(), ck()] },
    ],
  },
  {
    label: "CRM Features",
    rows: [
      { feature: "Contact profiles", cols: [val("Basic"), val("Full"), val("Full"), val("Full")] },
      { feature: "Auto-contact from sales", cols: [ck(), ck(), ck(), ck()] },
      { feature: "Sales pipeline & deals", cols: [cx(), ck(), ck(), ck()] },
      { feature: "Activity timeline & log", cols: [ck(), ck(), ck(), ck()] },
      { feature: "Tasks & follow-up reminders", cols: [ck(), ck(), ck(), val("Advanced")] },
      { feature: "Contact segmentation", cols: [cx(), ck(), val("Advanced"), val("Advanced")] },
      { feature: "Lead scoring", cols: [cx(), cx(), ck(), ck()] },
      { feature: "B2B company management", cols: [cx(), ck(), ck(), ck()] },
      { feature: "WhatsApp integration", cols: [cx(), cx(), ck(), val("Business API")] },
      { feature: "Deals → Sales conversion", cols: [cx(), cx(), ck(), ck()] },
      { feature: "Smart notifications", cols: [ck(), ck(), ck(), ck()] },
    ],
  },
  {
    label: "Reporting & Analytics",
    rows: [
      { feature: "Pre-built reports", cols: [val("3 basic"), val("All"), val("All"), val("All")] },
      { feature: "Custom report builder", cols: [cx(), val("5 saved"), val("Unlimited"), val("Unlimited")] },
      { feature: "Report exports", cols: [val("3/month"), val("Unlimited"), val("Unlimited"), val("Unlimited")] },
      { feature: "Scheduled reports", cols: [cx(), ck(), ck(), ck()] },
      { feature: "Data history", cols: [val("30 days"), val("12 months"), val("Full"), val("Full")] },
      { feature: "Trends analytics", cols: [cx(), val("Basic"), val("Full"), val("Full + Custom")] },
      { feature: "Real-time dashboards", cols: [cx(), cx(), ck(), ck()] },
      { feature: "Financial reports (CP/MRP margin)", cols: [cx(), ck(), ck(), ck()] },
      { feature: "API data access", cols: [cx(), cx(), val("Raw data"), val("Full")] },
    ],
  },
  {
    label: "Support",
    rows: [
      { feature: "Email support", cols: [val("24hr"), val("12hr"), val("4hr"), val("1hr")] },
      { feature: "Phone support", cols: [cx(), val("Business hrs"), val("Business hrs"), val("24/7")] },
      { feature: "Dedicated account manager", cols: [cx(), cx(), cx(), ck()] },
      { feature: "Onboarding training", cols: [cx(), cx(), val("1-hour session"), val("Full-day")] },
    ],
  },
]

const addons = [
  { name: "Extra Users", price: "NPR 500 / user / month", detail: "Beyond plan user limit" },
  { name: "Extra Locations", price: "NPR 1,000 / location / month", detail: "Additional warehouses" },
  { name: "SMS Credits", price: "NPR 1,500 per 1,000 SMS", detail: "SMS messaging" },
  { name: "WhatsApp Integration", price: "NPR 2,000 / month", detail: "Starter, Pro & Business only — included in Enterprise" },
  { name: "Priority Onboarding", price: "NPR 5,000 one-time", detail: "Free for Enterprise" },
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
      {/* Header — card */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="rounded-2xl border border-border bg-background p-8 sm:p-12 lg:p-16 shadow-sm text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Reveal>
              <p className="text-xs sm:text-sm font-medium text-primary mb-4">Pricing</p>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-foreground mb-6 text-balance leading-tight">
                Transparent pricing. Plans for every stage.
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                14-day free trial on all plans. No credit card required. Cancel anytime.
              </p>
            </Reveal>
          </motion.div>
        </div>
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
              transition={{ duration: 0.2, ease: ease.ios }}
              className="text-xs font-medium text-primary-foreground bg-primary px-3 py-1 rounded-full"
            >
              2 months free
            </motion.span>
          )}
        </AnimatePresence>
      </Reveal>

      {/* Pricing Cards — staggered entrance + hover lift */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
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
                  ? { y: -8, boxShadow: "0 28px 56px rgba(11,22,40,0.18)", transition: spring.snappy }
                  : { y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)", transition: spring.snappy }
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
                        transition={{ duration: 0.2, ease: ease.ios }}
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
                  href={plan.tier === "Enterprise" ? "mailto:hello@shamanyantra.com?subject=Enterprise Quote" : "/pricing#trial"}
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
        </div>
      </section>

      {/* Section divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Comparison Table — card container */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="rounded-2xl border border-border bg-background shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
          <div className="p-8 sm:p-10 bg-light-gray border-b border-border">
          <Reveal>
            <div>
              <p className="text-xs sm:text-sm font-medium text-primary mb-4">Full Feature Breakdown</p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-foreground text-balance">
                Compare every feature side by side
              </h2>
            </div>
          </Reveal>
          </div>

          {/* Group Filter & Table */}
          <div className="p-6 sm:p-8">
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
                    i === POPULAR_COL ? "bg-primary/10 text-primary font-semibold" : "bg-muted/50 text-muted-foreground"
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
                              ci === POPULAR_COL ? "bg-primary/5" : "bg-muted/30"
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
                  <div key={p} className={`p-3 sm:p-4 lg:p-5 ${i === POPULAR_COL ? "bg-primary/8 border-x border-primary/15" : ""}`}>
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
                          className={`p-3 sm:p-4 lg:p-5 flex items-center justify-center ${ci === POPULAR_COL ? "bg-primary/5 border-x border-primary/10" : ""}`}
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
          </motion.div>
        </div>
      </section>

      {/* Section divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Add-ons */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-10 sm:mb-12">
              <p className="text-xs sm:text-sm font-medium text-primary mb-3">Add-Ons</p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-foreground text-balance">
                Available on all plans.
              </h2>
              <p className="text-muted-foreground text-base mt-2">Extend your plan with only what you need.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {addons.map((a, i) => (
              <Reveal key={a.name} delay={i % 4} direction="scale">
                <motion.div
                  className="bg-background rounded-xl p-6 border border-border h-full"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 12px 28px rgba(0,0,0,0.07)",
                    borderColor: "rgba(16,185,129,0.2)",
                    transition: spring.snappy,
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

      {/* Enterprise CTA Strip */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white mb-6 text-balance">
              Need something bigger?
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-white/80 text-base sm:text-lg mb-10 leading-relaxed">
              Enterprise plans are built around your requirements — team size, locations, integrations, and support level. Starting from NPR 30,000/month.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <a
              href="mailto:hello@shamanyantra.com?subject=Enterprise Inquiry"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-accent transition-colors"
            >
              Talk to the Team
              <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-white/60 text-sm mt-6">hello@shamanyantra.com</p>
          </Reveal>
        </div>
      </section>

      {/* Section divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* FAQ Section */}
      <section id="trial" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-background">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-xs sm:text-sm font-medium text-primary mb-4">Common Questions</p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-foreground text-balance">
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
