"use client"

import Navbar from "@/components/navbar"
import PromoStrips from "@/components/promo-strips"
import Footer from "@/components/footer"
import { Monitor, Calendar, Users, Wrench, Lightbulb, Shield, Phone, Mail, MapPin, Clock, Star, Award, CheckCircle, Zap, BadgeCheck, Headphones, Timer } from "lucide-react"
import { useState, useEffect } from "react"

export default function Services() {
    const [activeService, setActiveService] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const services = [
        {
            icon: Monitor,
            title: "Audio-Visual Equipment",
            description: "Professional projectors, LED screens, plasma TVs, and complete AV setups for any event size.",
            features: ["HD & 4K Projectors", "LED Walls", "Plasma TVs", "Sound Systems"],
            price: "Starting from ₹5,000/day",
            image: "/brandimage/soundsystem.jpg"
        },
        {
            icon: Calendar,
            title: "Event Planning & Coordination",
            description: "End-to-end event planning from concept to execution. Our experts handle all logistics.",
            features: ["Venue Coordination", "Guest Management", "Timeline Planning", "Vendor Coordination"],
            price: "Starting from ₹15,000/event",
            image: "/brandimage/coordination.jpg"
        },
        {
            icon: Users,
            title: "On-Site Management",
            description: "Professional technicians and managers for seamless setup, testing, and live support.",
            features: ["Technical Support", "Setup & Teardown", "Live Monitoring", "Issue Resolution"],
            price: "Starting from ₹8,000/day",
            image: "/brandimage/seating.jpg"
        },
        {
            icon: Wrench,
            title: "Maintenance & Support",
            description: "Regular maintenance and 24/7 support to keep your equipment in perfect condition.",
            features: ["Regular Maintenance", "24/7 Support", "Emergency Response", "Equipment Testing"],
            price: "Starting from ₹3,000/service",
            image: "/brandimage/stage.jpg"
        },
        {
            icon: Lightbulb,
            title: "Creative Solutions",
            description: "Innovative designs and creative concepts tailored to your event's unique requirements.",
            features: ["Custom Designs", "Theme Development", "Visual Concepts", "Lighting Design"],
            price: "Starting from ₹12,000/event",
            image: "/brandimage/decoration.jpg"
        },
        {
            icon: Shield,
            title: "Professional Insurance",
            description: "Fully insured equipment and services for complete peace of mind during your event.",
            features: ["Equipment Insurance", "Liability Coverage", "Damage Protection", "Peace of Mind"],
            price: "Included with all rentals",
            image: "/brandimage/photovideo.jpg"
        },
    ]

    const contactInfo = {
        phone: "+91 7065441547",
        whatsapp: "+91 7065441547",
        email: "info@rentmyevent.in",
        address: "Delhi NCR, India",
        hours: "24/7 Available"
    }

    return (
        <>
            <main className="min-h-screen">
                <PromoStrips />
                <Navbar />

                {/* Enhanced Hero Section */}
                <section className="diagonal-bg-dark py-12 md:py-20 overflow-x-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 opacity-50"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                        <div className="text-center">
                            {/* Trust Badges */}
                            <div className="flex justify-center items-center gap-4 mb-6 animate-fade-in-up">
                                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                                    <Star className="w-4 h-4 text-yellow-500" />
                                    <span className="text-sm font-medium text-gray-700">4.9/5 Rating</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                                    <Award className="w-4 h-4 text-blue-500" />
                                    <span className="text-sm font-medium text-gray-700">5000+ Events</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                                    <BadgeCheck className="w-4 h-4 text-green-500" />
                                    <span className="text-sm font-medium text-gray-700">Verified Business</span>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1a1a1a] leading-tight animate-fade-in-up animate-delay-100">
                                Delhi's #1 <span className="bg-gradient-to-r from-[#2459ad] via-[#ff9700] to-[#dc5f5f] bg-clip-text text-transparent">Projector Rental</span>
                                <br />& Event Service Provider
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up animate-delay-200 leading-relaxed">
                                 <span className="font-semibold text-[#2459ad]"> Professional HD & 4K Projectors </span> •
                                 <span className="font-semibold text-[#ff9700]"> Same-Day Delivery </span> •
                                 <span className="font-semibold text-[#2cc16f]"> Technical Support Included </span>
                            </p>

                            {/* Quick Stats */}
                            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mb-8 animate-fade-in-up animate-delay-300">
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-[#2459ad]">10+</div>
                                    <div className="text-sm text-gray-600">Years Experience</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-[#ff9700]">500+</div>
                                    <div className="text-sm text-gray-600">Successful Events</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-[#2cc16f]">24/7</div>
                                    <div className="text-sm text-gray-600">Support Available</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-[#dc5f5f]">Delhi NCR</div>
                                    <div className="text-sm text-gray-600">Service Coverage</div>
                                </div>
                            </div>

                            {/* Call-to-Action */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-400">
                                <a
                                    href="tel:+917065441547"
                                    className="group bg-gradient-to-r from-[#2459ad] to-[#1a4480] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-[250px] justify-center"
                                >
                                    <Phone className="w-5 h-5 group-hover:animate-pulse" />
                                     Call +91 7065441547
                                </a>
                                <a
                                    href="https://wa.me/917065441547?text=Hi! I need projector rental in Delhi NCR"
                                    className="group bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-[250px] justify-center"
                                >
                                    <span className="text-xl group-hover:animate-bounce">💬</span>
                                    WhatsApp Now
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content with Sidebar Layout */}
                <section className="py-8 md:py-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row gap-8">

                            {/* Enhanced Contact Sidebar */}
                            <div className="lg:w-1/3 xl:w-1/4">
                                <div className="sticky top-8 space-y-6">
                                    {/* Business Info Card */}
                                    <div className="bg-gradient-to-br from-[#2459ad] to-[#1a4480] text-white rounded-2xl shadow-xl p-6 border border-gray-100">
                                        <div className="text-center mb-4">
                                            <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <Monitor className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold mb-1">Rent My Event</h3>
                                            <p className="text-blue-100 text-sm">Delhi's Premier Event Solutions</p>
                                        </div>

                                        <div className="space-y-3 mb-4">
                                            <div className="flex items-center gap-2">
                                                <Star className="w-4 h-4 text-yellow-300" />
                                                <span className="text-sm">4.9/5 Customer Rating</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Award className="w-4 h-4 text-yellow-300" />
                                                <span className="text-sm">5000+ Successful Events</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <BadgeCheck className="w-4 h-4 text-green-300" />
                                                <span className="text-sm">Verified Business License</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contact Card */}
                                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                                        <h3 className="text-xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                                            <Headphones className="w-5 h-5 text-[#ff9700]" />
                                            Get Instant Quote
                                        </h3>

                                        <div className="space-y-4">
                                            {/* Phone */}
                                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#2459ad]/10 to-[#dc5f5f]/10 rounded-xl border border-[#2459ad]/20 hover:shadow-lg transition-all duration-300">
                                                <div className="bg-[#2459ad] p-2 rounded-lg">
                                                    <Phone className="w-5 h-5 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm text-gray-600 font-medium">Call for Instant Quote</p>
                                                    <a href="tel:+917065441547" className="font-bold text-[#2459ad] hover:text-[#1a4480] transition-colors text-lg">
                                                        +91 7065441547
                                                    </a>
                                                </div>
                                                <Timer className="w-4 h-4 text-[#2459ad] animate-pulse" />
                                            </div>

                                            {/* WhatsApp */}
                                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#25D366]/10 to-[#128C7E]/10 rounded-xl border border-[#25D366]/20 hover:shadow-lg transition-all duration-300">
                                                <div className="bg-[#25D366] p-2 rounded-lg">
                                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.488z"/>
                                                    </svg>
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm text-gray-600 font-medium">WhatsApp Support</p>
                                                    <a href="https://wa.me/917065441547?text=Hi! I need projector rental quotes for my event in Delhi NCR" className="font-bold text-[#25D366] hover:text-[#128C7E] transition-colors text-lg">
                                                        Chat Now
                                                    </a>
                                                </div>
                                                <Zap className="w-4 h-4 text-[#25D366] animate-pulse" />
                                            </div>

                                            {/* Email */}
                                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#ff9700]/10 to-[#dc5f5f]/10 rounded-xl border border-[#ff9700]/20 hover:shadow-lg transition-all duration-300">
                                                <div className="bg-[#ff9700] p-2 rounded-lg">
                                                    <Mail className="w-5 h-5 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm text-gray-600 font-medium">Email Queries</p>
                                                    <a href="mailto:info@rentmyevent.in?subject=Projector Rental Inquiry" className="font-bold text-[#ff9700] hover:text-[#dc5f5f] transition-colors">
                                                        Send Email
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Location */}
                                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#2cc16f]/10 to-[#ff9700]/10 rounded-xl border border-[#2cc16f]/20">
                                                <div className="bg-[#2cc16f] p-2 rounded-lg">
                                                    <MapPin className="w-5 h-5 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm text-gray-600 font-medium">Service Coverage</p>
                                                    <p className="font-bold text-[#2cc16f]">All Delhi NCR</p>
                                                    <p className="text-xs text-gray-500">Gurgaon • Noida • Faridabad • Ghaziabad</p>
                                                </div>
                                            </div>

                                            {/* Hours */}
                                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#dc5f5f]/10 to-[#2459ad]/10 rounded-xl border border-[#dc5f5f]/20">
                                                <div className="bg-[#dc5f5f] p-2 rounded-lg">
                                                    <Clock className="w-5 h-5 text-white animate-pulse" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm text-gray-600 font-medium">Availability</p>
                                                    <p className="font-bold text-[#dc5f5f]">24/7 Emergency Support</p>
                                                    <p className="text-xs text-gray-500">Same-day delivery available</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Enhanced Action Buttons */}
                                        <div className="mt-6 space-y-3">
                                            <a
                                                href="tel:+917065441547"
                                                className="group w-full bg-gradient-to-r from-[#2459ad] to-[#1a4480] text-white py-4 px-6 rounded-xl font-bold text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
                                            >
                                                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                                                <span className="text-lg">📞 Call +91 7065441547</span>
                                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                                            </a>
                                            <a
                                                href="https://wa.me/917065441547?text=Hi! I need professional projector rental for my event in Delhi NCR. Please share rates and availability."
                                                className="group w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white py-4 px-6 rounded-xl font-bold text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
                                            >
                                                <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.488z"/>
                                                </svg>
                                                <span className="text-lg">WhatsApp Chat</span>
                                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Enhanced Quote Card */}
                                    <div className="bg-gradient-to-br from-[#ff9700] via-[#dc5f5f] to-[#2459ad] rounded-2xl p-6 text-white relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                                        <div className="relative">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Zap className="w-6 h-6 text-yellow-300 animate-pulse" />
                                                <h4 className="text-xl font-bold">Free Instant Quote</h4>
                                            </div>
                                            <p className="text-sm mb-4 text-white/90 leading-relaxed">
                                                🎯 HD & 4K Projectors<br />
                                                🚚 Same-day delivery<br />
                                                🛡️ Technical support included
                                            </p>
                                            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-4">
                                                <p className="text-xs text-white/80">Response Time:</p>
                                                <p className="font-bold text-yellow-300">Within 5 Minutes!</p>
                                            </div>
                                            <a
                                                href="tel:+917065441547"
                                                className="block w-full bg-white text-[#ff9700] py-3 px-4 rounded-xl font-bold text-center hover:bg-gray-50 transition-all duration-300 shadow-lg transform hover:scale-105"
                                            >
                                                📞 Get Quote Now
                                            </a>
                                        </div>
                                    </div>

                                    {/* Why Choose Us Mini */}
                                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                                        <h4 className="text-lg font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                                            <Award className="w-5 h-5 text-[#ff9700]" />
                                            Why Choose Us
                                        </h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                                <span className="text-sm text-gray-700">10+ Years Experience</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                                <span className="text-sm text-gray-700">5000+ Happy Customers</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                                <span className="text-sm text-gray-700">Same-Day Delivery</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                                <span className="text-sm text-gray-700">Professional Setup</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                                <span className="text-sm text-gray-700">24/7 Technical Support</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content Area */}
                            <div className="lg:w-2/3 xl:w-3/4">
                                <div className="grid gap-6">
                                    {services.map((service, idx) => {
                                        const Icon = service.icon
                                        return (
                                            <div
                                                key={idx}
                                                className="bg-white rounded-2xl border border-gray-200/60 p-6 md:p-8 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                                                style={{ animationDelay: `${idx * 0.1}s` }}
                                            >
                                                <div className="flex flex-col md:flex-row gap-6">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-4 mb-6">
                                                            <div className="bg-gradient-to-r from-[#ff9700]/20 to-[#dc5f5f]/20 p-4 rounded-2xl shadow-lg">
                                                                <Icon className="w-10 h-10 text-[#ff9700]" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="flex items-center gap-2 mb-1">
                                                                    <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a]">{service.title}</h3>
                                                                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">Popular</span>
                                                                </div>
                                                                <div className="flex items-center gap-4">
                                                                    <p className="text-lg text-[#2cc16f] font-bold">Starting ₹5,000/day</p>
                                                                    <div className="flex items-center gap-1">
                                                                        {[...Array(5)].map((_, i) => (
                                                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                                        ))}
                                                                        <span className="text-sm text-gray-600 ml-1">(4.9)</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">{service.description}</p>

                                                        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-4 mb-6">
                                                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                                                What's Included:
                                                            </h4>
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                                {service.features.map((feature, fidx) => (
                                                                    <div key={fidx} className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-lg p-2">
                                                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                                        <span className="text-sm font-medium text-gray-800">{feature}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Service Benefits */}
                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                                                            <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                                                                <Timer className="w-5 h-5 text-green-600 mx-auto mb-1" />
                                                                <p className="text-xs font-semibold text-green-800">Same Day</p>
                                                                <p className="text-xs text-green-600">Delivery</p>
                                                            </div>
                                                            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                                                                <Headphones className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                                                                <p className="text-xs font-semibold text-blue-800">24/7</p>
                                                                <p className="text-xs text-blue-600">Support</p>
                                                            </div>
                                                            <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                                                                <BadgeCheck className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                                                                <p className="text-xs font-semibold text-orange-800">Professional</p>
                                                                <p className="text-xs text-orange-600">Setup</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col sm:flex-row gap-4">
                                                            <a
                                                                href="tel:+917065441547"
                                                                className="group flex-1 bg-gradient-to-r from-[#2459ad] to-[#1a4480] text-white px-6 py-3 rounded-xl font-bold text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
                                                            >
                                                                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                                                                📞 Call +91 7065441547
                                                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                                                            </a>
                                                            <a
                                                                href={`https://wa.me/917065441547?text=Hi! I need ${service.title.toLowerCase()} for my event in Delhi NCR. Please share rates and availability.`}
                                                                className="group flex-1 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-6 py-3 rounded-xl font-bold text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
                                                            >
                                                                <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.488z"/>
                                                                </svg>
                                                                WhatsApp Quote
                                                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a1a1a] animate-fade-in-down">
                            Why Choose <span className="bg-gradient-to-r from-[#2cc16f] to-[#ff9700] bg-clip-text text-transparent">Rent My Event</span>
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="text-center p-6 bg-gradient-to-br from-[#2459ad]/5 to-[#dc5f5f]/5 rounded-2xl animate-fade-in-up">
                                <div className="bg-gradient-to-r from-[#2459ad] to-[#1a4480] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">Professional Expertise</h3>
                                <p className="text-gray-600 text-sm">
                                    10+ years experience in Delhi NCR with professional projector and AV equipment rental.
                                </p>
                            </div>

                            <div className="text-center p-6 bg-gradient-to-br from-[#25D366]/5 to-[#128C7E]/5 rounded-2xl animate-fade-in-up animate-delay-100">
                                <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Monitor className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">Latest Technology</h3>
                                <p className="text-gray-600 text-sm">
                                    HD & 4K projectors, LED screens, and cutting-edge audio-visual equipment for rent.
                                </p>
                            </div>

                            <div className="text-center p-6 bg-gradient-to-br from-[#ff9700]/5 to-[#dc5f5f]/5 rounded-2xl animate-fade-in-up animate-delay-200">
                                <div className="bg-gradient-to-r from-[#ff9700] to-[#dc5f5f] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">24/7 Support</h3>
                                <p className="text-gray-600 text-small">
                                    Round-the-clock support and emergency assistance for all your event needs.
                                </p>
                            </div>

                            <div className="text-center p-6 bg-gradient-to-br from-[#2cc16f]/5 to-[#ff9700]/5 rounded-2xl animate-fade-in-up animate-delay-300">
                                <div className="bg-gradient-to-r from-[#2cc16f] to-[#ff9700] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">Transparent Pricing</h3>
                                <p className="text-gray-600 text-sm">
                                    No hidden charges. Competitive rates for projector rental and event services in Delhi.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Enhanced CTA Section */}
                <section className="diagonal-bg-dark py-16 md:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-orange-900/20"></div>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                        <div className="bg-gradient-to-br from-[#2459ad] via-[#dc5f5f] to-[#ff9700] rounded-3xl p-8 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:20px_20px]"></div>

                            <div className="relative">
                                {/* Urgency Badge */}
                                <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm mb-6 animate-pulse">
                                    <Zap className="w-4 h-4" />
                                    Limited Time: Same-Day Delivery Available!
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                                    Ready to Make Your Event
                                    <span className="block text-yellow-300 text-5xl md:text-6xl lg:text-7xl">UNFORGETTABLE?</span>
                                </h2>

                                <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in-up animate-delay-200 leading-relaxed">
                                    🎯 <span className="font-bold">Delhi's #1 Projector Rental Service</span> •
                                    🚀 <span className="font-bold">500+ Successful Events</span> •
                                    ⭐ <span className="font-bold">4.9/5 Customer Rating</span>
                                </p>

                                {/* Main CTA */}
                                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up animate-delay-300">
                                    <a
                                        href="tel:+917065441547"
                                        className="group bg-white text-[#2459ad] px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all duration-300 flex items-center gap-4 min-w-[280px] justify-center shadow-2xl transform hover:scale-110"
                                    >
                                        <Phone className="w-6 h-6 group-hover:animate-pulse" />
                                         Call +91 7065441547
                                        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                                            INSTANT
                                        </div>
                                    </a>
                                    <a
                                        href="https://wa.me/917065441547?text=🎯 Hi! I need professional projector rental for my event in Delhi NCR. Please share your best rates and availability. Looking for HD/4K projectors with complete setup."
                                        className="group bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#128C7E] transition-all duration-300 flex items-center gap-4 min-w-[280px] justify-center shadow-2xl transform hover:scale-110"
                                    >
                                        <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.488z"/>
                                        </svg>
                                        WhatsApp Quote
                                        <div className="absolute -top-2 -right-2 bg-green-400 text-black text-xs px-2 py-1 rounded-full animate-bounce">
                                            FAST
                                        </div>
                                    </a>
                                </div>

                                {/* Trust Indicators */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                        <Timer className="w-8 h-8 text-yellow-300 mx-auto mb-3 animate-pulse" />
                                        <h4 className="font-bold text-yellow-300 text-lg">Same Day</h4>
                                        <p className="text-sm text-white/90">Delivery Available</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                        <Award className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                                        <h4 className="font-bold text-yellow-300 text-lg">10+ Years</h4>
                                        <p className="text-sm text-white/90">Experience</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                        <BadgeCheck className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                                        <h4 className="font-bold text-yellow-300 text-lg">Professional</h4>
                                        <p className="text-sm text-white/90">Setup Included</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                        <Star className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                                        <h4 className="font-bold text-yellow-300 text-lg">4.9/5</h4>
                                        <p className="text-sm text-white/90">Customer Rating</p>
                                    </div>
                                </div>

                                {/* Location Coverage */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <h3 className="text-xl font-bold text-yellow-300 mb-4">🌟 Serving All Delhi NCR</h3>
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {['Delhi', 'Gurgaon', 'Noida', 'Faridabad', 'Ghaziabad', 'Greater Noida'].map((city) => (
                                            <span key={city} className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                                                {city}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
