// Team page Suspense fallback — horizontal carousel skeleton, pure CSS shimmer.
export default function TeamLoading() {
  return (
    <div
      className="min-h-screen bg-background pt-28 pb-20 px-6"
      aria-busy="true"
      aria-label="Loading team"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading skeleton */}
        <div className="text-center mb-14 flex flex-col items-center gap-4">
          <div className="shimmer-block" style={{ width: 100, height: 24, borderRadius: 999 }} />
          <div className="shimmer-block" style={{ width: 400, height: 48, borderRadius: 8 }} />
          <div className="shimmer-block" style={{ width: 300, height: 20, borderRadius: 4 }} />
        </div>

        {/* Carousel track — 3 cards visible */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-2xl border border-border p-7"
                style={{
                  width: "calc(33.333% - 16px)",
                  minWidth: 280,
                  background: "#ffffff",
                  opacity: i === 2 ? 0.4 : 1,
                }}
              >
                {/* Avatar */}
                <div
                  className="shimmer-block mx-auto mb-5"
                  style={{ width: 80, height: 80, borderRadius: "50%" }}
                />
                {/* Name */}
                <div
                  className="shimmer-block mx-auto mb-2"
                  style={{ width: "60%", height: 22, borderRadius: 4 }}
                />
                {/* Role */}
                <div
                  className="shimmer-block mx-auto mb-5"
                  style={{ width: "45%", height: 16, borderRadius: 4 }}
                />
                {/* Bio lines */}
                <div className="flex flex-col gap-2">
                  <div className="shimmer-block" style={{ width: "100%", height: 14, borderRadius: 4 }} />
                  <div className="shimmer-block" style={{ width: "80%", height: 14, borderRadius: 4 }} />
                  <div className="shimmer-block" style={{ width: "65%", height: 14, borderRadius: 4 }} />
                </div>
              </div>
            ))}
          </div>

          {/* Left/right fade overlays */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: 120,
              background: "linear-gradient(to right, transparent, #ffffff)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="shimmer-block"
              style={{ width: i === 0 ? 20 : 8, height: 8, borderRadius: 999, opacity: i === 0 ? 1 : 0.4 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
