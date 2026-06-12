import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { SITE } from '@/lib/constants'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

const avenirNextCondensedBold = localFont({
  src: '../../assets/fonts/avenir-next-condensed-bold.ttf',
  weight: '700',
  variable: '--font-display',
  display: 'swap',
})

const helvetica = localFont({
  src: [
    { path: '../../assets/fonts/helvetica-light.ttf', weight: '300' },
    { path: '../../assets/fonts/Helvetica.ttf', weight: '400' },
    { path: '../../assets/fonts/Helvetica-Bold.ttf', weight: '700' },
  ],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.tagline}`,
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${avenirNextCondensedBold.variable} ${helvetica.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
        <WhatsAppButton />
      </body>
    </html>
  )
}
