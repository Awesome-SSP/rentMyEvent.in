"use client"

import { useState } from "react"
import { Play, ArrowRight, Star, Users, Award, Zap } from "lucide-react"

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "1000+", label: "Events Completed" },
    { icon: Star, number: "4.9", label: "Client Rating" },
    { icon: Zap, number: "24/7", label: "Support Available" }
  ]

  return (
    <section className="hero-premium">
      <div className="premium-container">
        <div className="hero-content">
          {/* Left Content */}
          <div className="hero-text">
            <h1 className="heading-hero">
              Premium Event
              <br />
              <span className="gradient-text">Solutions</span>
              <br />
              for Every Occasion
            </h1>

            <p className="text-lead">
              Transform your vision into reality with our comprehensive event management services.
              From corporate conferences to dream weddings, we deliver exceptional experiences
              that exceed expectations.
            </p>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: 'var(--space-lg)',
              marginBottom: 'var(--space-2xl)',
              flexWrap: 'wrap'
            }}>
              <button className="btn btn-primary">
                Get Started Today
                <ArrowRight size={20} />
              </button>
              <button className="btn btn-secondary">
                View Our Work
              </button>
            </div>

            {/* Trust Indicators */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-lg)',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
                ))}
                <span style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)', marginLeft: 'var(--space-xs)' }}>
                  4.9/5 from 200+ reviews
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hero-visual">
            {/* Video Container */}
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-2xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-premium)',
              background: 'var(--white)'
            }}>
              <video
                poster="/event-rental-video-thumbnail.jpg"
                controls={isPlaying}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 'var(--radius-2xl)',
                  display: 'block'
                }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/slidervideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay */}
              {!isPlaying && (
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'rgba(0, 0, 0, 0.7)',
                  borderRadius: '50%',
                  padding: 'var(--space-lg)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                  onClick={() => {
                    const video = document.querySelector('video') as HTMLVideoElement
                    video?.play()
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(30, 64, 175, 0.9)'
                    e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)'
                    e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)'
                  }}
                >
                  <Play size={32} style={{ color: 'white', marginLeft: '4px' }} />
                </div>
              )}
            </div>

            {/* Floating Elements */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'var(--white)',
              padding: 'var(--space-md)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-large)',
              border: '1px solid var(--gray-200)',
              animation: 'float 3s ease-in-out infinite'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981'
                }}></div>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--gray-700)' }}>
                  Live Event
                </span>
              </div>
            </div>

            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              background: 'var(--white)',
              padding: 'var(--space-md)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-large)',
              border: '1px solid var(--gray-200)',
              animation: 'float 3s ease-in-out infinite 1.5s'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: '700',
                  color: 'var(--primary-blue)'
                }}>
                  24/7
                </div>
                <div style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--gray-600)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Support
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--space-sm)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--secondary-gradient)',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-xs)'
                }}>
                  <stat.icon size={24} style={{ color: 'white' }} />
                </div>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
