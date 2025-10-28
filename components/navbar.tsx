"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#FFE6F0]/40 shadow-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-3 md:gap-4">
            <img
              src={encodeURI("/new logo.png")}
              alt="Rent My Event"
              className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-contain shadow-md hover:shadow-premium transition-shadow duration-300"
            />
            <div className="hidden sm:block">
              <h1 className="text-base md:text-lg font-black text-[#6B4E71] tracking-tight">RENT MY EVENT</h1>
              <p className="text-xs md:text-sm text-[#FF6B9D] font-bold">Premium Event Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {[
              { label: "HOME", href: "/" },
              { label: "ABOUT", href: "/about" },
              { label: "SERVICES", href: "/services" },
              { label: "BLOG", href: "/blog" },
              { label: "CONTACT", href: "/contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#6B4E71] hover:text-[#FF6B9D] font-bold text-sm transition-all duration-300 underline-hover relative group"
              >
                {item.label}
              </a>
            ))}

            {/* Dropdown Menu */}
            <div className="relative group">
              <button className="text-[#6B4E71] hover:text-[#FF6B9D] font-bold text-sm transition-all duration-300">
                LOCATIONS
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-gradient-to-br from-white to-[#FEF9F3] rounded-xl shadow-premium-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-[#FFE6F0] backdrop-blur-sm z-50">
                {["Delhi", "NCR", "Gurgaon"].map((loc) => (
                  <a
                    key={loc}
                    href="#"
                    className="block px-4 py-3 text-[#6B4E71] hover:text-[#FF6B9D] hover:bg-[#FFE6F0] text-sm font-bold transition-all first:rounded-t-xl last:rounded-b-xl"
                  >
                    📍 {loc}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center md:ml-6">
            <button className="btn-pro px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-black text-sm md:text-base shadow-premium-lg hover:shadow-premium-hover transform hover:-translate-y-0.5 transition-all duration-300">
              GET QUOTE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-[#FFE6F0] rounded-lg transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#FF6B9D] font-bold" />
            ) : (
              <Menu className="w-6 h-6 text-[#6B4E71] font-bold" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-2 animate-slide-down-blur">
            {[
              { label: "HOME", href: "/" },
              { label: "ABOUT", href: "/about" },
              { label: "SERVICES", href: "/services" },
              { label: "BLOG", href: "/blog" },
              { label: "CONTACT", href: "/contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-[#6B4E71] hover:text-[#FF6B9D] hover:bg-[#FFE6F0]/50 text-sm font-bold rounded-lg transition-all duration-300"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Locations */}
            <div className="px-4 py-3">
              <p className="text-[#6B4E71] font-bold text-sm mb-2">Locations:</p>
              <div className="flex gap-2">
                {["Delhi", "NCR", "Gurgaon"].map((loc) => (
                  <button
                    key={loc}
                    className="flex-1 px-2 py-2 bg-[#FFE6F0] text-[#FF6B9D] hover:bg-[#FFB3D9] text-xs font-bold rounded-lg transition-all duration-300"
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile CTA Button */}
            <button className="btn-pro w-full px-4 py-3 mt-4 rounded-lg font-black text-white shadow-premium hover:shadow-premium-lg transition-all duration-300">
              GET QUOTE
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
