"use client"

import React, { useRef, useEffect, useState, Suspense } from "react"

// Lazy loading components for performance
const LazyFloatingDecoration = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return isVisible ? <>{children}</> : null
}

const LazyAnimatedDevice = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<div className="h-64 animate-pulse bg-gray-200 rounded-2xl" />}>{children}</Suspense>
}

export default function WelcomeSection() {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

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
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-40 bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#2D1B4E] overflow-hidden"
    >
      {/* 3D Floating Balloons and Objects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Hot Air Balloons */}
        <Suspense fallback={null}>
          <LazyFloatingDecoration>
            <div className="absolute top-20 left-16 w-20 h-24 animate-float-slow">
              <div className="text-6xl animate-bounce-slow" style={{ animationDelay: "0s" }}></div>
            </div>
            <div className="absolute top-32 right-20 w-16 h-20 animate-float-slow">
              <div className="text-5xl animate-bounce-slow" style={{ animationDelay: "2s" }}></div>
            </div>
            <div className="absolute bottom-32 left-1/3 w-18 h-22 animate-float-slow">
              <div className="text-7xl animate-bounce-slow" style={{ animationDelay: "1s" }}></div>
            </div>
          </LazyFloatingDecoration>
        </Suspense>

        {/* Animated 3D Shapes */}
        <Suspense fallback={null}>
          <LazyFloatingDecoration>
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-gradient-to-r from-[#6366F1] to-[#EC4899] rounded-full animate-float-slow opacity-60"
                style={{
                  left: `${5 + i * 8}%`,
                  top: `${15 + (i % 4) * 20}%`,
                  animationDelay: `${i * 0.4}s`
                }}
              />
            ))}
          </LazyFloatingDecoration>
        </Suspense>

        {/* Twinkling Stars */}
        <Suspense fallback={null}>
          <LazyFloatingDecoration>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute text-yellow-300 animate-twinkle"
                style={{
                  left: `${2 + i * 5}%`,
                  top: `${8 + (i % 5) * 18}%`,
                  animationDelay: `${i * 0.15}s`,
                  fontSize: `${0.8 + Math.random() * 0.4}rem`
                }}
              >
                {/* Removed star decoration */}
              </div>
            ))}
          </LazyFloatingDecoration>
        </Suspense>

        {/* 3D Gradient Orbs */}
        <div className="absolute top-40 -left-20 w-96 h-96 bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/5 rounded-full blur-3xl animate-service-card-float"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-bl from-[#EC4899]/8 to-transparent rounded-full blur-3xl animate-service-card-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* 3D Animated Device Showcase */}
          <LazyAnimatedDevice>
            <div className="relative order-2 md:order-1 animate-slide-up-blur">
              <div className="relative group">
                {/* 3D Glow Effects */}
                <div className="absolute -inset-8 bg-gradient-to-br from-[#6366F1]/20 to-[#EC4899]/10 rounded-3xl blur-3xl group-hover:blur-4xl transition-all duration-700 opacity-70 group-hover:opacity-100 animate-card-glow-pulse"></div>

                {/* Main Device Container with 3D Transform */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#6366F1]/30 group-hover:border-[#EC4899]/50 transition-all duration-700 transform group-hover:scale-105 group-hover:rotate-2 bg-gradient-to-br from-[#0A0E27]/80 via-[#1a1f3a]/80 to-[#2D1B4E]/80 backdrop-blur-xl">

                  {/* Animated Equipment Display */}
                  <div className="p-8 space-y-6">
                    {/* Professional Equipment Icons */}
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "4K Cameras", color: "from-[#6366F1] to-[#8B5CF6]" },
                        { label: "Pro Audio", color: "from-[#8B5CF6] to-[#EC4899]" },
                        { label: "LED Walls", color: "from-[#EC4899] to-[#F43F5E]" },
                        { label: "Wireless Mics", color: "from-[#06B6D4] to-[#6366F1]" }
                      ].map((item, idx) => (
                        <div
                          key={item.label}
                          className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white text-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                          style={{ animationDelay: `${idx * 0.2}s` }}
                        >
                          <div className="mx-auto mb-2 h-2 w-10 rounded-full bg-white/80"></div>
                          <div className="text-sm font-bold">{item.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Animated Status Bar */}
                    <div className="bg-[#0A0E27]/50 rounded-xl p-4 border border-[#6366F1]/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-bold text-sm">Event Status</span>
                        <span className="text-[#10B981] font-bold text-xs">Live</span>
                      </div>
                      <div className="w-full bg-[#1a1f3a] rounded-full h-2">
                        <div className="bg-gradient-to-r from-[#10B981] to-[#06B6D4] h-2 rounded-full animate-pulse" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                  </div>

                  {/* 3D Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>

                {/* 3D Floating Badges */}
                <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-2xl p-6 shadow-2xl border border-[#EC4899]/30 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 z-10">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl animate-spin-slow">⚡</div>
                    <div className="text-white">
                      <p className="font-black text-sm">Quick Setup</p>
                      <p className="text-xs opacity-80">24/7 Support</p>
                    </div>
                  </div>
                </div>

                {/* Floating Confetti around Device */}
                <Suspense fallback={null}>
                  <LazyFloatingDecoration>
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-3 h-3 bg-gradient-to-r from-[#6366F1] to-[#EC4899] rounded-full animate-particle-drift opacity-0 group-hover:opacity-80"
                        style={{
                          left: `${10 + i * 15}%`,
                          top: `${15 + (i % 3) * 25}%`,
                          animationDelay: `${i * 0.4}s`
                        }}
                      />
                    ))}
                  </LazyFloatingDecoration>
                </Suspense>
              </div>
            </div>
          </LazyAnimatedDevice>

          {/* 3D Text Content */}
          <div className="order-1 md:order-2 space-y-8 animate-slide-up-blur relative">
            {/* Floating Decorations around Text */}
            <Suspense fallback={null}>
              <LazyFloatingDecoration>
                <div className="absolute -top-4 -right-4 text-3xl animate-bounce-slow">🎪</div>
                <div className="absolute top-20 -left-8 text-2xl animate-float-slow">✨</div>
                <div className="absolute bottom-10 -right-6 text-3xl animate-bounce-slow">🎊</div>
              </LazyFloatingDecoration>
            </Suspense>

            {/* 3D Badge */}
            <div className="inline-block relative">
              <span className="px-6 py-3 bg-gradient-to-r from-[#6366F1]/20 to-[#8B5CF6]/20 border border-[#6366F1]/30 rounded-full text-sm font-bold text-[#6366F1] backdrop-blur-xl">
                Welcome to the Future
              </span>

              {/* Floating particles around badge */}
              <div className="absolute -top-2 -left-2 w-2 h-2 bg-[#6366F1] rounded-full animate-ping-slow"></div>
              <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-[#EC4899] rounded-full animate-ping-slow" style={{ animationDelay: "0.5s" }}></div>
            </div>

            {/* 3D Main Heading */}
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight relative z-10">
                Welcome to <br />
                <span className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent animate-gradient-x">
                  Rent My Event
                </span>
              </h2>

              {/* 3D Text Shadow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent blur-sm opacity-30 -z-10">
                Welcome to Rent My Event
              </div>

              <div className="h-3 w-32 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] rounded-full animate-pulse"></div>
            </div>

            {/* Enhanced Tagline */}
            <p className="text-xl text-gray-300 font-medium leading-relaxed">
              We deliver <span className="text-[#6366F1] font-bold">comprehensive 3D event experiences</span> and cutting-edge rental solutions tailored to your vision.
            </p>

            {/* Description with Glow */}
            <p className="text-lg text-gray-400 leading-relaxed font-medium">
              From premium audio-visual equipment to complete event coordination with <span className="text-[#EC4899] font-bold">immersive 3D technology</span>, our experienced team ensures every detail creates unforgettable moments.
            </p>

            {/* 3D Feature Cards */}
            <div className="grid grid-cols-1 gap-4 pt-6">
              {[
                { icon: "💎", text: "Premium Equipment & Expert Team", color: "from-[#6366F1] to-[#8B5CF6]" },
                { icon: "⚡", text: "Fast Setup & 24/7 Support", color: "from-[#8B5CF6] to-[#EC4899]" },
                { icon: "🏆", text: "5000+ Successful Events", color: "from-[#EC4899] to-[#06B6D4]" },
              ].map((point, idx) => (
                <div
                  key={point.text}
                  className={`flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r ${point.color} bg-opacity-10 backdrop-blur-xl border border-white/10 hover:scale-105 hover:-translate-y-1 transition-all duration-500 group`}
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <div className="text-2xl group-hover:animate-bounce-slow">{point.icon}</div>
                  <span className="text-sm font-bold text-white">{point.text}</span>

                  {/* Floating sparkles */}
                  <div className="ml-auto w-2 h-2 bg-white rounded-full animate-twinkle"></div>
                </div>
              ))}
            </div>

            {/* 3D Quote Box */}
            <div className="relative bg-gradient-to-br from-[#6366F1]/20 to-[#EC4899]/10 border-l-4 border-[#6366F1] pl-6 py-6 rounded-2xl backdrop-blur-xl border border-[#6366F1]/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 to-[#EC4899]/5 rounded-2xl"></div>
              <p className="text-lg italic font-bold text-[#6366F1] relative z-10">
                "Excellence in every event, every time."
              </p>
              <div className="absolute top-2 right-4 text-4xl opacity-20">💫</div>
            </div>

            {/* 3D CTA Button */}
            <button className="relative group px-10 py-5 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] text-white font-black rounded-2xl shadow-2xl hover:shadow-[#6366F1]/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 text-lg overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899] via-[#F43F5E] to-[#6366F1] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <span className="relative z-10 flex items-center gap-3">
                Explore Our 3D Services
              </span>

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-twinkle opacity-0 group-hover:opacity-100"
                    style={{
                      left: `${10 + i * 12}%`,
                      top: `${20 + (i % 3) * 30}%`,
                      animationDelay: `${i * 0.15}s`
                    }}
                  />
                ))}
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
