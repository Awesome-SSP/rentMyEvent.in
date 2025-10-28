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
      className={"py-16 md:py-28 services-animate relative" + (inView ? " in-view" : "")}
      aria-label="Our Rental Services"
    >
      {/* Floating decorative elements */}
      <div className="absolute top-10 right-5 w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB3D9] to-[#E6D5FF] opacity-15 blur-2xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-32 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#B3F0E8] opacity-10 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "1.5s" }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#6B4E71] animate-fade-in-down">Our Rental Services</h2>
        <p className="text-center text-[#8B6B8D] mb-16 max-w-2xl mx-auto text-lg font-medium animate-fade-in-up animate-delay-200">
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
                className="service-card bg-white border-2 border-pink-200 rounded-lg p-6 card-hover-lift shadow-soft animate-slide-up"
                style={{ ...cardStyle, animationDelay: `${idx * 100}ms` }}
                aria-hidden={!inView}
              >
                <div className="bg-gradient-to-br from-[#FFB3D9] to-[#E6D5FF] w-12 h-12 rounded-md flex items-center justify-center mb-4 shadow-soft">
                  <Icon className="w-6 h-6 text-[#FF6B9D]" />
                </div>
                <h3 className="text-lg font-semibold text-[#6B4E71] mb-3">{service.title}</h3>
                <p className="text-[#8B6B8D] text-sm mb-6 leading-relaxed font-medium">{service.description}</p>
                <Button className="w-full btn-premium text-white font-semibold text-sm">
                  Learn More
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
