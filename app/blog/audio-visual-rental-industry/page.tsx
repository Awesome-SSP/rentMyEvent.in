"use client"

import React from "react"
import Navbar from "@/components/navbar"
import PromoStrips from "@/components/promo-strips"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Monitor,
    Volume2,
    Lightbulb,
    Users,
    Building2,
    Heart,
    Star,
    CheckCircle,
    TrendingUp,
    Award,
    Zap
} from "lucide-react"

export default function AudioVisualRentalIndustryBlog() {
    const equipmentTypes = [
        {
            icon: Monitor,
            title: "Audio Visual Screens",
            description: "High-definition displays and projection systems for impactful presentations"
        },
        {
            icon: Volume2,
            title: "Sound Systems on Rent",
            description: "Professional audio equipment ensuring crystal clear sound quality"
        },
        {
            icon: Lightbulb,
            title: "Stage Lighting",
            description: "Dynamic lighting solutions to create perfect ambience"
        },
        {
            icon: Zap,
            title: "LED Walls",
            description: "Vibrant LED display walls for maximum visual impact"
        }
    ]

    const eventTypes = [
        {
            icon: Heart,
            title: "Birthday Parties",
            description: "Colorful visuals dancing to the beat of music, photo slideshows on big screens",
            equipment: "Audio visual equipment for birthday parties"
        },
        {
            icon: Building2,
            title: "Corporate Events",
            description: "Professional-grade setups ensuring every presentation looks sharp",
            equipment: "Audio visual equipment for conferences"
        },
        {
            icon: Users,
            title: "Live Performances",
            description: "Complete AV solutions for concerts and entertainment events",
            equipment: "Stage lighting and sound systems"
        },
        {
            icon: Star,
            title: "Product Launches",
            description: "High-impact presentations with LED walls and premium sound",
            equipment: "LED walls and professional audio"
        }
    ]

    const benefits = [
        {
            icon: TrendingUp,
            title: "Cost-Effective",
            description: "Renting high-quality AV equipment saves you the cost of buying expensive gear"
        },
        {
            icon: Award,
            title: "Professional Setup",
            description: "Technicians handle installation and testing to ensure perfect performance"
        },
        {
            icon: CheckCircle,
            title: "Custom Solutions",
            description: "Choose the setup based on event size and location requirements"
        }
    ]

    const cities = [
        "Delhi NCR", "Noida", "Gurgaon", "Faridabad", "Ghaziabad"
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Navbar />
            <PromoStrips />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Badge className="bg-yellow-500 text-black mb-4">Industry Insights</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Audio Visual Rental Industry in India: Bringing Events to Life
                    </h1>
                    <p className="text-xl leading-relaxed">
                        Discover how the Audio Visual Rental Industry in India has transformed the way events are organized and experienced across the nation.
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            <strong>Do you know?</strong> Audio Visual Rental Industry in India has transformed the way events are organized and experienced. From small birthday gatherings to large-scale corporate events, audiovisual equipment rental services play a vital role in creating an engaging and memorable atmosphere.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Whether it's a birthday party, a conference, or a product launch, today's audience expects more than just lights and sound — they want an immersive experience. And that's exactly what the best audio visual rental companies in India deliver.
                        </p>
                    </div>
                </div>
            </section>

            {/* Equipment Types */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Audio Visual Equipment for Every Occasion
                        </h2>
                        <p className="text-lg text-gray-600">
                            Professional-grade equipment solutions for all types of events
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {equipmentTypes.map((equipment, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <equipment.icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                                    <CardTitle className="text-lg">{equipment.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm">{equipment.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Event Applications */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Transforming Different Types of Events
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {eventTypes.map((event, index) => (
                            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <event.icon className="h-10 w-10 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                                        <p className="text-gray-700 mb-3">{event.description}</p>
                                        <Badge variant="outline" className="text-sm">
                                            {event.equipment}
                                        </Badge>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Delhi NCR Focus */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Top Audio Visual Rentals in Delhi NCR
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Delhi NCR has emerged as one of the biggest markets for top audio visual equipment on rent. Companies like Rent My Event provide everything from audio visual screens and sound systems on rent to projectors, LED walls, and stage lighting.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-8 shadow-lg">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-blue-800">
                                    Comprehensive AV Solutions
                                </h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                                        Audio visual screens and projectors
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                                        Sound systems on rent
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                                        LED walls and display solutions
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                                        Professional stage lighting
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                                        AV equipment hire in Noida and Delhi NCR
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
                                    <h4 className="font-semibold mb-3">Service Areas:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {cities.map((city, index) => (
                                            <Badge key={index} variant="secondary">
                                                {city}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why Choose Audio Visual Equipment Hire?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                                <benefit.icon className="h-12 w-12 mx-auto mb-4 text-green-600" />
                                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Whether it's a corporate seminar, wedding celebration, or live performance, renting AV equipment gives you the best sound, light, and visual experience without the stress of ownership.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Highlight */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Audio Visual Setup for Parties & Events
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Our audio visual equipment rental services are designed for flexibility, whether you need it for a few hours, a day, or an entire event season.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        <div className="bg-white/10 rounded-lg p-6">
                            <Monitor className="h-12 w-12 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Professional Displays</h3>
                            <p className="text-sm opacity-90">High-resolution screens and projection systems</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-6">
                            <Volume2 className="h-12 w-12 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Premium Audio</h3>
                            <p className="text-sm opacity-90">Crystal clear sound systems for any venue</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-6">
                            <Lightbulb className="h-12 w-12 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Event Lighting</h3>
                            <p className="text-sm opacity-90">Create the perfect ambience with professional lighting</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Thoughts */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Final Thoughts</h2>
                    </div>

                    <div className="prose prose-lg max-w-none text-center">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            The audio visual rental industry in India continues to grow, driven by a booming event culture and the need for cutting-edge technology. From audio visual screens to sound systems on rent, the right setup can transform any ordinary event into an unforgettable experience.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            If you're planning your next event in Delhi NCR or Noida, explore Rent My Event's audio visual equipment hire services and make your celebration shine — because great events deserve great visuals and sound!
                        </p>

                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                            Explore Our AV Services
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}