"use client"

import Navbar from "@/components/navbar"
import PromoStrips from "@/components/promo-strips"
import Footer from "@/components/footer"
import { Monitor, Calendar, Users, Wrench, Lightbulb, Shield } from "lucide-react"

export default function Services() {
    const services = [
        {
            icon: Monitor,
            title: "Audio-Visual Equipment",
            description: "Professional projectors, LED screens, plasma TVs, and complete AV setups for any event size.",
            features: ["HD & 4K Projectors", "LED Walls", "Plasma TVs", "Sound Systems"],
        },
        {
            icon: Calendar,
            title: "Event Planning & Coordination",
            description: "End-to-end event planning from concept to execution. Our experts handle all logistics.",
            features: ["Venue Coordination", "Guest Management", "Timeline Planning", "Vendor Coordination"],
        },
        {
            icon: Users,
            title: "On-Site Management",
            description: "Professional technicians and managers for seamless setup, testing, and live support.",
            features: ["Technical Support", "Setup & Teardown", "Live Monitoring", "Issue Resolution"],
        },
        {
            icon: Wrench,
            title: "Maintenance & Support",
            description: "Regular maintenance and 24/7 support to keep your equipment in perfect condition.",
            features: ["Regular Maintenance", "24/7 Support", "Emergency Response", "Equipment Testing"],
        },
        {
            icon: Lightbulb,
            title: "Creative Solutions",
            description: "Innovative designs and creative concepts tailored to your event's unique requirements.",
            features: ["Custom Designs", "Theme Development", "Visual Concepts", "Lighting Design"],
        },
        {
            icon: Shield,
            title: "Professional Insurance",
            description: "Fully insured equipment and services for complete peace of mind during your event.",
            features: ["Equipment Insurance", "Liability Coverage", "Damage Protection", "Peace of Mind"],
        },
    ]

    return (
        <>
            <main className="min-h-screen">
                <PromoStrips />
                <Navbar />

                {/* Hero Section */}
                <section className="diagonal-bg-dark py-16 md:py-24 overflow-x-hidden relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#1a1a1a] leading-tight animate-fade-in-up">
                                Our <span className="bg-gradient-to-r from-[#2cc16f] via-[#ff9700] to-[#dc5f5f] bg-clip-text text-transparent">Premium Services</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
                                Comprehensive event solutions designed to <span className="text-[#2cc16f] font-semibold">exceed your expectations</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="section-diag section-diag--a py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, idx) => {
                                const Icon = service.icon
                                return (
                                    <div
                                        key={idx}
                                        className="bg-white rounded-lg border border-gray-200/60 p-8 hover:shadow-xl transition-all duration-300 animate-scale-in"
                                        style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
                                    >
                                        <Icon className="w-14 h-14 text-[#ff9700] mb-4" />
                                        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">{service.title}</h3>
                                        <p className="text-gray-600 mb-6">{service.description}</p>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, fidx) => (
                                                <li key={fidx} className="text-sm text-gray-700 flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-[#2cc16f] rounded-full"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Why Our Services Section */}
                <section className="section-diag section-diag--b py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a1a1a] animate-fade-in-down">
                            Why Choose <span className="bg-gradient-to-r from-[#2cc16f] to-[#ff9700] bg-clip-text text-transparent">Our Services</span>
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="animate-fade-in-left">
                                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Professional Expertise</h3>
                                <p className="text-gray-600">
                                    Our team has over 10 years of experience managing events of all sizes and complexities. We bring professionalism to every project.
                                </p>
                            </div>
                            <div className="animate-fade-in-right animate-delay-200">
                                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Latest Technology</h3>
                                <p className="text-gray-600">
                                    We invest in cutting-edge equipment and technology to ensure your event has the best possible setup and execution.
                                </p>
                            </div>
                            <div className="animate-fade-in-left animate-delay-300">
                                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">24/7 Support</h3>
                                <p className="text-gray-600">
                                    Our dedicated support team is available round-the-clock to handle any issues or emergencies during your event.
                                </p>
                            </div>
                            <div className="animate-fade-in-right animate-delay-400">
                                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Transparent Pricing</h3>
                                <p className="text-gray-600">
                                    No hidden charges. We provide detailed quotes and transparent pricing for all our services and equipment rental.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="diagonal-bg-dark py-16 md:py-24">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a1a1a] animate-fade-in-up">
                            Let's <span className="bg-gradient-to-r from-[#ff9700] to-[#dc5f5f] bg-clip-text text-transparent">Bring Your Event to Life</span>
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg animate-fade-in-up animate-delay-200">
                            Contact us today for a free consultation and custom quote.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-gradient-to-r from-[#2cc16f] to-[#ff9700] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 animate-fade-in-up animate-delay-300"
                        >
                            Get Free Quote
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
