"use client"

import React, { useRef, useEffect, useState } from "react"
import { Zap, Projector, Mic2, Video, Monitor, Speaker } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  const services = [
    {
      icon: Zap,
      title: "LED Wall Rentals",
      description: "High-resolution LED displays for impactful visual presentations",
    },
    {
      icon: Projector,
      title: "Projector Solutions",
      description: "Professional-grade projectors for conferences and events",
    },
    {
      icon: Mic2,
      title: "Conference Systems",
      description: "Advanced audio and conferencing equipment for seamless communication",
    },
    {
      icon: Video,
      title: "Video Conference",
      description: "Complete video conferencing solutions for hybrid events",
    },
    {
      icon: Monitor,
      title: "Plasma TV on Rent",
      description: "High-definition plasma/LED displays suitable for exhibitions, lobbies and VIP areas",
    },
    {
      icon: Speaker,
      title: "Audio Visual Equipment",
      description: "Full AV setups including mixers, speakers, mics and cabling for any event scale",
    },
  ]

  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  // Contact defaults — change these to your actual number or wire to env vars
  const CONTACT_PHONE = "+917065441547"
  const WHATSAPP_TEXT = encodeURIComponent("Hi, I'm interested in your event services.")
  const whatsappUrl = `https://wa.me/${CONTACT_PHONE.replace(/\D/g, "")}?text=${WHATSAPP_TEXT}`
  const telUrl = `tel:${CONTACT_PHONE}`

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // animation settings (inline so no global CSS changes needed)
  const DURATION = 1200 // ms
  const EASING = "cubic-bezier(.2,.8,.25,1)"
  const STAGGER = 160 // ms

  return (
    <section
      ref={ref}
      className={"diagonal-bg-purple py-16 md:py-28 services-animate" + (inView ? " in-view" : "")}
      aria-label="Our Rental Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1a1a1a]">Our Rental Services</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
          Comprehensive equipment rental solutions designed for professional events
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            const delay = idx * STAGGER
            const cardStyle: React.CSSProperties = {
              // start hidden; when inView -> visible with transform reset
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0) scale(1)" : "translateY(28px) scale(0.985)",
              transition: `opacity ${DURATION}ms ${EASING} ${delay}ms, transform ${DURATION}ms ${EASING} ${delay}ms`,
              // expose stagger as a CSS var in case you want to style from CSS later
              ["--k" as any]: idx,
            }

            return (
              <div
                key={service.title}
                className="service-card bg-white border border-gray-200/60 rounded-lg p-6 hover:shadow-lg transition-all hover:border-[#5a3a7a]/30"
                style={cardStyle}
                aria-hidden={!inView}
              >
                <div className="bg-[#5a3a7a]/10 w-12 h-12 rounded-md flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#5a3a7a]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                <Button className="w-full bg-[#5a3a7a] hover:bg-[#4a2a6a] text-white font-medium text-sm">
                  Learn More
                </Button>

                {/* Contact actions: WhatsApp and Call */}
                <div className="mt-4 flex gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm"
                    aria-label={`Message on WhatsApp about ${service.title}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
                      <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.373 0 .5 4.873.5 11.5c0 2.03.53 3.92 1.45 5.6L0 24l6.02-1.55A11.46 11.46 0 0012 23c6.627 0 11.999-4.873 11.999-11.5 0-3.08-1.21-5.86-3.479-7.97zM12 21.5c-1.02 0-2.02-.14-2.98-.41l-.21-.07-3.58.92.96-3.49-.14-.23A8.48 8.48 0 013.5 11.5 8.5 8.5 0 1112 21.5z" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={telUrl}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm"
                    aria-label={`Call about ${service.title}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 01.95-.27 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.27.95l-2.18 2.28z" />
                    </svg>
                    <span>Call</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
