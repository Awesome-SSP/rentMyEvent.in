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
      className="relative py-16 md:py-32 bg-gradient-to-b from-[#FEF9F3] via-white to-[#FFE6F0]/20 overflow-hidden"
      aria-label="Our Rental Services"
    >
      {/* Premium Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#FFB3D9]/15 to-[#E6D5FF]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#E6D5FF]/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-slide-up-blur">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-[#FF6B9D] via-[#FFB3D9] to-[#E6D5FF] bg-clip-text text-transparent">
              Our Rental Services
            </span>
          </h2>
          <p className="text-[#8B6B8D] mb-2 max-w-3xl mx-auto text-base md:text-lg font-bold animate-fade-in-up animate-delay-100 leading-relaxed">
            Comprehensive equipment rental solutions designed for <span className="text-[#FF6B9D]">professional events</span>
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-[#FFB3D9] to-[#E6D5FF] rounded-full mx-auto mt-4 animate-fade-in-up animate-delay-200"></div>
        </div>

        {/* Premium Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, idx) => {
            const Icon = service.icon
            const delay = idx * STAGGER
            const cardStyle: React.CSSProperties = {
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0) scale(1) rotateX(0deg)" : "translateY(40px) scale(0.92) rotateX(10deg)",
              transition: `opacity ${DURATION}ms ${EASING} ${delay}ms, transform ${DURATION}ms ${EASING} ${delay}ms`,
              ["--k" as any]: idx,
            }

            return (
              <div
                key={service.title}
                className="group relative service-card bg-gradient-to-br from-white to-[#FEF9F3] border-2 border-[#FFB3D9] rounded-2xl p-8 shadow-premium-lg hover:shadow-premium-hover card-hover-lift transform transition-all duration-500"
                style={cardStyle}
                aria-hidden={!inView}
              >
                {/* Premium Icon Background with 3D Effect */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFB3D9] to-[#E6D5FF] rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-[#FFB3D9] to-[#E6D5FF] w-16 h-16 rounded-2xl flex items-center justify-center shadow-premium transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon className="w-8 h-8 text-white font-bold" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-black text-[#6B4E71] mb-3 group-hover:text-[#FF6B9D] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#8B6B8D] text-sm mb-8 leading-relaxed font-bold group-hover:text-[#7B5E81] transition-colors duration-300">
                  {service.description}
                </p>

                {/* Premium Button */}
                <button className="btn-pro w-full py-3 rounded-lg font-black text-white shadow-premium group-hover:shadow-premium-hover transform group-hover:-translate-y-1 transition-all duration-300">
                  Learn More
                </button>

                {/* Accent Line Animation */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FF6B9D] to-[#FFB3D9] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 w-full"></div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center animate-fade-in-up animate-delay-400">
          <p className="text-[#6B4E71] text-lg font-bold mb-6">
            Need a custom solution? <span className="text-[#FF6B9D]">Get in touch with our team!</span>
          </p>
          <button className="btn-pro px-10 py-4 rounded-lg font-black text-lg shadow-premium-lg hover:shadow-premium-hover transform hover:-translate-y-1 transition-all duration-300">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  )
}
