"use client"

import React, { useRef, useEffect, useState } from "react"
import { ArrowRight, Star } from "lucide-react"

export default function ServicesGrid() {
  const services = [
    { title: "Brand Product Launch", image: "/icon/Brand Product Launch (3).gif", category: "Events", color: "#8B5CF6" },
    { title: "Cultural Event", image: "/icon/Cultural Event (3).gif", category: "Events", color: "#06B6D4" },
    { title: "Fashion Show", image: "/icon/Fashion Show.gif", category: "Events", color: "#F59E0B" },
    { title: "Award Night", image: "/icon/Award Night (3).gif", category: "Events", color: "#EF4444" },
    { title: "Live Show", image: "/icon/Live Show.gif", category: "Events", color: "#10B981" },
    { title: "Exhibition & Stall", image: "/icon/Exhibition & Stall.gif", category: "Events", color: "#3B82F6" },
    { title: "Corporate Event", image: "/corporate-event.jpg", category: "Events", color: "#6366F1" },
    { title: "Mall Activity Organize", image: "/mall-activity-event.jpg", category: "Events", color: "#EC4899" },
    { title: "Projector On Rent", image: "/icon/projector.gif", category: "Equipment", color: "#8B5CF6" },
    { title: "P A System on Rent", image: "/icon/P A System on Rent.gif", category: "Equipment", color: "#06B6D4" },
    { title: "Light & Sound on Rent", image: "/icon/Light & Sound on Rent.gif", category: "Equipment", color: "#F59E0B" },
    { title: "A & V Equipment on Rent", image: "/icon/A & V Equipment on Rent (2).gif", category: "Equipment", color: "#EF4444" },
    { title: "Conference System on Rent", image: "/icon/Conference System on Rent (2).gif", category: "Equipment", color: "#10B981" },
    { title: "Plasma TV on Rent", image: "/icon/Plasma TV on Rent.gif", category: "Equipment", color: "#3B82F6" },
    { title: "LED Wall on Rent", image: "/icon/LED Wall on Rent.gif", category: "Equipment", color: "#6366F1" },
    { title: "Karaoke Machine On Rent", image: "/icon/Karaoke Machine On Rent (2).gif", category: "Equipment", color: "#EC4899" },
    { title: "Video Conferencing", image: "/icon/Video Confrensing (2).gif", category: "Equipment", color: "#F97316" },
  ]

  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // High-quality Lottie helper for contact animations
  function LottieIcon({ src, size = 24 }: { src: string; size?: number }) {
    const mount = useRef<HTMLSpanElement | null>(null)

    useEffect(() => {
      if (!mount.current) return

      // Clear any existing content
      mount.current.innerHTML = ''

      try {
        // Create dotlottie-player element (same as contact-toggle)
        const dot = document.createElement("dotlottie-player")
        dot.setAttribute("src", src)
        dot.setAttribute("background", "transparent")
        dot.setAttribute("speed", "1")
        dot.setAttribute("style", `width:${size}px;height:${size}px;display:inline-block;pointer-events:none;`)
        dot.setAttribute("autoplay", "")
        dot.setAttribute("loop", "")

        // Add to DOM
        mount.current.appendChild(dot)

        // Fallback after timeout if Lottie doesn't load
        setTimeout(() => {
          if (mount.current && !mount.current.querySelector('dotlottie-player canvas, dotlottie-player svg')) {
            const isWhatsApp = src.includes('33c74770')
            const fallbackIcon = isWhatsApp
              ? `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="white" style="filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                 </svg>`
              : `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="white" style="filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));">
                   <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 01.95-.27 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.27.95l-2.18 2.28z"/>
                 </svg>`
            mount.current.innerHTML = fallbackIcon
          }
        }, 1000)

      } catch (e) {
        // Immediate fallback if element creation fails
        const isWhatsApp = src.includes('33c74770')
        const fallbackIcon = isWhatsApp
          ? `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="white" style="filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));">
               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
             </svg>`
          : `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="white" style="filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));">
               <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 01.95-.27 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.27.95l-2.18 2.28z"/>
             </svg>`
        mount.current.innerHTML = fallbackIcon
      }
    }, [src, size])

    return <span ref={mount} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }} />
  }

  // Contact configuration
  const CONTACT_PHONE = "+917065441547"
  const WHATSAPP_TEXT = encodeURIComponent("Hi, I'm interested in your event services.")
  const whatsappUrl = `https://wa.me/${CONTACT_PHONE.replace(/\D/g, "")}?text=${WHATSAPP_TEXT}`
  const telUrl = `tel:${CONTACT_PHONE}`

  // Premium high-quality Lottie animations (same as contact-toggle)
  const WHATSAPP_LOTTIE = "https://assets-v2.lottiefiles.com/a/33c74770-1151-11ee-973a-3bc111579927/8x48PYQa8Y.lottie"
  const PHONE_LOTTIE = "https://assets-v2.lottiefiles.com/a/d06d5486-1177-11ee-b8d2-e705f11f27f7/rxihTzTPJW.lottie"

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="diagonal-bg-dark py-16 md:py-24" aria-label="Services & Equipment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1a1a1a] animate-fade-in-down">
          <span className="bg-gradient-to-r from-[#dc5f5f] via-[#ff9700] to-[#dc5f5f] bg-clip-text text-transparent">Services & Equipment</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg animate-fade-in-up animate-delay-200">
          <span className="bg-gradient-to-r from-[#2459ad] to-[#dc5f5f] bg-clip-text text-transparent font-semibold">Comprehensive rental solutions</span> for every event type
        </p>

        {/* Premium Services Grid Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 'var(--space-lg, 1.5rem)',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {services.map((service, idx) => {
            const delay = idx * 80 // Faster stagger for more services
            const isHovered = hoveredIndex === idx

            return (
              <div
                key={service.title}
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-xl, 1rem)',
                  overflow: 'hidden',
                  aspectRatio: '1.2',
                  cursor: 'pointer',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0) scale(1) rotateY(0deg)' : 'translateY(60px) scale(0.8) rotateY(-15deg)',
                  transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
                  boxShadow: isHovered
                    ? `0 25px 50px ${service.color}40, 0 0 30px ${service.color}30`
                    : '0 10px 30px rgba(0, 0, 0, 0.1)',
                  background: 'white',
                  border: `2px solid ${isHovered ? service.color : 'transparent'}`
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Container */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '65%',
                  overflow: 'hidden',
                  background: `linear-gradient(135deg, ${service.color}10, ${service.color}05)`
                }}>
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transform: isHovered ? 'scale(1.1) rotate(2deg)' : 'scale(1)',
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      filter: isHovered ? 'brightness(1.1) saturate(1.2)' : 'brightness(0.9)'
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: `linear-gradient(transparent, ${service.color}20)`
                  }}></div>

                  {/* Category Badge */}
                  <div style={{
                    position: 'absolute',
                    top: 'var(--space-sm, 0.5rem)',
                    right: 'var(--space-sm, 0.5rem)',
                    background: service.color,
                    color: 'white',
                    padding: 'var(--space-xs, 0.25rem) var(--space-sm, 0.5rem)',
                    borderRadius: 'var(--radius-md, 0.5rem)',
                    fontSize: 'var(--text-xs, 0.75rem)',
                    fontWeight: '600',
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                  }}>
                    {service.category}
                  </div>
                </div>

                {/* Content Area */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '35%',
                  background: 'white',
                  padding: 'var(--space-md, 1rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <h3 style={{
                    fontSize: 'var(--text-sm, 0.875rem)',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: 'var(--space-xs, 0.25rem)',
                    lineHeight: '1.3',
                    transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
                    transition: 'transform 0.3s ease'
                  }}>
                    {service.title}
                  </h3>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-xs, 0.25rem)'
                    }}>
                      <Star size={12} style={{ color: '#F59E0B', fill: '#F59E0B' }} />
                      <span style={{
                        fontSize: 'var(--text-xs, 0.75rem)',
                        color: '#64748b',
                        fontWeight: '600'
                      }}>
                        Premium
                      </span>
                    </div>

                    {/* Premium Contact Buttons - Mobile-Friendly & Larger */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'clamp(0.5rem, 2vw, 0.75rem)'
                    }}>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 'clamp(34px, 8vw, 42px)',
                          height: 'clamp(34px, 8vw, 42px)',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #25D366 0%, #20C061 50%, #128C7E 100%)',
                          color: 'white',
                          textDecoration: 'none',
                          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                          boxShadow: isHovered
                            ? '0 6px 16px rgba(37, 211, 102, 0.5), 0 0 20px rgba(37, 211, 102, 0.3)'
                            : '0 3px 8px rgba(37, 211, 102, 0.3), 0 0 10px rgba(37, 211, 102, 0.1)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          cursor: 'pointer',
                          // Mobile-specific styles
                          WebkitTapHighlightColor: 'transparent',
                          userSelect: 'none',
                          touchAction: 'manipulation',
                        }}
                        aria-label={`WhatsApp about ${service.title}`}
                        onMouseEnter={(e) => {
                          if (window.innerWidth > 768) { // Desktop only
                            e.currentTarget.style.transform = 'scale(1.15) rotate(5deg)'
                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 211, 102, 0.6), 0 0 25px rgba(37, 211, 102, 0.4)'
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (window.innerWidth > 768) { // Desktop only
                            e.currentTarget.style.transform = isHovered ? 'scale(1.05)' : 'scale(1)'
                            e.currentTarget.style.boxShadow = isHovered
                              ? '0 6px 16px rgba(37, 211, 102, 0.5), 0 0 20px rgba(37, 211, 102, 0.3)'
                              : '0 3px 8px rgba(37, 211, 102, 0.3), 0 0 10px rgba(37, 211, 102, 0.1)'
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                          }
                        }}
                        onTouchStart={(e) => {
                          // Mobile touch feedback
                          e.currentTarget.style.transform = 'scale(0.95)'
                          e.currentTarget.style.background = 'linear-gradient(135deg, #20C061 0%, #25D366 50%, #1AAD5A 100%)'
                        }}
                        onTouchEnd={(e) => {
                          // Reset mobile touch
                          setTimeout(() => {
                            e.currentTarget.style.transform = 'scale(1)'
                            e.currentTarget.style.background = 'linear-gradient(135deg, #25D366 0%, #20C061 50%, #128C7E 100%)'
                          }, 150)
                        }}
                      >
                        <LottieIcon src={WHATSAPP_LOTTIE} size={24} />
                      </a>

                      <a
                        href={telUrl}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 'clamp(34px, 8vw, 42px)',
                          height: 'clamp(34px, 8vw, 42px)',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 50%, #1D4ED8 100%)',
                          color: 'white',
                          textDecoration: 'none',
                          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                          boxShadow: isHovered
                            ? '0 6px 16px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)'
                            : '0 3px 8px rgba(59, 130, 246, 0.3), 0 0 10px rgba(59, 130, 246, 0.1)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          cursor: 'pointer',
                          // Mobile-specific styles
                          WebkitTapHighlightColor: 'transparent',
                          userSelect: 'none',
                          touchAction: 'manipulation',
                        }}
                        aria-label={`Call about ${service.title}`}
                        onMouseEnter={(e) => {
                          if (window.innerWidth > 768) { // Desktop only
                            e.currentTarget.style.transform = 'scale(1.15) rotate(-5deg)'
                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.6), 0 0 25px rgba(59, 130, 246, 0.4)'
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (window.innerWidth > 768) { // Desktop only
                            e.currentTarget.style.transform = isHovered ? 'scale(1.05)' : 'scale(1)'
                            e.currentTarget.style.boxShadow = isHovered
                              ? '0 6px 16px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)'
                              : '0 3px 8px rgba(59, 130, 246, 0.3), 0 0 10px rgba(59, 130, 246, 0.1)'
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                          }
                        }}
                        onTouchStart={(e) => {
                          // Mobile touch feedback
                          e.currentTarget.style.transform = 'scale(0.95)'
                          e.currentTarget.style.background = 'linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #1E40AF 100%)'
                        }}
                        onTouchEnd={(e) => {
                          // Reset mobile touch
                          setTimeout(() => {
                            e.currentTarget.style.transform = 'scale(1)'
                            e.currentTarget.style.background = 'linear-gradient(135deg, #3B82F6 0%, #2563EB 50%, #1D4ED8 100%)'
                          }, 150)
                        }}
                      >
                        <LottieIcon src={PHONE_LOTTIE} size={24} />
                      </a>
                    </div>

                    <ArrowRight
                      size={16}
                      style={{
                        color: service.color,
                        transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div style={{
                  position: 'absolute',
                  top: '-2px',
                  left: '-2px',
                  right: '-2px',
                  bottom: '-2px',
                  background: `linear-gradient(135deg, ${service.color}, transparent, ${service.color})`,
                  borderRadius: 'var(--radius-xl, 1rem)',
                  opacity: isHovered ? 0.6 : 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: -1,
                  filter: 'blur(8px)'
                }}></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
