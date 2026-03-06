// Testimonials page Suspense fallback — grid of testimonial card skeletons, pure CSS shimmer.
export default function TestimonialsLoading() {
  return (
    <div
      className="min-h-screen bg-background pt-28 pb-20 px-6"
      aria-busy="true"
      aria-label="Loading testimonials"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading skeleton */}
        <div className="text-center mb-14 flex flex-col items-center gap-4">
          <div className="shimmer-block" style={{ width: 140, height: 24, borderRadius: 999 }} />
          <div className="shimmer-block" style={{ width: 440, height: 48, borderRadius: 8 }} />
          <div className="shimmer-block" style={{ width: 280, height: 20, borderRadius: 4 }} />
        </div>

        {/* Testimonial card grid — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-border p-7 flex flex-col gap-4"
              style={{ background: "#ffffff" }}
            >
              {/* Star rating */}
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((s) => (
                  <div
                    key={s}
                    className="shimmer-block"
                    style={{ width: 16, height: 16, borderRadius: 3 }}
                  />
                ))}
              </div>
              {/* Quote lines */}
              <div className="flex flex-col gap-2">
                <div className="shimmer-block" style={{ width: "100%", height: 16, borderRadius: 4 }} />
                <div className="shimmer-block" style={{ width: "90%", height: 16, borderRadius: 4 }} />
                <div className="shimmer-block" style={{ width: "75%", height: 16, borderRadius: 4 }} />
              </div>
              {/* Author row */}
              <div className="flex items-center gap-3 pt-2 border-t border-border mt-auto">
                <div className="shimmer-block flex-shrink-0" style={{ width: 40, height: 40, borderRadius: "50%" }} />
                <div className="flex flex-col gap-1.5">
                  <div className="shimmer-block" style={{ width: 120, height: 14, borderRadius: 4 }} />
                  <div className="shimmer-block" style={{ width: 90, height: 12, borderRadius: 4 }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
