const marqueeItems = [
  "Inventory Management",
  "CRM & Sales Pipeline",
  "Team Messaging",
  "Real-Time Analytics",
  "Multi-Warehouse Support",
  "Mobile-First Design",
  "Supplier Ordering",
  "Barcode Scanning",
]

export function Marquee() {
  return (
    <div
      className="overflow-hidden py-4 sm:py-6 shrink-0 border-y border-border relative"
      aria-hidden="true"
    >
      {/* Subtle gradient background for distinct section feel */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-secondary/30 via-light-gray to-secondary/30"
        aria-hidden="true"
      />
      <div
        className="flex w-max relative z-10"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-8 px-10 text-sm text-muted-foreground whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
