/**
 * Apple-style motion tokens for consistent, iOS-like animations.
 * Use springs for UI, tweens with ease.ios for fallbacks.
 */

export const spring = {
  gentle: { type: "spring" as const, stiffness: 170, damping: 26 },
  snappy: { type: "spring" as const, stiffness: 400, damping: 35 },
  bounce: { type: "spring" as const, stiffness: 300, damping: 20 },
  slow: {
    type: "spring" as const,
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  },
} as const

export const ease = {
  ios: [0.2, 0.8, 0.2, 1] as const,
  iosOut: [0.16, 1, 0.3, 1] as const,
  iosIn: [0.4, 0, 1, 1] as const,
  spring: [0.43, 0.13, 0.23, 0.96] as const,
} as const

export const duration = {
  fast: 0.2,
  normal: 0.35,
  slow: 0.5,
  enter: 0.4,
  exit: 0.25,
} as const

export const stagger = {
  fast: { staggerChildren: 0.04, delayChildren: 0.05 },
  normal: { staggerChildren: 0.06, delayChildren: 0.08 },
  slow: { staggerChildren: 0.1, delayChildren: 0.12 },
} as const

/** Reusable variant: fade up with spring */
export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: spring.gentle,
  },
} as const

/** Reusable variant: fade + scale with spring */
export const fadeScale = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: spring.gentle,
  },
} as const
