"use client"

import React, { useRef, useEffect, useState, Suspense } from "react"
import { Gem, Zap, Trophy } from "lucide-react"

// Lazy load wrapper for smooth entry
const LazyVisible = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 250)
    return () => clearTimeout(timer)
  }, [])

  return isVisible ? <>{children}</> : null
}

const LazySuspense = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className="h-64 animate-pulse bg-gray-300 rounded-3xl" />}>
    {children}
  </Suspense>
)

export default function WelcomeSection() {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-44 bg-gradient-to-br from-[#071424] via-[#1c2040] to-[#2e1e46] overflow-hidden"
      aria-label="Welcome Section"
    >
      {/* Subtle floating orbs decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <LazySuspense>
          <LazyVisible>
            {[...Array(10)].map((_, i) => (
              <span
                key={i}
                className="absolute rounded-full opacity-30 bg-gradient-to-tr from-[#5e5dfd] to-[#ec498f] blur-2xl animate-float-smooth"
                style={{
                  width: 12 + i * 2,
                  height: 12 + i * 2,
                  top: `${10 + (i * 9) % 80}%`,
                  left: `${5 + (i * 11) % 85}%`,
                  animationDelay: `${i * 0.7}s`,
                }}
              />
            ))}
          </LazyVisible>
        </LazySuspense>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-20 grid gap-20 md:grid-cols-2 items-center">
        {/* Animated 3D Equipment Showcase */}
        <LazySuspense>
          <LazyVisible>
            <div className="relative group transform transition-transform duration-700 hover:scale-[1.06] hover:rotate-1 shadow-2xl rounded-3xl bg-gradient-to-br from-[#1a2040] to-[#2e1e46] border border-[#5e5dfd]/30 backdrop-blur-xl overflow-hidden">
              <div className="absolute -inset-8 blur-3xl bg-gradient-to-br from-[#5e5dfd]/20 to-[#ec498f]/15 opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="p-10 space-y-8 relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "4K Cameras", gradient: "from-[#5e5dfd] to-[#8b58f0]" },
                    { label: "Pro Audio", gradient: "from-[#8b58f0] to-[#ec498f]" },
                    { label: "LED Walls", gradient: "from-[#ec498f] to-[#f4475a]" },
                    { label: "Wireless Mics", gradient: "from-[#0bc5db] to-[#5e5dfd]" },
                  ].map(({ label, gradient }, idx) => (
                    <div
                      key={label}
                      className={`rounded-3xl p-5 bg-gradient-to-br ${gradient} text-white font-semibold text-center shadow-md transition-transform duration-500 hover:scale-110 hover:rotate-6`}
                      style={{ animationDelay: `${idx * 0.25}s` }}
                    >
                      <div className="w-12 h-1.5 rounded-full bg-white/80 mb-3 mx-auto"></div>
                      {label}
                    </div>
                  ))}
                </div>

                <div className="bg-[#071424]/60 rounded-xl p-5 border border-[#5e5dfd]/30">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-white font-semibold">Event Status</span>
                    <span className="text-green-500 font-semibold text-xs">Live</span>
                  </div>
                  <div className="w-full bg-[#1c2040] rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-green-500 to-cyan-400 animate-pulse"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </LazyVisible>
        </LazySuspense>

        {/* Text Content */}
        <div className="space-y-10 max-w-xl text-gray-300">
          <div className="inline-block relative mb-6">
            <span className="px-8 py-3 rounded-full border border-[#5e5dfd]/40 bg-gradient-to-r from-[#5e5dfd]/20 to-[#8b58f0]/20 text-[#5e5dfd] font-bold tracking-wide backdrop-blur-lg">
              Welcome to the Future
            </span>
            <span className="absolute -top-2 -left-2 w-2 h-2 rounded-full bg-[#5e5dfd] animate-ping"></span>
            <span className="absolute -bottom-2 -right-2 w-2 h-2 rounded-full bg-[#ec498f] animate-ping delay-200"></span>
          </div>

          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-[#5e5dfd] via-[#8b58f0] to-[#ec498f] bg-clip-text text-transparent select-none">
            Welcome to <br />
            Rent My Event
          </h2>

          <div className="space-y-4">
            <p className="text-lg text-gray-400 font-medium leading-relaxed">
              Delivering{" "}
              <span className="font-bold text-[#5e5dfd]">premier 3D event experiences</span> with next-gen rental solutions tailored meticulously to your vision.
            </p>
            <p className="text-base text-gray-400 font-medium leading-relaxed">
              From high-end audio-visual equipment to immersive 3D event coordination, our seasoned team ensures every detail crafts unforgettable moments.
            </p>
          </div>

          <div className="grid gap-5">
            {[
              { Icon: Gem, text: "Premium Equipment & Expert Team", gradient: "from-[#5e5dfd] to-[#8b58f0]" },
              { Icon: Zap, text: "Fast Setup & 24/7 Support", gradient: "from-[#8b58f0] to-[#ec498f]" },
              { Icon: Trophy, text: "5000+ Successful Events", gradient: "from-[#ec498f] to-[#0bc5db]" },
            ].map(({ Icon, text, gradient }, idx) => (
              <div
                key={text}
                className={`flex items-center gap-4 p-4 rounded-3xl bg-gradient-to-r ${gradient} bg-opacity-15 backdrop-blur-lg border border-white/20 transition-transform duration-300 hover:scale-105`}
                style={{ animationDelay: `${idx * 0.3}s` }}
              >
                <Icon className="w-6 h-6 text-white/90" aria-hidden="true" />
                <span className="font-semibold text-white text-lg">{text}</span>
                <span className="ml-auto w-3 h-3 rounded-full bg-white animate-twinkle" />
              </div>
            ))}
          </div>

          <blockquote className="relative bg-gradient-to-br from-[#5e5dfd]/20 to-[#ec498f]/10 rounded-3xl border-l-6 border-[#5e5dfd] pl-8 py-6 backdrop-blur-lg text-[#5e5dfd] italic font-semibold shadow-md">
            <p>“Excellence in every event, every time.”</p>
            <div className="absolute top-3 right-5 text-5xl opacity-20 select-none">💫</div>
          </blockquote>

          <button
            type="button"
            className="relative inline-flex items-center justify-center px-14 py-5 bg-gradient-to-r from-[#5e5dfd] via-[#8b58f0] to-[#ec498f] font-extrabold text-white rounded-3xl shadow-lg shadow-[#5e5dfd]/40 hover:shadow-[#8b58f0]/50 transition-transform duration-400 hover:-translate-y-1 hover:scale-105 overflow-hidden"
            aria-label="Explore Our 3D Services"
          >
            Explore Our 3D Services

            <span className="absolute inset-0 bg-gradient-to-r from-[#ec498f] via-[#f43f5e] to-[#5e5dfd] opacity-0 hover:opacity-30 transition-opacity duration-500 pointer-events-none rounded-3xl" />

            {[...Array(7)].map((_, i) => (
              <span
                key={i}
                className="absolute w-1.5 h-1.5 bg-white rounded-full animate-twinkle opacity-0 hover:opacity-100"
                style={{
                  left: `${12 + i * 13}%`,
                  top: `${20 + (i % 3) * 28}%`,
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </button>
        </div>
      </div>
    </section>
  )
}
