"use client"

import React, { useRef } from "react"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  return (
    <section className="diagonal-bg-dark py-12 md:py-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-[#1a1a1a] leading-tight">
          Premium Event Rental & Management Solutions
        </h2>

        <p className="text-center text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Comprehensive equipment rental and professional event management services across Delhi NCR
        </p>
      </div>

      {/* full-bleed video: placed outside the constrained container so it expands evenly both sides,
          clipped by overflow-hidden on the section, centered, with rounded corners */}
      <div className="w-full">
        <div className="mx-auto w-screen max-w-none px-0">
          <div className="w-full h-40 md:h-52 lg:h-56 xl:h-[300px] overflow-hidden border border-gray-300/50 bg-gray-200 mx-auto">
            <video
              ref={videoRef}
              src="/slidervideo.mp4"
              poster="/professional-event-setup-with-equipment.jpg"
              className="w-[120%] max-w-none h-full object-cover block mx-auto -translate-x-1/2 relative left-1/2"
              playsInline
              muted
              loop
              autoPlay
              preload="auto"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {([
            { value: "10+", label: "Years of Experience" },
            { value: "5,000+", label: "Successful Events" },
            { value: "2,500+", label: "Clients Served" },
            { value: "15,000+", label: "Equipment Units" },
          ]).map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200/60 rounded-lg p-6 md:p-8 text-center hover:shadow-md transition-shadow"
            >
              <p className="text-2xl md:text-3xl font-bold text-[#5a3a7a] mb-1">{stat.value}</p>
              <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
