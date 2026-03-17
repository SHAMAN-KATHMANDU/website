"use client"

import { useState } from "react"

const PARTICLES = [
  { left: 5, delay: 0.0, dur: 10, op: 0.18, size: 2.5 },
  { left: 12, delay: 3.7, dur: 8.6, op: 0.25, size: 2.7 },
  { left: 20, delay: 5.6, dur: 6.6, op: 0.39, size: 4.8 },
  { left: 27, delay: 2.9, dur: 7.7, op: 0.35, size: 3.8 },
  { left: 33, delay: 0.7, dur: 11.7, op: 0.36, size: 5.2 },
  { left: 40, delay: 3.5, dur: 6.2, op: 0.30, size: 3.4 },
  { left: 47, delay: 6.6, dur: 8.5, op: 0.38, size: 4.2 },
  { left: 54, delay: 2.4, dur: 12.6, op: 0.16, size: 5.9 },
  { left: 60, delay: 7.4, dur: 8.8, op: 0.31, size: 4.9 },
  { left: 67, delay: 7.2, dur: 10.8, op: 0.29, size: 4.5 },
  { left: 73, delay: 5.0, dur: 13.0, op: 0.18, size: 5.0 },
  { left: 80, delay: 1.4, dur: 12.6, op: 0.21, size: 3.7 },
  { left: 85, delay: 0.8, dur: 7.8, op: 0.31, size: 5.1 },
  { left: 90, delay: 5.8, dur: 13.4, op: 0.29, size: 4.6 },
  { left: 95, delay: 6.0, dur: 12.9, op: 0.38, size: 2.3 },
  { left: 15, delay: 5.4, dur: 12.2, op: 0.39, size: 4.3 },
  { left: 35, delay: 6.4, dur: 8.3, op: 0.17, size: 3.9 },
  { left: 50, delay: 0.7, dur: 6.3, op: 0.34, size: 5.3 },
  { left: 65, delay: 0.8, dur: 8.6, op: 0.32, size: 3.0 },
  { left: 78, delay: 3.3, dur: 10.6, op: 0.16, size: 4.3 },
] as const

