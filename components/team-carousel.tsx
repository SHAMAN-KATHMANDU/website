"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, Linkedin, Pause, Play } from "lucide-react"

/* ── Team data ── */
const TEAM = [
  {
    name: "Emmy Rosum",
    role: "Customer Success Agent",
    image: "https://api.dicebear.com/7.x/personas/svg?seed=EmmyRosum&backgroundColor=d1fae5",
    bio: "Emmy has been helping businesses navigate Shaman Yantra since day one. She specialises in onboarding and loves turning first-time users into power users within days.",
    email: "emmy@shamanyantra.com",
    linkedin: "https://linkedin.com",
    gradientFrom: "#10B981",
    gradientTo: "#34D399",
  },
  {
    name: "Sophie Chamberlain",
    role: "Specialized Support",
    image: "https://api.dicebear.com/7.x/personas/svg?seed=SophieChamberlain&backgroundColor=dbeafe",
    bio: "Sophie handles complex integrations and edge cases. With a background in fintech, she's the go-to expert for payment reconciliation and eSewa troubleshooting.",
    email: "sophie@shamanyantra.com",
    linkedin: "https://linkedin.com",
    gradientFrom: "#3B82F6",
    gradientTo: "#60A5FA",
  },
  {
    name: "Lana Steiner",
    role: "VP of Customer Success",
    image: "https://api.dicebear.com/7.x/personas/svg?seed=LanaSteiner&backgroundColor=fef3c7",
    bio: "Lana leads the entire customer success function. She built the team from the ground up and is obsessed with making every interaction feel personal and impactful.",
    email: "lana@shamanyantra.com",
    linkedin: "https://linkedin.com",
    gradientFrom: "#F59E0B",
    gradientTo: "#FCD34D",
  },
  {
    name: "Orlando Diggs",
    role: "Customer Success Lead",
    image: "https://api.dicebear.com/7.x/personas/svg?seed=OrlandoDiggs&backgroundColor=fce7f3",
    bio: "Orlando manages key accounts across Kathmandu Valley. He's known for his deep product knowledge and his ability to anticipate customer needs before they arise.",
    email: "orlando@shamanyantra.com",
    linkedin: "https://linkedin.com",
    gradientFrom: "#EC4899",
    gradientTo: "#F9A8D4",
  },
  {
    name: "Sasha Kindred",
    role: "Customer Success Lead",
    image: "https://api.dicebear.com/7.x/personas/svg?seed=SashaKindred&backgroundColor=ede9fe",
    bio: "Sasha focuses on mid-market and growing businesses. She runs monthly business reviews and helps customers unlock features they didn't know they needed.",
    email: "sasha@shamanyantra.com",
    linkedin: "https://linkedin.com",
    gradientFrom: "#8B5CF6",
    gradientTo: "#A78BFA",
  },
  {
    name: "Rajan Thapa",
    role: "Technical Support Engineer",
    image: "https://api.dicebear.com/7.x/personas/svg?seed=RajanThapa&backgroundColor=ccfbf1",
    bio: "Rajan bridges the gap between product and customer. He handles API integrations, custom workflows, and anything that requires digging into the technical details.",
    email: "rajan@shamanyantra.com",
    linkedin: "https://linkedin.com",
    gradientFrom: "#14B8A6",
    gradientTo: "#2DD4BF",
  },
  {
    name: "Priya Shrestha",
    role: "Onboarding Specialist",
    image: "https://api.dicebear.com/7.x/personas/svg?seed=PriyaShrestha&backgroundColor=fee2e2",
    bio: "Priya makes sure every new customer hits the ground running. Her structured onboarding programme has reduced time-to-value by 60% since she joined.",
    email: "priya@shamanyantra.com",
    linkedin: "https://linkedin.com",
    gradientFrom: "#EF4444",
    gradientTo: "#F87171",
  },
]

// Duplicate for seamless infinite loop
const TEAM_DOUBLED = [...TEAM, ...TEAM]

const HOVER_SPRING = { type: "spring" as const, stiffness: 300, damping: 24 }

/* ── Avatar SVG fallback ── */
function AvatarPlaceholder({
  name,
  gradientFrom,
  gradientTo,
}: {
  name: string
  gradientFrom: string
  gradientTo: string
}) {
  const id = `grad-${name.replace(/\s/g, "")}`
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="200" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor={gradientFrom} stopOpacity="0.2" />
          <stop offset="1" stopColor={gradientTo} stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="200" height="220" fill={`url(#${id})`} />
      <circle cx="100" cy="82" r="36" fill={gradientFrom} fillOpacity="0.22" />
      <circle cx="100" cy="82" r="28" fill={gradientFrom} fillOpacity="0.28" />
      <ellipse cx="100" cy="178" rx="52" ry="42" fill={gradientFrom} fillOpacity="0.16" />
    </svg>
  )
}

