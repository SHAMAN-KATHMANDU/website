"use client"

import { motion } from "framer-motion"
import { ease } from "@/lib/motion"

export function LoadingFade({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: ease.ios }}
    >
      {children}
    </motion.div>
  )
}
