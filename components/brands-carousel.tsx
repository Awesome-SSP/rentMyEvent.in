"use client"

import React from "react"
import Marquee from "./ui/marquee"

export default function BrandsCarousel() {
  const brands = [
    { name: "Brand 1", logo: "/brandimage/brand-1.webp" },
    { name: "Brand 2", logo: "/brandimage/brand-2.webp" },
    { name: "Brand 3", logo: "/brandimage/brand-3.webp" },
    { name: "Brand 4", logo: "/brandimage/brand-4.webp" },
    { name: "Brand 5", logo: "/brandimage/brand-5.webp" },
    { name: "Brand 6", logo: "/brandimage/brand-6.webp" },
  ]

  return (
    <section className="relative overflow-hidden py-12 md:py-16 bg-[#F8FAFC] brands-section" aria-label="Brands Trusted Us">
      <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">Brands Trusted Us</h2>
          <p className="text-sm text-slate-600 mt-2">Leading companies choose us for their events</p>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Row 1 - left to right */}
          <div className="mb-6" aria-hidden="true">
            <Marquee direction="left" speedFactor={0.8} gapClassName="gap-3" className="" ariaLabel="Brand logos marquee left" edgeFade>
              {brands.map((b, i) => (
                <div key={`r1-${i}`} className="brand-tile">
                  <img src={b.logo} alt={b.name} loading="lazy" className="brand-img" />
                </div>
              ))}
            </Marquee>
          </div>

          {/* Row 2 - right to left */}
          <div aria-hidden="true">
            <Marquee direction="right" speedFactor={0.8} gapClassName="gap-3" className="" ariaLabel="Brand logos marquee right" edgeFade>
              {brands.map((b, i) => (
                <div key={`r2-${i}`} className="brand-tile">
                  <img src={b.logo} alt={b.name} loading="lazy" className="brand-img" />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .brand-tile {
          flex: 0 0 auto;
          width: 7rem; height: 4rem;
          display: flex; align-items: center; justify-content: center;
          background: white; border: 1px solid rgba(15,23,42,0.08);
          border-radius: 0.75rem; box-shadow: 0 1px 2px rgba(0,0,0,0.04);
        }
  .brand-img { max-width: 100%; max-height: 100%; object-fit: contain; }
        /* Soft ambient background for the brands section */
        .brands-section { position: relative; z-index: 0; }
        .brands-section::before {
          content: "";
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(600px 600px at 10% 15%, rgba(59,130,246,0.08), transparent 45%),
            radial-gradient(600px 600px at 90% 25%, rgba(16,185,129,0.08), transparent 45%),
            linear-gradient(180deg, #F8FAFC 0%, #ffffff 30%, #F8FAFC 100%);
        }
        /* Using shared JS-driven Marquee; no keyframes needed. */
      `}</style>
    </section>
  )
}
