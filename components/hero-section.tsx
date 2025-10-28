"use client"

import React, { useRef } from "react"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  return (
    <section className="diagonal-bg-dark py-12 md:py-16 overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-[#1a1a1a] leading-tight">
          Premium Event Rental & Management Solutions
        </h2>

        <p className="text-center text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Comprehensive equipment rental and professional event management services across Delhi NCR
        </p>
      </div>

      {/* Full-width video stretching to viewport edges */}
      <div className="relative w-full">
        <div className="w-full h-64 md:h-80 lg:h-96 xl:h-[400px] overflow-hidden bg-gray-200">
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
                  className="bg-white border border-gray-200/60 rounded-lg p-4 md:p-6 lg:p-8 text-center hover:shadow-lg transition-all duration-300 shadow-md backdrop-blur-sm"
                >
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#5a3a7a] mb-1">{stat.value}</p>
                  <p className="text-gray-600 font-medium text-xs md:text-sm">{stat.label}</p>
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
