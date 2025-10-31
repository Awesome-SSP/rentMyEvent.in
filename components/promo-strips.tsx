"use client"

import Marquee from "./ui/marquee"

export default function PromoStrips() {

  const messages = [
    'Event Rental Experts', 'Premium Event Solutions', 'Professional Equipment Management', 'Complete Event Coordination', 'Expert Technical Support', 'Nationwide Delivery & Setup', 'Creative Event Planning', 'Customized Rental Packages', '24/7 Customer Support', 'High-Quality Equipment', 'Affordable Pricing Plans', 'Your Event. Our Expertise.', 'Premium Rentals. Perfect Events.', 'Smart Equipment. Seamless Setup.', 'Plan. Rent. Celebrate.', 'On-Time Delivery. Every Time.', 'Tailored Packages. Hassle-Free.', 'Top Gear. Top Experience.', '24/7 Support. Zero Stress.', 'Nationwide Reach. Local Care.', 'Trusted by Professionals'
  ]

  return (
    <div className="fixed top-0 w-full z-[60] bg-gradient-to-r from-[#f1040c] via-[#f31212ee] to-[#e30a0a] text-gray-100 overflow-hidden">
      <div className="py-2 px-4 relative overflow-hidden border-b border-gray-700/30">
        <Marquee direction="left" speedFactor={0.8} gapClassName="gap-16" ariaLabel="promo messages left" edgeFade>
          {messages.map((msg, idx) => (
            <span key={`m1-${idx}`} className="text-xs md:text-sm font-medium shrink-0 tracking-wide text-gray-300">
              {msg}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="py-2 px-4 bg-gradient-to-r from-[#1a1a1a] via-[#2d3748] to-[#1a1a1a] relative overflow-hidden border-b border-gray-700/30">
        <Marquee direction="right" speedFactor={0.8} gapClassName="gap-16" ariaLabel="promo messages right" edgeFade>
          {[...messages].reverse().map((msg, idx) => (
            <span key={`m2-${idx}`} className="text-xs md:text-sm font-medium shrink-0 tracking-wide text-gray-400">
              • {msg}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
