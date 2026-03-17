"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { CtaSection } from "@/components/cta-section"
import { Roadmap } from "@/components/roadmap"
import { GradientOrb, DotGrid, RingDecoration, CrossGrid } from "@/components/abstract-elements"
import { ArrowRight, Package, Users, BarChart3, Globe, Shield, Smartphone, Database, Workflow } from "lucide-react"
import { spring } from "@/lib/motion"

// Module 01 — Inventory
const inventoryCapabilities = [
  { title: "Product Catalog & Variations", desc: "Build your full product catalog with SKUs, categories, sub-categories, and variation combinations — size, color, material, or any attribute you define. Every variation tracked independently." },
  { title: "Real-Time Stock Tracking", desc: "See live stock levels per product, per variation, per location. No more calling your warehouse to find out what's in stock." },
  { title: "Multi-Warehouse & Showroom Management", desc: "Add unlimited locations — warehouses, showrooms, storefronts. Each location tracks stock independently. Transfer stock between them in one click, with full movement history logged." },
  { title: "Barcode Scanning", desc: "Scan barcodes directly from your phone or a scanner. Add products, process transfers, and update stock without typing a thing." },
  { title: "Low-Stock Alerts", desc: "Set your own thresholds. Get notified before you run out — not after. Never miss a reorder window again." },
  { title: "Purchase Orders & Supplier Management", desc: "Track your suppliers, manage ordering, and generate purchase order drafts automatically when stock hits low levels." },
  { title: "Discounts & Promo Codes", desc: "Set flat or percentage discounts per product or per order. Create campaign promo codes with validity dates, usage limits, and product scope — all managed in one place." },
  { title: "Bulk Import & Export", desc: "Upload your entire product catalog via CSV. Export your inventory data anytime in your preferred format." },
]

// Module 02 — CRM
const crmCapabilities = [
  { title: "Complete Contact Profiles", desc: "Every customer gets a full profile — contact details, purchase history, assigned tasks, activity log, deals, notes, and file attachments. Contacts are created automatically on every completed sale." },
  { title: "Visual Sales Pipeline", desc: "See exactly where every deal stands. Move deals through custom pipeline stages — from first contact to closed — with deal value, expected close date, and assigned team member tracked at every step." },
  { title: "Tasks & Follow-Up Reminders", desc: "Create tasks linked to specific contacts. Set due dates, priorities, and assignments. Get notified when a follow-up is due so no lead goes cold." },
  { title: "Activity Log", desc: "Log every interaction — phone calls, meetings, messages — directly on a contact's profile. Your team always knows the full history before they pick up the phone." },
  { title: "B2B Company Management", desc: "Assign contacts to parent companies for B2B accounts. View all contacts and their combined purchase history under one company profile. See total spend at the company level instantly." },
  { title: "Contact Segmentation & Tagging", desc: "Tag contacts by type, source, journey stage, or any category you define. Filter and segment your customer list to target the right people at the right time." },
  { title: "Smart Notifications", desc: "Task reminders, deal stage changes, new contact assignments — your team stays on top of everything without having to check manually." },
  { title: "Deals → Sales Conversion", desc: "When a deal closes, convert it directly into a sale record. No double entry. Pipeline and sales stay in sync. (Enterprise)" },
]

