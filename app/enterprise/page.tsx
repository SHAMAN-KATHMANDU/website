"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { CtaSection } from "@/components/cta-section"
import { GradientOrb, DotGrid, RingDecoration } from "@/components/abstract-elements"
import { ArrowRight, Check, Shield } from "lucide-react"
import { spring } from "@/lib/motion"

// Before & After
const beforeAfter = [
  {
    before: "The Dashain campaign is decided two weeks before. Everyone scrambles. Results are okay but no one really knows why — and the same chaos repeats next year.",
    after: "Campaign planned two months out. Clear budget, assigned roles, and targets set in advance. Results tracked, lessons documented, and the whole thing runs better the second time.",
  },
  {
    before: "Money goes into ads every month. Reach and likes look fine but actual orders haven't changed. No one can say which spend is working.",
    after: "Spend targeted to people who actually buy. Every rupee tracked weekly, adjusted monthly. Marketing stops being a cost and starts being an investment.",
  },
  {
    before: "You know the total revenue. But which product, which branch, or which customer type is actually making money — no one's certain.",
    after: "Clear picture of what's profitable and what's not. Resources shifted toward what works. Dead weight identified and cut.",
  },
  {
    before: "Pricing is set by looking at what competitors charge. Margins are thin and there's always pressure to discount.",
    after: "Pricing based on actual costs and the value delivered. Less discounting. Customers who buy for the right reasons and stay longer.",
  },
  {
    before: "Everyone in the business is busy. But ask what the priority is this month — you'll get three different answers.",
    after: "One shared plan. Every team member knows what they're working on and why it matters. Less noise. More traction.",
  },
]

// Enterprise features
const enterpriseFeatures = [
  {
    title: "Scale — No Limits",
    items: [
      "Unlimited users, products, CRM contacts, and locations",
      "500 GB+ storage with expansion on demand",
      "Unlimited monthly transactions",
      "Unlimited active workflows",
    ],
  },
  {
    title: "Inventory — Full Power",
    items: [
      "Everything in Business plan, plus",
      "Auto-draft purchase orders when stock hits threshold",
      "Advanced low-stock alerts with custom logic",
      "Full transfer history and audit log",
    ],
  },
  {
    title: "CRM — Enterprise-Grade",
    items: [
      "Full CRM with advanced contact segmentation",
      "Deals & pipeline management — full B2B suite",
      "Lead scoring across all contacts",
      "WhatsApp Business API integration",
      "Deals → Sales conversion (no double entry)",
      "Company-level CRM aggregation with total spend view",
    ],
  },
  {
    title: "Analytics — Complete Visibility",
    items: [
      "Real-time dashboards across all locations",
      "Full data history — no cutoff",
      "Unlimited custom report builder",
      "Unlimited scheduled reports",
      "Advanced analytics + full custom reporting",
      "Full API data access + webhooks",
      "Connect to any external BI tool",
    ],
  },
  {
    title: "Support — Dedicated",
    items: [
      "1-hour email response SLA",
      "24/7 phone support",
      "Dedicated account manager",
      "Full-day onboarding & training",
      "Custom integration support",
    ],
  },
  {
    title: "Infrastructure — Enterprise-Grade",
    items: [
      "Dedicated infrastructure (not shared)",
      "99.9% uptime SLA with penalty clauses",
      "Role-based access control",
      "Data encryption at rest and in transit",
      "White-label options available",
      "Custom contract terms",
    ],
  },
]

// Implementation steps
const implementationSteps = [
  {
    step: "1",
    title: "Discovery",
    desc: "We learn your business before we configure anything.",
    detail: "One conversation — no forms, no proposals. You tell us how your business operates: locations, teams, workflows, data structure, and what's currently broken. We map the full picture before a single setting is touched.",
    timeline: "1–2 days",
  },
  {
    step: "2",
    title: "Setup & Onboarding",
    desc: "We configure the platform to fit your business — not the other way around.",
    detail: "Full-day onboarding session with your team. Custom workflows built to match your operations. Data migration from your existing systems. Roles and permissions configured per team structure. Everyone trained before go-live.",
    timeline: "3–7 days depending on complexity",
  },
  {
    step: "3",
    title: "Ongoing Partnership",
    desc: "Your dedicated account manager stays ahead of what you need next.",
    detail: "Monthly check-ins to review performance, flag issues, and plan the next quarter. Direct line to the team — not a support ticket queue. As your business grows, the platform grows with it.",
    timeline: "Ongoing: dedicated account manager, 24/7 support",
  },
]

