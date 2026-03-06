"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("[GlobalError]", error)
    }
  }, [error])

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Inter, sans-serif",
          background: "#0B1628",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: 480,
            width: "100%",
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          {/* Emerald glow ring */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              border: "2px solid rgba(16, 185, 129, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 28px",
              background: "rgba(16, 185, 129, 0.08)",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                stroke="#10B981"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              marginBottom: 12,
              color: "#ffffff",
            }}
          >
            Something went wrong
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "0.9375rem",
              color: "#94A3B8",
              lineHeight: 1.6,
              marginBottom: 32,
            }}
          >
            An unexpected error occurred. You can try reloading the page or return to the home screen.
          </motion.p>

          {/* Dev-only error message */}
          {process.env.NODE_ENV === "development" && error?.message && (
            <motion.pre
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                background: "rgba(239, 68, 68, 0.08)",
                border: "1px solid rgba(239, 68, 68, 0.25)",
                borderRadius: 8,
                padding: "12px 16px",
                fontSize: "0.75rem",
                color: "#FCA5A5",
                textAlign: "left",
                overflowX: "auto",
                marginBottom: 28,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {error.message}
            </motion.pre>
          )}

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
          >
            <motion.button
              onClick={reset}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 24px",
                borderRadius: 8,
                background: "#10B981",
                color: "#ffffff",
                fontSize: "0.9375rem",
                fontWeight: 500,
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Try again
            </motion.button>

            <motion.div whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 24px",
                  borderRadius: 8,
                  background: "transparent",
                  color: "#94A3B8",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  border: "1px solid rgba(226, 232, 240, 0.15)",
                  textDecoration: "none",
                }}
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
              style={{ marginTop: 24, fontSize: "0.75rem", color: "#475569" }}
            >
              Error ID: <code style={{ fontFamily: "monospace" }}>{error.digest}</code>
            </motion.p>
          )}
        </motion.div>
      </body>
    </html>
  )
}
