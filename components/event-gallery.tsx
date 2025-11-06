"use client"

import React, { useState } from "react"
import { ChevronLeft, ChevronRight, Play, Eye, Calendar, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function EventGallery() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const events = [
        {
            id: 1,
            title: "Corporate Conference 2024",
            description: "Large scale corporate event with 500+ attendees",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "Corporate",
            location: "Gurgaon",
            attendees: "500+",
            equipment: ["4K Projectors", "LED Walls", "Sound System", "Stage Lighting"],
            date: "March 2024"
        },
        {
            id: 2,
            title: "Wedding Celebration",
            description: "Beautiful wedding setup with premium AV equipment",
            image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "Wedding",
            location: "Delhi",
            attendees: "300+",
            equipment: ["Projectors", "LED Backdrop", "Premium Sound", "Ambient Lighting"],
            date: "April 2024"
        },
        {
            id: 3,
            title: "Product Launch Event",
            description: "High-impact product launch with immersive visuals",
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
            category: "Product Launch",
            location: "Noida",
            attendees: "200+",
            equipment: ["HD Projectors", "Interactive Displays", "Audio System", "Event Lighting"],
            date: "May 2024"
        },
        {
            id: 4,
            title: "Birthday Party Setup",
            description: "Fun and colorful birthday celebration",
            image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "Birthday",
            location: "Greater Noida",
            attendees: "50+",
            equipment: ["Mini Projector", "Portable Screen", "Sound System", "Party Lights"],
            date: "June 2024"
        },
        {
            id: 5,
            title: "Exhibition Stall",
            description: "Trade show exhibition with digital displays",
            image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
            category: "Exhibition",
            location: "Delhi NCR",
            attendees: "1000+",
            equipment: ["LED Displays", "Interactive Screens", "Audio Guide", "Booth Lighting"],
            date: "July 2024"
        },
        {
            id: 6,
            title: "Cultural Event",
            description: "Traditional cultural program with modern AV",
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "Cultural",
            location: "Faridabad",
            attendees: "400+",
            equipment: ["Stage Projectors", "Wireless Mics", "Amplifiers", "Stage Lights"],
            date: "August 2024"
        }
    ]

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === events.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? events.length - 1 : prevIndex - 1
        )
    }

    const getVisibleEvents = () => {
        const result = []
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % events.length
            result.push(events[index])
        }
        return result
    }

    const CONTACT_PHONE = "+917065441547"
    const WHATSAPP_TEXT = encodeURIComponent("Hi! I saw your event gallery and I'm interested in similar services for my event.")
    const whatsappUrl = `https://wa.me/${CONTACT_PHONE.replace(/\D/g, "")}?text=${WHATSAPP_TEXT}`

    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <Badge className="bg-blue-100 text-blue-800 mb-4">Our Work</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Recent Event <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Highlights</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Take a look at some of our recent successful events across Delhi NCR
                    </p>
                </div>

                {/* Gallery Carousel */}
                <div className="relative">
                    <div className="grid md:grid-cols-3 gap-6">
                        {getVisibleEvents().map((event, index) => (
                            <Card key={event.id} className={`group relative overflow-hidden hover:shadow-xl transition-all duration-500 ${index === 1 ? 'md:scale-105' : ''}`}>
                                <div className="relative h-64 overflow-hidden">
                                    <div
                                        className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${event.image}')`
                                        }}
                                    />

                                    {/* Category Badge */}
                                    <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                                        {event.category}
                                    </Badge>

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white/90 rounded-full p-4 shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                            <Eye className="h-8 w-8 text-blue-600" />
                                        </div>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">{event.description}</p>

                                    {/* Event Details */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center text-sm text-gray-500">
                                            <MapPin className="h-4 w-4 mr-2" />
                                            {event.location}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <Users className="h-4 w-4 mr-2" />
                                            {event.attendees} guests
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            {event.date}
                                        </div>
                                    </div>

                                    {/* Equipment Used */}
                                    <div className="mb-4">
                                        <h4 className="text-sm font-medium text-gray-700 mb-2">Equipment Used:</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {event.equipment.slice(0, 3).map((item, idx) => (
                                                <Badge key={idx} variant="outline" className="text-xs">
                                                    {item}
                                                </Badge>
                                            ))}
                                            {event.equipment.length > 3 && (
                                                <Badge variant="outline" className="text-xs">
                                                    +{event.equipment.length - 3} more
                                                </Badge>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:shadow-xl z-10"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:shadow-xl z-10"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 space-x-2">
                    {events.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-blue-600 scale-125'
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12">
                    <h3 className="text-2xl font-bold mb-4">Want Similar Results for Your Event?</h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Let us bring your vision to life with our premium equipment and professional setup services
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            onClick={() => window.open(whatsappUrl, '_blank')}
                            className="bg-green-600 hover:bg-green-700"
                        >
                            Get Free Quote
                        </Button>
                        <Button variant="outline" size="lg">
                            View All Projects
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}