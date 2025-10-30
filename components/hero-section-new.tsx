"use client"

import React, { useRef, useState, useEffect } from "react"
import { Button } from "./ui/button"

// Counter animation component
function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }: { end: number, duration?: number, suffix?: string, prefix?: string }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let startTime: number | null = null
        const animateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime
            const percentage = Math.min(progress / duration, 1)

            setCount(Math.floor(end * percentage))

            if (percentage < 1) {
                requestAnimationFrame(animateCount)
            }
        }

        const timer = setTimeout(() => {
            requestAnimationFrame(animateCount)
        }, 400)

        return () => clearTimeout(timer)
    }, [end, duration])

    return <>{prefix}{count.toLocaleString()}{suffix}</>
}

export default function HeroSection() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        setIsVisible(true)

        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePosition({
            x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
            y: ((e.clientY - rect.top) / rect.height - 0.5) * 30,
        })
    }

    return (
        <section
            className="relative min-h-screen w-full overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#2D1B4E]">
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-full blur-[120px] animate-blob"></div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#EC4899] to-[#F43F5E] rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#06B6D4] to-[#3B82F6] rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
                </div>
            </div>

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                    transform: `translateY(${scrollY * 0.3}px)`
                }}></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-float-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${10 + Math.random() * 20}s`,
                            opacity: Math.random() * 0.5 + 0.3
                        }}
                    ></div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">

                    {/* Left Content */}
                    <div className="space-y-8" style={{
                        transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                        transition: 'transform 0.3s ease-out'
                    }}>
                        {/* Badge */}
                        <div className={`inline-block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                                <div className="relative px-6 py-3 bg-gradient-to-r from-[#6366F1]/10 to-[#EC4899]/10 backdrop-blur-xl border border-[#6366F1]/50 rounded-full">
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6366F1] opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6366F1]"></span>
                                        </span>
                                        <span className="text-sm font-bold bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                                            Premium Event Solutions
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Headline */}
                        <div className={`space-y-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter">
                                <span className="block text-white mb-2">
                                    Transform
                                </span>
                                <span className="block relative">
                                    <span className="absolute inset-0 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] blur-2xl opacity-50"></span>
                                    <span className="relative bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent animate-gradient-x">
                                        Your Events
                                    </span>
                                </span>
                                <span className="block text-white mt-2">
                                    Into Magic
                                </span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className={`text-xl text-gray-300 leading-relaxed max-w-xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            Elevate your celebrations with premium event equipment, stunning designs, and flawless execution. From intimate gatherings to grand celebrations.
                        </p>

                        {/* Stats with Animated Counters */}
                        <div className={`grid grid-cols-3 gap-6 pt-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            {/* Events Hosted */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/20 to-[#8B5CF6]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#6366F1]/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                                    <div className="w-12 h-12 mb-3 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                    <div className="text-3xl font-black bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent mb-1">
                                        <AnimatedCounter end={5000} suffix="+" />
                                    </div>
                                    <div className="text-xs text-gray-400 font-semibold">
                                        Events Hosted
                                    </div>
                                </div>
                            </div>

                            {/* Happy Clients */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/20 to-[#EC4899]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#8B5CF6]/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                                    <div className="w-12 h-12 mb-3 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <div className="text-3xl font-black bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent mb-1">
                                        <AnimatedCounter end={98} suffix="%" />
                                    </div>
                                    <div className="text-xs text-gray-400 font-semibold">
                                        Happy Clients
                                    </div>
                                </div>
                            </div>

                            {/* 24/7 Support */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899]/20 to-[#F43F5E]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#EC4899]/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                                    <div className="w-12 h-12 mb-3 rounded-xl bg-gradient-to-br from-[#EC4899] to-[#F43F5E] flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <div className="text-3xl font-black bg-gradient-to-r from-[#EC4899] to-[#F43F5E] bg-clip-text text-transparent mb-1">
                                        24/7
                                    </div>
                                    <div className="text-xs text-gray-400 font-semibold">
                                        Support
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className={`flex flex-wrap gap-4 pt-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <button className="group relative px-8 py-5 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#6366F1]/50 hover:-translate-y-1">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span className="relative flex items-center gap-2 text-lg">
                                    Book Your Event
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </button>

                            <button className="group relative px-8 py-5 text-white font-bold rounded-2xl border-2 border-white/20 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-[#6366F1] hover:-translate-y-1">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/10 to-[#8B5CF6]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span className="relative flex items-center gap-2 text-lg">
                                    View Portfolio
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className={`flex items-center gap-6 pt-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="flex -space-x-4">
                                {[
                                    { gradient: "from-[#6366F1] to-[#8B5CF6]", delay: "0ms" },
                                    { gradient: "from-[#8B5CF6] to-[#A855F7]", delay: "100ms" },
                                    { gradient: "from-[#A855F7] to-[#EC4899]", delay: "200ms" },
                                    { gradient: "from-[#EC4899] to-[#F43F5E]", delay: "300ms" },
                                    { gradient: "from-[#F43F5E] to-[#EF4444]", delay: "400ms" }
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className={`w-11 h-11 rounded-full border-3 border-[#0A0E27] bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300`}
                                        style={{ animationDelay: item.delay }}
                                    >
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1 mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 text-yellow-400 fill-current animate-scale-in"
                                            viewBox="0 0 20 20"
                                            style={{ animationDelay: `${i * 100}ms` }}
                                        >
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-400">
                                    <span className="text-white font-bold">4.9/5</span> from <AnimatedCounter end={2000} suffix="+" /> reviews
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative" style={{
                        transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`,
                        transition: 'transform 0.3s ease-out'
                    }}>
                        {/* Main Image Card */}
                        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                            {/* Glow Effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] rounded-3xl blur-3xl opacity-40 animate-pulse-slow"></div>

                            {/* Main Card */}
                            <div className="relative group">
                                <div className="relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl shadow-2xl">
                                    {/* Video/Image Container */}
                                    <div className="relative aspect-[3/4] bg-gradient-to-br from-[#1a1f3a] to-[#2D1B4E]">
                                        {/* Video Element */}
                                        <video
                                            ref={videoRef}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            src="/slidervideo.mp4"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        />

                                        {/* Subtle Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 via-transparent to-[#EC4899]/10 pointer-events-none"></div>

                                        {/* Overlay Content */}
                                        <div className="absolute inset-0 flex flex-col justify-between p-8">
                                            {/* Top Floating Cards */}
                                            <div className="space-y-3">
                                                <div className="inline-block bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/20 transform hover:scale-105 transition-all duration-300 animate-slide-down">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                                                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-black text-gray-900">Live Preview</div>
                                                            <div className="text-xs text-gray-600">See Before Book</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="inline-block bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/20 transform hover:scale-105 transition-all duration-300 animate-slide-down animation-delay-200">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EC4899] to-[#F43F5E] flex items-center justify-center relative">
                                                            <span className="absolute inline-flex h-full w-full rounded-xl bg-[#EC4899] opacity-75 animate-ping"></span>
                                                            <svg className="w-6 h-6 text-white relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-black text-gray-900">24/7 Available</div>
                                                            <div className="text-xs text-gray-600">Always Ready</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bottom Card */}
                                            <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 animate-slide-up">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div>
                                                        <div className="text-2xl font-black text-gray-900">Premium Events</div>
                                                        <div className="text-sm text-gray-600">Unforgettable Experiences</div>
                                                    </div>
                                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#06B6D4] to-[#3B82F6] flex items-center justify-center text-2xl animate-bounce-slow">
                                                        ⚡
                                                    </div>
                                                </div>
                                                <div className="flex gap-2">
                                                    <div className="flex-1 h-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full"></div>
                                                    <div className="flex-1 h-2 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-full"></div>
                                                    <div className="flex-1 h-2 bg-gradient-to-r from-[#EC4899] to-[#F43F5E] rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -top-6 -right-6 animate-float">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#EC4899] rounded-2xl blur-xl opacity-75"></div>
                                    <div className="relative bg-white rounded-2xl p-5 shadow-2xl border border-white/20">
                                        <div className="flex items-center gap-3">
                                            <div className="text-4xl animate-bounce-slow">🏆</div>
                                            <div>
                                                <div className="text-2xl font-black bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent">
                                                    4.9★
                                                </div>
                                                <div className="text-xs text-gray-600 font-bold">Top Rated</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Orbs */}
                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#06B6D4] to-[#3B82F6] rounded-full blur-3xl opacity-60 animate-pulse-slow animation-delay-1000"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex flex-col items-center gap-2 animate-bounce-slow">
                    <span className="text-sm text-gray-400 font-semibold">Scroll to explore</span>
                    <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    )
}
