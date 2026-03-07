"use client"

import { useEffect, useRef, useState } from "react"

/* ── Gradient Orb ── soft radial glow ── */
export function GradientOrb({
  className = "",
  color = "rgba(16, 185, 129, 0.12)",
  size = 500,
}: {
  className?: string
  color?: string
  size?: number
}) {
  return (
    <div
      className={`absolute pointer-events-none deco-contain ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(ellipse at center, ${color} 0%, transparent 70%)`,
        filter: "blur(40px)",
      }}
      aria-hidden="true"
    />
  )
}

/* ── Dot Grid ── subtle repeating dots ── */
export function DotGrid({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        opacity: 0.4,
      }}
      aria-hidden="true"
    />
  )
}

/* ── Floating Particles ── canvas-based ambient particles ── */
export function FloatingParticles({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Skip animation entirely if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    let animId: number
    let running = true

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener("resize", resize, { passive: true })

    const particles: { x: number; y: number; r: number; vx: number; vy: number; o: number }[] = []
    const isMobile = window.innerWidth < 768
    const count = isMobile ? 12 : 24
    const rect = canvas.getBoundingClientRect()
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        r: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        o: Math.random() * 0.3 + 0.1,
      })
    }

    const draw = () => {
      if (!running) return
      // Pause when tab is hidden to save CPU
      if (document.hidden) {
        animId = requestAnimationFrame(draw)
        return
      }
      const r = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, r.width, r.height)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > r.width) p.vx *= -1
        if (p.y < 0 || p.y > r.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(16, 185, 129, ${p.o})`
        ctx.fill()
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      running = false
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none deco-contain ${className}`}
      aria-hidden="true"
    />
  )
}

/* ── Abstract Lines ── decorative diagonal lines ── */
export function AbstractLines({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <line x1="0" y1="80" x2="400" y2="320" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="0" y1="120" x2="400" y2="360" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.1" />
      <line x1="0" y1="160" x2="400" y2="400" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.08" />
      <line x1="40" y1="0" x2="280" y2="400" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.12" />
      <line x1="80" y1="0" x2="320" y2="400" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.08" />
      <circle cx="200" cy="200" r="120" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.08" fill="none" />
      <circle cx="200" cy="200" r="80" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.05" fill="none" />
    </svg>
  )
}

/* ── Ring Decoration ── concentric rings ── */
export function RingDecoration({ className = "", size = 300 }: { className?: string; size?: number }) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width={size}
      height={size}
      viewBox="0 0 300 300"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="150" cy="150" r="140" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.1" />
      <circle cx="150" cy="150" r="110" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.08" />
      <circle cx="150" cy="150" r="80" stroke="#E2E8F0" strokeWidth="0.5" strokeOpacity="0.3" />
      <circle cx="150" cy="150" r="50" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.06" />
      <circle cx="150" cy="150" r="4" fill="#10B981" fillOpacity="0.2" />
    </svg>
  )
}

/* ── Cross Grid ── decorative plus signs ── */
export function CrossGrid({ className = "" }: { className?: string }) {
  const positions = [
    { x: 20, y: 30 }, { x: 80, y: 70 }, { x: 150, y: 20 }, { x: 220, y: 60 },
    { x: 50, y: 120 }, { x: 130, y: 150 }, { x: 200, y: 110 }, { x: 270, y: 140 },
    { x: 30, y: 200 }, { x: 100, y: 230 }, { x: 180, y: 190 }, { x: 250, y: 220 },
  ]
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width="300"
      height="260"
      viewBox="0 0 300 260"
      fill="none"
      aria-hidden="true"
    >
      {positions.map((p, i) => (
        <g key={i} opacity={0.12 + (i % 3) * 0.05}>
          <line x1={p.x - 4} y1={p.y} x2={p.x + 4} y2={p.y} stroke="#10B981" strokeWidth="1" />
          <line x1={p.x} y1={p.y - 4} x2={p.x} y2={p.y + 4} stroke="#10B981" strokeWidth="1" />
        </g>
      ))}
    </svg>
  )
}

/* ── Wave Decoration ── smooth SVG wave ── */
export function WaveDecoration({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      className={`absolute pointer-events-none w-full ${className}`}
      viewBox="0 0 1440 80"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      <path
        d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
        fill="rgba(16,185,129,0.04)"
      />
      <path
        d="M0,55 C360,20 720,70 1080,30 C1260,10 1380,50 1440,55 L1440,80 L0,80 Z"
        fill="rgba(16,185,129,0.025)"
      />
    </svg>
  )
}

