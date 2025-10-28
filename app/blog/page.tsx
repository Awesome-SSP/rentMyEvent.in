"use client"

import Navbar from "@/components/navbar"
import PromoStrips from "@/components/promo-strips"
import Footer from "@/components/footer"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function Blog() {
    const posts = [
        {
            id: 1,
            title: "10 Essential Tips for Planning Your Corporate Event",
            excerpt:
                "Learn the key strategies for organizing a successful corporate event that impresses your clients and team members.",
            date: "October 20, 2025",
            author: "Sarah Johnson",
            category: "Corporate Events",
            image: "/professional-event-setup-with-equipment.jpg",
        },
        {
            id: 2,
            title: "The Latest Trends in Event Audio-Visual Technology",
            excerpt:
                "Discover cutting-edge AV equipment and technology trends that are transforming the event industry in 2025.",
            date: "October 15, 2025",
            author: "Mike Chen",
            category: "Technology",
            image: "/professional-event-setup-with-modern-equipment.jpg",
        },
        {
            id: 3,
            title: "How to Create an Unforgettable Guest Experience",
            excerpt:
                "Expert insights on designing guest experiences that leave lasting impressions and boost event engagement.",
            date: "October 10, 2025",
            author: "Emma Davis",
            category: "Event Design",
            image: "/professional-event-setup-with-equipment.jpg",
        },
        {
            id: 4,
            title: "Budget-Friendly Event Planning Without Compromising Quality",
            excerpt:
                "Smart strategies to maximize your event budget while maintaining the high standards your audience expects.",
            date: "October 5, 2025",
            author: "James Wilson",
            category: "Budget Tips",
            image: "/professional-event-setup-with-modern-equipment.jpg",
        },
        {
            id: 5,
            title: "Virtual and Hybrid Events: Best Practices for 2025",
            excerpt:
                "Comprehensive guide to planning successful virtual and hybrid events that engage audiences across all platforms.",
            date: "September 28, 2025",
            author: "Lisa Anderson",
            category: "Digital Events",
            image: "/professional-event-setup-with-equipment.jpg",
        },
        {
            id: 6,
            title: "Sustainable Event Planning: Go Green Without Compromise",
            excerpt:
                "Discover eco-friendly practices and sustainable solutions for organizing environmentally responsible events.",
            date: "September 20, 2025",
            author: "David Green",
            category: "Sustainability",
            image: "/professional-event-setup-with-modern-equipment.jpg",
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
                                Event Planning <span className="bg-gradient-to-r from-[#FFB3D9] via-[#E6D5FF] to-[#FF6B9D] bg-clip-text text-transparent">Insights & Tips</span>
                            </h1>
                            <p className="text-xl text-[#6B4E71] mb-8 max-w-3xl mx-auto animate-fade-in-up animate-delay-200 font-medium">
                                Expert articles and guides to help you plan <span className="text-[#FF6B9D] font-semibold">amazing events</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="section-diag section-diag--a py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, idx) => (
                                <article
                                    key={post.id}
                                    className="bg-white rounded-lg overflow-hidden border border-pink-200 card-hover-lift shadow-soft flex flex-col"
                                    style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
                                >
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden bg-gray-200">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-3 right-3">
                                            <span className="bg-[#FF6B9D] text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-lg font-bold text-[#6B4E71] mb-2 line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-[#7B5E81] text-sm mb-4 line-clamp-2 font-medium">
                                            {post.excerpt}
                                        </p>

                                        {/* Meta */}
                                        <div className="mt-auto pt-4 border-t border-pink-100">
                                            <div className="flex items-center gap-4 text-xs text-[#8B6B8D] mb-4">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {post.date}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <User className="w-4 h-4" />
                                                    {post.author}
                                                </div>
                                            </div>

                                            <a
                                                href="#"
                                                className="inline-flex items-center gap-2 text-[#FF6B9D] font-semibold hover:text-[#FFB3D9] transition-colors"
                                            >
                                                Read More <ArrowRight className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="section-diag section-diag--b py-16 md:py-24">
                    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#6B4E71] animate-fade-in-down">
                            Stay Updated with Our <span className="bg-gradient-to-r from-[#FFB3D9] to-[#FF6B9D] bg-clip-text text-transparent">Latest Insights</span>
                        </h2>
                        <p className="text-[#6B4E71] mb-8 animate-fade-in-up animate-delay-200 font-medium">
                            Subscribe to our newsletter to receive expert tips, industry trends, and exclusive event management insights.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-3 animate-fade-in-up animate-delay-300">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="input-premium flex-1"
                            />
                            <button
                                type="submit"
                                className="btn-premium px-6 py-3 rounded-lg font-semibold"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="diagonal-bg-dark py-16 md:py-24">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#6B4E71] animate-fade-in-up">
                            Ready to Plan Your <span className="bg-gradient-to-r from-[#FFB3D9] to-[#FF6B9D] bg-clip-text text-transparent">Next Event</span>?
                        </h2>
                        <p className="text-[#6B4E71] mb-8 text-lg animate-fade-in-up animate-delay-200 font-medium">
                            Let our team of experts help you create an unforgettable experience.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block btn-premium px-8 py-3 rounded-lg font-semibold animate-fade-in-up animate-delay-300"
                        >
                            Get Started
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
