"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, Linkedin, Pause, Play } from "lucide-react"

/* ── Team data ── */
const TEAM = [
  {
    name: "Roshan Pandey",
    role: "Software Engineer",
    image: "https://api.dicebear.com/7.x/personas/svg?seed=RoshanPandey&backgroundColor=d1fae5",
    bio: "Roshan doesn't Google things — he already knows. What makes him unusual isn't just the speed of his thinking, it's that he's genuinely difficult to stump. Hand him a problem at the edges of his experience and he'll still find his way through it faster than most people find the right search terms. He's currently in that rare, restless place of having outgrown what's in front of him — which means whoever gives him the right problem next is going to get something exceptional.",
    email: "roshan@shamanyantra.com",
    linkedin: "https://linkedin.com",
    gradientFrom: "#10B981",
    gradientTo: "#34D399",
  },
  {
    name: "Soumya Dahal",
    role: "Software Engineer",
    image: "https://api.dicebear.com/7.x/personas/svg?seed=SoumyaDahal&backgroundColor=dbeafe",
    bio: "Soumya has a Raspberry Pi. That small detail says a lot. He's not interested in technology that stays on a screen — he wants to know how it touches the real world. He's the kind of engineer who thinks before he builds, checks after he ships, and catches the thing everyone else walked past. Quietly mature in a way that surprises people. The meticulous ones usually do.",
    email: "soumya@shamanyantra.com",
    linkedin: "https://linkedin.com",
    gradientFrom: "#3B82F6",
    gradientTo: "#60A5FA",
  },
  {
    name: "Ronish Katuwal",
    role: "Quality Assurance & Tester",
    image: "https://api.dicebear.com/7.x/personas/svg?seed=RonishKatuwal&backgroundColor=fef3c7",
    bio: "Here's something worth knowing about Ronish: he loves Formula 1. Not casually — genuinely. And if you know F1, you know it's really a sport about systems thinking, marginal gains, and finding exactly where something breaks before it breaks. That's also QA. He's the youngest on the team, still studying, but he understands how things fail at a level that takes most people years to develop. Quietly, he's already thinking about where technology is going — not just where it is.",
    email: "ronish@shamanyantra.com",
    linkedin: "https://linkedin.com",
    gradientFrom: "#F59E0B",
    gradientTo: "#FCD34D",
  },
  {
    name: "Arhaam Huq",
    role: "Product Design & Business Development",
    image: "https://api.dicebear.com/7.x/personas/svg?seed=ArhaamHuq&backgroundColor=fce7f3",
    bio: "Arhaam has been to over 100 cities. At his age, that's not a gap year — that's a curriculum. Born in Bangladesh, living in the US, and designing for people everywhere in between, he carries a worldview that most designers spend careers trying to build. His range is genuinely unusual: product instinct, business sense, design eye — each one sharp enough to be someone's whole job. He has big ambitions. The impressive part is that they're already credible.",
    email: "arhaam@shamanyantra.com",
    linkedin: "https://linkedin.com",
    gradientFrom: "#EC4899",
    gradientTo: "#F9A8D4",
  },
  {
    name: "Subhashish Jung Shah",
    role: "Head of Technology & AI",
    image: "https://api.dicebear.com/7.x/personas/svg?seed=SubhashishShah&backgroundColor=ede9fe",
    bio: "Subhashish has already built things that most people are still waiting to see become mainstream. Blockchain, AI voice models, systems at the frontier — he's been there, built something real, and moved on to what's next. Technology isn't what he does for work, it's what occupies his mind from the moment he wakes up. That level of obsession is rare, and it shows in the quality and ambition of what he produces. He's not following the future — he's already living in it.",
    email: "subhashish@shamanyantra.com",
    linkedin: "https://linkedin.com",
    gradientFrom: "#8B5CF6",
    gradientTo: "#A78BFA",
  },
  {
    name: "Anayas Chandra Gurung",
    role: "AI Product Analyst",
    image: "https://api.dicebear.com/7.x/personas/svg?seed=AnayasGurung&backgroundColor=ccfbf1",
    bio: "Ten years is enough time to watch an entire technology landscape transform — and Anayas has had a front-row seat to Nepal's. He's not just experienced; he's experienced here, in this specific market, with its specific constraints and opportunities. That's a different kind of knowledge. He's helped businesses go from stagnant to exponential, not through theory, but through the kind of clear-eyed analysis that only comes from having been wrong a few times and learned from it. When Anayas says something will work, there's weight behind it.",
    email: "anayas@shamanyantra.com",
    linkedin: "https://linkedin.com",
    gradientFrom: "#14B8A6",
    gradientTo: "#2DD4BF",
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
        style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
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
              <p className="text-sm text-white/90 leading-relaxed mb-4 line-clamp-8 overflow-hidden">
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
