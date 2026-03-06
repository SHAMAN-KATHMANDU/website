// Root Suspense fallback — server component, pure CSS shimmer, no JS cost.
// Mirrors the horizontal deck layout so layout shift on hydration is minimal.
export default function RootLoading() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: "100vw", height: "100vh", background: "#ffffff" }}
      aria-busy="true"
      aria-label="Loading content"
    >
      {/* Horizontal skeleton deck — first card visible, others peek in */}
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        {/* Card 1 skeleton — Hero layout */}
        <div
          className="flex-shrink-0"
          style={{
            width: "100vw",
            height: "100vh",
            padding: "120px 48px 48px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          {/* Left copy skeleton */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Badge */}
            <div className="shimmer-block" style={{ width: 220, height: 28, borderRadius: 999 }} />
            {/* H1 — 3 lines */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div className="shimmer-block" style={{ width: "90%", height: 52, borderRadius: 8 }} />
              <div className="shimmer-block" style={{ width: "75%", height: 52, borderRadius: 8 }} />
              <div className="shimmer-block" style={{ width: "55%", height: 52, borderRadius: 8 }} />
            </div>
            {/* Paragraph */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
              <div className="shimmer-block" style={{ width: "100%", height: 18, borderRadius: 4 }} />
              <div className="shimmer-block" style={{ width: "85%", height: 18, borderRadius: 4 }} />
              <div className="shimmer-block" style={{ width: "70%", height: 18, borderRadius: 4 }} />
            </div>
            {/* Buttons */}
            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              <div className="shimmer-block" style={{ width: 180, height: 48, borderRadius: 8 }} />
              <div className="shimmer-block" style={{ width: 160, height: 48, borderRadius: 8 }} />
            </div>
          </div>
          {/* Right image skeleton */}
          <div className="shimmer-block" style={{ width: "100%", height: 420, borderRadius: 16 }} />
        </div>
      </div>

      {/* Nav dot skeleton row */}
      <div
        style={{
          position: "fixed",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
          alignItems: "center",
          zIndex: 50,
        }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="shimmer-block"
            style={{
              width: i === 0 ? 24 : 8,
              height: 8,
              borderRadius: 999,
              opacity: i === 0 ? 1 : 0.5,
            }}
          />
        ))}
      </div>
    </div>
  )
}
