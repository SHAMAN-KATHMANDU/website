import { LoadingFallback } from "@/components/loading-fallback"

export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <LoadingFallback />
    </div>
  )
}
