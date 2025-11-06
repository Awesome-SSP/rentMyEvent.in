"use client"

import React, { useState, useEffect } from "react"
import { X, MessageCircle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Show widget after 3 seconds
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    const CONTACT_PHONE = "+917065441547"
    const WHATSAPP_TEXT = encodeURIComponent("Hi! I'm interested in your event rental services. Please share more details.")
    const whatsappUrl = `https://wa.me/${CONTACT_PHONE.replace(/\D/g, "")}?text=${WHATSAPP_TEXT}`
    const telUrl = `tel:${CONTACT_PHONE}`

    if (!isVisible) return null

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 bg-white rounded-lg shadow-2xl border border-gray-200 w-80 animate-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-t-lg">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-green-600 font-bold text-lg">R</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold">RentMyEvent</h3>
                                    <p className="text-xs opacity-90">Online now</p>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:bg-white/20 h-8 w-8 p-0"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
                        <div className="bg-gray-100 rounded-lg p-3 max-w-[70%]">
                            <p className="text-sm text-gray-700">
                                Hello! 👋 Welcome to RentMyEvent. How can we help you with your event today?
                            </p>
                            <span className="text-xs text-gray-500 mt-1 block">Just now</span>
                        </div>

                        <div className="bg-gray-100 rounded-lg p-3 max-w-[70%]">
                            <p className="text-sm text-gray-700">
                                We offer:
                            </p>
                            <ul className="text-sm text-gray-700 mt-1 space-y-1">
                                <li>🎥 Projector Rentals (HD, 4K)</li>
                                <li>🎤 Audio Visual Equipment</li>
                                <li>🎪 Complete Event Management</li>
                                <li>📱 Same-day delivery in Delhi NCR</li>
                            </ul>
                            <span className="text-xs text-gray-500 mt-2 block">Just now</span>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="p-4 border-t border-gray-200">
                        <div className="space-y-2">
                            <Button
                                onClick={() => window.open(whatsappUrl, '_blank')}
                                className="w-full bg-green-500 hover:bg-green-600 text-white text-sm"
                            >
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Continue on WhatsApp
                            </Button>

                            <div className="grid grid-cols-2 gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => window.open(telUrl, '_blank')}
                                    className="text-xs"
                                >
                                    <Phone className="w-3 h-3 mr-1" />
                                    Call Now
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => window.location.href = 'mailto:info@rentmyevent.in'}
                                    className="text-xs"
                                >
                                    <Mail className="w-3 h-3 mr-1" />
                                    Email
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Buttons */}
                    <div className="p-3 bg-gray-50 rounded-b-lg">
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => window.open(`${whatsappUrl.split('?')[0]}?text=${encodeURIComponent('I need projector rental for my event')}`, '_blank')}
                                className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
                            >
                                Projector Rental
                            </button>
                            <button
                                onClick={() => window.open(`${whatsappUrl.split('?')[0]}?text=${encodeURIComponent('I need event management services')}`, '_blank')}
                                className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-200 transition-colors"
                            >
                                Event Planning
                            </button>
                            <button
                                onClick={() => window.open(`${whatsappUrl.split('?')[0]}?text=${encodeURIComponent('I need pricing information')}`, '_blank')}
                                className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200 transition-colors"
                            >
                                Get Quote
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Chat Trigger Button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${isOpen
                        ? 'bg-red-500 hover:bg-red-600 rotate-180'
                        : 'bg-green-500 hover:bg-green-600 animate-pulse hover:animate-none'
                    }`}
            >
                {isOpen ? (
                    <X className="h-6 w-6 text-white" />
                ) : (
                    <MessageCircle className="h-6 w-6 text-white" />
                )}
            </Button>

            {/* Notification Dot */}
            {!isOpen && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                    <span className="text-white text-xs font-bold">!</span>
                </div>
            )}
        </div>
    )
}