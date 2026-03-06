"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"

// Framer Motion useInView replaces raw IntersectionObserver for consistent
// GPU-composited animations that stay in sync with the rest of the page.
export function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: ReactNode
  delay?: number
  className?: string
  direction?: "up" | "left" | "right" | "fade" | "scale"
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" })
  const reduceMotion = useReducedMotion()

  const hidden = reduceMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        y: direction === "up" ? 24 : 0,
        x: direction === "left" ? -24 : direction === "right" ? 24 : 0,
        scale: direction === "scale" ? 0.96 : 1,
      }

  const visible = { opacity: 1, y: 0, x: 0, scale: 1 }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ hidden, visible }}
      transition={{
        duration: reduceMotion ? 0.1 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: delay * 0.1,
      }}
      className={className}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  )
}