// Security details
const securityDetails = [
  "99.9% uptime SLA — with accountability built in",
  "Dedicated infrastructure — isolated, not shared",
  "Role-based access control — every team member sees only what they need",
  "Data encryption — at rest and in transit",
  "Full audit trail — every action logged and attributable",
  "Custom contract terms — data ownership, retention, and compliance clauses on your terms",
]

export default function EnterprisePage() {
  return (
    <div className="pt-24 bg-grid">
      {/* Section 1 — Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center max-w-4xl mx-auto overflow-hidden">
        <GradientOrb className="top-[-200px] left-1/2 -translate-x-1/2" color="rgba(16, 185, 129, 0.07)" size={600} />
        <DotGrid className="top-10 right-0 w-[160px] h-[160px] opacity-25" />

        <div className="relative z-10">
          <Reveal>
            <p className="text-xs sm:text-sm font-medium text-primary mb-4">Enterprise Solutions</p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-foreground mb-6 text-balance leading-tight">
              Built for scale. Backed by thirty years on the ground.
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Shaman Yantra Enterprise isn&apos;t just more storage and more users. It&apos;s dedicated infrastructure, a team that knows your business before advising it, and a platform built to grow with you — not against you.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} transition={spring.snappy}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-accent transition-colors"
                >
                  Schedule an Enterprise Demo
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} transition={spring.snappy}>
                <a
                  href="mailto:hello@shamanyantra.com"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
                >
                  Talk to the Team
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </motion.div>
            </div>
          </Reveal>
          <Reveal delay={4}>
            <p className="text-sm text-muted-foreground">No forms. No proposals. One conversation.</p>
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Section 2 — Before & After */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden bg-light-gray">
        <GradientOrb className="top-[-100px] right-0" color="rgba(16, 185, 129, 0.05)" size={400} />

        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal>
            <p className="text-xs sm:text-sm font-medium text-primary mb-4">Before & After</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 text-balance leading-tight">
              Real shifts. Not theory.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mb-12 leading-relaxed">
              These are the actual changes businesses see — in how operations run, how money moves, and how decisions get made. Not promises. Patterns we&apos;ve seen repeat across every engagement.
            </p>
          </Reveal>

          <div className="space-y-6">
            {beforeAfter.map((item, i) => (
              <Reveal key={i} delay={i % 3} direction="up">
                <motion.div
                  whileHover={{ y: -3, transition: spring.snappy }}
                  className="bg-background rounded-xl border border-border overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                    <div className="p-6 sm:p-7">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Before</p>
                      <p className="text-sm text-foreground leading-relaxed">{item.before}</p>
                    </div>
                    <div className="p-6 sm:p-7 bg-primary/5 border-l-0 md:border-l border-primary/10">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">After</p>
                      <p className="text-sm text-foreground leading-relaxed">{item.after}</p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Section 3 — Enterprise Features */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden">
        <RingDecoration className="bottom-0 right-10 opacity-15" size={180} />

        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal>
            <p className="text-xs sm:text-sm font-medium text-primary mb-4">Enterprise Features</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 text-balance leading-tight">
              Everything in Business — and then some.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mb-12 leading-relaxed">
              Enterprise is built for organisations that have outgrown standard plans. Unlimited everything, dedicated infrastructure, and a level of support that treats your business like ours.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseFeatures.map((group, i) => (
              <Reveal key={group.title} delay={i % 4} direction="scale">
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 16px 32px rgba(0,0,0,0.06)", transition: spring.snappy }}
                  className="bg-background rounded-xl border border-border p-6 sm:p-7 h-full"
                >
                  <h3 className="text-base font-semibold text-foreground mb-4">{group.title}</h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2}>
            <div className="mt-10 rounded-xl border border-primary/20 bg-secondary/50 px-6 py-5">
              <p className="text-sm font-semibold text-foreground mb-2">Add-Ons Included</p>
              <p className="text-sm text-muted-foreground">
                Priority onboarding (NPR 5,000 value — free for Enterprise) · WhatsApp Business API setup support · Custom workflow configuration support
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Section 4 — Implementation Journey */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden bg-light-gray">
        <GradientOrb className="top-[100px] left-[-100px]" color="rgba(16, 185, 129, 0.05)" size={400} />

        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <p className="text-xs sm:text-sm font-medium text-primary mb-4">How It Works</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 text-balance leading-tight">
              Three steps. Then we&apos;re with you.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-muted-foreground text-base sm:text-lg mb-12 leading-relaxed">
              We don&apos;t hand you a login and disappear. Enterprise onboarding is run by the same team that built the platform — and stays that way.
            </p>
          </Reveal>

          <div className="space-y-8">
            {implementationSteps.map((step, i) => (
              <Reveal key={step.step} delay={i} direction="up">
                <motion.div
                  whileHover={{ x: 4, transition: spring.snappy }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg font-semibold shrink-0">
                      {step.step}
                    </div>
                    {i < implementationSteps.length - 1 && (
                      <div className="w-px flex-1 min-h-[40px] bg-border mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-2">{step.desc}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">{step.detail}</p>
                    <p className="text-xs text-primary font-medium italic">Timeline: {step.timeline}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Section 5 — Security & Compliance */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden">
        <DotGrid className="top-10 right-10 w-[120px] h-[120px] opacity-20" />

        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <p className="text-xs sm:text-sm font-medium text-primary mb-4">Security & Infrastructure</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 text-balance leading-tight">
              Your data is yours. We protect it like it.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-muted-foreground text-base sm:text-lg mb-10 leading-relaxed">
              Enterprise customers run on dedicated infrastructure — fully isolated from shared resources. Every piece of data is encrypted at rest and in transit.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {securityDetails.map((item, i) => (
              <Reveal key={item} delay={i % 4} direction="up">
                <motion.div
                  whileHover={{ y: -3, transition: spring.snappy }}
                  className="flex items-start gap-3 bg-background rounded-xl border border-border p-5"
                >
                  <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-sm text-foreground leading-relaxed">{item}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Section 6 — Pricing */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden bg-light-gray">
        <GradientOrb className="top-[-100px] right-[-100px]" color="rgba(16, 185, 129, 0.05)" size={400} />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Reveal>
            <p className="text-xs sm:text-sm font-medium text-primary mb-4">Enterprise Pricing</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 text-balance leading-tight">
              Custom pricing. Built around your requirements.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-muted-foreground text-base sm:text-lg mb-10 leading-relaxed">
              Enterprise plans start from NPR 30,000/month and scale based on team size, locations, integrations, and support level. No hidden fees. Every term agreed before you sign.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <Link
              href="mailto:hello@shamanyantra.com?subject=Enterprise Quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-accent transition-colors"
            >
              Get an Enterprise Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
          <Reveal delay={4}>
            <p className="text-sm text-muted-foreground mt-6">Most enterprise setups are live within 7 days of the first conversation.</p>
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Section 7 — CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden bg-navy text-white">
        <GradientOrb className="top-[-100px] right-[-100px]" color="rgba(16, 185, 129, 0.1)" size={500} />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6 text-balance leading-tight">
              One conversation. That&apos;s how it starts.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-white/80 text-base sm:text-lg mb-10 leading-relaxed">
              The businesses that scale without breaking are the ones that get the infrastructure right early. If you&apos;re at that stage — or approaching it — let&apos;s talk.
            </p>
            <p className="text-white/70 text-base mb-10 leading-relaxed">
              We learn your business before we advise it. No forms, no proposals, no commitment until it makes sense for both sides.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <Link
              href="mailto:hello@shamanyantra.com?subject=Free Discovery Call"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-accent transition-colors"
            >
              Schedule a Free Discovery Call
            </Link>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-white/60 text-sm mt-6">60 minutes · No cost · No obligation</p>
            <p className="text-white/50 text-sm mt-2">hello@shamanyantra.com · shamanyantra.com</p>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
