"use client"

import React, { useRef, useState, useEffect } from "react"

import { Button } from "./ui/button"

// Optionally, load a 3D Spline scene
// Note: Disabled to avoid module-not-found if the file doesn't exist.
// const SplineScene = dynamic(() => import("./SplineScene"), { ssr: false })

// Counter animation as before...
// ... AnimatedCounter implementation ...

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 30
    })
  }

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden pt-[8.5rem]"
      onMouseMove={handleMouseMove}
    >
      {/* --- Animated Gradient Background --- */}
      {/* ...same gradient code... */}

      {/* --- Animated Grid Pattern --- */}
      {/* ...same grid code... */}

      {/* --- Floating Particles --- */}
      {/* ...same particle code... */}

      {/* --- 3D Illustration Area --- */}
      <div className="absolute right-0 top-0 h-full w-1/2 flex justify-center items-center pointer-events-none z-20">
        {/* You can swap Spline for Three.js, or a custom SVG */}
        {/* <SplineScene scene="https://prod.spline.design/xyz/scene.splinecode" /> */}
        <img src="/enterprise-hero-3d.svg" alt="Enterprise 3D Visual" className="w-[85%] md:w-[70%] xl:w-[60%]" />
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* --- Left Textual Content --- */}
          <div
            className="space-y-8"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
              transition: "transform 0.3s ease-out"
            }}
          >
            <div className="inline-block transition-all duration-1000">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                <div className="relative px-6 py-3 bg-gradient-to-r from-[#6366F1]/10 to-[#EC4899]/10 backdrop-blur-xl border border-[#6366F1]/50 rounded-full">
                  <span className="text-sm font-bold bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                    Next-Gen Enterprise Events
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-7xl font-black tracking-tighter leading-tight">
                <span className="block text-white">Empower Your Brand</span>
                <span className="block bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent animate-gradient-x relative">
                  Exceptional Experiences
                </span>
                <span className="block text-white">For Enterprise Clients</span>
              </h1>
            </div>

            <p className="text-xl text-gray-200 leading-relaxed max-w-xl">
              Partner with us for seamless, innovative event solutions trusted by global enterprises. Harness immersive 3D showcases, premium video content, and a data-driven approach for spectacular results.
            </p>

            {/* --- Animated Stats --- */}
            {/* ...same animated grid stats (Events Hosted, Happy Clients, Support)... */}

            {/* --- CTA Modern Buttons --- */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white font-bold rounded-2xl">
                Book Demo
              </Button>
              <Button variant="outline" size="lg">
                View Enterprise Portfolio
              </Button>
            </div>

            {/* --- Trust Indicators --- */}
            {/* ...same badge and rating code... */}
          </div>

          {/* ---- Right Visual Zone (Video/3D Combo) ---- */}
          <div
            className="relative"
            style={{
              transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`,
              transition: "transform 0.3s ease-out"
            }}
          >
            <div className="relative group rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="aspect-[3/4] bg-[#1a1f3a]">
                {/* --- Main Video with Large Play Cover --- */}
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/enterprise-showreel.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/enterprise-showreel-thumb.jpg"
                />

                {/* --- Overlay Gradient --- */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 via-transparent to-[#EC4899]/20 pointer-events-none"></div>
              </div>

              {/* --- Floating Cards, Info, Lightning Badge as Above --- */}
            </div>
          </div>
        </div>
      </div>

      {/* --- Scroll Down Indicator --- */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce-slow">
          <span className="text-sm text-gray-400 font-semibold">Scroll to explore</span>
          {/* Icon */}
        </div>
      </div>
    </section>
  )
}
