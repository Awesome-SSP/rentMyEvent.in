"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <nav className="sticky top-0 z-50 bg-white/98 backdrop-blur-sm border-b border-gray-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <a href="/" className="block flex-shrink-0" aria-label="Rent My Event Home">
              <Image
                src="/new logo.png"
                alt="Rent My Event"
                width={240}
                height={64}
                priority
                fetchPriority="high"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain max-w-[140px] sm:max-w-[180px] md:max-w-[240px]"
                sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, 240px"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-gray-700 hover:text-[#2cc16f] font-medium text-sm transition-colors duration-200"
            >
              HOME
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-[#2cc16f] font-medium text-sm transition-colors duration-200"
            >
              ABOUT
            </a>

            {/* Services Dropdown */}
            <div className="relative group">
              <a
                href="/services"
                className="text-gray-700 hover:text-[#2cc16f] font-medium text-sm transition-colors duration-200 flex items-center gap-1"
              >
                SERVICES
                <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-2">
                  <a
                    href="/services"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    All Services
                  </a>
                  <div className="border-t border-gray-100 my-2"></div>
                  <a
                    href="/services/projector"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors"
                  >
                    Projector Rental Delhi NCR
                  </a>
                  <a
                    href="/services/projector-noida"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-md transition-colors"
                  >
                    Projector Rental Noida
                  </a>
                  <a
                    href="/services"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors"
                  >
                    Audio Visual Equipment
                  </a>
                  <a
                    href="/services"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-md transition-colors"
                  >
                    Event Management
                  </a>
                </div>
              </div>
            </div>

            <a
              href="/blog"
              className="text-gray-700 hover:text-[#2cc16f] font-medium text-sm transition-colors duration-200"
            >
              BLOG
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-[#2cc16f] font-medium text-sm transition-colors duration-200"
            >
              CONTACT
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#5a3a7a] font-medium text-sm transition-colors duration-200">
                LOCATIONS
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200/50">
                {["Delhi", "NCR", "Gurgaon"].map((loc) => (
                  <a
                    key={loc}
                    href="#"
                    className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 text-sm transition-colors first:rounded-t-md last:rounded-b-md"
                  >
                    {loc}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* responsive button: prevent overflow by limiting width, truncating and reducing padding on smaller viewports */}
          <div className="hidden md:flex items-center md:ml-4">
            <Button
              className="flex-shrink-0 bg-[#2cc16f] hover:bg-[#1fa958] text-white font-semibold text-sm px-3 md:px-6 py-1.5 rounded-md transition-all duration-200 max-w-[160px] truncate"
            >
              <span className="inline-block w-full text-center truncate">GET QUOTE</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#2cc16f] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2cc16f] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded="false"
            aria-label="Toggle main menu"
          >
            {isOpen ?
              <X className="w-6 h-6" aria-hidden="true" /> :
              <Menu className="w-6 h-6" aria-hidden="true" />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-screen overflow-y-auto">
              <a
                href="/"
                className="block px-4 py-3 text-base font-medium text-gray-900 hover:text-[#2cc16f] hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-4 py-3 text-base font-medium text-gray-900 hover:text-[#2cc16f] hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>

              {/* Mobile Services Section */}
              <div className="border-b border-gray-100">
                <a
                  href="/services"
                  className="block px-4 py-3 text-base font-medium text-gray-900 hover:text-[#2cc16f] hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </a>
                <div className="pb-2">
                  <a
                    href="/services/projector"
                    className="block px-6 py-2 text-sm text-gray-600 hover:text-[#2cc16f] hover:bg-gray-50 rounded-lg transition-colors ml-2 mr-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Projector Rental Delhi NCR
                  </a>
                  <a
                    href="/services/projector-noida"
                    className="block px-6 py-2 text-sm text-gray-600 hover:text-[#2cc16f] hover:bg-gray-50 rounded-lg transition-colors ml-2 mr-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Projector Rental Noida
                  </a>
                  <a
                    href="/services"
                    className="block px-6 py-2 text-sm text-gray-600 hover:text-[#2cc16f] hover:bg-gray-50 rounded-lg transition-colors ml-2 mr-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Audio Visual Equipment
                  </a>
                  <a
                    href="/services"
                    className="block px-6 py-2 text-sm text-gray-600 hover:text-[#2cc16f] hover:bg-gray-50 rounded-lg transition-colors ml-2 mr-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Event Management
                  </a>
                </div>
              </div>

              <a
                href="/blog"
                className="block px-4 py-3 text-base font-medium text-gray-900 hover:text-[#2cc16f] hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </a>
              <a
                href="/contact"
                className="block px-4 py-3 text-base font-medium text-gray-900 hover:text-[#2cc16f] hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>

              {/* Mobile Locations */}
              <div className="border-b border-gray-100">
                <div className="px-4 py-3 text-base font-medium text-gray-900">
                  Service Areas
                </div>
                <div className="pb-2">
                  {["Delhi", "NCR", "Gurgaon", "Noida", "Faridabad"].map((loc) => (
                    <a
                      key={loc}
                      href="#"
                      className="block px-6 py-2 text-sm text-gray-600 hover:text-[#2cc16f] hover:bg-gray-50 rounded-lg transition-colors ml-2 mr-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {loc}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile CTA Section */}
              <div className="pt-4 pb-4 space-y-3">
                <Button
                  className="w-full bg-[#2cc16f] hover:bg-[#1fa958] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </Button>

                <a
                  href="tel:+917065441547"
                  className="flex items-center justify-center w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Call: +91 70654 41547
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
