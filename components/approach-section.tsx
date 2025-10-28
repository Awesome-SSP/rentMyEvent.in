"use client"

import React from "react"
import { Monitor, Calendar, Users, Wrench } from "lucide-react"

export default function ApproachSection() {
  const items = [
    {
      title: "Event Rentals",
      subtitle: "Premium AV & staging on rent",
      description:
        "Quality projectors, LED screens, plasma TVs, sound equipment and complete AV setups — available for short- or long-term rental to elevate any event.",
      icon: Monitor,
    },
    {
      title: "Event Planning",
      subtitle: "Concept to completion",
      description:
        "End-to-end planning for small gatherings to grand conferences — timelines, vendors and logistics coordinated so you can focus on the guest experience.",
      icon: Calendar,
    },
    {
      title: "On-Site Management",
      subtitle: "Seamless execution",
      description:
        "Expert technicians and managers handle installation, testing and live support so your event runs smoothly from first setup to final teardown.",
      icon: Users,
    },
    {
      title: "Tailor-made Solutions",
      subtitle: "Custom packages for every event",
      description:
        "We design bespoke rental & management packages to match your budget, venue and objectives — flexible, scalable and results-driven.",
      icon: Wrench,
    },
  ]

  return (
    <section className="section-diag section-diag--b py-16 md:py-24 relative">
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB3D9] to-[#E6D5FF] opacity-15 blur-2xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-20 right-5 w-20 h-20 rounded-full bg-gradient-to-br from-[#B3F0E8] to-[#FFB3D9] opacity-10 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="text-center mb-10 animate-fade-in-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#6B4E71]">
            How do <span className="bg-gradient-to-r from-[#FFB3D9] to-[#FF6B9D] bg-clip-text text-transparent">We Ensure</span> Your Events Succeed?
          </h2>
          <p className="text-[#6B4E71] max-w-2xl mx-auto animate-fade-in-up animate-delay-200 font-medium">
            Our approach combines <span className="bg-gradient-to-r from-[#FFB3D9] to-[#E6D5FF] bg-clip-text text-transparent font-bold">creativity, expertise, and technology</span> to provide smooth and memorable events.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => {
            const Icon = it.icon
            return (
              <article
                key={it.title}
                className="group bg-white border-2 border-pink-200 rounded-2xl p-6 card-hover-lift shadow-soft animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-none w-20 h-20 rounded-lg bg-gradient-to-br from-[#FFB3D9] to-[#E6D5FF] flex items-center justify-center shadow-soft">
                    <Icon className="w-10 h-10 text-[#FF6B9D]" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#6B4E71]">{it.title}</h3>
                    <p className="text-sm text-[#FF6B9D] mt-1 font-semibold">{it.subtitle}</p>
                    <p className="mt-3 text-sm text-[#7B5E81] leading-relaxed font-medium">{it.description}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}