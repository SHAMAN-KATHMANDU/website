import type { Metadata, Viewport } from 'next'
import { Inter, DM_Serif_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ComingSoon } from '@/components/coming-soon'

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
  title: "Shaman Yantra | Coming Soon",
  description: 'We package your business for the future. Nepal\'s all-in-one business platform is coming soon. Join the waitlist.',
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Shaman Yantra',
    title: "Shaman Yantra | Coming Soon",
    description: 'We package your business for the future. Nepal\'s all-in-one business platform is coming soon. Join the waitlist.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Shaman Yantra — Coming Soon",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shaman Yantra | Coming Soon",
    description: 'We package your business for the future. Nepal\'s all-in-one business platform is coming soon.',
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
 * COMING SOON MODE: The layout ignores {children} and renders the
 * ComingSoon page on every route. To restore the full site, revert
 * this layout to render {children} with Navbar + Footer.
 */
export default function RootLayout({
  children: _children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <ComingSoon />
      </body>
    </html>
  )
}
