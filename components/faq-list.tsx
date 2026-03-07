"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Reveal } from "./reveal"

export const faqs = [
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

export function FaqList() {
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
