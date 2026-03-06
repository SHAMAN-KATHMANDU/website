export function LogoMark({ size = 32, variant = "dark" }: { size?: number; variant?: "dark" | "light" }) {
  const primary = variant === "dark" ? "#0B1628" : "#ffffff"
  const accent = "#10B981"
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="28" height="28" rx="8" fill={accent} />
      <path d="M10 22L16 10L22 22H10Z" fill="none" stroke={primary === "#0B1628" ? "#ffffff" : "#0B1628"} strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="16" cy="18" r="2.5" fill={primary === "#0B1628" ? "#ffffff" : "#0B1628"} />
    </svg>
  )
}
