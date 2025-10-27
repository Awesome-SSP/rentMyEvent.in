"use client"

import React, { useState, useEffect, useRef } from "react"

export default function BrandsCarousel() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const brands = [
    { name: "Kajaria", logo: "/brandimage/brand-1.webp" },
    { name: "Bata", logo: "/brandimage/brand-2.webp" },
    { name: "Pristyn Care", logo: "/brandimage/brand-3.webp" },
    { name: "Arena Animation", logo: "/brandimage/brand-4.webp" },
    { name: "M&M", logo: "/brandimage/brand-5.webp" },
    { name: "Equinox", logo: "/brandimage/brand-6.webp" },
  ]

  // Create multiple sets for continuous scroll
  const extendedBrands = [...brands, ...brands, ...brands, ...brands]

  return (
    <section 
      ref={sectionRef}
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
          linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)
        `,
        padding: 'var(--space-5xl) 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(90deg, rgba(6, 182, 212, 0.02) 1px, transparent 1px),
          linear-gradient(rgba(6, 182, 212, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        opacity: 0.3
      }}></div>

      <div className="premium-container">
            

        {/* Premium Brand Carousel */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 'var(--radius-2xl)',
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)',
          padding: 'var(--space-2xl) 0',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
          transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.8s'
        }}>
          {/* Gradient Overlays for Seamless Scroll */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '100px',
            background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
            zIndex: 2,
            pointerEvents: 'none'
          }}></div>
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '100px',
            background: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
            zIndex: 2,
            pointerEvents: 'none'
          }}></div>

          {/* First Row - Left to Right */}
          <div style={{
            display: 'flex',
            animation: isVisible ? 'smoothScrollLeft 35s linear infinite' : 'none',
            marginBottom: 'var(--space-xl)'
          }}>
            {extendedBrands.map((brand, index) => (
              <div
                key={`row1-${index}`}
                style={{
                  minWidth: '250px',
                  margin: '0 var(--space-lg)',
                  background: 'white',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-xl)',
                  border: '1px solid rgba(226, 232, 240, 0.8)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)'
                  e.currentTarget.style.borderColor = '#06B6D4'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
                  e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.8)'
                }}
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  style={{
                    width: '140px',
                    height: '70px',
                    objectFit: 'contain',
                    filter: 'grayscale(40%) brightness(0.9)',
                    transition: 'all 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%) brightness(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(40%) brightness(0.9)'
                  }}
                />
              </div>
            ))}
          </div>

          {/* Second Row - Right to Left */}
          <div style={{
            display: 'flex',
            animation: isVisible ? 'smoothScrollRight 30s linear infinite' : 'none'
          }}>
            {extendedBrands.slice().reverse().map((brand, index) => (
              <div
                key={`row2-${index}`}
                style={{
                  minWidth: '250px',
                  margin: '0 var(--space-lg)',
                  background: 'white',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-xl)',
                  border: '1px solid rgba(226, 232, 240, 0.8)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)'
                  e.currentTarget.style.borderColor = '#06B6D4'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
                  e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.8)'
                }}
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  style={{
                    width: '140px',
                    height: '70px',
                    objectFit: 'contain',
                    filter: 'grayscale(40%) brightness(0.9)',
                    transition: 'all 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%) brightness(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(40%) brightness(0.9)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Professional CSS Animations */}
      <style jsx>{`
        @keyframes smoothScrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        
        @keyframes smoothScrollRight {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        
        @media (max-width: 768px) {
          .premium-container > div:nth-child(2) {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: var(--space-lg) !important;
          }
        }
        
        @media (max-width: 480px) {
          .premium-container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