/* ── Hex Grid ── decorative honeycomb pattern ── */
export function HexGrid({ className = "" }: { className?: string }) {
  const hexPath = "M15 0 L30 8.66 L30 25.98 L15 34.64 L0 25.98 L0 8.66 Z"
  const cols = 6
  const rows = 4
  const hexes: { x: number; y: number; i: number }[] = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      hexes.push({
        x: c * 33 + (r % 2 === 1 ? 16.5 : 0),
        y: r * 28,
        i: r * cols + c,
      })
    }
  }
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width="220"
      height="130"
      viewBox="0 0 220 130"
      fill="none"
      aria-hidden="true"
    >
      {hexes.map((h) => (
        <path
          key={h.i}
          d={hexPath}
          transform={`translate(${h.x}, ${h.y})`}
          stroke="#10B981"
          strokeWidth="0.6"
          strokeOpacity={0.06 + (h.i % 5) * 0.02}
          fill="none"
        />
      ))}
    </svg>
  )
}

/* ── Glow Line ── horizontal glowing accent line ── */
export function GlowLine({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute pointer-events-none h-px ${className}`}
      style={{
        background: "linear-gradient(90deg, transparent 0%, rgba(16,185,129,0.4) 30%, rgba(16,185,129,0.6) 50%, rgba(16,185,129,0.4) 70%, transparent 100%)",
        filter: "blur(1px)",
      }}
      aria-hidden="true"
    />
  )
}

/* ── Mesh Grid ── fine perspective grid ── */
export function MeshGrid({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
      }}
      aria-hidden="true"
    />
  )
}

/* ── Demo Image Placeholder ── styled image wrapper with SVG fallback ── */
export function DemoImage({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
}) {
  const [imgFailed, setImgFailed] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-2xl border border-border/60 ${className}`}
      style={
        prefersReducedMotion ? undefined : { animation: "float 6s ease-in-out infinite" }
      }
    >
      {!imgFailed ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          onError={() => setImgFailed(true)}
        />
      ) : (
        /* SVG fallback — shown when image fails to load */
        <div
          className="w-full flex items-center justify-center bg-secondary"
          style={{ minHeight: "280px" }}
          aria-hidden="true"
        >
          <svg width="100%" height="280" viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="fallback-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#10B981" strokeWidth="0.3" strokeOpacity="0.15" />
              </pattern>
            </defs>
            <rect width="520" height="280" fill="url(#fallback-grid)" />
            <rect x="40" y="40" width="200" height="120" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="1" />
            <rect x="56" y="56" width="80" height="8" rx="4" fill="#10B981" fillOpacity="0.3" />
            <rect x="56" y="72" width="120" height="6" rx="3" fill="#CBD5E1" fillOpacity="0.5" />
            <rect x="56" y="84" width="100" height="6" rx="3" fill="#CBD5E1" fillOpacity="0.3" />
            {[30, 50, 40, 70, 55, 80, 65].map((h, i) => (
              <rect key={i} x={56 + i * 16} y={140 - h * 0.5} width="10" height={h * 0.5} rx="3" fill="#10B981" fillOpacity={0.2 + i * 0.05} />
            ))}
            <rect x="280" y="40" width="200" height="80" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="1" />
            <circle cx="308" cy="80" r="20" fill="#10B981" fillOpacity="0.1" />
            <circle cx="308" cy="80" r="10" fill="#10B981" fillOpacity="0.2" />
            <rect x="336" y="68" width="100" height="8" rx="4" fill="#CBD5E1" fillOpacity="0.4" />
            <rect x="336" y="82" width="70" height="6" rx="3" fill="#10B981" fillOpacity="0.25" />
            <rect x="280" y="136" width="200" height="60" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="1" />
            <rect x="296" y="152" width="60" height="6" rx="3" fill="#CBD5E1" fillOpacity="0.4" />
            <rect x="296" y="164" width="140" height="6" rx="3" fill="#CBD5E1" fillOpacity="0.25" />
            <rect x="180" y="230" width="160" height="24" rx="12" fill="#10B981" fillOpacity="0.08" />
            <rect x="210" y="238" width="100" height="8" rx="4" fill="#10B981" fillOpacity="0.2" />
          </svg>
        </div>
      )}
      {/* Subtle overlay sheen */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(16,185,129,0.03) 100%)",
        }}
      />
    </div>
  )
}