/* ── Single team card — image with hover overlay revealing bio ── */
function TeamCard({ member }: { member: (typeof TEAM)[0] }) {
  const [imgError, setImgError] = React.useState(false)
  const [hovered, setHovered] = React.useState(false)

  return (
    <motion.div
      className="shrink-0 w-64 sm:w-72 mx-2 sm:mx-3"
      whileHover={{ scale: 1.03, y: -8, transition: HOVER_SPRING }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div
        className="bg-background rounded-2xl border border-border overflow-hidden shadow-sm relative"
        style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
      >
        {/* Portrait — fixed height so overlay has a clear target */}
        <div className="relative overflow-hidden bg-secondary" style={{ height: 260 }}>
          {!imgError ? (
            <Image
              src={member.image}
              alt={`${member.name} — ${member.role}`}
              width={288}
              height={260}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{
                filter: hovered ? "grayscale(0%)" : "grayscale(20%)",
                transform: hovered ? "scale(1.06)" : "scale(1)",
              }}
              onError={() => setImgError(true)}
              draggable={false}
              unoptimized
            />
          ) : (
            <AvatarPlaceholder
              name={member.name}
              gradientFrom={member.gradientFrom}
              gradientTo={member.gradientTo}
            />
          )}

          {/* Gradient accent bar at bottom of image — always visible */}
          <div
            className="absolute inset-x-0 bottom-0 h-1 z-10"
            style={{
              background: `linear-gradient(to right, ${member.gradientFrom}, ${member.gradientTo})`,
            }}
          />

          {/* Hover overlay — slides up from bottom revealing bio + actions */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-5 z-20"
            style={{
              background: `linear-gradient(to top, rgba(11,22,40,0.96) 0%, rgba(11,22,40,0.75) 55%, transparent 100%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: hovered ? 0 : 16, opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.05 }}
            >
              <p className="text-sm text-white/90 leading-relaxed mb-4">
                {member.bio}
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/15 text-white border border-white/20 hover:bg-primary hover:border-primary transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`Email ${member.name}`}
                  tabIndex={hovered ? 0 : -1}
                >
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                  Email
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-white/20 text-white/80 hover:text-white hover:border-white/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`${member.name}'s LinkedIn`}
                  tabIndex={hovered ? 0 : -1}
                >
                  <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Card footer — always visible: name + role */}
        <div className="px-5 py-4 border-t border-border">
          <h3 className="text-sm font-semibold text-foreground leading-tight">{member.name}</h3>
          <p
            className="text-xs font-medium mt-0.5"
            style={{ color: member.gradientFrom }}
          >
            {member.role}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Main export — infinite auto-scroll marquee ── */
export function TeamCarousel() {
  const [paused, setPaused] = useState(false)

  return (
    <section
      id="team-carousel"
      className="relative py-20 overflow-hidden bg-light-gray"
      aria-label="Team members"
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 text-center">
        <p className="text-sm font-medium text-primary mb-3">The people behind the platform</p>
        <h2 className="font-serif text-3xl lg:text-5xl text-foreground leading-tight">
          Meet the team
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
          A dedicated group of builders, designers, and operators working to make Shaman Yantra the best business platform in Nepal.
        </p>
      </div>

      {/* Infinite marquee — CSS animation, pauses on hover or when paused state is true */}
      <div className="team-marquee-outer" aria-live="off">
        <div
          className="team-marquee-track py-4"
          style={{ animationPlayState: paused ? "paused" : undefined }}
        >
          {TEAM_DOUBLED.map((member, i) => (
            <TeamCard key={`${member.name}-${i}`} member={member} />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          onClick={() => setPaused((p) => !p)}
          className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={paused ? "Resume team carousel" : "Pause team carousel"}
          aria-pressed={paused}
        >
          {paused ? <Play className="w-3 h-3" aria-hidden="true" /> : <Pause className="w-3 h-3" aria-hidden="true" />}
          {paused ? "Resume" : "Pause"}
        </button>
        <span className="text-xs text-muted-foreground">{TEAM.length} team members · Hover to pause</span>
      </div>
    </section>
  )
}
