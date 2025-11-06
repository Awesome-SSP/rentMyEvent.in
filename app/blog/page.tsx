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
                <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 py-20 md:py-32 overflow-hidden relative">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20.5H20z'/%3E%3C/g%3E%3C/svg%3E')" }}></div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-bounce"></div>
                        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center">
                            <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-lg mb-8 animate-bounce">
                                📚 Expert Knowledge Hub
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                                <span className="text-white">Event Planning</span>
                                <br />
                                <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-pulse">
                                    Insights & Tips
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-4xl mx-auto leading-relaxed">
                                <span className="font-semibold text-yellow-300">Expert articles and guides</span> to help you plan
                                <span className="font-semibold text-pink-300"> amazing events</span> that create lasting memories
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
                                    <span className="text-cyan-300 font-bold text-lg">📖 Latest Articles</span>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
                                    <span className="text-purple-300 font-bold text-lg">💡 Pro Tips</span>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
                                    <span className="text-pink-300 font-bold text-lg">🎯 Best Practices</span>
                                </div>
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

                {/* Blog Posts Grid */}
                <section className="section-diag section-diag--a py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, idx) => (
                                <article
                                    key={post.id}
                                    className="bg-white rounded-lg overflow-hidden border border-gray-200/60 hover:shadow-xl transition-all duration-300 animate-scale-in flex flex-col"
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
                                            <span className="bg-[#ff9700] text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                            {post.excerpt}
                                        </p>

                                        {/* Meta */}
                                        <div className="mt-auto pt-4 border-t border-gray-100">
                                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
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
                                                className="inline-flex items-center gap-2 text-[#2cc16f] font-semibold hover:text-[#ff9700] transition-colors"
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">
                            Stay Updated with Our <span className="bg-gradient-to-r from-[#2cc16f] to-[#ff9700] bg-clip-text text-transparent">Latest Insights</span>
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Subscribe to our newsletter to receive expert tips, industry trends, and exclusive event management insights.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2cc16f] transition-colors"
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#2cc16f] to-[#ff9700] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="diagonal-bg-dark py-16 md:py-24">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a1a1a]">
                            Ready to Plan Your <span className="bg-gradient-to-r from-[#ff9700] to-[#dc5f5f] bg-clip-text text-transparent">Next Event</span>?
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            Let our team of experts help you create an unforgettable experience.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-gradient-to-r from-[#2cc16f] to-[#ff9700] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
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
