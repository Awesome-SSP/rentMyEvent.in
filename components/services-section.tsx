"use client"

import React, { useRef, useEffect, useState, Suspense } from "react"
import { Zap, Projector, Mic2, Video, Monitor, Speaker } from "lucide-react"
import { Button } from "@/components/ui/button"

// Lazy loading component for floating decorations
const LazyFloatingDecoration = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return isVisible ? <>{children}</> : null
}

// Lazy service card component
const LazyServiceCard = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<div className="h-80 animate-pulse bg-gray-200 rounded-2xl" />}>{children}</Suspense>
}

export default function ServicesSection() {
  const services = [
    {
      icon: Zap,
      title: "LED Wall Rentals",
      description: "High-resolution LED displays for impactful visual presentations",
      emoji: "⚡",
      color: "from-[#6366F1] to-[#8B5CF6]"
    },
    {
      icon: Projector,
      title: "Projector Solutions",
      description: "Professional-grade projectors for conferences and events",
      emoji: "🎬",
      color: "from-[#8B5CF6] to-[#EC4899]"
    },
    {
      icon: Mic2,
      title: "Conference Systems",
      description: "Advanced audio and conferencing equipment for seamless communication",
      emoji: "🎤",
      color: "from-[#EC4899] to-[#F43F5E]"
    },
    {
      icon: Video,
      title: "Video Conference",
      description: "Complete video conferencing solutions for hybrid events",
      emoji: "📹",
      color: "from-[#F43F5E] to-[#06B6D4]"
    },
    {
      icon: Monitor,
      title: "Plasma TV on Rent",
      description: "High-definition plasma/LED displays suitable for exhibitions, lobbies and VIP areas",
      emoji: "📺",
      color: "from-[#06B6D4] to-[#6366F1]"
    },
    {
      icon: Speaker,
      title: "Audio Visual Equipment",
      description: "Full AV setups including mixers, speakers, mics and cabling for any event scale",
      emoji: "🔊",
      color: "from-[#10B981] to-[#8B5CF6]"
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
      className="relative py-20 md:py-40 bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#2D1B4E] overflow-hidden"
      aria-label="Our Rental Services"
    >
      {/* Subtle floating decorations (reduced for pro theme) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 3D Geometric Dots */}
        <Suspense fallback={null}>
          <LazyFloatingDecoration>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-gradient-to-r from-[#6366F1] to-[#EC4899] rounded-full animate-float-slow opacity-60"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + (i % 3) * 30}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </LazyFloatingDecoration>
        </Suspense>

        {/* Stars removed in pro mode */}

        {/* Floating Particles */}
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-gradient-to-bl from-[#8B5CF6]/10 to-[#6366F1]/5 rounded-full blur-3xl animate-service-card-float"></div>
        <div className="absolute bottom-0 -left-20 w-96 h-96 bg-gradient-to-tr from-[#EC4899]/8 to-transparent rounded-full blur-3xl animate-service-card-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 3D Section Header */}
        <div className="text-center mb-20 space-y-8 animate-slide-up-blur">
          <div className="inline-block relative">
            <span className="px-6 py-3 bg-gradient-to-r from-[#6366F1]/20 to-[#8B5CF6]/20 border border-[#6366F1]/30 rounded-full text-sm font-bold text-[#6366F1] backdrop-blur-xl">Premium 3D Solutions</span>

            {/* Floating Icons around Badge */}
            {/* Removed floating emoji around badge for professional tone */}
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white relative">
            Everything for Your
            <br />
            <span className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent animate-gradient-x">
              Perfect Event
            </span>

            {/* 3D Text Shadow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent blur-sm opacity-30 -z-10">
              Everything for Your Perfect Event
            </div>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
            From stunning 3D visuals to crystal-clear audio, we provide everything you need to make your event
            <span className="text-[#6366F1] font-bold"> absolutely unforgettable</span>.
          </p>
        </div>

        {/* 3D Services Grid with Floating Objects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            const delay = idx * STAGGER
            const cardStyle: React.CSSProperties = {
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0) rotateY(0deg) scale(1)" : "translateY(50px) rotateY(15deg) scale(0.9)",
              transition: `opacity ${DURATION}ms ${EASING} ${delay}ms, transform ${DURATION}ms ${EASING} ${delay}ms`,
              ["--k" as any]: idx,
            }

            return (
              <LazyServiceCard key={service.title}>
                <div
                  className="group relative bg-gradient-to-br from-[#0A0E27]/80 via-[#1a1f3a]/80 to-[#2D1B4E]/80 backdrop-blur-xl rounded-3xl p-8 border border-[#6366F1]/20 hover:border-[#EC4899]/40 shadow-2xl hover:shadow-[#6366F1]/25 transform hover:scale-105 hover:-translate-y-6 hover:rotate-2 transition-all duration-700 animate-service-card-float overflow-hidden"
                  style={{
                    ...cardStyle,
                    animationDelay: `${idx * 0.5}s`
                  }}
                  aria-hidden={!inView}
                >
                  {/* 3D Glow Effects */}
                  <div className={`absolute -inset-px bg-gradient-to-br ${service.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-sm`}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>

                  {/* Floating Particles around Card */}
                  <Suspense fallback={null}>
                    <LazyFloatingDecoration>
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-2 h-2 bg-gradient-to-r ${service.color} rounded-full animate-particle-drift opacity-0 group-hover:opacity-60`}
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${10 + i * 20}%`,
                            animationDelay: `${i * 0.3}s`
                          }}
                        />
                      ))}
                    </LazyFloatingDecoration>
                  </Suspense>

                  {/* 3D Icon Container */}
                  <div className="relative mb-8 perspective-1000">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 animate-card-glow-pulse relative z-10`}>
                      <Icon className="w-10 h-10 text-white drop-shadow-lg" />

                      {/* Emoji removed for professional tone */}
                    </div>

                    {/* 3D Shadow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-lg opacity-30 transform translate-y-2 scale-110`}></div>
                  </div>

                  {/* Content with 3D Effects */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-500">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-8 leading-relaxed font-medium">
                      {service.description}
                    </p>

                    {/* 3D Learn More Button */}
                    <div className={`flex items-center gap-3 text-white font-bold group-hover:gap-4 transition-all duration-300 p-3 rounded-xl bg-gradient-to-r ${service.color} transform group-hover:scale-105`}>
                      <span>Explore Now</span>
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-b-3xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>

                  {/* Corner Decorations */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white/20 rounded-full animate-ping-slow opacity-0 group-hover:opacity-100"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-twinkle"></div>
                </div>
              </LazyServiceCard>
            )
          })}
        </div>

        {/* 3D CTA Section with Floating Objects */}
        <div className="mt-24 text-center animate-fade-in-up animate-delay-500 relative">
          {/* Floating decorations removed in pro mode */}

          <div className="inline-block space-y-8 relative bg-gradient-to-br from-[#0A0E27]/60 via-[#1a1f3a]/60 to-[#2D1B4E]/60 backdrop-blur-xl p-12 rounded-3xl border border-[#6366F1]/20">
            {/* 3D Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 to-[#EC4899]/10 rounded-3xl blur-xl"></div>

            <div className="relative z-10">
              <p className="text-xl text-gray-300 font-medium mb-2">
                Need a custom 3D equipment package?
              </p>
              <p className="text-lg text-[#6366F1] font-bold">
                We'll create the <span className="text-[#EC4899]">perfect solution</span> for your event.
              </p>

              <button className="relative mt-8 px-12 py-5 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] text-white font-black rounded-2xl shadow-2xl hover:shadow-[#6366F1]/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 text-lg group overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899] via-[#F43F5E] to-[#6366F1] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <span className="relative z-10 flex items-center gap-3">Get Custom Quote</span>

                {/* Floating Sparkles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full animate-twinkle opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${10 + i * 15}%`,
                        top: `${20 + (i % 3) * 30}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
