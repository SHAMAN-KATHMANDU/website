"use client"

import { useEffect, useCallback, RefObject } from "react"

interface UseHorizontalScrollOptions {
  containerRef: RefObject<HTMLElement | null>
  cardCount: number
  activeIndex: number
  scrollToCard: (index: number) => void
  prefersReducedMotion: boolean
}

/**
 * Translates vertical mouse-wheel events into horizontal card navigation and
 * wires up keyboard shortcuts (ArrowLeft/Right, PageUp/Down, Home/End).
 *
 * Guard: if the event target is inside a vertically scrollable child that still
 * has scroll room, we let the native vertical scroll proceed instead.
 */
export function useHorizontalScroll({
  containerRef,
  cardCount,
  activeIndex,
  scrollToCard,
  prefersReducedMotion,
}: UseHorizontalScrollOptions) {
  // Check whether an element (or any of its ancestors up to the container) is
  // itself vertically scrollable and still has scroll room in the wheel direction.
  const isInsideVerticalScroller = useCallback(
    (target: EventTarget | null, deltaY: number): boolean => {
      if (!(target instanceof Element)) return false
      const container = containerRef.current
      let el: Element | null = target

      while (el && el !== container) {
        const style = window.getComputedStyle(el)
        const overflowY = style.overflowY
        const canScrollY =
          overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay"

        if (canScrollY && el.scrollHeight > el.clientHeight) {
          // Has scroll room in the direction of the wheel delta
          if (deltaY > 0 && el.scrollTop < el.scrollHeight - el.clientHeight - 1) {
            return true
          }
          if (deltaY < 0 && el.scrollTop > 0) {
            return true
          }
        }
        el = el.parentElement
      }
      return false
    },
    [containerRef]
  )

  // Wheel → horizontal card navigation
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let lastWheelTime = 0
    const THROTTLE_MS = 800 // prevent rapid multi-card skips

    const onWheel = (e: WheelEvent) => {
      // Only intercept vertical-dominant wheel events
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return

      // Let native vertical scroll handle events inside scrollable children
      if (isInsideVerticalScroller(e.target, e.deltaY)) return

      e.preventDefault()

      const now = Date.now()
      if (now - lastWheelTime < THROTTLE_MS) return
      lastWheelTime = now

      if (e.deltaY > 0 && activeIndex < cardCount - 1) {
        scrollToCard(activeIndex + 1)
      } else if (e.deltaY < 0 && activeIndex > 0) {
        scrollToCard(activeIndex - 1)
      }
    }

    // passive:false required to call preventDefault()
    container.addEventListener("wheel", onWheel, { passive: false })
    return () => container.removeEventListener("wheel", onWheel)
  }, [containerRef, activeIndex, cardCount, scrollToCard, isInsideVerticalScroller])

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      // Only handle when focus is inside the deck container (or body/document)
      const container = containerRef.current
      if (!container) return

      // Skip if focus is inside an input, textarea, select, or contenteditable
      const active = document.activeElement
      if (
        active instanceof HTMLInputElement ||
        active instanceof HTMLTextAreaElement ||
        active instanceof HTMLSelectElement ||
        (active instanceof HTMLElement && active.isContentEditable)
      ) {
        return
      }

      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
          if (activeIndex < cardCount - 1) {
            e.preventDefault()
            scrollToCard(activeIndex + 1)
          }
          break
        case "ArrowLeft":
        case "PageUp":
          if (activeIndex > 0) {
            e.preventDefault()
            scrollToCard(activeIndex - 1)
          }
          break
        case "Home":
          e.preventDefault()
          scrollToCard(0)
          break
        case "End":
          e.preventDefault()
          scrollToCard(cardCount - 1)
          break
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [containerRef, activeIndex, cardCount, scrollToCard])
}
