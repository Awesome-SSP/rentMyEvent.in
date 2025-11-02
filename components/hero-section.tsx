"use client"

import React, { useRef } from "react"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  return (
    <section className="diagonal-bg-dark py-12 md:py-16 overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-[#0f172a] leading-tight animate-fade-in-up relative inline-block w-full text-elastic">
          {/* Animated, bubbly entry for the keyphrase with subtle gradient motion */}
          <span className="inline-block">
            <span className="bg-gradient-to-r from-[#ef4444] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent word">Premium</span>{' '}
            <span className="bg-gradient-to-r from-[#ef4444] via-[#f59e0b] to-[#3d8f14] bg-clip-text text-transparent word">Event</span>{' '}
            <span className="bg-gradient-to-r from-[#ef4444] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent word">Rental</span>
          </span>
          {' '} & {' '}
          {/* Clean, smooth entry for the qualifier */}
          <span className="inline-block">
            <span className="text-[#0f172a] word">Management</span>{' '}
            <span className="text-[#0f172a] word">Solutions</span>
          </span>
        </h2>

        <p className="text-center text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
          {/* Mobile: static text to avoid nowrap overflow; Desktop: typewriter */}
          <span className="hidden md:inline-block typewriter">
            Comprehensive equipment rental and professional event management services across Delhi NCR
          </span>
          <span className="inline-block md:hidden">
            Comprehensive equipment rental and professional event management services across Delhi NCR
          </span>
        </p>
      </div>

      {/* Full-width video stretching to viewport edges */}
      <div className="relative w-full">
        <div className="w-full aspect-[16/9] md:h-96 lg:h-[400px] overflow-hidden bg-gray-200">
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

        {/* Overlapping cards (desktop/tablet only) positioned over the bottom half of the video */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20">
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
                  className="bg-white border border-gray-200/60 rounded-lg p-4 md:p-6 lg:p-8 text-center hover:shadow-lg transition-all duration-300 shadow-md backdrop-blur-sm animate-card-hover animate-pop-in"
                  style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
                >
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#5a3a7a] mb-1">{stat.value}</p>
                  <p className="text-gray-600 font-medium text-xs md:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: marquee-style continuous scrolling */}
        <div className="md:hidden mt-4">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            {/* Marquee container: we duplicate the items to create a seamless loop */}
            <div className="marquee overflow-hidden">
              <div className="marquee__track flex items-stretch">
                {([
                  { value: "10+", label: "Years of Experience" },
                  { value: "5,000+", label: "Successful Events" },
                  { value: "2,500+", label: "Clients Served" },
                  { value: "15,000+", label: "Equipment Units" },
                ] as const)
                  .concat([
                    { value: "10+", label: "Years of Experience" },
                    { value: "5,000+", label: "Successful Events" },
                    { value: "2,500+", label: "Clients Served" },
                    { value: "15,000+", label: "Equipment Units" },
                  ])
                  .map((stat, idx) => (
                    <div
                      key={idx}
                      className="marquee__item min-w-[160px] flex-shrink-0 bg-white border border-gray-200/60 rounded-lg p-4 text-center shadow-sm"
                      aria-hidden={idx >= 4}
                    >
                      <p className="text-lg font-bold text-[#5a3a7a] mb-0.4">{stat.value}</p>
                      <p className="text-gray-600 text-xs">{stat.label}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Scoped styles for the marquee animation (runs only on mobile as this block is hidden on md+) */}
          <style jsx>{`
            .marquee { overflow: hidden; }
            .marquee__track { gap: 0.75rem; display: flex; align-items: stretch; animation: marquee 6s linear infinite; }
            .marquee__item { margin-right: 0.75rem; }
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            /* Make animation smoother on prefers-reduced-motion */
            @media (prefers-reduced-motion: reduce) {
              .marquee__track { animation: none; }
            }
          `}</style>
        </div>
      </div>

      {/* Spacer to account for overlapping cards (desktop only) */}
      <div className="hidden md:block h-20 lg:h-24"></div>
    </section>
  )
}
