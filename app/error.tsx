"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function RouteError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("[RouteError]", error)
    }
  }, [error])

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md w-full text-center"
      >
        {/* Icon ring */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-16 h-16 rounded-full border border-primary/30 bg-secondary flex items-center justify-center mx-auto mb-7"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
              stroke="#10B981"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl text-foreground mb-3"
        >
          Something went wrong
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-base leading-relaxed mb-8"
        >
          An error occurred while loading this page. You can try again or return home.
        </motion.p>

        {/* Dev-only error message */}
        {process.env.NODE_ENV === "development" && error?.message && (
          <motion.pre
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-left text-xs bg-destructive/5 border border-destructive/20 rounded-lg p-4 mb-6 overflow-x-auto whitespace-pre-wrap wrap-break-word text-destructive/80 font-mono"
          >
            {error.message}
          </motion.pre>
        )}

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-3 justify-center flex-wrap"
        >
          <motion.button
            onClick={reset}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-accent transition-colors shadow-sm"
          >
            Try again
          </motion.button>

          <motion.div whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
            >
              Go home
            </Link>
          </motion.div>
        </motion.div>

        {error?.digest && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-6 text-xs text-muted-foreground"
          >
            Error ID: <code className="font-mono">{error.digest}</code>
          </motion.p>
        )}
      </motion.div>
    </div>
  )
}
