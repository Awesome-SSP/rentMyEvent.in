"use client"

import React, { useRef, useEffect, useState } from "react"

export default function ServicesGrid() {
  const services = [
    { title: "Brand Product Launch", image: "/icon/Brand Product Launch (3).gif" },
    { title: "Cultural Event", image: "/icon/Cultural Event (3).gif" },
    { title: "Fashion Show", image: "/icon/Fashion Show.gif" },
    { title: "Award Night", image: "/icon/Award Night (3).gif" },
    { title: "Live Show", image: "/icon/Live Show.gif" },
    { title: "Exhibition & Stall", image: "/icon/Exhibition & Stall.gif" },

    // keep Corporate Event and Mall Activity as requested
    { title: "Corporate Event", image: "/corporate-event.jpg" },
    { title: "Mall Activity Organize", image: "/mall-activity-event.jpg" },

    { title: "Projector On Rent", image: "/icon/projector.gif" },
    { title: "P A System on Rent", image: "/icon/P A System on Rent.gif" },
    { title: "Light & Sound on Rent", image: "/icon/Light & Sound on Rent.gif" },
    { title: "A & V Equipment on Rent", image: "/icon/A & V Equipment on Rent (2).gif" },
    { title: "Conference System on Rent", image: "/icon/Conference System on Rent (2).gif" },
    { title: "Plasma TV on Rent", image: "/icon/Plasma TV on Rent.gif" },
    { title: "LED Wall on Rent", image: "/icon/LED Wall on Rent.gif" },
    { title: "Karaoke Machine On Rent", image: "/icon/Karaoke Machine On Rent (2).gif" },
    { title: "Video Confrensing", image: "/icon/Video Confrensing (2).gif" },
  ]

  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mq?.matches ?? false)
    const mqHandler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    try {
      mq?.addEventListener?.("change", mqHandler)
    } catch {
      mq?.addListener?.(mqHandler)
    }

    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => {
      obs.disconnect()
      try {
        mq?.removeEventListener?.("change", mqHandler)
      } catch {
        mq?.removeListener?.(mqHandler)
      }
    }
  }, [])

  const DURATION = 1200 // ms
  const EASING = "cubic-bezier(.2,.8,.25,1)"
  const STAGGER = 160 // ms

  return (
    <section ref={ref} className="diagonal-bg-dark py-16 md:py-24" aria-label="Services & Equipment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1a1a1a]">Services & Equipment</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Comprehensive rental solutions for every event type</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, idx) => {
            const delay = prefersReducedMotion ? 0 : idx * STAGGER
            const cardStyle: React.CSSProperties = {
              opacity: inView || prefersReducedMotion ? 1 : 0,
              transform: inView || prefersReducedMotion ? "translateY(0) scale(1)" : "translateY(28px) scale(0.985)",
              transition: `opacity ${DURATION}ms ${EASING} ${delay}ms, transform ${DURATION}ms ${EASING} ${delay}ms`,
              ["--k" as any]: idx,
            }

            const imgStyle: React.CSSProperties = {
              transform: inView || prefersReducedMotion ? "scale(1)" : "scale(1.06)",
              transition: `transform ${Math.round(DURATION * 0.9)}ms ${EASING} ${delay}ms`,
            }

            return (
              <div
                key={service.title}
                className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer service-card"
                style={cardStyle}
                aria-hidden={!inView}
              >
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  loading="lazy"
                  style={imgStyle}
                  className="w-full h-full object-cover block"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex items-center justify-center">
                  <p className="text-white font-semibold text-center px-4 text-sm md:text-base">{service.title}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