// Module 03 — Analytics
const analyticsCapabilities = [
  { title: "Live Business Dashboard", desc: "Open the app and see today's sales total, transaction count, revenue vs. target, active tasks, low-stock alerts, and recent activity — all in one glance. Staff see their own data; admins see everything." },
  { title: "Sales & Revenue Reports", desc: "Track total revenue, daily and monthly trends, payment type breakdown (cash, QR, bank transfer, credit), and performance per showroom and per staff member." },
  { title: "Inventory & Operations Reports", desc: "View stock levels per product and per location, transfer history, low-stock and overstock alerts, and vendor supply logs. Know what's moving, what's sitting, and what needs attention." },
  { title: "Customer & Promotions Reports", desc: "Understand your customers — purchase frequency, lifetime value, and which channels are bringing them in. Track promo code usage, redemption rates, and the actual revenue impact of every discount campaign." },
  { title: "Financial Reports", desc: "See your cost price vs. MRP margin per product and category. Understand gross profit by product line. Track the real impact of discounts on net revenue. Monitor outstanding credit sales at a glance." },
  { title: "Trends & Demand Forecasting", desc: "Analyse sales velocity against stock depletion. Identify seasonal patterns. Understand which products peak when — so you're stocked before demand arrives, not after." },
  { title: "CRM Pipeline Reports", desc: "Track deal conversion rates, task completion rates, overdue follow-ups, and which contact sources are actually converting into customers." },
  { title: "Custom Report Builder", desc: "Build and save your own reports. Schedule automatic delivery to your inbox. Export in CSV or PDF anytime. (Pro & above)" },
  { title: "Full API Data Access", desc: "Connect your data to any external tool. Raw data access for Business plans; full API for Enterprise. (Business & Enterprise)" },
]

// Additional capabilities
const additionalCapabilities = [
  { icon: Globe, title: "Multi-Location Management", desc: "Manage multiple warehouses, showrooms, and teams from one centralized dashboard. Add locations as you grow." },
  { icon: Shield, title: "Role-Based Access", desc: "Admin, staff, and custom roles — each team member sees exactly what they need to, nothing more. Full audit trail." },
  { icon: Smartphone, title: "Mobile-First Design", desc: "Built to work on your phone. Manage inventory, check sales, and follow up on customers from anywhere." },
  { icon: Database, title: "Bulk Import & Export", desc: "Upload products, contacts, and sales records in bulk. Export all your data anytime. CSV and PDF support." },
  { icon: Workflow, title: "Custom Workflows", desc: "Build automated workflows for inventory alerts, CRM follow-ups, and team notifications with a visual builder. Starter: 3 active · Pro: 10 active · Business & Enterprise: Unlimited." },
  { icon: Shield, title: "Enterprise Security", desc: "99.9% uptime SLA, dedicated infrastructure, data encryption, and role-based access control. Your data is safe." },
]

