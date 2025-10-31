"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Animate menu items – subtle glassmorphism + color transitions
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className={`fixed w-full z-60 transition-all duration-500 ${scrolled
      ? 'top-0 bg-[#070B1A]/95 backdrop-blur-xl shadow-2xl border-b border-[#8B5CF6]/30'
      : 'top-[2.2rem] bg-transparent backdrop-blur-[2px]'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo with glass and glow */}
          <div className="flex items-center gap-3 group relative">
            <div className="absolute z-[-1] blur-xl left-[-10px] top-[-10px] w-16 h-16 bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#EC4899] opacity-30 rounded-full animate-pulse"></div>
            <img
              src={encodeURI("/new logo.png")}
              alt="Rent My Event"
              className="w-14 h-14 rounded-2xl bg-white/20 object-contain shadow-md border-2 border-[#6366F1]/20"
            />
            <div className="hidden sm:block">
              <h1 className={`text-lg font-black tracking-widest transition-colors duration-300 italic ${scrolled ? 'text-white drop-shadow-[0_1.2px_1.2px_rgba(99,102,241,0.5)]' : 'text-[#6366F1]'}`}>
                RENT MY EVENT
              </h1>
              <p className={`text-xs font-bold transition-colors duration-300 uppercase ${scrolled ? 'text-[#B9BAE3]' : 'text-[#A78BFA]'}`}>
                Premium Events
              </p>
            </div>
          </div>
          {/* Desktop Nav + Animated Hover */}
          <div className="hidden md:flex items-center gap-7">
            {menuItems.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 rounded-xl font-semibold text-md relative z-10 transition-all duration-300
                  ${scrolled
                    ? 'text-white hover:text-[#A78BFA]'
                    : 'text-[#B9BAE3] hover:text-[#6366F1]'}
                  `}
                whileHover={{
                  scale: 1.08,
                  color: "#EC4899",
                  textShadow: "0 2px 12px #8B5CF6dd"
                }}
                transition={{ type: "spring", stiffness: 220, damping: 9 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
          {/* Call-To-Action – neon/glass */}
          <div className="hidden md:flex items-center ml-4">
            <motion.button
              whileHover={{
                scale: 1.06,
                boxShadow: '0px 0px 24px 2px #A78BFA',
                background: 'linear-gradient(90deg, #8B5CF6 10%, #EC4899 90%)',
              }}
              transition={{ duration: 0.25 }}
              className="px-7 py-2.5 bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white font-bold text-sm rounded-2xl shadow-xl border-2 border-[#8B5CF6]/30 transition-all duration-300"
            >
              Get Quote
            </motion.button>
          </div>
          {/* Mobile Menu Icon */}
          <button
            className={`md:hidden p-2 rounded-xl transition-colors duration-300 ${scrolled ? 'text-white' : 'text-[#6366F1]'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
        {/* --- Mobile Menu, Glassy Slide Down, AnimatePresence --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
              className={`md:hidden pb-4 space-y-2 backdrop-blur-2xl rounded-2xl mt-3 border-2 shadow-xl
              ${scrolled
                ? 'bg-[#070B1A]/90 border-[#8B5CF6]/40'
                : 'bg-white/90 border-[#8B5CF6]/10'
              }`}
            >
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block px-6 py-3 text-md font-semibold rounded-lg transition-colors duration-200 
                    ${scrolled ? 'text-white hover:bg-[#8B5CF6]/10' : 'text-[#6366F1] hover:bg-[#A78BFA]/10'}
                  `}
                >
                  {item.label}
                </a>
              ))}
              <button className="w-full mt-3 py-3 rounded-2xl bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white font-bold transition-shadow duration-200 shadow-lg hover:shadow-[0_0_16px_2px_#8B5CF6]">
                Get Quote
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
