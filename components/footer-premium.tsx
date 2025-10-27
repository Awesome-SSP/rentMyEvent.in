"use client"

import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    ArrowRight,
    Star
} from "lucide-react"

export default function Footer() {
    const services = [
        "LED Wall Rentals",
        "Audio Visual Equipment",
        "Stage Lighting",
        "Sound Systems",
        "Event Management",
        "Technical Support"
    ]

    const locations = [
        "Delhi",
        "Noida",
        "Gurgaon",
        "Faridabad",
        "Greater Noida",
        "Ghaziabad"
    ]

    return (
        <footer className="footer-premium">
            <div className="premium-container">
                <div className="footer-content">
                    {/* Brand Section */}
                    <div>
                        <div style={{ marginBottom: 'var(--space-lg)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
                                <img
                                    src="/new logo.png"
                                    alt="Rent My Event"
                                    style={{ height: '40px', width: 'auto' }}
                                />
                                <div>
                                    <div style={{
                                        fontSize: 'var(--text-lg)',
                                        fontWeight: '700',
                                        background: 'var(--secondary-gradient)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}>
                                        RENT MY EVENT
                                    </div>
                                </div>
                            </div>
                            <p style={{
                                color: 'var(--gray-400)',
                                lineHeight: '1.6',
                                marginBottom: 'var(--space-lg)'
                            }}>
                                Premium event equipment rentals and comprehensive event management services
                                across Delhi NCR. Making your events memorable since 2010.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                <Phone size={16} style={{ color: 'var(--primary-light)' }} />
                                <a href="tel:+919871077851" style={{ color: 'var(--gray-400)', textDecoration: 'none' }}>
                                    +91 98710 77851
                                </a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                <Mail size={16} style={{ color: 'var(--primary-light)' }} />
                                <a href="mailto:info@rentmyevent.in" style={{ color: 'var(--gray-400)', textDecoration: 'none' }}>
                                    info@rentmyevent.in
                                </a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-sm)' }}>
                                <MapPin size={16} style={{ color: 'var(--primary-light)', marginTop: '2px' }} />
                                <span style={{ color: 'var(--gray-400)' }}>
                                    Sector 63, Noida, Delhi NCR
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3>Our Services</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {services.map((service, index) => (
                                <li key={index} style={{ marginBottom: 'var(--space-xs)' }}>
                                    <a href="#" style={{
                                        color: 'var(--gray-400)',
                                        textDecoration: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--space-xs)',
                                        transition: 'color 0.3s ease',
                                        fontSize: 'var(--text-sm)'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = 'var(--primary-light)'
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'var(--gray-400)'
                                        }}>
                                        <ArrowRight size={12} />
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h3>Service Areas</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {locations.map((location, index) => (
                                <li key={index} style={{ marginBottom: 'var(--space-xs)' }}>
                                    <a href="#" style={{
                                        color: 'var(--gray-400)',
                                        textDecoration: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--space-xs)',
                                        transition: 'color 0.3s ease',
                                        fontSize: 'var(--text-sm)'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = 'var(--primary-light)'
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'var(--gray-400)'
                                        }}>
                                        <ArrowRight size={12} />
                                        {location}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter & Social */}
                    <div>
                        <h3>Stay Connected</h3>
                        <p style={{ color: 'var(--gray-400)', marginBottom: 'var(--space-lg)' }}>
                            Get updates on latest equipment and exclusive offers
                        </p>

                        <div style={{
                            display: 'flex',
                            gap: 'var(--space-xs)',
                            marginBottom: 'var(--space-lg)',
                            flexWrap: 'wrap'
                        }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    flex: 1,
                                    padding: 'var(--space-sm)',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid var(--gray-700)',
                                    background: 'var(--gray-800)',
                                    color: 'var(--white)',
                                    fontSize: 'var(--text-sm)',
                                    minWidth: '200px'
                                }}
                            />
                            <button className="btn btn-primary" style={{ padding: 'var(--space-sm) var(--space-md)' }}>
                                Subscribe
                            </button>
                        </div>

                        {/* Social Links */}
                        <div>
                            <p style={{
                                color: 'var(--gray-400)',
                                marginBottom: 'var(--space-sm)',
                                fontSize: 'var(--text-sm)'
                            }}>
                                Follow us on social media
                            </p>
                            <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                                {[
                                    { icon: Facebook, href: "https://facebook.com/rentmyevent" },
                                    { icon: Instagram, href: "https://instagram.com/rentmyevent" },
                                    { icon: Twitter, href: "https://twitter.com/rentmyevent" },
                                    { icon: Linkedin, href: "https://linkedin.com/company/rentmyevent" }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '40px',
                                            height: '40px',
                                            background: 'var(--gray-800)',
                                            borderRadius: 'var(--radius-md)',
                                            color: 'var(--gray-400)',
                                            transition: 'all 0.3s ease',
                                            border: '1px solid var(--gray-700)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'var(--primary-light)'
                                            e.currentTarget.style.color = 'var(--white)'
                                            e.currentTarget.style.transform = 'translateY(-2px)'
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'var(--gray-800)'
                                            e.currentTarget.style.color = 'var(--gray-400)'
                                            e.currentTarget.style.transform = 'translateY(0)'
                                        }}
                                    >
                                        <social.icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div style={{
                    borderTop: '1px solid var(--gray-800)',
                    paddingTop: 'var(--space-xl)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 'var(--space-md)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
                        <p style={{ color: 'var(--gray-500)', margin: 0, fontSize: 'var(--text-sm)' }}>
                            © 2024 Rent My Event. All rights reserved.
                        </p>
                        <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                            <a href="#" style={{ color: 'var(--gray-500)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>
                                Privacy Policy
                            </a>
                            <a href="#" style={{ color: 'var(--gray-500)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>
                                Terms of Service
                            </a>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} size={14} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
                        ))}
                        <span style={{ color: 'var(--gray-500)', fontSize: 'var(--text-sm)', marginLeft: 'var(--space-xs)' }}>
                            4.9/5 Rating
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}