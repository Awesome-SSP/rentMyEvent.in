import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals-premium.css'

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Rent My Event | Event Rental Equipment & Event Organizers in Delhi NCR',
  description: 'From LED walls and projectors to corporate and wedding full setups — Rent My Event provides cost-effective event equipment rentals and 360° event management services in Delhi NCR. Celebrate tension-free with professional planning and punctual delivery!',
  generator: 'Next.js',
  keywords: [
    'Karaoke machine on rent', 'Karaoke machine rental Delhi NCR', 'Rent karaoke machine', 'Karaoke machine rental Noida', 'Karaoke machine rental Faridabad',
    'Karaoke machine rental Gurugram', 'Karaoke machine rental Delhi', 'Karaoke rental services', 'Rent karaoke machine for party', 'Karaoke machine hire',
    'audio visual', 'sound system rental', 'audio visual equipment rental services', 'av rentals', 'party speaker rental', 'lights and sounds rental',
    'projector rental', 'projector on rent', 'wedding projector rental', 'event management companies in delhi', 'corporate event management companies in delhi ncr',
    'led wall on rent in delhi', 'exhibition organizers in delhi', 'fashion show event management', 'corporate event planners in delhi',
    'event planning companies in delhi', 'best event management company in delhi ncr', 'event management services delhi'
  ],
  authors: [{ name: 'Rent My Event Team' }],
  icons: {
    icon: '/fevicon.ico',
    shortcut: '/fevicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Rent My Event | Event Rental Equipment & Event Organizers in Delhi NCR',
    description: 'Rent My Event provides cost-effective event equipment rentals and 360° event management services in Delhi NCR.',
    url: 'https://rentmyevent.in',
    siteName: 'Rent My Event',
    type: 'website',
    images: [
      {
        url: 'https://rentmyevent.in/logo192.png',
        width: 192,
        height: 192,
        alt: 'Rent My Event Logo'
      }
    ]
  },
  twitter: {
    title: 'Rent My Event',
    card: 'summary_large_image'
  },
  verification: {
    google: 'qtZoJc7FxGqGMlLsO3MmZWXL-fcoi2JgyS7ODJhp-rQ'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XET17X6WE6"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XET17X6WE6');
          `
        }} />

        {/* Structured Data Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Rent My Event",
            "url": "https://rentmyevent.in",
            "logo": "https://rentmyevent.in/logo192.png",
            "sameAs": [
              "https://www.facebook.com/rentmyevent",
              "https://www.instagram.com/rentmyevent"
            ],
            "description": "Rent My Event offers event equipment rentals and full event planning services in Delhi NCR."
          })
        }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
