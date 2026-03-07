import type { Metadata, Viewport } from 'next'
import { Suspense } from 'react'
import { Inter, DM_Serif_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { LayoutFooter } from '@/components/layout-footer'
import { LoadingFallback } from '@/components/loading-fallback'

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

export const metadata: Metadata = {
  title: {
    default: "Shaman Yantra | Nepal's All-in-One Business Platform",
    template: '%s | Shaman Yantra',
  },
  description: 'Manage inventory, customers, and business analytics in one unified platform. Built for Nepali businesses. Start your free 14-day trial today.',
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Shaman Yantra',
    title: "Shaman Yantra | Nepal's All-in-One Business Platform",
    description: 'Manage inventory, customers, and business analytics in one unified platform. Built for Nepali businesses. Start your free 14-day trial today.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Shaman Yantra — Nepal's All-in-One Business Platform",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shaman Yantra | Nepal's All-in-One Business Platform",
    description: 'Manage inventory, customers, and business analytics in one unified platform. Built for Nepali businesses.',
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
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0B1628' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:text-sm focus:font-medium focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="relative" data-main>
          <Suspense fallback={<LoadingFallback />}>
            {children}
          </Suspense>
        </main>
        <LayoutFooter />
        <noscript>
          <div style={{ padding: '1rem', background: '#fef3c7', textAlign: 'center', fontSize: '0.875rem' }}>
            This site works best with JavaScript enabled. Please enable JavaScript in your browser settings.
          </div>
        </noscript>
      </body>
    </html>
  )
}
