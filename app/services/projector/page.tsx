"use client"

import React, { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import PromoStrips from "@/components/promo-strips"
import Footer from "@/components/footer"
import WhatsAppChatWidget from "@/components/whatsapp-chat-widget"
import SaleBanner from "@/components/sale-banner"
import EventGallery from "@/components/event-gallery"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
    Projector,
    Monitor,
    Volume2,
    Settings,
    Clock,
    MapPin,
    Phone,
    CheckCircle,
    Star,
    Truck,
    Headphones,
    Shield,
    Zap,
    Play,
    Home,
    Building2,
    Heart,
    MessageCircle,
    DollarSign
} from "lucide-react"

export default function ProjectorRentalPage() {
    const [activeTab, setActiveTab] = useState("overview")
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const projectorTypes = [
        {
            icon: Monitor,
            title: "4K Projector on Rent",
            description: "Ultra-high definition projectors ideal for movies and live screenings",
            features: ["4K Resolution", "High Brightness", "HDR Support", "Large Screen Compatible"],
            price: "₹2,999/day",
            popular: true
        },
        {
            icon: Projector,
            title: "HD Projector on Rent",
            description: "Perfect for office presentations and corporate meetings",
            features: ["Full HD 1080p", "HDMI/VGA Inputs", "Wireless Connectivity", "Portable Design"],
            price: "₹999/day",
            popular: false
        },
        {
            icon: Play,
            title: "Short Throw Projector",
            description: "Ideal for small meeting rooms and compact spaces",
            features: ["Short Distance Projection", "Reduced Shadows", "Interactive Ready", "Space Efficient"],
            price: "₹1,799/day",
            popular: false
        },
        {
            icon: Building2,
            title: "Long Throw Projector",
            description: "Designed for large venues and auditoriums",
            features: ["Long Distance Projection", "High Brightness", "Large Venue Ready", "Professional Grade"],
            price: "₹2,499/day",
            popular: false
        }
    ]

    const packages = [
        {
            title: "Basic Package",
            price: "₹999",
            duration: "per day",
            features: [
                "HD Projector",
                "Basic Screen (6x8 ft)",
                "HDMI Cable",
                "Setup & Pickup",
                "Basic Technical Support"
            ],
            icon: Home,
            popular: false
        },
        {
            title: "Premium Package",
            price: "₹2,499",
            duration: "per day",
            features: [
                "4K Projector",
                "Large Screen (10x12 ft)",
                "Sound System",
                "Wireless Connectivity",
                "On-site Technical Support",
                "Backup Equipment"
            ],
            icon: Star,
            popular: true
        },
        {
            title: "Wedding Special",
            price: "₹3,999",
            duration: "per day",
            features: [
                "4K Projector",
                "Premium Screen (12x15 ft)",
                "Professional Sound System",
                "Event Lighting",
                "Dedicated Technician",
                "Backup Systems",
                "Custom Setup Design"
            ],
            icon: Heart,
            popular: false
        }
    ]

    const whyChooseUs = [
        {
            icon: CheckCircle,
            title: "High-Quality Equipment",
            description: "HD, 4K, and LED projectors with crystal clear video quality"
        },
        {
            icon: Settings,
            title: "Flexible Options",
            description: "Short-throw to long-throw projectors for any venue size"
        },
        {
            icon: Shield,
            title: "Complete Packages",
            description: "Projector with screen, sound system, and lighting solutions"
        },
        {
            icon: Truck,
            title: "Doorstep Delivery",
            description: "Free delivery, setup, and pickup across Delhi NCR"
        },
        {
            icon: Headphones,
            title: "Expert Support",
            description: "Technical team ensures smooth operation throughout your event"
        },
        {
            icon: Zap,
            title: "Affordable Pricing",
            description: "Competitive rates starting from ₹999 per day"
        }
    ]

    const locations = [
        "Delhi", "Noida", "Gurgaon", "Faridabad", "Ghaziabad",
        "Greater Noida", "Sector 18", "Sector 62", "Sector 63",
        "Sector 132", "Sector 137", "Connaught Place", "Karol Bagh"
    ]

    const eventTypes = [
        { name: "Corporate Events", icon: Building2 },
        { name: "Weddings", icon: Heart },
        { name: "Conferences", icon: Monitor },
        { name: "Birthday Parties", icon: Star },
        { name: "Movie Nights", icon: Play },
        { name: "Product Launches", icon: Zap }
    ]

    const CONTACT_PHONE = "+917065441547"
    const WHATSAPP_TEXT = encodeURIComponent("Hi, I'm interested in projector rental services in Delhi NCR.")
    const whatsappUrl = `https://wa.me/${CONTACT_PHONE.replace(/\D/g, "")}?text=${WHATSAPP_TEXT}`

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <SaleBanner />
            <Navbar />
            <PromoStrips />            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-24 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-bounce"></div>
                    <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0 pointer-events-none">
                    <Projector className="absolute top-32 left-20 w-8 h-8 text-blue-300/30 animate-bounce" style={{ animationDelay: '0.5s' }} />
                    <Monitor className="absolute top-48 right-32 w-10 h-10 text-purple-300/30 animate-pulse" style={{ animationDelay: '1.5s' }} />
                    <Volume2 className="absolute bottom-40 left-1/4 w-6 h-6 text-pink-300/30 animate-bounce" style={{ animationDelay: '2s' }} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <div>
                            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black mb-6 text-lg px-6 py-2 animate-pulse">
                                🎥 Premium Projector Rentals
                            </Badge>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-pulse">
                                Projector on Rent
                            </span>
                            <br />
                            <span className="text-white text-4xl md:text-5xl">in Delhi NCR</span>
                        </h1>

                        <p className="text-xl md:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed text-blue-100">
                            <span className="font-semibold text-yellow-300">Premium HD, 4K & LED</span> Projector Rental Service with
                            <span className="font-semibold text-pink-300"> Screen, Sound & Professional Setup</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-green-500/25">
                                <Phone className="mr-3 h-6 w-6 animate-pulse" />
                                Call Now: {CONTACT_PHONE}
                            </Button>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/25"
                                onClick={() => window.open(whatsappUrl, '_blank')}
                            >
                                <MessageCircle className="mr-3 h-6 w-6 animate-bounce" />
                                WhatsApp Quote
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-20 fill-current text-gray-50">
                        <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
                    </svg>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-20 bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E')" }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "₹999+", label: "Starting Price", color: "from-green-500 to-emerald-600", icon: "💰" },
                            { value: "1000+", label: "Events Served", color: "from-blue-500 to-indigo-600", icon: "🎉" },
                            { value: "24/7", label: "Support", color: "from-purple-500 to-pink-600", icon: "🛟" },
                            { value: "100%", label: "Satisfaction", color: "from-orange-500 to-red-600", icon: "⭐" }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Gradient Border */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}></div>

                                <div className="text-4xl mb-3 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                                    {stat.icon}
                                </div>

                                <div className={`text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent animate-pulse`}>
                                    {stat.value}
                                </div>

                                <div className="text-lg font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                                    {stat.label}
                                </div>

                                {/* Floating Animation */}
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping opacity-75"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comprehensive Introduction */}
            <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M15 15.5V13H0v-2h15v-2H0V7h15V5H0V3h15V1H0V-1h17v16.5H15z'/%3E%3C/g%3E%3C/svg%3E')" }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white mb-8 text-lg px-8 py-4 animate-pulse font-bold shadow-2xl">
                            🎯 Premium Projector Rentals in Delhi NCR
                        </Badge>

                        <h2 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-indigo-800 via-purple-700 to-blue-700 bg-clip-text text-transparent leading-tight">
                            Projector on Rent in Delhi NCR – Unlock Big Screens at Smart Prices
                        </h2>
                    </div>

                    {/* Main Content Card */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-indigo-200/50 mb-12">
                        {/* Introduction */}
                        <div className="mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-6 flex items-center">
                                <Projector className="mr-4 text-purple-600" />
                                Introduction
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Looking for <span className="font-bold text-indigo-600">projector rentals in Delhi NCR</span> that deliver high-quality visuals without breaking the bank?
                                With <span className="font-bold text-purple-600">RentMyEvent</span>, you get access to premium projectors—
                                <span className="font-semibold text-blue-600">HD, 4K, short-throw and long-throw</span>—tailored for weddings, corporate presentations, or home theatre nights.
                                For <span className="font-semibold text-indigo-600">Delhi, Noida, Gurugram</span>, and the surrounding area, we have projector rentals designed to take care of your event while you focus on its success.
                            </p>
                        </div>

                        {/* Why Choose Our Projectors */}
                        <div className="mb-12">
                            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6 flex items-center">
                                    <Star className="mr-4 text-yellow-500" />
                                    Why Choose Our Projectors?
                                </h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                                        <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-2 text-lg">High-Quality Visuals & Resolution</h4>
                                            <p className="text-gray-600 leading-relaxed">One can opt for <span className="font-semibold text-blue-600">HD projector on rent Delhi</span>, <span className="font-semibold text-indigo-600">Full HD projector on rent Delhi</span>, or even <span className="font-semibold text-purple-600">4K projector on rent Delhi</span> to get a sharp, impressive output.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50">
                                        <Settings className="h-8 w-8 text-purple-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-2 text-lg">Flexible Usage & Throw Types</h4>
                                            <p className="text-gray-600 leading-relaxed">Be it a <span className="font-semibold text-purple-600">short-throw projector Delhi</span> required for small areas, a <span className="font-semibold text-indigo-600">long throw projector Delhi</span> for big halls, or even a <span className="font-semibold text-blue-600">mini/portable projector Delhi</span> for casual usage, we have it all.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl border border-green-200/50">
                                        <Monitor className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-2 text-lg">Complete Rentals</h4>
                                            <p className="text-gray-600 leading-relaxed">Rent a <span className="font-semibold text-green-600">projector with screen on rent Delhi</span>, include <span className="font-semibold text-blue-600">sound system on rent Delhi</span>, and <span className="font-semibold text-purple-600">event light rental Delhi</span> for a complete AV experience.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200/50">
                                        <MapPin className="h-8 w-8 text-orange-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-2 text-lg">Budget Options to Premium Class</h4>
                                            <p className="text-gray-600 leading-relaxed">We offer <span className="font-semibold text-orange-600">budget projector on rent Delhi</span> and <span className="font-semibold text-red-600">cheap projector on rent Delhi</span> for small gatherings, and <span className="font-semibold text-purple-600">premium projector on rent Delhi</span> for big events.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200/50">
                                        <Heart className="h-8 w-8 text-cyan-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-2 text-lg">Anywhere in Delhi NCR</h4>
                                            <p className="text-gray-600 leading-relaxed">From the heart of Delhi to the outskirts, rent <span className="font-semibold text-cyan-600">projectors for wedding Delhi</span>, <span className="font-semibold text-blue-600">projector for office presentation Delhi</span>, or simply <span className="font-semibold text-indigo-600">projector on rent near me Delhi</span>.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Services Section */}
                    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-black mb-4">
                                <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
                                    Our Projector Rental Services Include
                                </span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Types of Projectors */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <h3 className="text-2xl font-bold mb-6 text-yellow-300 flex items-center">
                                    <Projector className="mr-3" />
                                    Types of Projectors
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        "HD Projector on rent in Delhi NCR – Ideal for meetings and presentations",
                                        "4K Projector on rent in Delhi – For a cinema-like experience",
                                        "Short-Throw Projector Delhi – Perfect for compact spaces",
                                        "Long Throw Projector Delhi – Designed for large venues",
                                        "Mini/Portable Projector on rent Delhi – Light, versatile & mobile"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-1">
                                                <CheckCircle className="h-3 w-3 text-white" />
                                            </div>
                                            <span className="text-blue-100 leading-relaxed">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Package Add-ons */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <h3 className="text-2xl font-bold mb-6 text-cyan-300 flex items-center">
                                    <Volume2 className="mr-3" />
                                    Package Add-ons
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        "Projector with Screen on Rent Delhi – Get screen included",
                                        "Audio-Visual Equipment for an event: LED wall, Sound System - Put them together for maximum effect",
                                        "Event Light Rental Delhi – Complete ambience setup",
                                        "Sound System on Rent Delhi – Crisp audio to match the visuals"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mt-1">
                                                <CheckCircle className="h-3 w-3 text-white" />
                                            </div>
                                            <span className="text-purple-100 leading-relaxed">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projector Types */}
            <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
                {/* Animated Background Shapes */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full animate-bounce"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white mb-6 text-lg px-6 py-2 animate-pulse">
                            🎯 Professional Equipment
                        </Badge>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-700 bg-clip-text text-transparent">
                            Types of Projectors Available for Rent
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Choose from our wide range of <span className="font-bold text-indigo-600">professional-grade projectors</span> suitable for every occasion
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {projectorTypes.map((projector, index) => (
                            <div key={index} className="group relative transform transition-all duration-500 hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
                                {/* Glowing Background */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                                <Card className={`relative bg-white/90 backdrop-blur-sm border-2 transition-all duration-500 hover:shadow-2xl rounded-3xl overflow-hidden ${projector.popular ? 'border-yellow-400 shadow-yellow-200/50' : 'border-gray-200 hover:border-indigo-300'}`}>
                                    {projector.popular && (
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-pulse"></div>
                                    )}

                                    {projector.popular && (
                                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold animate-bounce">
                                            ⭐ Most Popular
                                        </Badge>
                                    )}

                                    <CardHeader className="text-center pb-6 pt-8">
                                        {/* Icon with animated background */}
                                        <div className="relative mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <projector.icon className="h-10 w-10 text-indigo-600 group-hover:text-purple-600 transition-colors" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-2xl animate-pulse"></div>
                                        </div>

                                        <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors mb-3">
                                            {projector.title}
                                        </CardTitle>
                                        <CardDescription className="text-gray-600 leading-relaxed">
                                            {projector.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="space-y-6">
                                        <div className="text-center py-4 bg-gradient-to-r from-gray-50 to-indigo-50 rounded-xl">
                                            <div className="text-3xl font-black text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text animate-pulse">
                                                {projector.price}
                                            </div>
                                            <div className="text-sm text-gray-500 font-medium">per day</div>
                                        </div>

                                        <ul className="space-y-3">
                                            {projector.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center group/item">
                                                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform">
                                                        <CheckCircle className="h-3 w-3 text-white" />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-700 group-hover/item:text-gray-900 transition-colors">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Button
                                            className={`w-full font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${projector.popular
                                                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black shadow-lg hover:shadow-yellow-300/50'
                                                    : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-indigo-300/50'
                                                }`}
                                        >
                                            {projector.popular ? '🚀 Book Now - Popular!' : '📞 Book Now'}
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <Star className="absolute top-20 left-20 w-8 h-8 text-yellow-400/20 animate-pulse" />
                    <CheckCircle className="absolute top-40 right-32 w-6 h-6 text-green-400/20 animate-bounce" />
                    <Shield className="absolute bottom-32 left-1/4 w-10 h-10 text-blue-400/20 animate-pulse" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black mb-6 text-lg px-6 py-3 animate-pulse font-bold">
                            🏆 Trusted by 1000+ Customers
                        </Badge>
                        <h2 className="text-4xl md:text-6xl font-black mb-6">
                            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                                Why Rent a Projector
                            </span>
                            <br />
                            <span className="text-white">from RentMyEvent?</span>
                        </h2>
                        <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                            <span className="font-bold text-yellow-300">Hundreds of customers</span> choose our projector rental service every month
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Clock,
                                title: "24/7 Support",
                                description: "Round-the-clock technical support to ensure your event runs smoothly",
                                gradient: "from-red-500 to-orange-500",
                                emoji: "🚀"
                            },
                            {
                                icon: Shield,
                                title: "Insured Equipment",
                                description: "All our projectors are fully insured against damage and theft",
                                gradient: "from-green-500 to-teal-500",
                                emoji: "🛡️"
                            },
                            {
                                icon: CheckCircle,
                                title: "Quality Assured",
                                description: "Every projector is tested and calibrated before delivery",
                                gradient: "from-blue-500 to-purple-500",
                                emoji: "✅"
                            },
                            {
                                icon: Star,
                                title: "Expert Installation",
                                description: "Professional setup and installation by trained technicians",
                                gradient: "from-yellow-500 to-amber-500",
                                emoji: "⭐"
                            },
                            {
                                icon: MapPin,
                                title: "Delhi NCR Coverage",
                                description: "Serving Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad",
                                gradient: "from-pink-500 to-rose-500",
                                emoji: "📍"
                            },
                            {
                                icon: DollarSign,
                                title: "Best Prices",
                                description: "Competitive rates with transparent pricing and no hidden costs",
                                gradient: "from-emerald-500 to-cyan-500",
                                emoji: "💰"
                            }
                        ].map((item, index) => (
                            <div key={index} className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:from-white/20 hover:to-white/10 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer shadow-2xl hover:shadow-purple-500/25" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>

                                <div className="relative z-10">
                                    <div className="flex items-center mb-6">
                                        <div className="relative">
                                            <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-full blur-md opacity-50 animate-pulse`}></div>
                                            <div className="relative bg-white/20 backdrop-blur-sm rounded-full p-4">
                                                <item.icon className="h-8 w-8 text-white" />
                                            </div>
                                        </div>
                                        <span className="ml-4 text-3xl animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>{item.emoji}</span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-yellow-300 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-blue-200 group-hover:text-white transition-colors duration-300 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rental Packages */}
            <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-pink-400/10 to-red-400/10 rounded-full animate-bounce"></div>
                    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400/10 to-teal-400/10 rounded-full animate-pulse"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white mb-6 text-lg px-6 py-3 animate-pulse font-bold">
                            💎 Complete Packages
                        </Badge>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 animate-fade-in-up">
                            <span className="bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-700 bg-clip-text text-transparent">
                                Our Projector Rental
                            </span>
                            <br />
                            <span className="text-gray-800">Packages</span>
                        </h2>
                        <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            <span className="font-bold text-purple-600">Complete packages</span> including screen, sound system, and
                            <span className="font-bold text-indigo-600"> professional setup</span>
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <div key={index} className="group relative transform transition-all duration-500 hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
                                {/* Glow effect for popular package */}
                                {pkg.popular && (
                                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl opacity-75 blur-sm animate-pulse"></div>
                                )}

                                <Card className={`relative bg-white/95 backdrop-blur-sm border-2 transition-all duration-500 hover:shadow-2xl rounded-3xl overflow-hidden ${pkg.popular
                                        ? 'border-yellow-400 shadow-yellow-200/50'
                                        : 'border-gray-200 hover:border-purple-300 group-hover:shadow-purple-200/50'
                                    }`}>

                                    {/* Popular badge */}
                                    {pkg.popular && (
                                        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-pulse"></div>
                                    )}

                                    {pkg.popular && (
                                        <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-4 py-2 animate-bounce shadow-lg">
                                            ⭐ Most Popular ⭐
                                        </Badge>
                                    )}

                                    <CardHeader className="text-center pb-6 pt-8">
                                        {/* Enhanced icon */}
                                        <div className={`relative mx-auto mb-6 w-24 h-24 ${pkg.popular
                                                ? 'bg-gradient-to-br from-yellow-100 to-orange-100'
                                                : 'bg-gradient-to-br from-purple-100 to-indigo-100'
                                            } rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                            <pkg.icon className={`h-12 w-12 ${pkg.popular
                                                    ? 'text-orange-600 group-hover:text-red-600'
                                                    : 'text-purple-600 group-hover:text-indigo-600'
                                                } transition-colors`} />
                                            <div className={`absolute inset-0 ${pkg.popular
                                                    ? 'bg-gradient-to-r from-yellow-400/20 to-orange-400/20'
                                                    : 'bg-gradient-to-r from-purple-400/20 to-indigo-400/20'
                                                } rounded-3xl animate-pulse`}></div>
                                        </div>

                                        <CardTitle className={`text-2xl font-bold mb-4 ${pkg.popular
                                                ? 'text-gray-800 group-hover:text-orange-700'
                                                : 'text-gray-800 group-hover:text-purple-700'
                                            } transition-colors`}>
                                            {pkg.title}
                                        </CardTitle>

                                        {/* Enhanced pricing */}
                                        <div className={`py-6 px-4 rounded-2xl mb-4 ${pkg.popular
                                                ? 'bg-gradient-to-r from-yellow-50 to-orange-50'
                                                : 'bg-gradient-to-r from-purple-50 to-indigo-50'
                                            }`}>
                                            <div className={`text-4xl font-black mb-2 ${pkg.popular
                                                    ? 'bg-gradient-to-r from-orange-600 to-red-600'
                                                    : 'bg-gradient-to-r from-purple-600 to-indigo-600'
                                                } bg-clip-text text-transparent animate-pulse`}>
                                                {pkg.price}
                                            </div>
                                            <div className="text-sm font-semibold text-gray-500">{pkg.duration}</div>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="space-y-6 pb-8">
                                        <ul className="space-y-4">
                                            {pkg.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center group/item">
                                                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-4 ${pkg.popular
                                                            ? 'bg-gradient-to-r from-green-400 to-emerald-500'
                                                            : 'bg-gradient-to-r from-green-400 to-teal-500'
                                                        } group-hover/item:scale-110 transition-transform shadow-lg`}>
                                                        <CheckCircle className="h-3 w-3 text-white" />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-700 group-hover/item:text-gray-900 transition-colors leading-relaxed">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Button
                                            className={`w-full font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl ${pkg.popular
                                                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black hover:shadow-orange-300/50'
                                                    : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white hover:shadow-purple-300/50'
                                                }`}
                                        >
                                            {pkg.popular ? '🚀 Select Popular Package' : '📦 Select Package'}
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20.5H20z'/%3E%3C/g%3E%3C/svg%3E')" }}></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <MapPin className="absolute top-20 left-20 w-8 h-8 text-cyan-400/20 animate-pulse" />
                    <MapPin className="absolute top-40 right-32 w-6 h-6 text-purple-400/20 animate-bounce" />
                    <MapPin className="absolute bottom-32 left-1/3 w-10 h-10 text-pink-400/20 animate-pulse" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <Badge className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black mb-6 text-lg px-6 py-3 animate-pulse font-bold">
                            🌏 Serving Delhi NCR
                        </Badge>
                        <h2 className="text-4xl md:text-6xl font-black mb-6">
                            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                                Service Areas
                            </span>
                            <br />
                            <span className="text-white">in Delhi NCR</span>
                        </h2>
                        <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                            We provide <span className="font-bold text-yellow-300">projector rental services</span> across all major locations
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {locations.map((location, index) => (
                            <div
                                key={index}
                                className="group text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:rotate-2 cursor-pointer border border-white/20 hover:border-cyan-400/50"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="relative mb-4">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-md animate-pulse"></div>
                                    <div className="relative bg-white/20 backdrop-blur-sm rounded-full p-3 inline-block">
                                        <MapPin className="h-6 w-6 text-cyan-300 group-hover:text-yellow-300 transition-colors" />
                                    </div>
                                </div>
                                <span className="text-sm font-bold text-white group-hover:text-yellow-300 transition-colors">
                                    {location}
                                </span>
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Event Types */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Perfect for Every Event Type
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our projector rental services cater to all kinds of events
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {eventTypes.map((event, index) => (
                            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <event.icon className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                                <h3 className="font-medium text-sm">{event.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                        <p className="text-lg text-gray-600">Simple steps to get your projector rental</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "1",
                                title: "Share Event Details",
                                description: "Tell us your location, event type, and guest count"
                            },
                            {
                                step: "2",
                                title: "Choose Projector",
                                description: "Select from HD, 4K, or specialized projectors"
                            },
                            {
                                step: "3",
                                title: "Get Quick Quote",
                                description: "Receive an affordable pricing plan instantly"
                            },
                            {
                                step: "4",
                                title: "Setup & Support",
                                description: "Our team delivers, sets up, and provides on-site support"
                            }
                        ].map((process, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                    {process.step}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                                <p className="text-gray-600 text-sm">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: "How much does it cost to rent a projector in Delhi NCR?",
                                a: "Our projector rentals start from ₹999 per day for basic HD models. 4K and specialized projectors are available at higher rates based on your requirements."
                            },
                            {
                                q: "Do you provide projector with screen on rent?",
                                a: "Yes, we offer complete packages including projector, screen, and sound system. We also have combo packages with lighting for a complete setup."
                            },
                            {
                                q: "Can I rent a projector for just one day?",
                                a: "Absolutely! You can hire a projector for a single event, for a few hours, or for several days - whatever suits your needs."
                            },
                            {
                                q: "Do you deliver to all areas in Delhi NCR?",
                                a: "Yes, we provide delivery and installation services across all major areas including Delhi, Noida, Gurgaon, Faridabad, and Ghaziabad."
                            },
                            {
                                q: "What if I need technical help during the event?",
                                a: "Our technical support team is available 24/7 to assist you during your event and ensure your projector runs smoothly."
                            }
                        ].map((faq, index) => (
                            <Card key={index} className="p-6">
                                <h3 className="font-semibold text-lg mb-3 text-blue-800">{faq.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Book Your Projector Rental?
                    </h2>
                    <p className="text-xl mb-8">
                        Get instant quotes and book premium projectors for your next event
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                            <Phone className="mr-2 h-5 w-5" />
                            Call: {CONTACT_PHONE}
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-blue-600"
                            onClick={() => window.open(whatsappUrl, '_blank')}
                        >
                            Get WhatsApp Quote
                        </Button>
                    </div>
                </div>
            </section>

            {/* Event Gallery */}
            <EventGallery />

            <Footer />
            <WhatsAppChatWidget />
        </div>
    )
}