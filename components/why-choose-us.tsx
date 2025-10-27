"use client"

import { Shield, Clock, Award, Users, Headphones, Zap } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Reliable & Professional",
      description: "Trusted by 500+ clients with 100% delivery guarantee and professional-grade equipment",
      color: "var(--accent-orange)"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and emergency response for uninterrupted events",
      color: "var(--accent-cyan)"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Latest equipment from top brands ensuring exceptional performance and crystal-clear output",
      color: "var(--primary-blue)"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified technicians and event coordinators with 10+ years of industry experience",
      color: "var(--secondary-gradient)"
    },
    {
      icon: Headphones,
      title: "Full Service",
      description: "Complete end-to-end solutions from planning to execution with dedicated project management",
      color: "var(--accent-orange)"
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Rapid deployment and installation with pre-tested equipment and streamlined processes",
      color: "var(--accent-cyan)"
    }
  ]

  return (
    <section className="section-gradient">
      <div className="premium-container">
        <div className="text-center mb-xl">
          <h2 className="heading-section" style={{ color: 'var(--white)' }}>
            Why Choose Rent My Event?
          </h2>
          <p className="text-lead" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Experience the difference with our professional approach, premium equipment,
            and unmatched customer service that sets us apart from the competition.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--space-xl)',
          marginBottom: 'var(--space-3xl)'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-xl)',
              backdropFilter: 'blur(20px)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}
              className="group"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
              }}>
              {/* Decorative Element */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: `radial-gradient(circle, ${feature.color}20, transparent)`,
                borderRadius: '50%',
                transform: 'translate(30px, -30px)'
              }}></div>

              <div style={{
                width: '64px',
                height: '64px',
                background: feature.color,
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--space-lg)',
                boxShadow: `0 8px 25px ${feature.color}40`,
                position: 'relative',
                zIndex: 2
              }}>
                <feature.icon size={28} style={{ color: 'white' }} />
              </div>

              <h3 style={{
                fontSize: 'var(--text-xl)',
                fontWeight: '600',
                color: 'var(--white)',
                marginBottom: 'var(--space-sm)',
                position: 'relative',
                zIndex: 2
              }}>
                {feature.title}
              </h3>

              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.6',
                fontSize: 'var(--text-base)',
                position: 'relative',
                zIndex: 2
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: 'var(--radius-2xl)',
          padding: 'var(--space-2xl)',
          backdropFilter: 'blur(20px)',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 'var(--space-xl)',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: '800',
                color: 'var(--white)',
                marginBottom: 'var(--space-xs)'
              }}>
                10+
              </div>
              <div style={{
                fontSize: 'var(--text-sm)',
                color: 'rgba(255, 255, 255, 0.8)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Years Experience
              </div>
            </div>

            <div>
              <div style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: '800',
                color: 'var(--white)',
                marginBottom: 'var(--space-xs)'
              }}>
                500+
              </div>
              <div style={{
                fontSize: 'var(--text-sm)',
                color: 'rgba(255, 255, 255, 0.8)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Happy Clients
              </div>
            </div>

            <div>
              <div style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: '800',
                color: 'var(--white)',
                marginBottom: 'var(--space-xs)'
              }}>
                1000+
              </div>
              <div style={{
                fontSize: 'var(--text-sm)',
                color: 'rgba(255, 255, 255, 0.8)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Events Completed
              </div>
            </div>

            <div>
              <div style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: '800',
                color: 'var(--white)',
                marginBottom: 'var(--space-xs)'
              }}>
                4.9★
              </div>
              <div style={{
                fontSize: 'var(--text-sm)',
                color: 'rgba(255, 255, 255, 0.8)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Client Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
