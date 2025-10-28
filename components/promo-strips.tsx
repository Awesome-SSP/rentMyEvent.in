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
    'Event Rental Experts', 'Premium Event Solutions', 'Professional Equipment Management', 'Complete Event Coordination', 'Expert Technical Support', 'Nationwide Delivery & Setup', 'Creative Event Planning', 'Customized Rental Packages', '24/7 Customer Support', 'High-Quality Equipment', 'Affordable Pricing Plans', 'Your Event. Our Expertise.', 'Premium Rentals. Perfect Events.', 'Smart Equipment. Seamless Setup.', 'Plan. Rent. Celebrate.', 'On-Time Delivery. Every Time.', 'Tailored Packages. Hassle-Free.', 'Top Gear. Top Experience.', '24/7 Support. Zero Stress.', 'Nationwide Reach. Local Care.', 'Trusted by Professionals'
  ]

  return (
    <div className="bg-gradient-to-r from-[#FFB3D9] via-[#FFB3D9]/90 to-[#E6D5FF] text-gray-100 overflow-hidden">
      <div className="py-2 px-4 relative overflow-hidden border-b border-pink-300/30">
        <div
          className="flex gap-16 whitespace-nowrap transition-transform duration-200 ease-linear"
          style={{
            transform: `translateX(-${offset * 0.8}%)`,
          }}
        >
          {[...messages, ...messages].map((msg, idx) => (
            <span key={idx} className="text-xs md:text-sm font-semibold flex-shrink-0 tracking-wide text-[#6B4E71]">
              {msg}
            </span>
          ))}
        </div>
      </div>

      <div className="py-2 px-4 bg-gradient-to-r from-[#FEF9F3] via-[#FFE6F0] to-[#FEF9F3] relative overflow-hidden border-b border-pink-200/30">
        <div
          className="flex gap-16 whitespace-nowrap transition-transform duration-200 ease-linear"
          style={{
            transform: `translateX(${offset * 0.8}%)`,
          }}
        >
          {[...messages.reverse(), ...messages.reverse()].map((msg, idx) => (
            <span key={idx} className="text-xs md:text-sm font-semibold flex-shrink-0 tracking-wide text-[#6B4E71]">
              • {msg}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
