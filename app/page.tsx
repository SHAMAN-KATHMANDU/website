import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { TrustedBy } from "@/components/trusted-by"
import { FeaturesPreview } from "@/components/features-preview"
import { Roadmap } from "@/components/roadmap"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { HorizontalDeck } from "@/components/horizontal-deck"
import { HorizontalCard } from "@/components/horizontal-card"

export default function HomePage() {
  return (
    <HorizontalDeck>
      {/* Card 1 — Hero */}
      <HorizontalCard id="hero" label="Hero" isActive>
        <Hero />
      </HorizontalCard>

      {/* Card 2 — Marquee + TrustedBy (viewport-fit: flex column, no vertical scroll) */}
      <HorizontalCard id="trusted-by" label="Trusted By" isActive={false}>
        <div className="h-full flex flex-col min-h-0">
          <Marquee />
          <TrustedBy />
        </div>
      </HorizontalCard>

      {/* Card 3 — Features */}
      <HorizontalCard id="features" label="Features" isActive={false}>
        <FeaturesPreview />
      </HorizontalCard>

      {/* Card 4 — Roadmap */}
      <HorizontalCard id="roadmap" label="Roadmap" isActive={false}>
        <Roadmap />
      </HorizontalCard>

      {/* Card 5 — CTA + Footer (viewport-fit: flex column, compact footer) */}
      <HorizontalCard id="get-started" label="Get Started" isActive={false}>
        <div className="h-full flex flex-col min-h-0">
          <CtaSection />
          <Footer compact />
        </div>
      </HorizontalCard>
    </HorizontalDeck>
  )
}
