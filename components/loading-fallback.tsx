import { TruckLoader } from "./truck-loader"

export function LoadingFallback() {
  return (
    <div
      className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-6 py-20"
      aria-busy="true"
      aria-label="Loading"
    >
      <TruckLoader />
      <p className="text-sm font-medium text-muted-foreground">Delivering your experience...</p>
    </div>
  )
}
