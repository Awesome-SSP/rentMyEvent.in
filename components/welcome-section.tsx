"use client"

import { useEffect, useRef, useState } from "react"
import { Play, CheckCircle, Award, Users, Calendar, ArrowRight } from "lucide-react"

export default function WelcomeSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const achievements = [
    { icon: Award, number: "10+", label: "Years Excellence" },
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Calendar, number: "1000+", label: "Events Delivered" },
    { icon: CheckCircle, number: "100%", label: "Success Rate" }
  ]

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-blue) 100%)',
        padding: 'var(--space-3xl) 0',
        position: 'relative',
        overflow: 'hidden',
        color: 'var(--white)'
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        transition: 'background 0.3s ease'
      }}></div>

      {/* Floating Particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="white" fill-opacity="0.1"><circle cx="30" cy="30" r="1.5"/></g></svg>')`,
        animation: 'float 20s linear infinite'
      }}></div>

      <div className="premium-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-3xl)',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Left Content */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-xs)',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-xs) var(--space-lg)',
              marginBottom: 'var(--space-lg)',
              backdropFilter: 'blur(20px)',
              fontSize: 'var(--text-sm)',
              fontWeight: '600'
            }}>
              <Award size={16} />
              Welcome to Excellence
            </div>

            {/* Main Heading */}
            <h2 style={{
              fontSize: 'var(--text-5xl)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: 'var(--space-lg)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}>
              Crafting <span style={{
                background: 'linear-gradient(135deg, #06b6d4, #f97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Extraordinary
              </span> Event Experiences
            </h2>

            {/* Description */}
            <p style={{
              fontSize: 'var(--text-lg)',
              lineHeight: '1.7',
              marginBottom: 'var(--space-xl)',
              color: 'rgba(255, 255, 255, 0.9)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
            }}>
              We transform your vision into reality with our comprehensive event management services.
              From cutting-edge technology to flawless execution, every detail is meticulously planned
              to create unforgettable moments that exceed expectations.
            </p>

            {/* Features List */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-md)',
              marginBottom: 'var(--space-xl)'
            }}>
              {[
                "Premium Audio-Visual Equipment",
                "Expert Technical Team",
                "End-to-End Event Management",
                "24/7 Professional Support"
              ].map((feature, index) => (
                <div key={feature} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                  transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${0.6 + index * 0.1}s`
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    background: 'var(--accent-cyan)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <CheckCircle size={14} style={{ color: 'white' }} />
                  </div>
                  <span style={{ fontSize: 'var(--text-base)', fontWeight: '500' }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: 'var(--space-lg)',
              flexWrap: 'wrap',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 1s'
            }}>
              <button className="btn btn-glass">
                Explore Services
                <ArrowRight size={20} />
              </button>
              <button style={{
                background: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                color: 'var(--white)',
                padding: 'var(--space-md) var(--space-xl)',
                borderRadius: 'var(--radius-lg)',
                fontSize: 'var(--text-base)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-xs)'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                }}>
                <Play size={16} />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - Interactive Cards */}
          <div style={{
            position: 'relative',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
          }}>
            {/* Main Image Card */}
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-2xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-premium)',
              marginBottom: 'var(--space-xl)'
            }}>
              <img
                src="/professional-event-setup-with-modern-equipment.jpg"
                alt="Professional Event Setup"
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                top: 'var(--space-lg)',
                right: 'var(--space-lg)',
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: 'var(--space-sm) var(--space-md)',
                borderRadius: 'var(--radius-lg)',
                fontSize: 'var(--text-sm)',
                fontWeight: '600',
                backdropFilter: 'blur(10px)'
              }}>
                Live Event Setup
              </div>
            </div>

            {/* Achievement Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-md)'
            }}>
              {achievements.map((achievement, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-lg)',
                  textAlign: 'center',
                  backdropFilter: 'blur(20px)',
                  transition: 'all 0.4s ease',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${1.2 + index * 0.1}s`
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                  }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-sm)'
                  }}>
                    <achievement.icon size={24} style={{ color: 'var(--accent-cyan)' }} />
                  </div>
                  <div style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: '800',
                    marginBottom: 'var(--space-xs)'
                  }}>
                    {achievement.number}
                  </div>
                  <div style={{
                    fontSize: 'var(--text-sm)',
                    color: 'rgba(255, 255, 255, 0.8)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(0px) translateX(10px); }
          75% { transform: translateY(-5px) translateX(5px); }
        }
        
        @media (max-width: 768px) {
          section > div > div {
            grid-template-columns: 1fr !important;
            gap: var(--space-2xl) !important;
          }
        }
      `}</style>
    </section>
  )
}
