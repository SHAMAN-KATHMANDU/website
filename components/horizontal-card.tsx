"use client"

import { useReducedMotion, motion, useInView } from "framer-motion"
import { forwardRef, useRef } from "react"

interface HorizontalCardProps {
  id: string
  label: string
  isActive: boolean
  children: React.ReactNode
}

// Each card is a full-viewport section. The card SHELL never animates — only
// the inner content animates IN once when the card first enters the viewport.
// This eliminates jitter from Framer Motion fighting CSS scroll-snap.
export const HorizontalCard = forwardRef<HTMLElement, HorizontalCardProps>(
  function HorizontalCard({ id, label, children }, ref) {
    const reduceMotion = useReducedMotion()
    const innerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(innerRef, { once: true, margin: "0px 0px -10% 0px" })

    return (
      <section
        ref={ref}
        id={id}
        role="region"
        aria-label={label}
        className="horizontal-card"
        style={{ overscrollBehavior: "contain auto" }}
      >
        {/* Animate in once when card scrolls into view — no animate-out, no key re-mount */}
        <motion.div
          ref={innerRef}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: reduceMotion ? 0.1 : 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{ height: "100%", width: "100%", willChange: "opacity, transform" }}
        >
          {children}
        </motion.div>
      </section>
    )
  }
)
