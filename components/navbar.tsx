"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar-premium ${isScrolled ? 'scrolled' : ''}`}>
      <div className="premium-container">
        <div className="navbar-content">
          {/* Premium Brand Section */}
          <a href="#" className="navbar-brand">
            <img
              src="/new logo.png"
              alt="Rent My Event"
              className="navbar-logo"
            />
            <div>
              <div className="navbar-title">RENT MY EVENT</div>
              <div className="navbar-subtitle">Premium Event Solutions</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="navbar-nav">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>

            {/* Premium Dropdown */}
            <div style={{ position: 'relative', display: 'inline-block' }} className="group">
              <a href="#" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                position: 'relative'
              }}>
                Locations
                <ChevronDown size={16} />
              </a>
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: 'var(--white)',
                minWidth: '180px',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-premium)',
                border: '1px solid var(--gray-200)',
                marginTop: 'var(--space-xs)',
                opacity: 0,
                visibility: 'hidden',
                transform: 'translateY(-10px)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: 1000,
                overflow: 'hidden'
              }} className="group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                {["Delhi", "Noida", "Gurgaon", "Faridabad"].map((loc, index) => (
                  <a
                    key={loc}
                    href="#"
                    style={{
                      display: 'block',
                      padding: '12px 20px',
                      color: 'var(--gray-700)',
                      textDecoration: 'none',
                      borderBottom: index < 3 ? '1px solid var(--gray-100)' : 'none',
                      transition: 'all 0.3s ease',
                      fontSize: 'var(--text-sm)',
                      fontWeight: '500'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--gray-50)'
                      e.currentTarget.style.color = 'var(--primary-blue)'
                      e.currentTarget.style.paddingLeft = '24px'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.color = 'var(--gray-700)'
                      e.currentTarget.style.paddingLeft = '20px'
                    }}
                  >
                    {loc}
                  </a>
                ))}
              </div>
            </div>

            <a href="#">Contact</a>
            <button className="btn btn-primary">Get Quote</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              padding: 'var(--space-xs)',
              color: 'var(--primary-blue)',
              borderRadius: 'var(--radius-sm)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--gray-100)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Premium Mobile Menu */}
        {isOpen && (
          <div style={{
            marginTop: 'var(--space-md)',
            background: 'var(--white)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-premium)',
            border: '1px solid var(--gray-200)',
            overflow: 'hidden',
            animation: 'slideDown 0.3s ease-out'
          }}>
            {["Home", "About", "Services", "Portfolio", "Locations", "Contact"].map((item, index) => (
              <a
                key={item}
                href="#"
                style={{
                  display: 'block',
                  padding: '16px 24px',
                  color: 'var(--gray-700)',
                  textDecoration: 'none',
                  borderBottom: index < 5 ? '1px solid var(--gray-100)' : 'none',
                  transition: 'all 0.3s ease',
                  fontSize: 'var(--text-base)',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--gray-50)'
                  e.currentTarget.style.color = 'var(--primary-blue)'
                  e.currentTarget.style.paddingLeft = '32px'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'var(--gray-700)'
                  e.currentTarget.style.paddingLeft = '24px'
                }}
              >
                {item}
              </a>
            ))}
            <div style={{ padding: 'var(--space-lg)' }}>
              <button className="btn btn-primary" style={{ width: '100%' }}>Get Quote</button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  )
}
