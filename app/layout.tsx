import type { Metadata, Viewport } from 'next'
import { Inter, DM_Serif_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ComingSoon } from '@/components/coming-soon'
import { Navbar } from '@/components/navbar'
import { LayoutFooter } from '@/components/layout-footer'
import { ScrollProgress } from '@/components/scroll-progress'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
})
const dmSerif = DM_Serif_Display({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-serif',
})
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
})

const BASE_URL = 'https://shamanyantra.com'

const isComingSoon = process.env.NEXT_PUBLIC_COMING_SOON === 'true'

export const metadata: Metadata = {
  title: isComingSoon
    ? "Shaman Yantra | Coming Soon"
    : "Shaman Yantra | Nepal's All-in-One Business Platform",
  description: isComingSoon
    ? 'We package your business for the future. Nepal\'s all-in-one business platform is coming soon. Join the waitlist.'
    : 'Inventory. CRM. Analytics. One platform. Shaman Yantra unifies everything your Nepali business needs — built from the ground up for Nepal.',
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Shaman Yantra',
    title: isComingSoon ? "Shaman Yantra | Coming Soon" : "Shaman Yantra | Nepal's All-in-One Business Platform",
    description: isComingSoon
      ? 'We package your business for the future. Nepal\'s all-in-one business platform is coming soon. Join the waitlist.'
      : 'Inventory. CRM. Analytics. One platform. Shaman Yantra unifies everything your Nepali business needs.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: isComingSoon ? "Shaman Yantra — Coming Soon" : "Shaman Yantra — Nepal's Business Platform",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: isComingSoon ? "Shaman Yantra | Coming Soon" : "Shaman Yantra | Nepal's All-in-One Business Platform",
    description: isComingSoon
      ? 'We package your business for the future. Nepal\'s all-in-one business platform is coming soon.'
      : 'Inventory. CRM. Analytics. One platform. Built for Nepali businesses.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#050d1a' },
    { media: '(prefers-color-scheme: dark)', color: '#050d1a' },
  ],
}

/*
 * Toggle via NEXT_PUBLIC_COMING_SOON env var:
 * - "true": Coming Soon page only
 * - "false" or unset: Full site with Navbar + children + Footer
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {isComingSoon ? (
          <ComingSoon />
        ) : (
          <>
            <ScrollProgress />
            <Navbar />
            <main>{children}</main>
            <LayoutFooter />
          </>
        )}
      </body>
    </html>
  )
}
