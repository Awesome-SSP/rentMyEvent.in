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

  const longList = [...brands, ...brands]

  return (
    <section className="section-diag section-diag--b py-12 md:py-16 logos-section" aria-label="Brands Trusted Us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="logos-title">Brands Trusted Us</h2>
        <p className="text-sm text-gray-600 mb-6">Leading companies choose us for their event management needs</p>

        <div className="logos-container">
          <div className="logos-row" aria-hidden="true">
            <div className="track" role="presentation">
              {longList.map((b, i) => (
                <div className="logo-card" key={`t1-${i}`}>
                  <img src={b.logo} alt={b.name} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="logos-row" aria-hidden="true">
            <div className="track reverse" role="presentation">
              {longList.map((b, i) => (
                <div className="logo-card" key={`t2-${i}`}>
                  <img src={b.logo} alt={b.name} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
