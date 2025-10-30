"use client"

import React, { useRef, useState, useEffect } from "react"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 via-[#8B5CF6]/5 to-[#EC4899]/10 animate-hero-gradient"></div>
        <div className="absolute top-0 -left-40 w-80 h-80 bg-gradient-to-br from-[#3B82F6]/30 to-[#06B6D4]/10 rounded-full blur-3xl animate-blob opacity-60"></div>
        <div className="absolute top-40 -right-32 w-96 h-96 bg-gradient-to-bl from-[#8B5CF6]/25 to-[#3B82F6]/5 rounded-full blur-3xl animate-blob opacity-50" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-t from-[#EC4899]/20 via-transparent to-transparent rounded-full blur-3xl opacity-40"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute w-1 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animation: `floatParticles ${4 + Math.random() * 6}s ease-out forwards`, animationDelay: `${Math.random() * 3}s` }}></div>
          ))}
        </div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#3B82F6]/5 rounded-full blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#8B5CF6]/5 rounded-full blur-3xl animate-pulse opacity-30" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className={`inline-block animate-hero-badge ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full blur-lg opacity-40"></div>
                <div className="relative px-6 py-3 bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20 backdrop-blur-xl border border-[#3B82F6]/60 rounded-full">
                  <span className="text-sm font-black bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">✨ TRANSFORM YOUR EVENTS</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter text-white">
                <span className="block animate-hero-title" style={{ animationDelay: "0ms" }}>Create</span>
                <span className="block animate-hero-title bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent animate-hero-gradient" style={{ animationDelay: "150ms" }}>Unforgettable</span>
                <span className="block animate-hero-title text-white" style={{ animationDelay: "300ms" }}>Moments</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed font-medium max-w-xl">Experience elite event management with cutting-edge equipment and premium service.</p>

            <div className="grid grid-cols-2 gap-4 pt-4 max-w-sm">
              {[{ value: "500K+", label: "Events", delay: "500ms" }, { value: "50K+", label: "Clients", delay: "600ms" }, { value: "4.9", label: "Rated", delay: "700ms" }, { value: "24/7", label: "Support", delay: "800ms" }].map((stat) => (
                <div key={stat.label} className="animate-hero-metric group" style={{ animationDelay: stat.delay }}>
                  <div className="relative p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-[#3B82F6]/30 hover:border-[#3B82F6]/80 transition-all duration-300 group-hover:bg-white/10 group-hover:shadow-2xl group-hover:shadow-[#3B82F6]/20">
                    <div className="relative z-10 text-center">
                      <div className="text-2xl font-black bg-gradient-to-r from-[#3B82F6] to-[#EC4899] bg-clip-text text-transparent">{stat.value}</div>
                      <div className="text-xs font-bold text-[#94A3B8] mt-1">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-black rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 text-lg overflow-hidden">
                <span className="relative">Start Journey </span>
              </button>
              <button className="relative px-8 py-4 border-2 border-[#3B82F6]/60 text-[#3B82F6] font-black rounded-2xl hover:bg-[#3B82F6]/10 transition-all duration-300 text-lg">
                Explore 
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-8 bg-gradient-to-br from-[#3B82F6]/40 via-[#8B5CF6]/20 to-[#EC4899]/10 rounded-3xl blur-3xl opacity-50 animate-pulse-glow"></div>
            <div className="group relative w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 group-hover:border-[#3B82F6]/60 transition-all duration-500 transform group-hover:scale-[1.02] group-hover:shadow-3xl animate-hero-image">
                {/* Taller Video Container with 4:5 aspect ratio */}
                <div className="relative aspect-[4/5] bg-gradient-to-br from-[#1E293B] to-[#0F172A]">
                  <video ref={videoRef} src="/slidervideo.mp4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" playsInline muted loop autoPlay />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Engaging Feature Badges */}
                  <div className="absolute top-4 left-4 right-4 flex flex-col gap-3 z-10">
                    <div className="bg-white/95 backdrop-blur-xl rounded-xl px-4 py-2.5 shadow-lg border border-[#3B82F6]/20 transform hover:scale-105 transition-all duration-300 animate-fade-in opacity-0 group-hover:opacity-100" style={{ animationDelay: '200ms' }}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">👁️</span>
                        </div>
                        <div>
                          <div className="text-sm font-black text-[#0F172A]">Live Preview</div>
                          <div className="text-xs text-[#64748B]">See Before You Book</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/95 backdrop-blur-xl rounded-xl px-4 py-2.5 shadow-lg border border-[#8B5CF6]/20 transform hover:scale-105 transition-all duration-300 animate-fade-in opacity-0 group-hover:opacity-100" style={{ animationDelay: '400ms' }}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] flex items-center justify-center flex-shrink-0 animate-pulse">
                          <span className="text-lg">⏰</span>
                        </div>
                        <div>
                          <div className="text-sm font-black text-[#0F172A]">24/7 Available</div>
                          <div className="text-xs text-[#64748B]">Book Anytime</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/95 backdrop-blur-xl rounded-xl px-4 py-2.5 shadow-lg border border-[#EC4899]/20 transform hover:scale-105 transition-all duration-300 animate-fade-in opacity-0 group-hover:opacity-100" style={{ animationDelay: '600ms' }}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#EC4899] to-[#F97316] flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">⚡</span>
                        </div>
                        <div>
                          <div className="text-sm font-black text-[#0F172A]">Instant Confirm</div>
                          <div className="text-xs text-[#64748B]">Quick Response</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Achievement Card */}
              <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl z-20 animate-hero-metric border border-[#3B82F6]/20 transform hover:scale-110 hover:rotate-3 transition-all duration-500" style={{ animationDelay: "200ms" }}>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center text-2xl animate-pulse">
                    🏆
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#0F172A]">4.9★</div>
                    <div className="text-xs text-[#64748B] font-bold">Top Rated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
