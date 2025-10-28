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
    <section className="section-diag section-diag--b py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#1a1a1a] animate-fade-in-down">
            How do <span className="bg-gradient-to-r from-[#2cc16f] to-[#ff9700] bg-clip-text text-transparent">We Ensure</span> Your Events Succeed?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            Our approach combines <span className="bg-gradient-to-r from-[#ff9700] to-[#dc5f5f] bg-clip-text text-transparent font-semibold">creativity, expertise, and technology</span> to provide smooth and memorable events.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => {
            const Icon = it.icon
            return (
              <article
                key={it.title}
                className="group bg-white/6 dark:bg-black/16 backdrop-blur-sm border border-white/8 dark:border-white/6 rounded-2xl p-6 hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-none w-20 h-20 rounded-lg bg-[#5a3a7a]/12 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-[#5a3a7a]" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#111827] dark:text-white">{it.title}</h3>
                    <p className="text-sm text-[#5a3a7a] mt-1">{it.subtitle}</p>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{it.description}</p>
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