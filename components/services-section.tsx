"use client"

import { Monitor, Volume2, Lightbulb, Camera, Users, Settings } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Monitor,
      title: "Audio Visual Equipment",
      description: "Professional LED walls, projectors, screens, and display solutions for impactful presentations and entertainment.",
      features: ["4K LED Walls", "High-End Projectors", "Professional Screens", "Video Mapping"]
    },
    {
      icon: Volume2,
      title: "Sound Systems",
      description: "Crystal-clear audio solutions including microphones, speakers, and complete PA systems for any venue size.",
      features: ["Wireless Microphones", "Line Array Speakers", "Mixing Consoles", "Background Music"]
    },
    {
      icon: Lightbulb,
      title: "Stage Lighting",
      description: "Dynamic lighting setups including stage lights, ambient lighting, and special effects to create the perfect atmosphere.",
      features: ["LED Stage Lights", "Moving Head Lights", "Laser Shows", "Ambient Lighting"]
    },
    {
      icon: Camera,
      title: "Live Streaming",
      description: "Professional live streaming and recording services with multi-camera setups and real-time broadcasting.",
      features: ["Multi-Camera Setup", "Live Broadcasting", "Recording Services", "Streaming Platforms"]
    },
    {
      icon: Users,
      title: "Event Management",
      description: "Complete event planning and coordination services from concept to execution with dedicated project managers.",
      features: ["Event Planning", "Venue Coordination", "Timeline Management", "Staff Support"]
    },
    {
      icon: Settings,
      title: "Technical Support",
      description: "On-site technical support and equipment management with certified technicians throughout your event.",
      features: ["24/7 Support", "Setup & Testing", "Live Monitoring", "Emergency Response"]
    }
  ]

  return (
    <section className="section-premium">
      <div className="premium-container">
        <div className="text-center mb-xl">
          <h2 className="heading-section">
            Comprehensive Event Solutions
          </h2>
          <p className="text-lead">
            From cutting-edge technology to expert coordination, we provide everything you need
            to make your event unforgettable and professionally executed.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <service.icon size={28} style={{ color: 'white' }} />
              </div>

              <h3 className="heading-card">{service.title}</h3>
              <p className="text-body mb-lg">{service.description}</p>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-xs)'
              }}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-xs)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--gray-600)'
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--secondary-gradient)',
                      flexShrink: 0
                    }}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 'var(--space-lg)' }}>
                <button className="btn btn-secondary" style={{ width: '100%' }}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: 'var(--space-3xl)',
          padding: 'var(--space-2xl)',
          background: 'var(--primary-gradient)',
          borderRadius: 'var(--radius-2xl)',
          color: 'var(--white)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none'
          }}></div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: '700',
              marginBottom: 'var(--space-md)',
              color: 'var(--white)'
            }}>
              Ready to Plan Your Event?
            </h3>
            <p style={{
              fontSize: 'var(--text-lg)',
              marginBottom: 'var(--space-xl)',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '600px',
              margin: '0 auto var(--space-xl)'
            }}>
              Get a personalized quote for your event requirements. Our experts will help you
              choose the perfect combination of services and equipment.
            </p>
            <div style={{
              display: 'flex',
              gap: 'var(--space-lg)',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button className="btn btn-glass">
                Get Free Quote
              </button>
              <button className="btn btn-secondary">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
