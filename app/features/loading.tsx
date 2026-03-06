// Features page Suspense fallback — 3-column feature card skeleton, pure CSS shimmer.
export default function FeaturesLoading() {
  return (
    <div
      className="min-h-screen bg-background pt-28 pb-20 px-6"
      aria-busy="true"
      aria-label="Loading features"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading skeleton */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <div className="shimmer-block" style={{ width: 120, height: 24, borderRadius: 999 }} />
          <div className="shimmer-block" style={{ width: 480, height: 48, borderRadius: 8 }} />
          <div className="shimmer-block" style={{ width: 360, height: 20, borderRadius: 4 }} />
        </div>

        {/* 3-column feature card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-border p-8 flex flex-col gap-5"
              style={{ background: "#F8FAFC" }}
            >
              {/* Icon */}
              <div className="shimmer-block" style={{ width: 48, height: 48, borderRadius: 12 }} />
              {/* Title */}
              <div className="shimmer-block" style={{ width: "70%", height: 26, borderRadius: 6 }} />
              {/* Description lines */}
              <div className="flex flex-col gap-2">
                <div className="shimmer-block" style={{ width: "100%", height: 16, borderRadius: 4 }} />
                <div className="shimmer-block" style={{ width: "85%", height: 16, borderRadius: 4 }} />
                <div className="shimmer-block" style={{ width: "60%", height: 16, borderRadius: 4 }} />
              </div>
              {/* Feature image placeholder */}
              <div className="shimmer-block mt-2" style={{ width: "100%", height: 180, borderRadius: 12 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
