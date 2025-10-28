"use client"

import React, { useEffect, useState } from "react"

export default function BrandsCarousel() {
  const brands = [
    { name: "Brand 1", logo: "/brandimage/brand-1.webp" },
    { name: "Brand 2", logo: "/brandimage/brand-2.webp" },
    { name: "Brand 3", logo: "/brandimage/brand-3.webp" },
    { name: "Brand 4", logo: "/brandimage/brand-4.webp" },
    { name: "Brand 5", logo: "/brandimage/brand-5.webp" },
    { name: "Brand 6", logo: "/brandimage/brand-6.webp" },
  ]

  const [offsetLeft, setOffsetLeft] = useState(0)
  const [offsetRight, setOffsetRight] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffsetLeft((prev) => (prev + 0.5) % 100)
      setOffsetRight((prev) => (prev - 0.5 + 100) % 100)
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 md:py-16 logos-section overflow-hidden" aria-label="Brands Trusted Us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="logos-title animate-fade-in-down text-center mb-3">
          <span className="bg-gradient-to-r from-[#FFB3D9] to-[#FF6B9D] bg-clip-text text-transparent">Brands </span>
          <span className="text-[#6B4E71]">Trusted Us</span>
        </h2>
        <p className="text-sm text-[#6B4E71] mb-8 animate-fade-in-up animate-delay-200 font-medium text-center">
          <span className="bg-gradient-to-r from-[#FFB3D9] to-[#E6D5FF] bg-clip-text text-transparent font-semibold">Leading companies</span> choose us for their event management needs
        </p>

        {/* First row - moving left to right */}
        <div className="relative w-full overflow-hidden mb-6">
          <div
            className="flex gap-6 whitespace-nowrap transition-transform duration-200 ease-linear"
            style={{
              transform: `translateX(-${offsetLeft * 0.8}%)`,
            }}
          >
            {[...brands, ...brands].map((brand, idx) => (
              <div
                key={`left-${idx}`}
                className="flex-shrink-0 bg-white rounded-lg shadow-soft card-hover-lift p-3 w-32 h-20 flex items-center justify-center border-2 border-pink-200"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second row - moving right to left */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-6 whitespace-nowrap transition-transform duration-200 ease-linear"
            style={{
              transform: `translateX(-${offsetRight * 0.8}%)`,
            }}
          >
            {[...brands, ...brands].map((brand, idx) => (
              <div
                key={`right-${idx}`}
                className="flex-shrink-0 bg-white rounded-lg shadow-soft card-hover-lift p-3 w-32 h-20 flex items-center justify-center border-2 border-pink-200"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
