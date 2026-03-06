// Pricing page Suspense fallback — 4-column pricing card skeleton, pure CSS shimmer.
export default function PricingLoading() {
  return (
    <div
      className="min-h-screen bg-background pt-28 pb-20 px-6"
      aria-busy="true"
      aria-label="Loading pricing"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading skeleton */}
        <div className="text-center mb-10 flex flex-col items-center gap-4">
          <div className="shimmer-block" style={{ width: 320, height: 48, borderRadius: 8 }} />
          <div className="shimmer-block" style={{ width: 240, height: 20, borderRadius: 4 }} />
        </div>

        {/* Billing toggle skeleton */}
        <div className="flex justify-center mb-12">
          <div className="shimmer-block" style={{ width: 220, height: 40, borderRadius: 999 }} />
        </div>

        {/* 4-column pricing card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-border p-7 flex flex-col gap-5"
              style={{
                background: i === 1 ? "#0B1628" : "#ffffff",
                borderColor: i === 1 ? "transparent" : undefined,
              }}
            >
              {/* Plan name */}
              <div
                className="shimmer-block"
                style={{
                  width: 80,
                  height: 22,
                  borderRadius: 4,
                  opacity: i === 1 ? 0.3 : 1,
                }}
              />
              {/* Price */}
              <div
                className="shimmer-block"
                style={{
                  width: 120,
                  height: 44,
                  borderRadius: 6,
                  opacity: i === 1 ? 0.3 : 1,
                }}
              />
              {/* Description */}
              <div
                className="shimmer-block"
                style={{
                  width: "90%",
                  height: 16,
                  borderRadius: 4,
                  opacity: i === 1 ? 0.3 : 1,
                }}
              />
              {/* CTA button */}
              <div
                className="shimmer-block"
                style={{
                  width: "100%",
                  height: 44,
                  borderRadius: 8,
                  opacity: i === 1 ? 0.3 : 1,
                }}
              />
              {/* Feature list */}
              <div className="flex flex-col gap-3 pt-2">
                {[0, 1, 2, 3, 4].map((j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div
                      className="shimmer-block flex-shrink-0"
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        opacity: i === 1 ? 0.3 : 1,
                      }}
                    />
                    <div
                      className="shimmer-block"
                      style={{
                        width: `${60 + j * 8}%`,
                        height: 14,
                        borderRadius: 4,
                        opacity: i === 1 ? 0.3 : 1,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
