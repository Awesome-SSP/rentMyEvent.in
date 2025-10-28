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
      className={
        "section-diag section-diag--a py-16 md:py-28 welcome-animate" + (inView ? " in-view" : "")
      }
      style={{
        backgroundImage:
          "linear-gradient(135deg, #1da1f2 0%, #1da1f2 50%, #00c853 50%, #00c853 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* image - slides in from left */}
          <div className="relative order-2 md:order-1 welcome-card welcome-img" style={{ ["--j" as any]: 0 }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#5a3a7a]/10 to-[#2a8a99]/10 rounded-lg" />
            <img
              src="/professional-event-setup-with-modern-equipment.jpg"
              alt="Professional event setup"
              className="relative rounded-lg shadow-lg border border-gray-200/50 block"
              loading="lazy"
            />
          </div>

          {/* text - slides in from right */}
          <div className="order-1 md:order-2 space-y-4 animate-fade-in-right animate-delay-200">
            <div className="welcome-card welcome-text animate-fade-in-up animate-delay-300" style={{ ["--j" as any]: 1 }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a1a1a] leading-tight relative inline-block">
                Welcome to <span className="bg-gradient-to-r from-[#2cc16f] to-[#ff9700] bg-clip-text text-transparent font-extrabold">Rent My Event</span>
                <div className="h-1 bg-gradient-to-r from-[#2cc16f] via-[#ff9700] to-[#dc5f5f] rounded-full absolute -bottom-2 left-0 right-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </h2>
            </div>

            <div className="welcome-card welcome-text animate-fade-in-up animate-delay-400" style={{ ["--j" as any]: 2 }}>
              <p className="text-lg text-gray-700 leading-relaxed">
                We deliver comprehensive event rental and management solutions tailored to your specific needs.
              </p>
            </div>

            <div className="welcome-card welcome-text animate-fade-in-up animate-delay-500" style={{ ["--j" as any]: 3 }}>
              <p className="text-base text-gray-600 leading-relaxed">
                From premium audio-visual equipment to complete event coordination, our experienced team ensures every
                detail is executed with precision and professionalism.
              </p>
            </div>

            <div className="welcome-card welcome-text animate-bounce animate-delay-600" style={{ ["--j" as any]: 4 }}>
              <p className="text-base italic text-[#2a8a99] font-medium">"Excellence in every event, every time."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
