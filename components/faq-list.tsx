"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Reveal } from "./reveal"
import { spring } from "@/lib/motion"

export const faqs = [
  {
    q: "Can I switch plans later?",
    a: "Yes. Upgrade or downgrade anytime. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "What happens after my 14-day trial?",
    a: "You'll be asked to choose a plan. If you don't, your account pauses — your data is kept safe for 30 days.",
  },
  {
    q: "Is there a setup fee?",
    a: "No setup fee on Starter, Pro, or Business. Enterprise includes full-day onboarding at no extra cost.",
  },
  {
    q: "Can I add users or locations beyond my plan?",
    a: "Yes — via add-ons. NPR 500/user/month and NPR 1,000/location/month on top of your plan.",
  },
  {
    q: "What payment methods do you accept?",
    a: "eSewa, IPS, and bank transfer. Annual billing available with a discount — contact us for details.",
  },
  {
    q: "Is my data safe if I cancel?",
    a: "Yes. You can export all your data before cancellation. We retain it for 30 days after cancellation as a safety window.",
  },
]

export function FaqList() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <Reveal key={i} delay={i % 4}>
          <div className="border border-border rounded-xl overflow-hidden bg-background">
            <motion.button
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              whileTap={{ scale: 0.98 }}
              transition={spring.snappy}
            >
              <span className="text-sm font-medium text-foreground">{faq.q}</span>
              <motion.span
                animate={{ rotate: open === i ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0 text-muted-foreground"
              >
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </motion.span>
            </motion.button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ ...spring.gentle }}
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
