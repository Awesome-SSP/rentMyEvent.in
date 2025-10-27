"use client"

import { useEffect, useState } from "react"
import { Star, TrendingUp, Users, Award } from "lucide-react"

export default function BrandsCarousel() {
  const [scrollX, setScrollX] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollX(prev => prev + 1)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const brands = [
    { name: "M3M", logo: "/m3m-logo.jpg", industry: "Real Estate" },
    { name: "Kajaria", logo: "/kajaria-logo.jpg", industry: "Ceramics" },
    { name: "Bata", logo: "/bata-logo.jpg", industry: "Fashion" },
    { name: "Pristyn Care", logo: "/pristyn-care-logo.jpg", industry: "Healthcare" },
    { name: "Equinox", logo: "/equinox-logo.jpg", industry: "Fitness" },
    { name: "Arena Animation", logo: "/arena-animation-logo.jpg", industry: "Education" }
  ]

  const testimonials = [
    {
      quote: "Exceptional service and top-notch equipment. Made our corporate event absolutely flawless!",
      author: "Rajesh Kumar",
      company: "M3M Group",
      rating: 5
    },
    {
      quote: "Professional team with incredible attention to detail. Highly recommended for any event.",
      author: "Priya Sharma",
      company: "Kajaria Ceramics",
      rating: 5
    },
    {
      quote: "Outstanding technical support and premium quality equipment. Will definitely use again!",
      author: "Amit Singh",
      company: "Bata India",
      rating: 5
    }
  ]

  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--gray-50) 0%, var(--white) 50%, var(--gray-50) 100%)',
      padding: 'var(--space-3xl) 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `url('data:image/svg+xml,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="1" fill="%233b82f6" opacity="0.1"/></svg>')`,
        animation: 'float 15s ease-in-out infinite',
        transform: `translateX(${scrollX * 0.1}px)`
      }}></div>

      <div className="premium-container">
        {/* Section Header with Animation */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--space-3xl)',
          animation: 'fadeInUp 1s ease-out'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-sm)',
            background: 'var(--primary-gradient)',
            padding: 'var(--space-xs) var(--space-lg)',
            borderRadius: 'var(--radius-xl)',
            color: 'var(--white)',
            fontSize: 'var(--text-sm)',
            fontWeight: '600',
            marginBottom: 'var(--space-lg)',
            animation: 'slideInFromTop 1s ease-out 0.3s both'
          }}>
            <Award size={16} />
            Trusted by Industry Leaders
          </div>

          <h2 className="heading-section" style={{
            background: 'var(--primary-gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'slideInFromLeft 1s ease-out 0.5s both'
          }}>
            Our Prestigious Clients
          </h2>

          <p className="text-lead" style={{
            animation: 'slideInFromRight 1s ease-out 0.7s both'
          }}>
            Trusted by leading brands across industries for their most important events and celebrations
          </p>
        </div>

        {/* Animated Brands Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--space-xl)',
          marginBottom: 'var(--space-3xl)'
        }}>
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-xl)',
                boxShadow: 'var(--shadow-soft)',
                border: '1px solid var(--gray-200)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                animation: `slideInFromBottom 1s ease-out ${0.2 * index + 0.9}s both`,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)'
                e.currentTarget.style.boxShadow = 'var(--shadow-premium)'
                e.currentTarget.style.borderColor = 'var(--primary-light)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = 'var(--shadow-soft)'
                e.currentTarget.style.borderColor = 'var(--gray-200)'
              }}
            >
              {/* Glow Effect */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'var(--secondary-gradient)',
                opacity: 0,
                transition: 'opacity 0.4s ease'
              }} className="glow-line"></div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 'var(--space-md)'
              }}>
                <img
                  src={brand.logo}
                  alt={brand.name}
                  style={{
                    height: '60px',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    transition: 'filter 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%)'
                  }}
                />
                <div>
                  <div style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: '600',
                    color: 'var(--gray-900)',
                    marginBottom: 'var(--space-xs)'
                  }}>
                    {brand.name}
                  </div>
                  <div style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--gray-600)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {brand.industry}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Slider */}
        <div style={{
          background: 'var(--white)',
          borderRadius: 'var(--radius-2xl)',
          padding: 'var(--space-2xl)',
          boxShadow: 'var(--shadow-large)',
          border: '1px solid var(--gray-200)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, transparent 50%)',
            pointerEvents: 'none'
          }}></div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-lg)',
            marginBottom: 'var(--space-xl)'
          }}>
            <TrendingUp size={24} style={{ color: 'var(--primary-blue)' }} />
            <h3 style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: '700',
              color: 'var(--gray-900)',
              margin: 0
            }}>
              Client Success Stories
            </h3>
            <Users size={24} style={{ color: 'var(--primary-blue)' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-xl)'
          }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  padding: 'var(--space-lg)',
                  background: 'var(--gray-50)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--gray-200)',
                  position: 'relative',
                  animation: `fadeInScale 1s ease-out ${1.5 + index * 0.2}s both`
                }}
              >
                {/* Quote Marks */}
                <div style={{
                  fontSize: '3rem',
                  color: 'var(--primary-light)',
                  opacity: 0.3,
                  lineHeight: 1,
                  marginBottom: 'var(--space-sm)'
                }}>
                  "
                </div>

                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--gray-700)',
                  lineHeight: '1.6',
                  marginBottom: 'var(--space-lg)',
                  fontStyle: 'italic'
                }}>
                  {testimonial.quote}
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{
                      fontSize: 'var(--text-sm)',
                      fontWeight: '600',
                      color: 'var(--gray-900)'
                    }}>
                      {testimonial.author}
                    </div>
                    <div style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--gray-600)'
                    }}>
                      {testimonial.company}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .glow-line {
          opacity: 0;
        }
        
        .card-premium:hover .glow-line {
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
