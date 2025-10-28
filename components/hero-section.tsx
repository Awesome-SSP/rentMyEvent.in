"use client"

import React, { useRef } from "react"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  return (
    <section className="diagonal-bg-dark py-12 md:py-16 overflow-x-hidden relative">
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-5 w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB3D9] to-[#E6D5FF] opacity-20 blur-2xl animate-float pointer-events-none"></div>
      <div className="absolute top-32 right-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#FFB3D9] opacity-15 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-[#B3F0E8] to-[#E6D5FF] opacity-10 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-[#6B4E71] leading-tight animate-fade-in-up relative inline-block w-full ultra-smooth-reveal">
          <span className="aurora-wave font-extrabold">Premium Event Rental</span> & <span className="text-[#6B4E71] font-bold">Management Solutions</span>
        </h2>

        <p className="text-center text-[#8B6B8D] text-base md:text-lg mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-200 aurora-wave font-medium">
          Comprehensive equipment rental and professional event management services across Delhi NCR
        </p>
      </div>

      {/* Full-width video stretching to viewport edges */}
      <div className="relative w-full">
        <div className="w-full h-104 md:h-120 lg:h-106 xl:h-[400px] overflow-hidden bg-gray-200">
          <video
            ref={videoRef}
            src="/slidervideo.mp4"
            poster="/professional-event-setup-with-equipment.jpg"
            className="w-full h-full object-cover"
            playsInline
            muted
            loop
            autoPlay
            preload="auto"
          />
        </div>

        {/* Overlapping cards positioned over the bottom half of the video */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {([
                { value: "10+", label: "Years of Experience" },
                { value: "5,000+", label: "Successful Events" },
                { value: "2,500+", label: "Clients Served" },
                { value: "15,000+", label: "Equipment Units" },
              ]).map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-white via-pink-50 to-purple-50 border-2 border-pink-200 rounded-xl p-4 md:p-6 lg:p-8 text-center shadow-lg backdrop-blur-sm card-hover-lift shadow-soft-hover aurora-wave"
                  style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
                >
                  <p className="gradient-pink-lavender text-xl md:text-2xl lg:text-3xl font-black mb-1">{stat.value}</p>
                  <p className="text-[#6B4E71] font-bold text-xs md:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to account for overlapping cards */}
      <div className="h-16 md:h-20 lg:h-24"></div>
    </section>
  )
}
