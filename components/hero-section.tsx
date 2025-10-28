"use client"

import React, { useRef } from "react"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-gradient-to-b from-[#FEF9F3] via-[#FFE6F0]/30 to-white overflow-x-hidden">
      {/* Premium Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#FFB3D9]/20 to-[#E6D5FF]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-32 right-0 w-80 h-80 bg-gradient-to-bl from-[#E6D5FF]/15 to-[#B3F0E8]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-[#FFB3D9]/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10 py-8 md:py-12">
        {/* Premium Hero Title with 3D Text */}
        <div className="text-center mb-6 md:mb-8 animate-slide-up-blur">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4">
            <span className="bg-gradient-to-r from-[#FF6B9D] via-[#FFB3D9] to-[#E6D5FF] bg-clip-text text-transparent drop-shadow-lg">
              Premium Event Rental
            </span>
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#6B4E71] mb-2">
            & Management Solutions
          </h1>
        </div>

        {/* Subheading with subtle glow */}
        <p className="text-center text-[#8B6B8D] text-base md:text-lg lg:text-xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200 font-medium">
          Comprehensive equipment rental and professional event management services across Delhi NCR.
          <span className="block mt-2 text-[#FF6B9D] font-bold">Experience Excellence, Delivered.</span>
        </p>

        {/* CTA Buttons with Premium Styling */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16 animate-fade-in-up animate-delay-300">
          <button className="btn-pro px-8 md:px-10 py-3 md:py-4 rounded-lg font-bold text-lg shadow-premium-lg hover:shadow-premium-hover transform hover:-translate-y-1">
            Get Started Today
          </button>
          <button className="px-8 md:px-10 py-3 md:py-4 rounded-lg font-bold text-lg border-2 border-[#FF6B9D] text-[#FF6B9D] bg-white hover:bg-[#FFE6F0] transition-all duration-300 transform hover:-translate-y-1 shadow-premium">
            View Services
          </button>
        </div>
      </div>

      {/* Full-width Video with Premium Border and Shadow */}
      <div className="relative w-full px-3 sm:px-4 lg:px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-premium-lg animate-slide-down-blur">
            <div className="w-full h-80 sm:h-96 md:h-[450px] lg:h-[500px] xl:h-[600px] overflow-hidden bg-gray-300 border-2 border-[#FFB3D9]/30">
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
          </div>

          {/* Premium Statistics Cards - Overlapping */}
          <div className="relative -mt-16 md:-mt-24 lg:-mt-32 px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {([
                { value: "10+", label: "Years Experience", icon: "⭐" },
                { value: "5,000+", label: "Events Managed", icon: "🎉" },
                { value: "2,500+", label: "Happy Clients", icon: "👥" },
                { value: "15,000+", label: "Equipment Units", icon: "📦" },
              ]).map((stat, idx) => (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-white to-[#FEF9F3] border-2 border-[#FFB3D9] rounded-2xl p-6 md:p-8 text-center shadow-premium-lg hover:shadow-premium-hover card-hover-lift backdrop-blur-sm"
                  style={{ animationDelay: `${(idx + 1) * 80}ms` }}
                >
                  <p className="text-4xl md:text-5xl font-black mb-2">{stat.icon}</p>
                  <p className="bg-gradient-to-r from-[#FF6B9D] to-[#E6D5FF] bg-clip-text text-transparent text-2xl md:text-3xl font-black mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[#6B4E71] font-bold text-sm md:text-base group-hover:text-[#FF6B9D] transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for overlapping cards */}
      <div className="h-20 md:h-32 lg:h-40"></div>
    </section>
  )
}
