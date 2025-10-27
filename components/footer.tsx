"use client"

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="site-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h4>Rent My Event</h4>
            <p style={{ color: 'var(--gray-400)', marginBottom: 'var(--spacing-lg)' }}>
              Professional event rental and management services in Delhi NCR. Creating memorable experiences with premium equipment and expert planning.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', marginBottom: 'var(--spacing-sm)' }}>
              <Phone size={16} />
              <span>+91 XXXX-XXXX-XX</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', marginBottom: 'var(--spacing-sm)' }}>
              <Mail size={16} />
              <span>info@rentmyevent.in</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
              <MapPin size={16} />
              <span>Delhi NCR, India</span>
            </div>
          </div>

          {/* Equipment Rental */}
          <div className="footer-section">
            <h4>Equipment Rental</h4>
            <ul>
              <li><a href="#">LED Wall Rental</a></li>
              <li><a href="#">Projector on Rent</a></li>
              <li><a href="#">Audio Systems</a></li>
              <li><a href="#">Video Conference Setup</a></li>
              <li><a href="#">Lighting Equipment</a></li>
              <li><a href="#">Staging Solutions</a></li>
            </ul>
          </div>

          {/* Event Services */}
          <div className="footer-section">
            <h4>Event Services</h4>
            <ul>
              <li><a href="#">Corporate Events</a></li>
              <li><a href="#">Wedding Planning</a></li>
              <li><a href="#">Conference Management</a></li>
              <li><a href="#">Exhibition Services</a></li>
              <li><a href="#">Product Launches</a></li>
              <li><a href="#">Technical Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Portfolio</a></li>
              <li><a href="#">Client Testimonials</a></li>
              <li><a href="#">Career Opportunities</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Get Quote</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Twitter, label: "Twitter" },
              { icon: Instagram, label: "Instagram" },
              { icon: Linkedin, label: "LinkedIn" }
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'var(--primary-blue)',
                  color: 'var(--white)',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease'
                }}
                aria-label={label}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--secondary-blue)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-blue)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <p>© 2025 Rent My Event. All Rights Reserved. Professional Event Solutions in Delhi NCR.</p>
        </div>
      </div>
    </footer>
  )
}
