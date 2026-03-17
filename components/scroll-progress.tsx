"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { usePathname } from "next/navigation"
import { useReducedMotion } from "framer-motion"

export function ScrollProgress() {
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  })

  if (pathname === "/") return null
  if (reduceMotion) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-primary origin-left z-[100]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
