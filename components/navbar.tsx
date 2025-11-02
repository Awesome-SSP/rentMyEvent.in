"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/98 backdrop-blur-sm border-b border-gray-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4 min-w-0">
            <a href="/" className="block" aria-label="Rent My Event Home">
              <Image
                src="/new logo.png"
                alt="Rent My Event"
                width={240}
                height={64}
                priority
                fetchPriority="high"
                className="h-10 sm:h-12 md:h-12 w-auto object-contain"
                sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, 240px"
              />
            </a>
            <div className="hidden sm:block truncate"></div>
            {/* <div className="hidden sm:block truncate">
              <h1 className="text-base font-semibold text-[#1a1a1a] tracking-tight leading-tight truncate">RENT MY EVENT</h1>
              <p className="text-xs text-gray-500 font-medium">Event Rental Solutions</p>
            </div> */}
          </div>

          <div className="hidden md:flex items-center gap-8">
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
                className="text-gray-700 hover:text-[#2cc16f] font-medium text-sm transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
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
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 animate-in fade-in slide-in-from-top-2">
            {[
              { label: "HOME", href: "/" },
              { label: "ABOUT", href: "/about" },
              { label: "SERVICES", href: "/services" },
              { label: "BLOG", href: "/blog" },
              { label: "CONTACT", href: "/contact" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 text-sm rounded-md">
                {item.label}
              </a>
            ))}
            <Button className="w-full bg-[#2cc16f] hover:bg-[#1fa958] text-white font-semibold mt-3">GET QUOTE</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
