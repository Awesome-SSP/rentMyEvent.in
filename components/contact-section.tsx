"use client"

import React, { useState, useEffect, useRef } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Calendar, MessageCircle } from "lucide-react"

const ADDRESSES = [
  {
    title: "Gurugram Office",
    lines: [
      "4th Floor, Iris Tech Park, 406 B, Badshahpur Sohna Rd Hwy, Sector 48",
      "Gurugram, Haryana 122018",
    ],
    icon: MapPin
  },
  {
    title: "Faridabad Office",
    lines: ["44 foot road, Dheeraj Nagar near Monday Market", "Faridabad, Haryana 121003"],
    icon: MapPin
  },
  {
    title: "Delhi Office",
    lines: ["202 2nd floor, Veer Sarwakar Block, Nirman Vihar", "Delhi 110092"],
    icon: MapPin
  },
]

const CONTACT_INFO = [
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: Mail, label: "Email", value: "hello@rentmyevent.com", href: "mailto:hello@rentmyevent.com" },
  { icon: Clock, label: "Hours", value: "Mon-Sat 9AM-8PM", href: null },
  { icon: Calendar, label: "Emergency", value: "24/7 Event Support", href: null }
]

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "Hi, I would like to inquire about your event management and equipment rental services. Please provide more details.",
  })
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
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

  function update<K extends keyof typeof form>(key: K, value: typeof form[K]) {
    setForm((s) => ({ ...s, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    try {
      // Replace with real API call if needed
      console.log("Contact form submit:", form)
      await new Promise((r) => setTimeout(r, 1500))
      setSent(true)
      setForm({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        message: form.message,
      })
    } finally {
      setSubmitting(false)
    }
  }

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
    >
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `url('data:image/svg+xml,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="white" fill-opacity="0.05"><circle cx="50" cy="50" r="2"/></g></svg>')`,
        animation: 'float 25s linear infinite'
      }}></div>

      <div className="premium-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-xs)',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'var(--white)',
            padding: 'var(--space-xs) var(--space-lg)',
            borderRadius: 'var(--radius-xl)',
            fontSize: 'var(--text-sm)',
            fontWeight: '600',
            marginBottom: 'var(--space-lg)',
            backdropFilter: 'blur(20px)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <MessageCircle size={16} />
            Get In Touch
          </div>

          <h2 style={{
            fontSize: 'var(--text-5xl)',
            fontWeight: '800',
            marginBottom: 'var(--space-lg)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
          }}>
            Let's Create Your Perfect{' '}
            <span style={{
              background: 'linear-gradient(135deg, #06b6d4, #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Event Experience
            </span>
          </h2>

          <p style={{
            fontSize: 'var(--text-lg)',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.7',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
          }}>
            Ready to bring your vision to life? Connect with our expert team for personalized event solutions.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-3xl)',
          alignItems: 'start'
        }}>
          {/* Left Side - Contact Info & Addresses */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
          }}>
            {/* Contact Info Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-lg)',
              marginBottom: 'var(--space-2xl)'
            }}>
              {CONTACT_INFO.map((info, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-lg)',
                  backdropFilter: 'blur(20px)',
                  transition: 'all 0.4s ease',
                  cursor: info.href ? 'pointer' : 'default',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                  }}
                  onClick={() => info.href && window.open(info.href)}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                    marginBottom: 'var(--space-xs)'
                  }}>
                    <info.icon size={20} style={{ color: 'var(--accent-cyan)' }} />
                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>
                      {info.label}
                    </span>
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', opacity: 0.9 }}>
                    {info.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Office Addresses */}
            <h3 style={{
              fontSize: 'var(--text-xl)',
              fontWeight: '700',
              marginBottom: 'var(--space-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-sm)'
            }}>
              <MapPin size={24} style={{ color: 'var(--accent-orange)' }} />
              Our Locations
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              {ADDRESSES.map((addr, index) => (
                <div key={addr.title} style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-lg)',
                  backdropFilter: 'blur(20px)',
                  transition: 'all 0.4s ease',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${0.8 + index * 0.1}s`
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.5)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                  }}>
                  <h4 style={{
                    fontWeight: '600',
                    marginBottom: 'var(--space-sm)',
                    color: 'var(--accent-cyan)'
                  }}>
                    {addr.title}
                  </h4>
                  <address style={{
                    fontStyle: 'normal',
                    fontSize: 'var(--text-sm)',
                    lineHeight: '1.6',
                    opacity: 0.9
                  }}>
                    {addr.lines.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </address>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.8s'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-2xl)',
              backdropFilter: 'blur(20px)'
            }}>
              <h3 style={{
                fontSize: 'var(--text-xl)',
                fontWeight: '700',
                marginBottom: 'var(--space-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-sm)'
              }}>
                <Send size={24} style={{ color: 'var(--accent-orange)' }} />
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 'var(--text-sm)',
                      fontWeight: '600',
                      marginBottom: 'var(--space-xs)',
                      color: 'rgba(255, 255, 255, 0.9)'
                    }}>
                      Your Name *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      style={{
                        width: '100%',
                        padding: 'var(--space-md)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'var(--white)',
                        fontSize: 'var(--text-sm)',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--accent-cyan)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(6, 182, 212, 0.1)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                        e.target.style.boxShadow = 'none'
                      }}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 'var(--text-sm)',
                      fontWeight: '600',
                      marginBottom: 'var(--space-xs)',
                      color: 'rgba(255, 255, 255, 0.9)'
                    }}>
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      style={{
                        width: '100%',
                        padding: 'var(--space-md)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'var(--white)',
                        fontSize: 'var(--text-sm)',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--accent-cyan)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(6, 182, 212, 0.1)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                        e.target.style.boxShadow = 'none'
                      }}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 'var(--text-sm)',
                      fontWeight: '600',
                      marginBottom: 'var(--space-xs)',
                      color: 'rgba(255, 255, 255, 0.9)'
                    }}>
                      Phone Number
                    </label>
                    <input
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      style={{
                        width: '100%',
                        padding: 'var(--space-md)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'var(--white)',
                        fontSize: 'var(--text-sm)',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--accent-cyan)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(6, 182, 212, 0.1)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                        e.target.style.boxShadow = 'none'
                      }}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 'var(--text-sm)',
                      fontWeight: '600',
                      marginBottom: 'var(--space-xs)',
                      color: 'rgba(255, 255, 255, 0.9)'
                    }}>
                      Event Type
                    </label>
                    <select
                      value={form.eventType}
                      onChange={(e) => update("eventType", e.target.value)}
                      style={{
                        width: '100%',
                        padding: 'var(--space-md)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'var(--white)',
                        fontSize: 'var(--text-sm)',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--accent-cyan)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(6, 182, 212, 0.1)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                        e.target.style.boxShadow = 'none'
                      }}
                    >
                      <option value="" style={{ background: 'var(--primary-dark)', color: 'var(--white)' }}>Select Event Type</option>
                      <option value="corporate" style={{ background: 'var(--primary-dark)', color: 'var(--white)' }}>Corporate Event</option>
                      <option value="wedding" style={{ background: 'var(--primary-dark)', color: 'var(--white)' }}>Wedding</option>
                      <option value="conference" style={{ background: 'var(--primary-dark)', color: 'var(--white)' }}>Conference</option>
                      <option value="exhibition" style={{ background: 'var(--primary-dark)', color: 'var(--white)' }}>Exhibition</option>
                      <option value="other" style={{ background: 'var(--primary-dark)', color: 'var(--white)' }}>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: 'var(--text-sm)',
                    fontWeight: '600',
                    marginBottom: 'var(--space-xs)',
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}>
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={form.eventDate}
                    onChange={(e) => update("eventDate", e.target.value)}
                    style={{
                      width: '100%',
                      padding: 'var(--space-md)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'var(--white)',
                      fontSize: 'var(--text-sm)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent-cyan)'
                      e.target.style.boxShadow = '0 0 0 3px rgba(6, 182, 212, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: 'var(--text-sm)',
                    fontWeight: '600',
                    marginBottom: 'var(--space-xs)',
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    style={{
                      width: '100%',
                      padding: 'var(--space-md)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'var(--white)',
                      fontSize: 'var(--text-sm)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      resize: 'vertical',
                      minHeight: '120px'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent-cyan)'
                      e.target.style.boxShadow = '0 0 0 3px rgba(6, 182, 212, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                      e.target.style.boxShadow = 'none'
                    }}
                    placeholder="Tell us about your event requirements..."
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)' }}>
                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      background: submitting ? 'rgba(255, 255, 255, 0.1)' : 'linear-gradient(135deg, var(--accent-cyan), var(--accent-orange))',
                      color: 'var(--white)',
                      border: 'none',
                      padding: 'var(--space-md) var(--space-xl)',
                      borderRadius: 'var(--radius-lg)',
                      fontSize: 'var(--text-base)',
                      fontWeight: '600',
                      cursor: submitting ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-sm)',
                      opacity: submitting ? 0.7 : 1
                    }}
                    onMouseEnter={(e) => {
                      if (!submitting) {
                        e.currentTarget.style.transform = 'translateY(-2px)'
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(6, 182, 212, 0.3)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!submitting) {
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = 'none'
                      }
                    }}
                  >
                    {submitting ? (
                      <>
                        <div style={{
                          width: '16px',
                          height: '16px',
                          border: '2px solid rgba(255,255,255,0.3)',
                          borderTop: '2px solid white',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite'
                        }}></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>

                  {sent && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-xs)',
                      color: 'var(--accent-cyan)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: '600'
                    }}>
                      <CheckCircle size={20} />
                      Message sent successfully!
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(10px); }
          50% { transform: translateY(0px) translateX(20px); }
          75% { transform: translateY(-10px) translateX(10px); }
        }
        
        @media (max-width: 768px) {
          section > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: var(--space-2xl) !important;
          }
          
          form > div:nth-child(2),
          form > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}