import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import ContactToggle from '@/components/contact-toggle'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://rentmyevent.in'),
  title: 'Rent My Event | Event Rental Equipment & Event Organizers in Delhi NCR',
  description: 'From LED walls and projectors to corporate and wedding full setups — Rent My Event provides cost-effective event equipment rentals and 360° event management services in Delhi NCR. Celebrate tension-free with professional planning and punctual delivery!',
  generator: 'Next.js',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Karaoke machine on rent', 'Karaoke machine rental Delhi NCR', 'Rent karaoke machine', 'Karaoke machine rental Noida', 'Karaoke machine rental Faridabad', 'Karaoke machine rental Gurugram', 'Karaoke machine rental Delhi', 'Karaoke rental services', 'Rent karaoke machine for party', 'Karaoke machine hire', 'Karaoke setup on rent Delhi', 'Karaoke machine for home party', 'Portable karaoke system rental Delhi', 'Bluetooth karaoke speaker rental', 'Karaoke setup rental for birthday', 'Professional karaoke sound system rental', 'Karaoke system for weddings', 'Karaoke setup for corporate event', 'Karaoke machine booking online', 'Affordable karaoke rental in Delhi NCR', 'Karaoke setup with mic and screen on rent', 'Karaoke machine for small gatherings', 'Karaoke DJ setup rental Delhi', 'Karaoke machine near me', 'Best karaoke rental Delhi NCR', 'Karaoke machine rental Ghaziabad', 'Karaoke setup hire with LED screen', 'Home karaoke system rental Delhi', 'Party karaoke setup on rent',

    'audio visual', 'sound system rental', 'audio visual equipment rental services', 'av rentals', 'party speaker rental', 'lights and sounds rental', 'projector rental', 'projector on rent', 'wedding projector rental', 'event management companies in delhi', 'corporate event management companies in delhi ncr', 'led wall on rent in delhi', 'exhibition organizers in delhi', 'fashion show event management', 'corporate event planners in delhi', 'event planning companies in delhi', 'best event management company in delhi ncr', 'event management services delhi', 'sound system rental Delhi NCR', 'PA system on rent Delhi', 'DJ sound system rental Delhi', 'event sound and lighting rental Delhi', 'audio visual setup rental Delhi', 'LED wall on rent in Noida', 'LED wall on rent in Gurugram', 'LED screen rental for events Delhi', 'LED video wall rental Delhi NCR', 'Stage lighting rental Delhi', 'party lights on rent Delhi', 'HD projector rental Delhi', 'big screen rental for outdoor events', 'smart projector on rent Delhi NCR', 'sound system for weddings Delhi', 'conference sound system rental Delhi', 'audio system for corporate events', 'event audio visual rental near me',

    'event management company Delhi NCR', 'wedding planners in Delhi', 'corporate event management Delhi', 'exhibition and trade show organizers Delhi', 'fashion show organizers Delhi NCR', 'event planners in Delhi NCR', 'corporate event organizers Delhi', 'luxury wedding planners Delhi', 'affordable event management Delhi', 'event production services Delhi NCR', 'corporate event launch organizers Delhi', 'top event management companies in Delhi', 'event setup rental Delhi NCR', 'corporate conference planners Delhi', 'event organizers near Connaught Place', 'event company near Aerocity Delhi', 'event planning firm Delhi NCR', 'trade exhibition setup Delhi', 'event fabricators and decorators Delhi', 'party event organizers in Delhi',

    'party equipment rental Delhi NCR', 'DJ setup on rent Delhi', 'stage setup on rent Delhi', 'corporate event setup rental', 'birthday party sound and light rental Delhi', 'house party speaker rental Delhi', 'professional event production Delhi', 'conference equipment rental Delhi', 'audio visual stage setup Delhi NCR', 'event decor and light setup Delhi', 'event sound engineer rental Delhi', 'stage truss and lighting rental', 'corporate gala dinner event management', 'event setup company Delhi NCR', 'outdoor event sound system on rent', 'corporate launch setup Delhi', 'LED wall with sound system combo on rent', 'AV rental company Delhi NCR', 'party lighting and sound package Delhi'
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

        {/* dotLottie web component for animations */}
        <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.js" defer></script>

        {/* Structured Data: Organization, LocalBusiness, WebSite */}
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
            "description": "Rent My Event offers event equipment rentals and full event planning services in Delhi NCR.",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+91-7065441547",
              "contactType": "customer support",
              "areaServed": "IN",
              "availableLanguage": ["en", "hi"]
            }]
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Rent My Event",
            "url": "https://rentmyevent.in",
            "image": ["https://rentmyevent.in/logo192.png"],
            "telephone": "+91-7065441547",
            "priceRange": "₹₹",
            "areaServed": ["Delhi", "Noida", "Gurugram", "Ghaziabad", "Faridabad"],
            "servesCuisine": undefined,
            "sameAs": [
              "https://www.facebook.com/rentmyevent",
              "https://www.instagram.com/rentmyevent"
            ],
            "description": "Event equipment rentals (LED walls, projectors, PA systems) and 360° event management in Delhi NCR.",
            "knowsAbout": [
              "audio visual rental", "sound system on rent", "projector rental", "LED wall rental",
              "event management", "conference equipment rental"
            ]
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Rent My Event",
            "url": "https://rentmyevent.in",
            "inLanguage": ["en-IN"],
            "publisher": { "@type": "Organization", "name": "Rent My Event" }
          })
        }} />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <ContactToggle />
        <Analytics />
      </body>
    </html>
  )
}
