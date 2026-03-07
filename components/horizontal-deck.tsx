"use client"

import {
  useRef,
  useState,
  useEffect,
  useCallback,
  Children,
  isValidElement,
  cloneElement,
  useLayoutEffect,
} from "react"
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useHorizontalScroll } from "@/hooks/use-horizontal-scroll"

interface HorizontalDeckProps {
  children: React.ReactNode
}

// Softer spring: lower stiffness = smoother, less mechanical progress bar
const SPRING_CONFIG = { stiffness: 120, damping: 20, restDelta: 0.001 }

// Hover spring for chevrons: snappy but not bouncy
const HOVER_SPRING = { type: "spring" as const, stiffness: 300, damping: 28 }

export function HorizontalDeck({ children }: HorizontalDeckProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [toastLabel, setToastLabel] = useState<string | null>(null)
  const [showSwipeHint, setShowSwipeHint] = useState(false)
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const reduceMotion = useReducedMotion() ?? false

  // Lock html and body scroll before paint to prevent flash/glitch
  useLayoutEffect(() => {
    const html = document.documentElement
    const body = document.body
    html.style.overflow = "hidden"
    body.style.overflow = "hidden"
    return () => {
      html.style.overflow = ""
      body.style.overflow = ""
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    const isMobile = window.matchMedia("(max-width: 767px)").matches
    if (isMobile) {
      setShowSwipeHint(true)
      const t = setTimeout(() => setShowSwipeHint(false), 5000)
      return () => clearTimeout(t)
    } else {
      const seen = localStorage.getItem("sy-swipe-hint-seen")
      if (!seen) {
        setShowSwipeHint(true)
        const t = setTimeout(() => {
          setShowSwipeHint(false)
          localStorage.setItem("sy-swipe-hint-seen", "1")
        }, 3500)
        return () => clearTimeout(t)
      }
    }
  }, [])

  const cards = Children.toArray(children).filter(isValidElement)
  const cardCount = cards.length

  // Progress bar: scaleX 0→1 across all cards, spring-smoothed
  const progressMV = useMotionValue(0)
  const progressSpring = useSpring(progressMV, SPRING_CONFIG)

  useEffect(() => {
    progressMV.set(cardCount > 1 ? activeIndex / (cardCount - 1) : 1)
  }, [activeIndex, cardCount, progressMV])

  const scrollToCard = useCallback(
    (index: number) => {
      const container = containerRef.current
      if (!container) return
      const clamped = Math.max(0, Math.min(index, cardCount - 1))
      container.scrollTo({
        left: clamped * container.clientWidth,
        behavior: reduceMotion ? "instant" : "smooth",
      })
    },
    [cardCount, reduceMotion]
  )

  // IntersectionObserver — detects which card is snapped, throttled via rAF
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    let rafPending: number | null = null
    let pendingIndex: number | null = null
    const observers: IntersectionObserver[] = []

    const flush = () => {
      rafPending = null
      if (pendingIndex !== null) {
        setActiveIndex(pendingIndex)
        pendingIndex = null
      }
    }

    cardRefs.current.forEach((card, i) => {
      if (!card) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.6) return
          pendingIndex = i
          if (rafPending === null) rafPending = requestAnimationFrame(flush)
        },
        { root: container, threshold: 0.6 }
      )
      obs.observe(card)
      observers.push(obs)
    })
    return () => {
      observers.forEach((o) => o.disconnect())
      if (rafPending !== null) cancelAnimationFrame(rafPending)
    }
  }, [cardCount])

  // Toast label on card change (skip first mount)
  const isFirstMount = useRef(true)
  useEffect(() => {
    if (isFirstMount.current) { isFirstMount.current = false; return }
    const label = getCardLabel(cards[activeIndex])
    if (!label) return
    setToastLabel(label)
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    toastTimerRef.current = setTimeout(() => setToastLabel(null), 1500)
    return () => { if (toastTimerRef.current) clearTimeout(toastTimerRef.current) }
  }, [activeIndex]) // eslint-disable-line react-hooks/exhaustive-deps

  // Deep-link: scroll to card matching hash on mount
  useLayoutEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (!hash) return
    const idx = cardRefs.current.findIndex((el) => el?.id === hash)
    if (idx > 0) requestAnimationFrame(() => scrollToCard(idx))
  }, [scrollToCard])

  // popstate: sync card to hash on browser back/forward
  useEffect(() => {
    const onPopState = () => {
      const hash = window.location.hash.replace("#", "")
      if (!hash) return
      const idx = cardRefs.current.findIndex((el) => el?.id === hash)
      if (idx >= 0) scrollToCard(idx)
    }
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [scrollToCard])

  useHorizontalScroll({ containerRef, cardCount, activeIndex, scrollToCard, prefersReducedMotion: reduceMotion })

  // Inject isActive + ref into each HorizontalCard child
  const enrichedCards = cards.map((child, i) => {
    if (!isValidElement(child)) return child
    return cloneElement(child as React.ReactElement<Record<string, unknown>>, {
      isActive: i === activeIndex,
      ref: (el: HTMLElement | null) => { cardRefs.current[i] = el },
    })
  })

  return (
    <div className="horizontal-deck-wrapper">
      {/* Progress bar — spring-smoothed */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "var(--primary)",
          transformOrigin: "left center",
          scaleX: progressSpring,
          zIndex: 60,
        }}
      />

      {/* Scrollable deck container */}
      <div ref={containerRef} className="horizontal-deck" aria-label="Page sections">
        {enrichedCards}
      </div>

      {/* Left chevron — desktop only, smoother spring hover */}
      <AnimatePresence>
        {activeIndex > 0 && (
          <motion.button
            key="chevron-left"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ scale: 1.12, x: -3, transition: HOVER_SPRING }}
            whileTap={{ scale: 0.92 }}
            onClick={() => scrollToCard(activeIndex - 1)}
            aria-label="Previous section"
            className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-50 w-10 h-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-md text-foreground hover:bg-background transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Right chevron — desktop only */}
      <AnimatePresence>
        {activeIndex < cardCount - 1 && (
          <motion.button
            key="chevron-right"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ scale: 1.12, x: 3, transition: HOVER_SPRING }}
            whileTap={{ scale: 0.92 }}
            onClick={() => scrollToCard(activeIndex + 1)}
            aria-label="Next section"
            className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-50 w-10 h-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-md text-foreground hover:bg-background transition-colors"
            style={{ willChange: "transform" }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Nav dots — simple CSS transitions, 44px touch target on mobile */}
      <div
        role="tablist"
        aria-label="Navigate sections"
        className="absolute left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 sm:gap-2"
        style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))" }}
      >
        {cards.map((child, i) => {
          const label = getCardLabel(child)
          const isActive = i === activeIndex
          return (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={getCardId(child)}
              aria-label={`Go to section: ${label}`}
              title={label}
              onClick={() => scrollToCard(i)}
              className="relative flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-full bg-transparent border-none p-0 cursor-pointer"
            >
              <span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ease-out"
                style={{
                  width: isActive ? 28 : 10,
                  height: 10,
                  background: isActive ? "var(--foreground)" : "rgba(11, 22, 40, 0.28)",
                }}
              />
            </button>
          )
        })}
      </div>

      {/* Mobile swipe hint — shown once on first visit, no heavy animation */}
      {showSwipeHint && !reduceMotion && (
        <div
          className="absolute left-1/2 -translate-x-1/2 z-50 pointer-events-none md:hidden animate-in fade-in duration-300"
          style={{ bottom: "calc(5rem + env(safe-area-inset-bottom, 0px))" }}
          aria-hidden="true"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/85 text-background backdrop-blur-sm text-xs font-medium">
            ← Swipe to explore →
          </div>
        </div>
      )}

      {/* Card label toast — simple opacity */}
      {toastLabel && (
        <div
          key={toastLabel}
          aria-live="polite"
          aria-atomic="true"
          className="absolute left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-in fade-in duration-200"
          style={{ bottom: "calc(4rem + env(safe-area-inset-bottom, 0px))" }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-foreground/90 text-background backdrop-blur-sm">
            {toastLabel}
          </span>
        </div>
      )}
    </div>
  )
}

function getCardLabel(child: React.ReactNode): string {
  if (isValidElement(child) && child.props && typeof child.props === "object") {
    const props = child.props as Record<string, unknown>
    if (typeof props.label === "string") return props.label
  }
  return ""
}

function getCardId(child: React.ReactNode): string {
  if (isValidElement(child) && child.props && typeof child.props === "object") {
    const props = child.props as Record<string, unknown>
    if (typeof props.id === "string") return props.id
  }
  return ""
}
