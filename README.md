# Shaman Yantra

**Nepal's AI Business Platform** — a unified SaaS solution for inventory management, CRM, team communication, and payments, built specifically for Nepali businesses.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/License-Proprietary-red)

---

## Screenshots

> The site uses real demo screenshots in `public/images/`. Below is a visual map of the key UI sections.

```
┌─────────────────────────────────────────────────────────┐
│  Navbar  (logo · Home · Features · Pricing · Testimonials│
├─────────────────────────────────────────────────────────┤
│                                                         │
│   Hero                          ┌──────────────────┐   │
│   ─────────────────────         │  Dashboard Demo  │   │
│   "Grow your Business           │  ┌─────────────┐ │   │
│    with AI-Powered              │  │ Revenue +24%│ │   │
│    Intelligence"                │  └─────────────┘ │   │
│                                 │  ┌──────────────┐│   │
│   [Try Free 14 Days]            │  │ 98% Retention││   │
│   [Explore Features]            │  └──────────────┘│   │
│                                 └──────────────────┘   │
│   500+ businesses · NPR 3Bn · < 5 min setup            │
├─────────────────────────────────────────────────────────┤
│  Marquee  (scrolling feature tags)                      │
├─────────────────────────────────────────────────────────┤
│  Trusted By  (6 company logos + stat pills)             │
├─────────────────────────────────────────────────────────┤
│  Features Preview  (2×2 card grid with demo images)     │
│  ┌──────────────┐  ┌──────────────┐                    │
│  │  Inventory   │  │     CRM      │                    │
│  │  [img]       │  │  [img]       │                    │
│  └──────────────┘  └──────────────┘                    │
│  ┌──────────────┐  ┌──────────────┐                    │
│  │  Team Hub    │  │  Payments    │                    │
│  │  [img]       │  │  [img]       │                    │
│  └──────────────┘  └──────────────┘                    │
├─────────────────────────────────────────────────────────┤
│  CTA  (dark navy · "Ready to transform your business?") │
├─────────────────────────────────────────────────────────┤
│  Footer                                                 │
└─────────────────────────────────────────────────────────┘
```

---

## Overview

Shaman Yantra brings together the core operational tools that growing Nepali businesses need into a single, cohesive platform:

- **Inventory Management** — multi-warehouse tracking, barcode scanning, auto-reorder
- **CRM** — sales pipeline, customer follow-ups, WhatsApp Business API integration
- **Team Communication** — unified inbox, SMS, support tickets, AI chatbot
- **Payments** — eSewa & IPS (Nepal-local gateways), T+1 settlement

This repository is the public marketing website for the platform.

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, feature highlights, CTA |
| `/features` | Detailed breakdown of all platform features |
| `/pricing` | 4-tier pricing (Starter NPR 2,999/mo → Enterprise) with comparison table |
| `/testimonials` | Customer testimonials from Nepali business owners |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui (Radix UI primitives) |
| Icons | Lucide React |
| Charts | Recharts |
| Forms | React Hook Form + Zod |
| Analytics | Vercel Analytics |
| Package Manager | pnpm |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Install & Run

```bash
git clone <repo-url>
cd <repo-directory>
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

---

## Deployment

The site is deployed on [Vercel](https://vercel.com). Push to `main` to trigger a production deployment.

---

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout (fonts, navbar, footer, analytics)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Design tokens & keyframe animations
│   ├── features/page.tsx
│   ├── pricing/page.tsx
│   └── testimonials/page.tsx
├── components/
│   ├── abstract-elements.tsx  # Decorative SVG/canvas elements
│   ├── hero.tsx
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── marquee.tsx
│   ├── trusted-by.tsx
│   ├── features-preview.tsx
│   ├── cta-section.tsx
│   ├── logo.tsx
│   ├── reveal.tsx             # Intersection Observer scroll animations
│   └── ui/                    # shadcn/ui component library
├── public/
│   └── images/                # Demo screenshots (dashboard, CRM, inventory, etc.)
└── lib/
    └── utils.ts
```

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#10B981` | Emerald green — buttons, links, accents |
| `--foreground` | `#0B1628` | Deep navy — body text |
| `--navy` | `#0B1628` | Footer background |
| `--secondary` | `#F0FDF4` | Pale green tint — tag backgrounds |
| `--light-gray` | `#F8FAFC` | Section alternating backgrounds |

Fonts: **Inter** (sans) · **DM Serif Display** (headings) · **JetBrains Mono** (code)

---

## Contact

- Email: info@shamanyantra.com
- Location: Kathmandu, Nepal
