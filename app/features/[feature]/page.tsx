import { mainFeatures } from "@/lib/features-data"
import { FeatureDetailClient } from "./feature-detail-client"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return mainFeatures.map((f) => ({ feature: f.id }))
}

export default async function FeatureDetailPage({ params }: { params: Promise<{ feature: string }> }) {
  const { feature: featureId } = await params
  const feature = mainFeatures.find((f) => f.id === featureId)
  if (!feature) notFound()

  return <FeatureDetailClient featureId={featureId} />
}
