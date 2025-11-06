"use client"

import React, { useState, useEffect } from "react"
import { X, Zap, Clock, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function SaleBanner() {
    const [isVisible, setIsVisible] = useState(true)
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 45,
        seconds: 30
    })

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 }
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
                }
                return prev
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    if (!isVisible) return null

    const CONTACT_PHONE = "+917065441547"
    const WHATSAPP_TEXT = encodeURIComponent("Hi! I'm interested in the limited time offer for projector rentals.")
    const whatsappUrl = `https://wa.me/${CONTACT_PHONE.replace(/\D/g, "")}?text=${WHATSAPP_TEXT}`

    return (
        <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white py-3 relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1">
                        <div className="flex items-center space-x-2">
                            <Zap className="h-5 w-5 animate-pulse" />
                            <Badge className="bg-yellow-400 text-black font-bold animate-bounce">
                                LIMITED OFFER
                            </Badge>
                        </div>

                        <div className="hidden sm:block">
                            <span className="font-bold text-lg">🎉 SPECIAL DISCOUNT: Get 25% OFF on Projector Rentals!</span>
                        </div>
                        <div className="block sm:hidden">
                            <span className="font-bold">25% OFF Projector Rentals!</span>
                        </div>
                    </div>

                    {/* Countdown Timer */}
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">Offer ends in:</span>
                            <div className="flex space-x-1">
                                <div className="bg-black/20 rounded px-2 py-1 text-sm font-mono">
                                    {timeLeft.hours.toString().padStart(2, '0')}h
                                </div>
                                <div className="bg-black/20 rounded px-2 py-1 text-sm font-mono">
                                    {timeLeft.minutes.toString().padStart(2, '0')}m
                                </div>
                                <div className="bg-black/20 rounded px-2 py-1 text-sm font-mono">
                                    {timeLeft.seconds.toString().padStart(2, '0')}s
                                </div>
                            </div>
                        </div>

                        <Button
                            size="sm"
                            className="bg-white text-purple-600 hover:bg-gray-100 font-bold animate-pulse hover:animate-none"
                            onClick={() => window.open(whatsappUrl, '_blank')}
                        >
                            <Gift className="w-4 h-4 mr-2" />
                            Claim Offer
                        </Button>

                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsVisible(false)}
                            className="text-white hover:bg-white/20 h-8 w-8 p-0"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Mobile Countdown */}
                <div className="md:hidden mt-2 text-center">
                    <div className="flex items-center justify-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">Ends in:</span>
                        <div className="flex space-x-1">
                            <div className="bg-black/20 rounded px-2 py-1 text-sm font-mono">
                                {timeLeft.hours.toString().padStart(2, '0')}h
                            </div>
                            <div className="bg-black/20 rounded px-2 py-1 text-sm font-mono">
                                {timeLeft.minutes.toString().padStart(2, '0')}m
                            </div>
                            <div className="bg-black/20 rounded px-2 py-1 text-sm font-mono">
                                {timeLeft.seconds.toString().padStart(2, '0')}s
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gradient animation handled by Tailwind classes */}
        </div>
    )
}