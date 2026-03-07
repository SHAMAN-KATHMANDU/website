import { LoadingFallback } from "@/components/loading-fallback"

// Root Suspense fallback — truck delivery loader
export default function RootLoading() {
  return (
    <div className="relative flex min-h-screen w-screen items-center justify-center bg-background">
      <LoadingFallback />
    </div>
  )
}
