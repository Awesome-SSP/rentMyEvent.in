"use client"

import React, { useRef, useState, useEffect } from "react"
import { Play, Pause, Phone, Mail, ArrowRight, Star, Users, Award, Calendar } from "lucide-react"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const stats = [
    { icon: Award, value: "10+", label: "Years of Excellence", color: "#06b6d4" },
    { icon: Users, value: "5,000+", label: "Successful Events", color: "#f97316" },
    { icon: Star, value: "2,500+", label: "Happy Clients", color: "#10b981" },
    { icon: Calendar, value: "15,000+", label: "Equipment Units", color: "#8b5cf6" },
  ]

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {/* Video Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }}>
        <video
          ref={videoRef}
          src="/slidervideo.mp4"
          poster="/professional-event-setup-with-equipment.jpg"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          playsInline
          muted
          loop
          autoPlay
          preload="auto"
        />

        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)',
          zIndex: 2
        }}></div>
      </div>

      {/* Content Overlay */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        width: '100%',
        padding: '0 var(--space-lg)',
        color: 'white'
      }}>
        <div className="premium-container">
          {/* Top Badge */}
          <div style={{
            textAlign: 'center',
            marginBottom: 'var(--space-xl)'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-xs)',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              padding: 'var(--space-sm) var(--space-lg)',
              borderRadius: 'var(--radius-xl)',
              fontSize: 'var(--text-sm)',
              fontWeight: '600',
              backdropFilter: 'blur(20px)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
              transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
              animation: isVisible ? 'slideInFromLeft 1.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
            }}>
              <Award size={16} />
              TOP BEST EVENT COMPANY IN DELHI NCR INDIA
            </div>
          </div>

          {/* Main Heading */}
          <div style={{
            textAlign: 'center',
            marginBottom: 'var(--space-2xl)'
          }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: '900',
              lineHeight: '1.1',
              marginBottom: 'var(--space-lg)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-150px)',
              transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
              animation: isVisible ? 'slideInFromLeft 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s' : 'none'
            }}>
              <span style={{
                display: 'block',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-200px)',
                transition: 'all 1.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s',
                animation: isVisible ? 'fadeInSlideLeft 1.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s' : 'none'
              }}>
                Premium Event 
              </span>
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #06b6d4, #f97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(200px)',
                transition: 'all 2s cubic-bezier(0.4, 0, 0.2, 1) 0.8s',
                animation: isVisible ? 'slideInFromRight 2s cubic-bezier(0.4, 0, 0.2, 1) 0.8s' : 'none'
              }}>
                Management Solutions
              </span>
            </h1>

            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              transition: 'all 1.8s cubic-bezier(0.4, 0, 0.2, 1) 1.2s',
              animation: isVisible ? 'fadeInSlideUp 1.8s cubic-bezier(0.4, 0, 0.2, 1) 1.2s' : 'none'
            }}>
              <span style={{
                display: 'inline-block',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
                transition: 'all 2s cubic-bezier(0.4, 0, 0.2, 1) 1.4s',
                animation: isVisible ? 'fadeInSlideLeft 2s cubic-bezier(0.4, 0, 0.2, 1) 1.4s' : 'none'
              }}>
                Premium Event Rental & Management Solutions across Delhi NCR.
              </span>
              <br />
              <span style={{
                display: 'inline-block',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
                transition: 'all 2.2s cubic-bezier(0.4, 0, 0.2, 1) 1.6s',
                animation: isVisible ? 'fadeInSlideRight 2.2s cubic-bezier(0.4, 0, 0.2, 1) 1.6s' : 'none'
              }}>
                Professional equipment, expert execution, unforgettable experiences.
              </span>
            </p>
          </div>

          {/* Contact Actions */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-xl)',
            marginBottom: 'var(--space-3xl)',
            flexWrap: 'wrap',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transition: 'all 2s cubic-bezier(0.4, 0, 0.2, 1) 1.8s',
            animation: isVisible ? 'fadeInSlideUp 2s cubic-bezier(0.4, 0, 0.2, 1) 1.8s' : 'none'
          }}>
            {/* Phone Button */}
            <a
              href="tel:+919871280005"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
                background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                color: 'white',
                padding: 'var(--space-lg) var(--space-xl)',
                borderRadius: 'var(--radius-lg)',
                fontSize: 'var(--text-lg)',
                fontWeight: '700',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-150px)',
                animation: isVisible ? 'slideInFromLeft 2.2s cubic-bezier(0.4, 0, 0.2, 1) 2s' : 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(6, 182, 212, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(6, 182, 212, 0.3)'
              }}
            >
              <Phone size={20} />
              +91-9871280005
            </a>

            {/* Portfolio Button */}
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
                background: 'rgba(255, 255, 255, 0.15)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                padding: 'var(--space-lg) var(--space-xl)',
                borderRadius: 'var(--radius-lg)',
                fontSize: 'var(--text-lg)',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(20px)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(150px)',
                animation: isVisible ? 'slideInFromRight 2.2s cubic-bezier(0.4, 0, 0.2, 1) 2.2s' : 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
              }}
            >
              <Star size={20} />
              Portfolio
            </button>
          </div>

          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--space-lg)',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-xl)',
                  textAlign: 'center',
                  backdropFilter: 'blur(20px)',
                  transition: 'all 0.4s ease',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) translateX(0)' : `translateY(80px) translateX(${index % 2 === 0 ? '-100px' : '100px'})`,
                  transitionDelay: `${2.4 + index * 0.2}s`,
                  animation: isVisible ? `fadeInSlideStagger 1.5s cubic-bezier(0.4, 0, 0.2, 1) ${2.4 + index * 0.2}s` : 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
                  e.currentTarget.style.borderColor = stat.color
                  e.currentTarget.style.boxShadow = `0 20px 40px ${stat.color}30`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                  e.currentTarget.style.boxShadow = `0 10px 30px ${stat.color}40`
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: stat.color,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-md)',
                  boxShadow: `0 10px 30px ${stat.color}40`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(180deg)',
                  transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${2.6 + index * 0.2}s`
                }}>
                  <stat.icon size={28} style={{ color: 'white' }} />
                </div>

                <h3 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: '900',
                  marginBottom: 'var(--space-xs)',
                  color: 'white',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${2.8 + index * 0.2}s`
                }}>
                  {stat.value}
                </h3>

                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${3 + index * 0.2}s`
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Control Button */}
      <button
        onClick={toggleVideo}
        style={{
          position: 'absolute',
          bottom: 'var(--space-xl)',
          right: 'var(--space-xl)',
          width: '56px',
          height: '56px',
          background: 'rgba(255, 255, 255, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          cursor: 'pointer',
          backdropFilter: 'blur(20px)',
          transition: 'all 0.3s ease',
          zIndex: 4
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
          e.currentTarget.style.transform = 'scale(1.1)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
          e.currentTarget.style.transform = 'scale(1)'
        }}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: 'var(--space-lg)',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 4
      }}>
        <div style={{
          width: '2px',
          height: '60px',
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)',
          animation: 'scroll-indicator 2s ease-in-out infinite'
        }}></div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInSlideLeft {
          0% {
            opacity: 0;
            transform: translateX(-150px);
          }
          50% {
            opacity: 0.5;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInSlideRight {
          0% {
            opacity: 0;
            transform: translateX(150px);
          }
          50% {
            opacity: 0.5;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInSlideUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInSlideStagger {
          0% {
            opacity: 0;
            transform: translateY(80px) scale(0.8);
          }
          50% {
            opacity: 0.6;
            transform: translateY(20px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes scroll-indicator {
          0%, 100% { 
            opacity: 0; 
            transform: translateY(-20px); 
          }
          50% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes textGlow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(6, 182, 212, 0.8), 0 0 30px rgba(249, 115, 22, 0.6);
          }
        }
        
        @keyframes floatingGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
            transform: translateY(0px);
          }
          50% {
            box-shadow: 0 0 30px rgba(6, 182, 212, 0.5), 0 0 40px rgba(249, 115, 22, 0.3);
            transform: translateY(-5px);
          }
        }
        
        @media (max-width: 768px) {
          section > div > div:nth-child(4) {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: var(--space-md) !important;
          }
          
          section > div > div:nth-child(3) {
            flex-direction: column !important;
            gap: var(--space-lg) !important;
          }
        }
        
        @media (max-width: 480px) {
          section > div > div:nth-child(4) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
