import { LoadingFallback } from "@/components/loading-fallback"

export default function PricingLoading() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <LoadingFallback />
    </div>
  )
}
