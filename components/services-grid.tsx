"use client"

import React, { useRef, useEffect, useState } from "react"
import { ArrowRight, Star, Zap } from "lucide-react"

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
  const [activeFilter, setActiveFilter] = useState<string>("All")

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

  const filters = ["All", "Events", "Equipment"]
  const filteredServices = activeFilter === "All"
    ? services
    : services.filter(service => service.category === activeFilter)

  return (
    <section
      ref={ref}
      className="diagonal-bg-dark relative overflow-hidden"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: 'var(--space-2xl) 0'
      }}
    >
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.03
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
          borderRadius: '50%',
          animation: 'floatingSlow 12s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(135deg, #F59E0B, #EF4444)',
          borderRadius: '50%',
          animation: 'floatingSlow 10s ease-in-out infinite reverse'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Premium Animated Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--space-3xl)',
          position: 'relative'
        }}>
          {/* Floating Badge with Rich Animation */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-xs)',
            background: 'linear-gradient(135deg, #9F7AEA 0%, #4FD1C7 30%, #63B3ED 70%, #7C3AED 100%)',
            color: 'white',
            padding: 'var(--space-sm) var(--space-xl)',
            borderRadius: 'var(--radius-full)',
            fontSize: 'var(--text-sm)',
            fontWeight: '700',
            marginBottom: 'var(--space-xl)',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0) scale(1) rotateX(0deg)' : 'translateY(-40px) scale(0.7) rotateX(-15deg)',
            transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
            boxShadow: inView
              ? '0 20px 40px rgba(139, 92, 246, 0.4), 0 0 30px rgba(6, 182, 212, 0.3)'
              : '0 5px 15px rgba(139, 92, 246, 0.2)',
            animation: inView ? 'floatingBadge 3s ease-in-out infinite' : 'none',
            backgroundSize: '300% 300%',
            backgroundAnimation: inView ? 'gradientShift 4s ease-in-out infinite' : 'none'
          }}>
            <Zap
              size={18}
              style={{
                animation: inView ? 'iconSpin 2s linear infinite' : 'none',
                filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))'
              }}
            />
            <span style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              animation: inView ? 'textGlow 2s ease-in-out infinite alternate' : 'none'
            }}>
              Premium Solutions
            </span>
          </div>

          {/* Animated Main Title */}
          <h2 style={{
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            fontWeight: '900',
            marginBottom: 'var(--space-xl)',
            background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 30%, #4a5568 60%, #718096 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '0.95',
            letterSpacing: '-0.02em',
            position: 'relative'
          }}>
            {/* Animated words with staggered entrance */}
            <span style={{
              display: 'inline-block',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0) rotateY(0deg)' : 'translateX(-100px) rotateY(-90deg)',
              transition: 'all 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s',
              animation: inView ? 'slideInFromLeft 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s' : 'none'
            }}>
              Services
            </span>
            <span style={{
              background: 'linear-gradient(135deg, #9F7AEA 0%, #4FD1C7 50%, #63B3ED 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '300% 300%',
              margin: '0 0.3em',
              display: 'inline-block',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0) scale(1)' : 'translateY(80px) scale(0.3)',
              transition: 'all 1.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s',
              animation: inView ? 'bounceInScale 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s, colorShift 3s ease-in-out infinite 2s' : 'none',
              textShadow: inView ? '0 0 40px rgba(159, 122, 234, 0.8), 0 0 20px rgba(79, 209, 199, 0.6)' : 'none',
              filter: 'brightness(1.2) saturate(1.3)'
            }}>
              &
            </span>
            <span style={{
              display: 'inline-block',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0) rotateY(0deg)' : 'translateX(100px) rotateY(90deg)',
              transition: 'all 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s',
              animation: inView ? 'slideInFromRight 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s' : 'none'
            }}>
              Equipment
            </span>

            {/* Animated underline */}
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: inView ? '200px' : '0px',
              height: '4px',
              background: 'linear-gradient(90deg, #8B5CF6, #06B6D4, #3B82F6)',
              borderRadius: '2px',
              transition: 'width 2s cubic-bezier(0.34, 1.56, 0.64, 1) 1.2s',
              boxShadow: inView ? '0 0 20px rgba(139, 92, 246, 0.6)' : 'none'
            }}></div>
          </h2>

          {/* Animated Subtitle with Typewriter Effect */}
          <div style={{
            fontSize: 'var(--text-xl)',
            color: '#64748b',
            maxWidth: '800px',
            margin: '0 auto var(--space-xl)',
            lineHeight: '1.7',
            fontWeight: '400',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1.8s cubic-bezier(0.4, 0, 0.2, 1) 1s'
          }}>
            <span style={{
              animation: inView ? 'typewriter 3s steps(60) 1.5s forwards' : 'none',
              borderRight: inView ? '3px solid #06B6D4' : 'none',
              paddingRight: '2px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              width: inView ? '100%' : '0',
              display: 'inline-block'
            }}>
              Transforming events with cutting-edge technology and{' '}
              <span style={{
                background: 'linear-gradient(135deg, #4FD1C7 0%, #63B3ED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                textShadow: '0 0 20px rgba(79, 209, 199, 0.6), 0 0 10px rgba(99, 179, 237, 0.4)',
                filter: 'brightness(1.3) saturate(1.2)'
              }}>
                exceptional service
              </span>
            </span>
          </div>

          {/* Premium Animated Filter Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--space-lg)',
            marginBottom: 'var(--space-2xl)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.8)',
            transition: 'all 2s cubic-bezier(0.34, 1.56, 0.64, 1) 1.4s'
          }}>
            {filters.map((filter, index) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  position: 'relative',
                  background: activeFilter === filter
                    ? 'linear-gradient(135deg, #9F7AEA 0%, #4FD1C7 30%, #63B3ED 70%, #7C3AED 100%)'
                    : 'rgba(255, 255, 255, 0.12)',
                  color: activeFilter === filter ? 'white' : '#2d3748',
                  border: activeFilter === filter
                    ? 'none'
                    : '2px solid rgba(159, 122, 234, 0.4)',
                  padding: 'var(--space-md) var(--space-xl)',
                  borderRadius: 'var(--radius-xl)',
                  fontSize: 'var(--text-base)',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  backdropFilter: 'blur(20px)',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  minWidth: '120px',
                  boxShadow: activeFilter === filter
                    ? '0 20px 40px rgba(159, 122, 234, 0.5), 0 0 30px rgba(79, 209, 199, 0.4), 0 0 15px rgba(124, 58, 237, 0.3)'
                    : '0 8px 20px rgba(159, 122, 234, 0.15)',
                  transform: activeFilter === filter ? 'translateY(-2px) scale(1.05)' : 'translateY(0) scale(1)',
                  animation: inView ? `slideInFilter 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${1.6 + index * 0.2}s` : 'none',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== filter) {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(159, 122, 234, 0.25), rgba(79, 209, 199, 0.15))'
                    e.currentTarget.style.color = '#9F7AEA'
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(159, 122, 234, 0.3), 0 0 20px rgba(79, 209, 199, 0.2)'
                    e.currentTarget.style.borderColor = 'rgba(159, 122, 234, 0.6)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== filter) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'
                    e.currentTarget.style.color = '#2d3748'
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(159, 122, 234, 0.15)'
                    e.currentTarget.style.borderColor = 'rgba(159, 122, 234, 0.4)'
                  }
                }}
              >
                {/* Animated Background Shine */}
                {activeFilter === filter && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                    animation: 'shine 2s ease-in-out infinite',
                    pointerEvents: 'none'
                  }}></div>
                )}

                <span style={{
                  position: 'relative',
                  zIndex: 2,
                  textShadow: activeFilter === filter ? '0 2px 4px rgba(0, 0, 0, 0.2)' : 'none'
                }}>
                  {filter}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Compact Services Grid - Fits on One Screen */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 'var(--space-lg)',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {filteredServices.map((service, idx) => {
            const delay = idx * 80 // Faster stagger for more services
            const isHovered = hoveredIndex === idx

            return (
              <div
                key={service.title}
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-xl)',
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
                    top: 'var(--space-sm)',
                    right: 'var(--space-sm)',
                    background: service.color,
                    color: 'white',
                    padding: 'var(--space-xs) var(--space-sm)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--text-xs)',
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
                  padding: 'var(--space-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <h3 style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: 'var(--space-xs)',
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
                      gap: 'var(--space-xs)'
                    }}>
                      <Star size={12} style={{ color: '#F59E0B', fill: '#F59E0B' }} />
                      <span style={{
                        fontSize: 'var(--text-xs)',
                        color: '#64748b',
                        fontWeight: '600'
                      }}>
                        Premium
                      </span>
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
                  borderRadius: 'var(--radius-xl)',
                  opacity: isHovered ? 0.6 : 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: -1,
                  filter: 'blur(8px)'
                }}></div>
              </div>
            )
          })}
        </div>

        {/* Premium Animated Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 'var(--space-xl)',
          marginTop: 'var(--space-5xl)',
          maxWidth: '1000px',
          margin: 'var(--space-5xl) auto 0',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 2.2s cubic-bezier(0.34, 1.56, 0.64, 1) 1.8s'
        }}>
          {[
            { number: '17+', label: 'Premium Services', icon: '🎯', color: '#9F7AEA' },
            { number: '100%', label: 'Quality Guaranteed', icon: '⭐', color: '#4FD1C7' },
            { number: '24/7', label: 'Expert Support', icon: '🚀', color: '#68D391' },
            { number: '1K+', label: 'Events Delivered', icon: '🎉', color: '#F6AD55' }
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'var(--space-2xl)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                animation: inView ? `statsSlideIn 1s cubic-bezier(0.34, 1.56, 0.64, 1) ${2 + index * 0.2}s` : 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px) scale(1.08)'
                e.currentTarget.style.boxShadow = `0 30px 60px ${stat.color}50, 0 0 30px ${stat.color}40`
                e.currentTarget.style.borderColor = `${stat.color}80`
                e.currentTarget.style.background = `rgba(255, 255, 255, 0.15)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(159, 122, 234, 0.2)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
              }}
            >
              {/* Animated Background Glow */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: `radial-gradient(circle, ${stat.color}15 0%, transparent 70%)`,
                animation: inView ? 'rotateGlow 6s linear infinite' : 'none',
                pointerEvents: 'none'
              }}></div>

              {/* Icon */}
              <div style={{
                fontSize: '2.5rem',
                marginBottom: 'var(--space-md)',
                animation: inView ? 'bounceIcon 2s ease-in-out infinite' : 'none',
                filter: `drop-shadow(0 0 10px ${stat.color}60)`
              }}>
                {stat.icon}
              </div>

              {/* Animated Number */}
              <div style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: '900',
                background: `linear-gradient(135deg, ${stat.color} 0%, #7C3AED 50%, #4FD1C7 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 'var(--space-sm)',
                position: 'relative',
                zIndex: 2,
                animation: inView ? 'numberCount 2s ease-out' : 'none',
                textShadow: `0 0 20px ${stat.color}40`
              }}>
                {stat.number}
              </div>

              {/* Label */}
              <div style={{
                fontSize: 'var(--text-sm)',
                color: '#64748b',
                fontWeight: '600',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                position: 'relative',
                zIndex: 2
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Professional Animations */}
      <style jsx>{`
        @keyframes floatingSlow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, -30px) rotate(90deg); }
          50% { transform: translate(-20px, -60px) rotate(180deg); }
          75% { transform: translate(-40px, -20px) rotate(270deg); }
        }

        @keyframes floatingBadge {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes iconSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes textGlow {
          0%, 100% { text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); }
          50% { text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 0 20px rgba(255, 255, 255, 0.5); }
        }

        @keyframes slideInFromLeft {
          0% { 
            opacity: 0; 
            transform: translateX(-100px) rotateY(-90deg) scale(0.5); 
          }
          60% { 
            opacity: 1; 
            transform: translateX(10px) rotateY(10deg) scale(1.1); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) rotateY(0deg) scale(1); 
          }
        }

        @keyframes slideInFromRight {
          0% { 
            opacity: 0; 
            transform: translateX(100px) rotateY(90deg) scale(0.5); 
          }
          60% { 
            opacity: 1; 
            transform: translateX(-10px) rotateY(-10deg) scale(1.1); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) rotateY(0deg) scale(1); 
          }
        }

        @keyframes bounceInScale {
          0% { 
            opacity: 0; 
            transform: translateY(100px) scale(0.2) rotateZ(-180deg); 
          }
          60% { 
            opacity: 1; 
            transform: translateY(-20px) scale(1.3) rotateZ(10deg); 
          }
          80% { 
            transform: translateY(5px) scale(0.9) rotateZ(-5deg); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1) rotateZ(0deg); 
          }
        }

        @keyframes colorShift {
          0%, 100% { 
            background: linear-gradient(135deg, #9F7AEA 0%, #4FD1C7 50%, #63B3ED 100%);
            background-position: 0% 50%;
          }
          25% { 
            background: linear-gradient(135deg, #4FD1C7 0%, #63B3ED 50%, #7C3AED 100%);
            background-position: 100% 50%;
          }
          50% { 
            background: linear-gradient(135deg, #63B3ED 0%, #7C3AED 50%, #9F7AEA 100%);
            background-position: 0% 50%;
          }
          75% { 
            background: linear-gradient(135deg, #7C3AED 0%, #9F7AEA 50%, #4FD1C7 100%);
            background-position: 100% 50%;
          }
        }

        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes slideInFilter {
          0% { 
            opacity: 0; 
            transform: translateY(40px) scale(0.8) rotateX(-15deg); 
          }
          60% { 
            opacity: 1; 
            transform: translateY(-5px) scale(1.05) rotateX(5deg); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1) rotateX(0deg); 
          }
        }

        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        @keyframes statsSlideIn {
          0% { 
            opacity: 0; 
            transform: translateY(60px) scale(0.7) rotateY(-15deg); 
          }
          60% { 
            opacity: 1; 
            transform: translateY(-10px) scale(1.1) rotateY(5deg); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1) rotateY(0deg); 
          }
        }

        @keyframes rotateGlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes bounceIcon {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) scale(1); }
          40% { transform: translateY(-10px) scale(1.1); }
          60% { transform: translateY(-5px) scale(1.05); }
        }

        @keyframes numberCount {
          0% { 
            transform: scale(0) rotateY(-180deg); 
            opacity: 0; 
          }
          50% { 
            transform: scale(1.2) rotateY(0deg); 
            opacity: 1; 
          }
          100% { 
            transform: scale(1) rotateY(0deg); 
            opacity: 1; 
          }
        }
        
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)) !important;
            gap: var(--space-md) !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