export function ComingSoon() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    setStatus("sending")

    try {
      const res = await fetch("https://formsubmit.co/ajax/3c732d6a30b61588b9a6548b3886910e", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          _subject: `Waitlist signup: ${email}`,
          message: `${email} wants to join the Shaman Yantra waitlist.`,
        }),
      })

      if (res.ok) {
        setStatus("sent")
        setEmail("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="coming-soon-page" suppressHydrationWarning>
      {/* Animated background particles */}
      <div className="cs-bg-particles" aria-hidden>
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="cs-particle"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
              opacity: p.op,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="cs-orb cs-orb-1" aria-hidden />
      <div className="cs-orb cs-orb-2" aria-hidden />
      <div className="cs-orb cs-orb-3" aria-hidden />

      <div className="cs-content">
        {/* Logo */}
        <div className="cs-logo-row">
          <span className="cs-logo-text">Shaman Yantra</span>
        </div>

        {/* Badge */}
        <div className="cs-badge">
          <span className="cs-badge-dot" />
          Coming Soon
        </div>

        {/* Truck */}
        <div className="cs-truck-container">
          <div className="cs-truck-wrapper">
            <div className="truck-loader" style={{ width: "fit-content", height: "fit-content", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className="truck-loader-wrapper">
                <div className="truck-loader-body">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 198 93" className="truck-loader-svg">
                    <path strokeWidth="3" stroke="#34D399" fill="#10B981" d="M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z" />
                    <path strokeWidth="3" stroke="#34D399" fill="#0D9668" d="M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z" />
                    <path strokeWidth="2" stroke="#94A3B8" fill="#94A3B8" d="M150 65C150 65.39 149.763 65.8656 149.127 66.2893C148.499 66.7083 147.573 67 146.5 67C145.427 67 144.501 66.7083 143.873 66.2893C143.237 65.8656 143 65.39 143 65C143 64.61 143.237 64.1344 143.873 63.7107C144.501 63.2917 145.427 63 146.5 63C147.573 63 148.499 63.2917 149.127 63.7107C149.763 64.1344 150 64.61 150 65Z" />
                    <rect strokeWidth="2" stroke="#94A3B8" fill="#FBBF24" rx="1" height="7" width="5" y="63" x="187" />
                    <rect strokeWidth="2" stroke="#94A3B8" fill="#94A3B8" rx="1" height="11" width="4" y="81" x="193" />
                    <rect strokeWidth="3" stroke="#64748B" fill="#E2E8F0" rx="2.5" height="90" width="121" y="1.5" x="6.5" />
                    <rect strokeWidth="2" stroke="#64748B" fill="#CBD5E1" rx="2" height="4" width="6" y="84" x="1" />
                  </svg>
                </div>
                <div className="truck-loader-tires">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" className="truck-loader-tire">
                    <circle strokeWidth="3" stroke="#64748B" fill="#475569" r="13.5" cy="15" cx="15" />
                    <circle fill="#CBD5E1" r="7" cy="15" cx="15" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" className="truck-loader-tire">
                    <circle strokeWidth="3" stroke="#64748B" fill="#475569" r="13.5" cy="15" cx="15" />
                    <circle fill="#CBD5E1" r="7" cy="15" cx="15" />
                  </svg>
                </div>
                <div className="cs-road" />
                <svg xmlSpace="preserve" viewBox="0 0 453.459 453.459" xmlns="http://www.w3.org/2000/svg" className="truck-loader-lamppost" fill="#64748B" aria-hidden>
                  <path d="M252.882,0c-37.781,0-68.686,29.953-70.245,67.358h-6.917v8.954c-26.109,2.163-45.463,10.011-45.463,19.366h9.993 c-1.65,5.146-2.507,10.54-2.507,16.017c0,28.956,23.558,52.514,52.514,52.514c28.956,0,52.514-23.558,52.514-52.514 c0-5.478-0.856-10.872-2.506-16.017h9.992c0-9.354-19.352-17.204-45.463-19.366v-8.954h-6.149C200.189,38.779,223.924,16,252.882,16 c29.952,0,54.32,24.368,54.32,54.32c0,28.774-11.078,37.009-25.105,47.437c-17.444,12.968-37.216,27.667-37.216,78.884v113.914 h-0.797c-5.068,0-9.174,4.108-9.174,9.177c0,2.844,1.293,5.383,3.321,7.066c-3.432,27.933-26.851,95.744-8.226,115.459v11.202h45.75 v-11.202c18.625-19.715-4.794-87.527-8.227-115.459c2.029-1.683,3.322-4.223,3.322-7.066c0-5.068-4.107-9.177-9.176-9.177h-0.795 V196.641c0-43.174,14.942-54.283,30.762-66.043c14.793-10.997,31.559-23.461,31.559-60.277C323.202,31.545,291.656,0,252.882,0z M232.77,111.694c0,23.442-19.071,42.514-42.514,42.514c-23.442,0-42.514-19.072-42.514-42.514c0-5.531,1.078-10.957,3.141-16.017 h78.747C231.693,100.736,232.77,106.162,232.77,111.694z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <h1 className="cs-heading" suppressHydrationWarning>
          We package your business<br />
          <span className="cs-heading-accent">for the future</span>
        </h1>

        <p className="cs-subtext" suppressHydrationWarning>
          Nepal&apos;s all-in-one business platform is almost here. Manage inventory, customers, and analytics — all in one place.
        </p>

        {/* Waitlist form */}
        <form onSubmit={handleSubmit} className="cs-form">
          <div className="cs-input-group">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status === "error") setStatus("idle")
              }}
              disabled={status === "sending" || status === "sent"}
              className="cs-input"
              aria-label="Email address"
              suppressHydrationWarning
            />
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="cs-button"
              suppressHydrationWarning
            >
              {status === "idle" && "Join Waitlist"}
              {status === "sending" && (
                <span className="cs-spinner-wrap">
                  <span className="cs-spinner" />
                  Sending...
                </span>
              )}
              {status === "sent" && "You're in!"}
              {status === "error" && "Try Again"}
            </button>
          </div>

          {status === "sent" && (
            <p className="cs-success">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <circle cx="8" cy="8" r="8" fill="#10B981" />
                <path d="M5 8.5L7 10.5L11 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Welcome aboard! We&apos;ll notify you at launch.
            </p>
          )}

          {status === "error" && (
            <p className="cs-error">
              Something went wrong. Please try again or email us at{" "}
              <a href="mailto:hello@shamanyantra.com" className="cs-error-link">
                hello@shamanyantra.com
              </a>
            </p>
          )}
        </form>

        {/* Social proof */}
        <p className="cs-social-proof" suppressHydrationWarning>
          Join <span className="cs-highlight">25+</span> businesses already on the waitlist
        </p>
      </div>

      {/* Footer */}
      <footer className="cs-footer">
        <p suppressHydrationWarning>&copy; 2026 Shaman Yantra. All rights reserved.</p>
        <a href="mailto:hello@shamanyantra.com" className="cs-footer-link" suppressHydrationWarning>
          hello@shamanyantra.com
        </a>
      </footer>
    </div>
  )
}
