"use client"

import React, { useEffect, useRef, useState } from "react"
import { Monitor, Calendar, Users, Wrench, ArrowRight, CheckCircle, Target } from "lucide-react"

export default function ApproachSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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

  const items = [
    {
      title: "Event Rentals",
      subtitle: "Premium AV & staging on rent",
      description:
        "Quality projectors, LED screens, plasma TVs, sound equipment and complete AV setups — available for short- or long-term rental to elevate any event.",
      icon: Monitor,
      color: "var(--accent-cyan)",
      bgGradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(6, 182, 212, 0.05))",
      features: ["4K Projectors", "LED Walls", "Professional Audio", "Lighting Systems"]
    },
    {
      title: "Event Planning",
      subtitle: "Concept to completion",
      description:
        "End-to-end planning for small gatherings to grand conferences — timelines, vendors and logistics coordinated so you can focus on the guest experience.",
      icon: Calendar,
      color: "var(--accent-orange)",
      bgGradient: "linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(249, 115, 22, 0.05))",
      features: ["Strategic Planning", "Vendor Coordination", "Timeline Management", "Budget Optimization"]
    },
    {
      title: "On-Site Management",
      subtitle: "Seamless execution",
      description:
        "Expert technicians and managers handle installation, testing and live support so your event runs smoothly from first setup to final teardown.",
      icon: Users,
      color: "#10b981",
      bgGradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05))",
      features: ["Technical Support", "Live Monitoring", "Setup & Teardown", "Emergency Response"]
    },
    {
      title: "Tailor-made Solutions",
      subtitle: "Custom packages for every event",
      description:
        "We design bespoke rental & management packages to match your budget, venue and objectives — flexible, scalable and results-driven.",
      icon: Wrench,
      color: "#8b5cf6",
      bgGradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05))",
      features: ["Custom Packages", "Scalable Solutions", "Budget Flexibility", "ROI Focused"]
    },
  ]

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'var(--background-light)',
        padding: 'var(--space-3xl) 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.03,
        background: `url('data:image/svg+xml,<svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><g fill="%23000000"><circle cx="40" cy="40" r="2"/></g></svg>')`
      }}></div>

      <div className="premium-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-xs)',
            background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-orange))',
            color: 'var(--white)',
            padding: 'var(--space-xs) var(--space-lg)',
            borderRadius: 'var(--radius-xl)',
            fontSize: 'var(--text-sm)',
            fontWeight: '600',
            marginBottom: 'var(--space-lg)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <Target size={16} />
            Our Approach
          </div>

          <h2 style={{
            fontSize: 'var(--text-5xl)',
            fontWeight: '800',
            marginBottom: 'var(--space-lg)',
            background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-blue))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
          }}>
            How We Ensure Your Events{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-orange))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Succeed
            </span>
          </h2>

          <p style={{
            fontSize: 'var(--text-lg)',
            color: 'var(--text-muted)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.7',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
          }}>
            Our comprehensive approach combines creativity, expertise, and cutting-edge technology to deliver
            smooth and memorable events that exceed expectations.
          </p>
        </div>

        {/* Approach Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--space-xl)',
          marginBottom: 'var(--space-3xl)'
        }}>
          {items.map((item, index) => (
            <div
              key={item.title}
              style={{
                background: hoveredIndex === index ? item.bgGradient : 'var(--white)',
                border: `1px solid ${hoveredIndex === index ? item.color : 'var(--border-color)'}`,
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-xl)',
                boxShadow: hoveredIndex === index ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transitionDelay: `${0.6 + index * 0.1}s`
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient Overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: hoveredIndex === index ? `linear-gradient(135deg, ${item.color}08, transparent)` : 'transparent',
                transition: 'background 0.4s ease'
              }}></div>

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                {/* Icon */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: hoveredIndex === index ?
                    `linear-gradient(135deg, ${item.color}, ${item.color}80)` :
                    `${item.color}15`,
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-lg)',
                  transition: 'all 0.4s ease',
                  transform: hoveredIndex === index ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                }}>
                  <item.icon
                    size={32}
                    style={{
                      color: hoveredIndex === index ? 'white' : item.color,
                      transition: 'color 0.4s ease'
                    }}
                  />
                </div>

                {/* Title & Subtitle */}
                <h3 style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: '700',
                  marginBottom: 'var(--space-xs)',
                  color: 'var(--text-dark)'
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: item.color,
                  fontWeight: '600',
                  marginBottom: 'var(--space-md)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {item.subtitle}
                </p>

                {/* Description */}
                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-muted)',
                  lineHeight: '1.6',
                  marginBottom: 'var(--space-lg)'
                }}>
                  {item.description}
                </p>

                {/* Features List */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-xs)',
                  marginBottom: 'var(--space-lg)'
                }}>
                  {item.features.map((feature, featureIndex) => (
                    <div key={feature} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-xs)',
                      opacity: hoveredIndex === index ? 1 : 0.7,
                      transform: hoveredIndex === index ? 'translateX(0)' : 'translateX(-10px)',
                      transition: `all 0.3s ease ${featureIndex * 0.1}s`
                    }}>
                      <CheckCircle size={16} style={{ color: item.color }} />
                      <span style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-dark)',
                        fontWeight: '500'
                      }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-xs)',
                  color: item.color,
                  fontSize: 'var(--text-sm)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  opacity: hoveredIndex === index ? 1 : 0.8,
                  transition: 'all 0.3s ease'
                }}>
                  Learn More
                  <ArrowRight
                    size={16}
                    style={{
                      transform: hoveredIndex === index ? 'translateX(4px)' : 'translateX(0px)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-blue))',
          color: 'var(--white)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-2xl)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 1.2s'
        }}>
          <h3 style={{
            fontSize: 'var(--text-2xl)',
            fontWeight: '700',
            marginBottom: 'var(--space-md)'
          }}>
            Ready to Experience the Difference?
          </h3>
          <p style={{
            fontSize: 'var(--text-base)',
            opacity: 0.9,
            marginBottom: 'var(--space-lg)',
            maxWidth: '500px',
            margin: '0 auto var(--space-lg)'
          }}>
            Let our expert team handle every detail while you focus on what matters most - your guests and objectives.
          </p>
          <button className="btn btn-glass">
            Start Your Project
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Custom Mobile Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}