function ModuleSection({
  id,
  label,
  title,
  subheading,
  description,
  tags,
  capabilities,
  icon: Icon,
}: {
  id: string
  label: string
  title: string
  subheading: string
  description: string
  tags: string[]
  capabilities: { title: string; desc: string }[]
  icon: React.ElementType
}) {
  return (
    <section id={id} className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden scroll-mt-24">
      <GradientOrb className="top-[-100px] right-[-100px]" color="rgba(16, 185, 129, 0.05)" size={400} />

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal>
          <p className="text-xs sm:text-sm font-medium text-primary mb-4">{label}</p>
        </Reveal>
        <Reveal delay={1}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
              {title}
            </h2>
          </div>
        </Reveal>
        <Reveal delay={2}>
          <p className="text-muted-foreground text-base sm:text-lg mb-4 font-medium">{subheading}</p>
          <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 mb-10">
            {tags.map((t) => (
              <span key={t} className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i % 4} direction="up">
              <motion.div
                whileHover={{ y: -3, transition: spring.snappy }}
                className="bg-background rounded-xl border border-border p-5 sm:p-6"
              >
                <h3 className="text-sm font-semibold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ProductsPage() {
  return (
    <div className="pt-24 bg-grid">
      {/* Section 1 — Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center max-w-4xl mx-auto overflow-hidden">
        <GradientOrb className="top-[-200px] left-1/2 -translate-x-1/2" color="rgba(16, 185, 129, 0.07)" size={600} />
        <DotGrid className="top-10 right-0 w-[160px] h-[160px] opacity-25" />

        <div className="relative z-10">
          <Reveal>
            <p className="text-xs sm:text-sm font-medium text-primary mb-4">Inventory · CRM · Analytics</p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-foreground mb-6 text-balance leading-tight">
              One Platform. Total Control.
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Shaman Yantra brings your inventory, customer relationships, and business analytics into a single platform — built from the ground up for how Nepali businesses actually operate.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} transition={spring.snappy}>
                <Link
                  href="/pricing"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-accent transition-colors"
                >
                  Start Free 14-Day Trial
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} transition={spring.snappy}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
                >
                  Schedule a Demo
                </Link>
              </motion.div>
            </div>
          </Reveal>
          <Reveal delay={4}>
            <p className="text-sm text-muted-foreground mb-8">No credit card required · Cancel anytime</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
              <span>3-in-1 Unified Platform</span>
              <span aria-hidden>·</span>
              <span>5 min Setup</span>
              <span aria-hidden>·</span>
              <span>500+ Businesses</span>
              <span aria-hidden>·</span>
              <span>14-Day Free Trial</span>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Section 2 — Inventory */}
      <ModuleSection
        id="inventory"
        label="01 / Inventory"
        title="Know exactly what you have. Always."
        subheading="Real-time stock tracking across every product, variation, and location — with the tools to reorder before you run out."
        description="Managing stock shouldn't mean spreadsheets, phone calls, and guesswork. Shaman Yantra gives you a live view of everything in your inventory — across all your warehouses and showrooms — with the tools to act on it instantly."
        tags={["Multi-Warehouse", "Barcode", "Auto-Reorder", "Bulk Import"]}
        capabilities={inventoryCapabilities}
        icon={Package}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Section 3 — CRM */}
      <ModuleSection
        id="crm"
        label="02 / CRM"
        title="Every customer. Every conversation. One place."
        subheading="Track relationships, manage your sales pipeline, and follow up on every lead — without letting anything fall through the cracks."
        description="Most businesses lose customers not because they don't care — but because they can't keep track. Shaman Yantra builds a complete picture of every customer relationship, from the first sale to the latest conversation, so nothing gets missed."
        tags={["Sales Pipeline", "Follow-Ups", "Activity Log", "B2B Companies"]}
        capabilities={crmCapabilities}
        icon={Users}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Section 4 — Analytics */}
      <ModuleSection
        id="analytics"
        label="03 / Analytics"
        title="Stop guessing. Start knowing."
        subheading="A live view of your entire business — sales, stock, customers, and team — with reports you can actually use to make decisions."
        description="Numbers without context are just noise. Shaman Yantra's analytics layer connects your inventory, CRM, and sales data into one clear picture — so you always know what's working, what's leaking, and what to do next."
        tags={["Real-Time Dashboard", "Custom Reports", "Export", "Trends"]}
        capabilities={analyticsCapabilities}
        icon={BarChart3}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Section 5 — Additional Capabilities */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden bg-light-gray">
        <CrossGrid className="top-0 right-20 opacity-15" />

        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal>
            <p className="text-xs sm:text-sm font-medium text-primary mb-4">And More</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6 text-balance">
              Every tool your team needs.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {additionalCapabilities.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.title} delay={i % 4} direction="scale">
                  <motion.div
                    whileHover={{ y: -4, boxShadow: "0 12px 28px rgba(0,0,0,0.07)", transition: spring.snappy }}
                    className="bg-background rounded-xl border border-border p-6 sm:p-7 h-full"
                  >
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </motion.div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 6 — Roadmap Teaser */}
      <Roadmap />
      <div className="text-center py-4">
        <Link
          href="/about#vision"
          className="text-sm font-medium text-primary hover:text-accent transition-colors"
        >
          See full roadmap →
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Section 7 — Pricing CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden">
        <RingDecoration className="bottom-0 right-10 opacity-15" size={180} />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Reveal>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6 text-balance">
              Transparent pricing. No surprises.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-muted-foreground text-base sm:text-lg mb-10 leading-relaxed">
              Plans for every stage — from solo shops replacing Excel to multi-location chains needing enterprise infrastructure. 14-day free trial on all plans. No credit card required.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-accent transition-colors"
            >
              See All Plans & Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
