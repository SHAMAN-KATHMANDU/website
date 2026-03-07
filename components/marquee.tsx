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
      className="overflow-hidden py-3 sm:py-5 bg-light-gray border-y border-border shrink-0"
      aria-hidden="true"
    >
      <div
        className="flex w-max"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-8 px-10 text-sm text-muted-foreground whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
