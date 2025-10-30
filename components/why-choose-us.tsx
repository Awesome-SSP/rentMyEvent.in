"use client"

import { Award, Package, Users, Clock, DollarSign, CheckCircle, Info } from "lucide-react"
import React, { useRef, useEffect, useState, Suspense } from "react"

// Lazy loading components for performance optimization
const LazyFloatingShape = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150)
    return () => clearTimeout(timer)
  }, [])

  return isVisible ? <>{children}</> : null
}

const LazyMotionCard = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<div className="h-48 animate-pulse bg-gray-200/20 rounded-2xl" />}>{children}</Suspense>
}

export default function WhyChooseUs() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  const highlights = [
    {
      title: "Rent My Event Agency Near Me",
      content:
        "THE BEST Rent My Event COMPANY IN GURGAON — Rent My Event Services tailored to make your events reminisce. We assist you in orchestrating smooth and spectacular events with high‑standard rental equipment and expert event management.",
      icon: Info,
    },
    {
      title: "Transparent & Reputable",
      content:
        "We uphold absolute openness—no surprise charges, no unpleasant surprises—only evident, professional service for your events.",
      icon: CheckCircle,
    },
    {
      title: "Award‑Winning Solutions",
      content:
        "We are a group of event management and rental professionals, producing flawless events with a decade of experience. Reliable in Gurgaon for making every event extraordinary.",
      icon: Award,
    },
    {
      title: "Goal‑Oriented Execution",
      content:
        "Being a top event rental and management company in Gurgaon, we offer end‑to‑end event solutions. We don't promise overnight miracles — we deliver events that run like clockwork and leave a lasting impression.",
      icon: Clock,
    },
  ]

  // replaced benefits with provided content (formatted as card items)
  const benefits = [
    {
      icon: Users,
      title: "Your Event, Our Priority",
      description: "We make your event our priority — dedicated planning and execution focused on your objectives.",
    },
    {
      icon: Clock,
      title: "Easy Event Planning",
      description: "Easy event planning from conception to completion — clear timelines and coordinated delivery.",
    },
    {
      icon: DollarSign,
      title: "Competitive Packages",
      description: "Competitive rental packages to suit all budgets — transparent pricing and flexible options.",
    },
    {
      icon: Package,
      title: "High‑Quality Equipment",
      description: "High-quality selection of event equipment — premium AV, lighting and staging for memorable experiences.",
    },
    {
      icon: CheckCircle,
      title: "Professional On‑site Assistance",
      description: "Professional on‑site assistance & speedy setup — technicians who ensure flawless execution.",
    },
    {
      icon: Package,
      title: "Tailored Solutions",
      description: "Tailored solutions for corporate and social functions — custom packages to meet event goals.",
    },

    // "What You Gain with Our Services"
    // {
    //   icon: Users,
    //   title: "Save Time",
    //   description: "Gain time using a one‑stop event partner — planning, logistics and execution handled for you.",
    // },
    // {
    //   icon: CheckCircle,
    //   title: "Stress‑Free Coordination",
    //   description: "Eliminate stress with effortless coordination — single point of contact and proactive communication.",
    // },
    // {
    //   icon: Award,
    //   title: "Impress Guests",
    //   description: "Impress guests with world‑class AV & rental equipment — polished presentation and impactful visuals.",
    // },
    // {
    //   icon: Clock,
    //   title: "Peace of Mind",
    //   description: "Relish peace of mind knowing details are managed by professionals — reliable teams and tested processes.",
    // },

  ]

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-40 bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#2D1B4E] overflow-hidden"
    >
      {/* Background accents minimized for professional tone */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -left-32 w-96 h-96 bg-gradient-to-br from-[#6366F1]/15 to-[#8B5CF6]/8 rounded-full blur-3xl animate-service-card-float"></div>
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-gradient-to-bl from-[#EC4899]/12 to-transparent rounded-full blur-3xl animate-service-card-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-[#06B6D4]/10 to-[#10B981]/5 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 3D Section Header */}
        <header className="text-center mb-20 space-y-8 animate-slide-up-blur relative">
          {/* Header decorations removed for cleaner look */}

          <div className="inline-block relative">
            <span className="px-6 py-3 bg-gradient-to-r from-[#6366F1]/20 to-[#8B5CF6]/20 border border-[#6366F1]/30 rounded-full text-sm font-bold text-[#6366F1] backdrop-blur-xl">Why Choose Us</span>

            {/* Orbiting particles */}
            <div className="absolute -top-2 -left-2 w-3 h-3 bg-[#6366F1] rounded-full animate-ping-slow"></div>
            <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-[#EC4899] rounded-full animate-ping-slow" style={{ animationDelay: "0.5s" }}></div>
          </div>

          <div className="relative">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight relative z-10">
              Why Choose <br />
              <span className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent animate-gradient-x">
                Rent My Event
              </span>
            </h2>

            {/* 3D Text Shadow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent blur-sm opacity-30 -z-10">
              Why Choose Rent My Event
            </div>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
            Services & management you can trust — <span className="text-[#6366F1] font-bold">transparent pricing</span>,
            <span className="text-[#EC4899] font-bold"> award-winning execution</span> and
            <span className="text-[#06B6D4] font-bold"> goal-oriented planning</span>.
          </p>
        </header>

        {/* 3D Highlight Cards with Motion Effects */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {highlights.map((h, idx) => {
            const Icon = h.icon
            const colors = [
              'from-[#6366F1] to-[#8B5CF6]',
              'from-[#8B5CF6] to-[#EC4899]',
              'from-[#EC4899] to-[#F43F5E]',
              'from-[#06B6D4] to-[#10B981]'
            ]
            return (
              <LazyMotionCard key={h.title}>
                <article
                  className={`group relative bg-gradient-to-br from-[#0A0E27]/80 via-[#1a1f3a]/80 to-[#2D1B4E]/80 backdrop-blur-xl border-2 border-[#6366F1]/20 rounded-3xl p-8 hover:border-[#EC4899]/40 shadow-2xl hover:shadow-[#6366F1]/25 transform hover:scale-110 hover:-translate-y-4 hover:rotate-2 transition-all duration-700 animate-service-card-float overflow-hidden ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{
                    animationDelay: `${idx * 200}ms`,
                    transitionDelay: `${idx * 100}ms`
                  }}
                >
                  {/* 3D Glow Effects */}
                  <div className={`absolute -inset-px bg-gradient-to-br ${colors[idx]} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-sm animate-card-glow-pulse`}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>

                  {/* Floating Particles around Card */}
                  <Suspense fallback={null}>
                    <LazyFloatingShape>
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-2 h-2 bg-gradient-to-r ${colors[idx]} rounded-full animate-particle-drift opacity-0 group-hover:opacity-70`}
                          style={{
                            left: `${15 + i * 25}%`,
                            top: `${10 + i * 15}%`,
                            animationDelay: `${i * 0.4}s`
                          }}
                        />
                      ))}
                    </LazyFloatingShape>
                  </Suspense>

                  <div className="relative flex items-start gap-4 z-10">
                    {/* 3D Icon Container */}
                    <div className={`flex-none w-20 h-20 rounded-2xl bg-gradient-to-br ${colors[idx]} flex items-center justify-center transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl relative`}>
                      <Icon className="w-10 h-10 text-white drop-shadow-lg" />

                      {/* Icon Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors[idx]} rounded-2xl blur-lg opacity-50 transform scale-110`}></div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-500">
                        {h.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed font-medium">
                        {h.content}
                      </p>
                    </div>
                  </div>

                  {/* 3D Bottom Accent with Animation */}
                  <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${colors[idx]} rounded-b-3xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>

                  {/* Corner decorations removed */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white/10 rounded-full opacity-0 group-hover:opacity-100"></div>
                </article>
              </LazyMotionCard>
            )
          })}
        </div>

        {/* 3D Benefits Section Header */}
        <div className="text-center mb-20 relative">
          {/* Floating emojis removed */}

          <h3 className="text-4xl md:text-6xl font-black text-white mb-4 relative z-10">
            What You <span className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent animate-gradient-x">Get With Us</span>
          </h3>

          {/* 3D underline */}
          <div className="w-40 h-2 bg-gradient-to-r from-[#6366F1] to-[#EC4899] rounded-full mx-auto animate-pulse"></div>
        </div>

        {/* 3D Benefits Grid with Advanced Motion Effects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            const colors = [
              'from-[#6366F1] to-[#8B5CF6]',
              'from-[#8B5CF6] to-[#EC4899]',
              'from-[#EC4899] to-[#F43F5E]',
              'from-[#06B6D4] to-[#10B981]',
              'from-[#10B981] to-[#6366F1]',
              'from-[#F43F5E] to-[#8B5CF6]'
            ]

            return (
              <LazyMotionCard key={benefit.title}>
                <div
                  className={`group relative bg-gradient-to-br from-[#0A0E27]/90 via-[#1a1f3a]/90 to-[#2D1B4E]/90 backdrop-blur-xl border-2 border-[#6366F1]/20 rounded-3xl p-8 hover:border-[#EC4899]/40 shadow-2xl hover:shadow-[#6366F1]/30 transform hover:scale-110 hover:-translate-y-6 hover:rotate-3 transition-all duration-700 animate-service-card-float overflow-hidden ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{
                    animationDelay: `${idx * 150}ms`,
                    transitionDelay: `${idx * 50}ms`
                  }}
                >
                  {/* 3D Glow Effects */}
                  <div className={`absolute -inset-px bg-gradient-to-br ${colors[idx % colors.length]} rounded-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-700 blur-md animate-card-glow-pulse`}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>

                  {/* Floating Particles */}
                  <Suspense fallback={null}>
                    <LazyFloatingShape>
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-2 h-2 bg-gradient-to-r ${colors[idx % colors.length]} rounded-full animate-particle-drift opacity-0 group-hover:opacity-80`}
                          style={{
                            left: `${10 + i * 20}%`,
                            top: `${15 + (i % 2) * 30}%`,
                            animationDelay: `${i * 0.3}s`
                          }}
                        />
                      ))}
                    </LazyFloatingShape>
                  </Suspense>

                  <div className="relative space-y-6 z-10">
                    {/* 3D Icon Header */}
                    <div className="flex items-center gap-4">
                      <div className={`flex-none w-16 h-16 rounded-2xl bg-gradient-to-br ${colors[idx % colors.length]} flex items-center justify-center transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl relative`}>
                        <Icon className="w-8 h-8 text-white drop-shadow-lg" />

                        {/* Icon pulse effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${colors[idx % colors.length]} rounded-2xl blur-lg opacity-40 animate-ping-slow`}></div>
                      </div>

                      <h4 className="text-xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-500">
                        {benefit.title}
                      </h4>
                    </div>

                    {/* Enhanced Description */}
                    <p className="text-gray-300 text-sm leading-relaxed font-medium group-hover:text-gray-200 transition-colors duration-500">
                      {benefit.description}
                    </p>

                    {/* 3D Check Mark with Animation */}
                    <div className={`flex items-center justify-between p-3 rounded-xl bg-gradient-to-r ${colors[idx % colors.length]} bg-opacity-10 backdrop-blur-sm border border-white/10 group-hover:scale-105 transition-all duration-500`}>
                      <div className="flex items-center gap-3">
                        <span className="text-[#10B981] text-xl font-black animate-bounce-slow">✓</span>
                        <span className="text-xs font-bold text-white">Guaranteed Quality</span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    </div>
                  </div>

                  {/* 3D Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${colors[idx % colors.length]} rounded-b-3xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>

                  {/* Corner stars removed */}
                </div>
              </LazyMotionCard>
            )
          })}
        </div>

        {/* 3D CTA Section */}
        <div className="mt-24 text-center animate-fade-in-up animate-delay-500 relative">
          {/* CTA floating emojis removed */}

          <div className="inline-block relative">
            <button className="group relative px-12 py-6 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] text-white font-black rounded-2xl shadow-2xl hover:shadow-[#6366F1]/50 transform hover:-translate-y-3 hover:scale-110 transition-all duration-700 text-xl overflow-hidden">
              {/* Animated Background Layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899] via-[#F43F5E] to-[#06B6D4] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Floating Sparkles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-twinkle opacity-0 group-hover:opacity-100"
                    style={{
                      left: `${8 + i * 8}%`,
                      top: `${15 + (i % 4) * 25}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>

              <span className="relative z-10 flex items-center gap-4">Start Your Journey Today</span>
            </button>

            {/* 3D Button Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
