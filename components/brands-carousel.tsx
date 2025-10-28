"use client"

import React from "react"

export default function BrandsCarousel() {
  const brands = [
    { name: "Brand 1", logo: "/brandimage/brand-1.webp" },
    { name: "Brand 2", logo: "/brandimage/brand-2.webp" },
    { name: "Brand 3", logo: "/brandimage/brand-3.webp" },
    { name: "Brand 4", logo: "/brandimage/brand-4.webp" },
    { name: "Brand 5", logo: "/brandimage/brand-5.webp" },
    { name: "Brand 6", logo: "/brandimage/brand-6.webp" },
  ]

  // Triple the brands for smoother infinite scroll
  const infiniteBrands = [...brands, ...brands, ...brands]

  return (
    <section className="section-diag section-diag--a py-12 md:py-16 logos-section overflow-hidden" aria-label="Brands Trusted Us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="logos-title">Brands Trusted Us</h2>
        <p className="text-sm text-gray-600 mb-8">Leading companies choose us for their event management needs</p>

        <div className="relative w-full overflow-hidden">
          {/* First row - moving left to right */}
          <div className="flex mb-6 animate-marquee-left w-max">
            {infiniteBrands.map((brand, i) => (
              <div
                key={`left-${i}`}
                className="flex-shrink-0 mx-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-3 w-28 h-16 flex items-center justify-center border border-gray-200"
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

          {/* Second row - moving right to left */}
          <div className="flex animate-marquee-right w-max">
            {infiniteBrands.map((brand, i) => (
              <div
                key={`right-${i}`}
                className="flex-shrink-0 mx-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-3 w-28 h-16 flex items-center justify-center border border-gray-200"
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

      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 20s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 20s linear infinite;
        }

        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
