import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { ScrollToTopOnRefresh } from '@/components/scroll-to-top'
import { ScrollAnimator } from '@/components/scroll-animator'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://haven-landing-page.vercel.app'),
  title: {
    default: 'Haven — Coastal home care, calmly maintained',
    template: '%s | Haven',
  },
  description:
    'Haven is a dependable home cleaning service for busy households. Calm, structured, and consistent care that keeps your space clear, fresh, and ready for real life.',
  openGraph: {
    type: 'website',
    url: 'https://haven-landing-page.vercel.app',
    title: 'Haven — Coastal home care, calmly maintained',
    description:
      'Dependable home care for busy households. We handle the upkeep with precision so your space stays clear, fresh, and ready for real life.',
    siteName: 'Haven',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Haven — Coastal home care, calmly maintained',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haven — Coastal home care, calmly maintained',
    description:
      'Dependable home care for busy households. We handle the upkeep with precision so your space stays clear, fresh, and ready for real life.',
    images: ['/images/hero.png'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#eaf1f4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased">
        <ScrollToTopOnRefresh />
        <ScrollAnimator />
        {children}
        {Boolean(process.env.VERCEL) && <Analytics />}
      </body>
    </html>
  )
}
