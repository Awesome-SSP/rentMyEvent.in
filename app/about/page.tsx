"use client"

import Navbar from "@/components/navbar"
import PromoStrips from "@/components/promo-strips"
import Footer from "@/components/footer"
import { Award, Users, Clock, Zap } from "lucide-react"

export default function About() {
    const stats = [
        { value: "10+", label: "Years of Experience" },
        { value: "500+", label: "Events Organized" },
        { value: "100+", label: "Team Members" },
        { value: "24/7", label: "Support Available" },
    ]

    const values = [
        {
            icon: Award,
            title: "Excellence",
            description: "We deliver award-winning event solutions with attention to detail.",
        },
        {
            icon: Users,
            title: "Teamwork",
            description: "Our dedicated team works together to make your events amazing.",
        },
        {
            icon: Clock,
            title: "Reliability",
            description: "On-time delivery and professional execution, always.",
        },
        {
            icon: Zap,
            title: "Innovation",
            description: "Latest technology and creative solutions for modern events.",
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
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#6B4E71] leading-tight animate-fade-in-up">
                                <span className="bg-gradient-to-r from-[#FFB3D9] via-[#E6D5FF] to-[#FF6B9D] bg-clip-text text-transparent">About Rent My Event</span>
                            </h1>
                            <p className="text-xl text-[#6B4E71] mb-8 max-w-3xl mx-auto animate-fade-in-up animate-delay-200 font-medium">
                                Over a decade of excellence in <span className="text-[#FF6B9D] font-semibold">event management and equipment rental</span> across Delhi NCR
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
                            {stats.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-pink-200 rounded-lg p-6 text-center card-hover-lift shadow-soft"
                                    style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
                                >
                                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FFB3D9] to-[#E6D5FF] bg-clip-text text-transparent mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm md:text-base text-[#6B4E71] font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="section-diag section-diag--a py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="animate-fade-in-left">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#6B4E71]">
                                    Our <span className="bg-gradient-to-r from-[#FFB3D9] to-[#FF6B9D] bg-clip-text text-transparent">Story</span>
                                </h2>
                                <p className="text-[#6B4E71] mb-4 leading-relaxed font-medium">
                                    What started as a small equipment rental business has grown into one of Delhi NCR's most trusted event management companies. Our journey is marked by countless successful events, satisfied clients, and a team passionate about creating memorable experiences.
                                </p>
                                <p className="text-[#7B5E81] leading-relaxed">
                                    Today, we combine cutting-edge technology with creative expertise to deliver events that leave lasting impressions. From intimate gatherings to large-scale conferences, we're here to make your vision a reality.
                                </p>
                            </div>
                            <div className="relative animate-fade-in-right animate-delay-200">
                                <img
                                    src="/professional-event-setup-with-modern-equipment.jpg"
                                    alt="Our team at work"
                                    className="rounded-lg shadow-soft-lg border border-pink-200 card-hover-lift"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="section-diag section-diag--b py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#6B4E71] animate-fade-in-down">
                            <span className="text-[#6B4E71]">Our </span>
                            <span className="bg-gradient-to-r from-[#FFB3D9] via-[#E6D5FF] to-[#FF6B9D] bg-clip-text text-transparent">Values</span>
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, idx) => {
                                const Icon = value.icon
                                return (
                                    <div
                                        key={idx}
                                        className="bg-white rounded-lg p-6 border border-pink-200 card-hover-lift shadow-soft"
                                        style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
                                    >
                                        <Icon className="w-12 h-12 text-[#FF6B9D] mb-4" />
                                        <h3 className="text-lg font-bold text-[#6B4E71] mb-2">{value.title}</h3>
                                        <p className="text-[#7B5E81] text-sm font-medium">{value.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="diagonal-bg-dark py-16 md:py-24">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#6B4E71] animate-fade-in-up">
                            Ready to Create <span className="bg-gradient-to-r from-[#FFB3D9] to-[#FF6B9D] bg-clip-text text-transparent">Your Perfect Event</span>?
                        </h2>
                        <p className="text-[#6B4E71] mb-8 text-lg animate-fade-in-up animate-delay-200 font-medium">
                            Let's work together to bring your vision to life. Contact us today for a consultation.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block btn-premium px-8 py-3 rounded-lg font-semibold animate-fade-in-up animate-delay-300"
                        >
                            Get in Touch
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
