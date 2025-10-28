"use client"

import React, { useRef, useEffect, useState } from "react"

export default function WelcomeSection() {
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
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-32 bg-gradient-to-b from-[#FEF9F3] to-white overflow-hidden welcome-animate"
    >
      {/* Premium Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-gradient-to-br from-[#FFB3D9]/20 to-[#E6D5FF]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#E6D5FF]/15 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 md:order-1 welcome-card welcome-img" style={{ ["--j" as any]: 0 }}>
            <div className="relative group">
              {/* Glow Effect Background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#FFB3D9] to-[#E6D5FF] rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-premium-lg group-hover:shadow-premium-hover transition-all duration-500 transform group-hover:scale-105">
                <img
                  src="/professional-event-setup-with-modern-equipment.jpg"
                  alt="Professional event setup"
                  className="w-full h-auto object-cover rounded-3xl border-2 border-[#FFB3D9]"
                  loading="lazy"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B9D]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* 3D Card Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white border-2 border-[#FFB3D9] rounded-2xl px-6 py-4 shadow-premium-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 z-10">
                <p className="text-2xl font-black text-[#FF6B9D]">✨</p>
                <p className="text-xs font-black text-[#6B4E71] mt-1">Premium Quality</p>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="order-1 md:order-2 space-y-8 animate-slide-up-blur">
            {/* Main Title */}
            <div className="welcome-card welcome-text animate-fade-in-up" style={{ ["--j" as any]: 1 }}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                Welcome to <span className="bg-gradient-to-r from-[#FF6B9D] via-[#FFB3D9] to-[#E6D5FF] bg-clip-text text-transparent">Rent My Event</span>
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-[#FF6B9D] to-[#FFB3D9] rounded-full"></div>
            </div>

            {/* Tagline */}
            <div className="welcome-card welcome-text animate-fade-in-up animate-delay-200" style={{ ["--j" as any]: 2 }}>
              <p className="text-xl md:text-2xl text-[#6B4E71] leading-relaxed font-black">
                We deliver <span className="text-[#FF6B9D]">comprehensive event rental</span> and management solutions tailored to your specific needs.
              </p>
            </div>

            {/* Description */}
            <div className="welcome-card welcome-text animate-fade-in-up animate-delay-300" style={{ ["--j" as any]: 3 }}>
              <p className="text-lg text-[#8B6B8D] leading-relaxed font-bold">
                From premium audio-visual equipment to complete event coordination, our experienced team ensures every detail is executed with precision and professionalism.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in-up animate-delay-400">
              {[
                { icon: "⚡", label: "Fast Setup" },
                { icon: "🎯", label: "Expert Team" },
                { icon: "💎", label: "Premium Quality" },
                { icon: "✅", label: "24/7 Support" },
              ].map((feature, idx) => (
                <div
                  key={feature.label}
                  className="bg-gradient-to-br from-white to-[#FEF9F3] border-2 border-[#FFB3D9] rounded-xl p-4 text-center shadow-premium hover:shadow-premium-lg transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
                >
                  <p className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">{feature.icon}</p>
                  <p className="text-sm font-black text-[#6B4E71]">{feature.label}</p>
                </div>
              ))}
            </div>

            {/* Motivational Quote */}
            <div className="bg-gradient-to-br from-[#FFB3D9]/10 to-[#E6D5FF]/10 border-l-4 border-[#FF6B9D] pl-6 py-4 animate-fade-in-up animate-delay-500">
              <p className="text-lg italic text-[#FF6B9D] font-black">
                "Excellence in every event, every time."
              </p>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-in-up animate-delay-600">
              <button className="btn-pro px-8 md:px-10 py-4 md:py-5 rounded-lg font-black text-lg shadow-premium-lg hover:shadow-premium-hover transform hover:-translate-y-1 transition-all duration-300">
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
