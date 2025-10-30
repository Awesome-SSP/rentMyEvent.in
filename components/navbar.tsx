"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled
      ? 'top-0 bg-[#0A0E27]/95 backdrop-blur-2xl border-b border-[#6366F1]/30 shadow-2xl'
      : 'top-[4.5rem] bg-transparent backdrop-blur-sm'
      }`}>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-3 group">
            <img
              src={encodeURI("/new logo.png")}
              alt="Rent My Event"
              className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-contain transform group-hover:scale-105 transition-all duration-300"
            />

            <div className="hidden sm:block">
              <h1 className={`text-lg font-black tracking-wide transition-colors duration-300 ${scrolled ? 'text-white' : 'text-[#0F172A]'
                }`}>
                RENT MY EVENT
              </h1>
              <p className={`text-xs font-bold transition-colors duration-300 ${scrolled ? 'text-[#94A3B8]' : 'text-[#64748B]'
                }`}>
                Premium Events
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 py-2 rounded-lg transition-all duration-300 ${scrolled
                  ? 'text-white hover:text-[#6366F1] hover:bg-white/10'
                  : 'text-[#475569] hover:text-[#6366F1] hover:bg-[#6366F1]/10'
                  } font-semibold text-sm`}
              >
                {item.label}
              </a>
            ))}


          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center ml-4">
            <button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#EC4899] text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${scrolled ? 'text-white hover:bg-white/10' : 'text-[#0F172A] hover:bg-black/10'
              }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden pb-4 space-y-2 backdrop-blur-xl rounded-xl mt-4 border shadow-xl animate-slide-down ${scrolled
              ? 'bg-[#0A0E27]/95 border-[#6366F1]/20'
              : 'bg-white/95 border-gray-200'
            }`}>
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block px-4 py-3 text-sm font-semibold rounded-lg transition-colors duration-300 ${scrolled
                    ? 'text-white hover:bg-white/10'
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {item.label}
              </a>
            ))}

            <button className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-bold mt-3 py-3 rounded-xl transition-all duration-300 hover:shadow-lg">
              Get Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
