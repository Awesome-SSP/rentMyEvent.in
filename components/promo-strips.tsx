"use client"

import { useEffect, useState } from "react"

export default function PromoStrips() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 0.5) % 100)
    }, 60)
    return () => clearInterval(interval)
  }, [])

  const messages = [
    "Premium Event Rental Solutions",
    "Professional Equipment Management",
    "Complete Event Coordination",
    "Expert Technical Support",
    "Nationwide Delivery & Setup",
  ]

  return (
    <div className="bg-gradient-to-r from-[#f1040c] via-[#f31212ee] to-[#e30a0a] text-gray-100 overflow-hidden">
      <div className="py-2 px-4 relative overflow-hidden border-b border-gray-700/30">
        <div
          className="flex gap-16 whitespace-nowrap transition-transform duration-200 ease-linear"
          style={{
            transform: `translateX(-${offset * 1.2}%)`,
          }}
        >
          {[...messages, ...messages].map((msg, idx) => (
            <span key={idx} className="text-xs md:text-sm font-medium flex-shrink-0 tracking-wide text-gray-300">
              {msg}
            </span>
          ))}
        </div>
      </div>

      <div className="py-2 px-4 bg-gradient-to-r from-[#1a1a1a] via-[#2d3748] to-[#1a1a1a] relative overflow-hidden border-b border-gray-700/30">
        <div
          className="flex gap-16 whitespace-nowrap transition-transform duration-200 ease-linear"
          style={{
            transform: `translateX(${offset * 0.8}%)`,
          }}
        >
          {[...messages.reverse(), ...messages.reverse()].map((msg, idx) => (
            <span key={idx} className="text-xs md:text-sm font-medium flex-shrink-0 tracking-wide text-gray-400">
              • {msg}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
