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
    Award,
    MessageCircle
} from "lucide-react"

export default function ProjectorRentalNoidaPage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const projectorTypes = [
        {
            icon: Monitor,
            title: "4K Projector on Rent in Noida",
            description: "Ideal for movies and live screenings with breathtaking clarity",
            features: ["4K Ultra HD Resolution", "High Brightness Output", "HDR Support", "Large Venue Compatible"],
            price: "₹2,999/day",
            popular: true
        },
        {
            icon: Projector,
            title: "HD Projector on Rent in Noida",
            description: "Best for office presentations and corporate seminars",
            features: ["Full HD 1080p", "HDMI/VGA Connectivity", "Wireless Casting", "Professional Grade"],
            price: "₹999/day",
            popular: false
        },
        {
            icon: Play,
            title: "Mini Projector on Rent in Noida",
            description: "Compact and easy solution for home gatherings",
            features: ["Portable Design", "Easy Setup", "Multiple Inputs", "Battery Powered"],
            price: "₹799/day",
            popular: false
        },
        {
            icon: Building2,
            title: "Short Throw Projector Noida",
            description: "Perfect for small meeting rooms and presentations",
            features: ["Short Distance Projection", "Reduced Shadows", "Interactive Ready", "Space Efficient"],
            price: "₹1,799/day",
            popular: false
        }
    ]

    const noidaAreas = [
        "Sector 18", "Sector 62", "Sector 63", "Sector 132", "Sector 137",
        "Sector 15", "Sector 37", "Sector 44", "Sector 76", "Sector 104",
        "Greater Noida", "Noida Extension", "Film City", "City Center"
    ]

    const rentalPackages = [
        {
            title: "Projector with Screen on Rent Noida",
            features: [
                "HD/4K Projector of choice",
                "Professional screen (6x8 to 12x15 ft)",
                "HDMI & VGA cables",
                "Delivery & installation",
                "Pickup after event"
            ],
            price: "Starting ₹999"
        },
        {
            title: "Sound System + Projector Package",
            features: [
                "Premium projector setup",
                "Professional sound system",
                "Wireless microphones",
                "Mixer and amplifiers",
                "Complete AV solution"
            ],
            price: "Starting ₹2,499"
        },
        {
            title: "Event Light + Projector Combo",
            features: [
                "Professional projector",
                "Event lighting setup",
                "Ambience creation",
                "Technical support",
                "Perfect for weddings"
            ],
            price: "Starting ₹3,999"
        }
    ]

    const whyChooseUs = [
        {
            icon: CheckCircle,
            title: "High-quality Projectors",
            description: "Rent HD projectors, full HD projectors, and 4K projectors in Noida for breathtaking clear video"
        },
        {
            icon: Settings,
            title: "Flexible Options",
            description: "Short-throw projectors to long-throw projectors for large halls - we're your go-to choice"
        },
        {
            icon: Shield,
            title: "Complete Packages",
            description: "Projector with Screen on Rent in Noida - we provide full projector and screen rental packages"
        },
        {
            icon: Truck,
            title: "Doorstep Delivery & Setup",
            description: "We deliver and install your projector anywhere in Noida—just book, sit back, and enjoy"
        },
        {
            icon: Headphones,
            title: "Expert Support",
            description: "Our technical team ensures smooth operation throughout your event"
        },
        {
            icon: Zap,
            title: "Affordable Pricing",
            description: "Rent affordable projector in Noida or opt for high-end models at competitive rates"
        }
    ]

    const CONTACT_PHONE = "+917065441547"
    const WHATSAPP_TEXT = encodeURIComponent("Hi, I'm interested in projector rental services in Noida.")
    const whatsappUrl = `https://wa.me/${CONTACT_PHONE.replace(/\D/g, "")}?text=${WHATSAPP_TEXT}`

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <SaleBanner />
            <Navbar />
            <PromoStrips />            {/* Hero Section */}
            <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-24 relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-bounce"></div>
                    <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0 pointer-events-none">
                    <Projector className="absolute top-16 left-20 w-8 h-8 text-cyan-400/30 animate-pulse" />
                    <Star className="absolute top-32 right-32 w-6 h-6 text-yellow-400/30 animate-bounce" />
                    <CheckCircle className="absolute bottom-40 left-1/4 w-10 h-10 text-green-400/30 animate-pulse" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <div>
                            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black mb-8 text-lg px-8 py-3 animate-pulse font-bold shadow-2xl">
                                🎯 Noida's #1 Projector Rental Service
                            </Badge>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-pulse">
                                Projector on Rent
                            </span>
                            <br />
                            <span className="text-white text-4xl md:text-5xl">in Noida</span>
                        </h1>

                        <p className="text-xl md:text-3xl mb-12 max-w-5xl mx-auto leading-relaxed text-blue-100">
                            <span className="font-semibold text-yellow-300">Affordable Rental for Every Occasion</span> -
                            <span className="font-semibold text-pink-300"> HD, 4K & LED Projectors</span> with Screen, Sound & Professional Setup
                        </p>

                        <div className="mb-10">
                            <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xl px-8 py-4 animate-bounce font-black shadow-2xl">
                                💰 Starting from ₹999/day
                            </Badge>
                        </div>

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

            {/* Introduction */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E')" }}></div>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <Badge className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white mb-8 text-lg px-6 py-3 animate-pulse font-bold">
                            🎬 Professional Projector Rentals
                        </Badge>

                        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-700 bg-clip-text text-transparent leading-tight">
                            Projector on Rent in Noida – Affordable Rental for Every Occasion
                        </h2>

                        <div className="prose prose-lg max-w-4xl mx-auto text-left">
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-200/50">
                                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                    <span className="font-semibold text-indigo-600">Planning a corporate event, movie night, or wedding function</span> and need a projector for rent in Noida?
                                    <span className="font-semibold text-purple-600"> You have come to the right place.</span>
                                </p>

                                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                    We at <span className="font-bold text-indigo-600">RentMyEvent</span> offer high-quality
                                    <span className="font-semibold text-blue-600"> HD, LED, and 4K projectors on rent in Noida</span> for all kinds of events, small or big.
                                    Be it an office presentation or seminar, or even a home gathering, our projector rental service in Noida is designed to make your visuals
                                    <span className="font-semibold text-purple-600"> clear, bright, and professional.</span>
                                </p>

                                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-8">
                                    <h3 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center">
                                        <Star className="mr-3 text-yellow-500" />
                                        Why rent a projector in Noida from us?
                                    </h3>
                                    <p className="text-lg text-gray-700 font-medium">
                                        Here's why <span className="text-indigo-600 font-bold">hundreds of people</span> choose our projector rental in Noida every month:
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-gray-800 mb-1">High-quality Projectors</h4>
                                                <p className="text-gray-600">Rent HD projectors, full HD projectors, and 4K projectors in Noida to guarantee breathtakingly clear video.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-3">
                                            <Settings className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-gray-800 mb-1">Flexible Options</h4>
                                                <p className="text-gray-600">From short-throw projectors in Noida to long-throw projectors for large halls, we're your go-to choice.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-3">
                                            <Monitor className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-gray-800 mb-1">Projector with Screen on Rent</h4>
                                                <p className="text-gray-600">Don't have a screen? No problem. We provide full projector and screen rental packages.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <Award className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-gray-800 mb-1">Reasonable Price</h4>
                                                <p className="text-gray-600">Rent an affordable projector in Noida or opt for a high-end model for professional use at events.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-3">
                                            <Truck className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-gray-800 mb-1">Doorstep Delivery & Setup</h4>
                                                <p className="text-gray-600">We deliver and install your projector anywhere in Noida—just book, sit back, and enjoy.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-3">
                                            <Headphones className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-gray-800 mb-1">Expert Support</h4>
                                                <p className="text-gray-600">Our technical team ensures smooth operation throughout your event.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why rent a projector in Noida from us?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Here's why hundreds of people choose our projector rental in Noida every month
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUs.map((reason, index) => (
                            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <reason.icon className="h-8 w-8 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                                        <p className="text-gray-600 text-sm">{reason.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Types of Projectors */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Types of projectors we offer for rent in Noida
                        </h2>
                        <p className="text-lg text-gray-600">
                            We know every event is different, and so we provide projectors for every type of set-up
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {projectorTypes.map((projector, index) => (
                            <Card key={index} className={`relative transition-all duration-300 hover:shadow-lg ${projector.popular ? 'ring-2 ring-purple-500' : ''}`}>
                                {projector.popular && (
                                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500">
                                        Most Popular
                                    </Badge>
                                )}
                                <CardHeader className="text-center pb-4">
                                    <projector.icon className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                                    <CardTitle className="text-lg">{projector.title}</CardTitle>
                                    <CardDescription>{projector.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="text-center">
                                        <span className="text-2xl font-bold text-purple-600">{projector.price}</span>
                                    </div>
                                    <ul className="space-y-2 text-sm">
                                        {projector.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center">
                                                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="w-full" variant={projector.popular ? "default" : "outline"}>
                                        Book Now
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rental Packages */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Projector Rental Packages Include
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {rentalPackages.map((pkg, index) => (
                            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                                <CardHeader className="text-center pb-4">
                                    <CardTitle className="text-xl text-purple-700">{pkg.title}</CardTitle>
                                    <div className="text-2xl font-bold text-purple-600 mt-2">{pkg.price}</div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-sm">
                                                <CheckCircle className="h-4 w-4 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="w-full mt-6">
                                        Select Package
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Areas in Noida */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            We deliver to all sectors in Noida
                        </h2>
                        <p className="text-lg text-gray-600">
                            Comprehensive projector delivery and installation across all Noida sectors
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {noidaAreas.map((area, index) => (
                            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
                                <MapPin className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                                <span className="text-sm font-medium">{area}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                    </div>

                    <div className="grid md:grid-cols-5 gap-6">
                        {[
                            {
                                step: "1",
                                title: "Share Your Event Details",
                                description: "Let's know your location, type of event, and how many guests"
                            },
                            {
                                step: "2",
                                title: "Choose a projector",
                                description: "Select between HD, LED, or 4K projectors on rent in Noida"
                            },
                            {
                                step: "3",
                                title: "Get a Quick Quote",
                                description: "We'll send an affordable price plan"
                            },
                            {
                                step: "4",
                                title: "Setup and Delivery",
                                description: "Our team delivers and sets up everything on site"
                            },
                            {
                                step: "5",
                                title: "On-Site Support",
                                description: "We support you on-site during the event for seamless projection"
                            }
                        ].map((process, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: "How much does it cost to rent a projector in Noida?",
                                a: "Our projector rentals in Noida start from ₹999 per day for basic models. 4K and long-throw projectors are available at higher rates depending on your requirements."
                            },
                            {
                                q: "Do you provide projector with screen on rent in Noida?",
                                a: "Yes, you can rent both projector and screen together. We also have combo packages with sound system and lighting for a complete setup."
                            },
                            {
                                q: "Can I rent a projector for just one day?",
                                a: "Of course, you can hire a projector for a single event, for a few hours, or for several days—whatever suits your need."
                            },
                            {
                                q: "Do you deliver to all sectors in Noida?",
                                a: "Yes! We do provide delivery and installation services of projectors in all sectors of Noida, including Sector 18, 62, 63, 132, 137, and so on."
                            },
                            {
                                q: "What if I need technical help during the event?",
                                a: "Our support team is always on standby to help you during your event and make sure that your projector is running perfectly."
                            }
                        ].map((faq, index) => (
                            <Card key={index} className="p-6">
                                <h3 className="font-semibold text-lg mb-3 text-purple-800">{faq.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-purple-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Book Your Projector in Noida?
                    </h2>
                    <p className="text-xl mb-8">
                        Get instant quotes for premium projectors with complete setup in Noida
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                            <Phone className="mr-2 h-5 w-5" />
                            Call: {CONTACT_PHONE}
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-purple-600"
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