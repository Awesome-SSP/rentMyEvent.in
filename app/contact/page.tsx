"use client"

import Navbar from "@/components/navbar"
import PromoStrips from "@/components/promo-strips"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "Event Inquiry",
        message: "",
    })
    const [submitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const offices = [
        {
            title: "Gurugram Office",
            address: "4th Floor, Iris Tech Park, 406 B, Badshahpur Sohna Rd",
            city: "Gurugram, Haryana 122018",
            phone: "+91-XXXXX-XXXXX",
            email: "gurugram@rentmyevent.com",
        },
        {
            title: "Faridabad Office",
            address: "44 foot road, Dheeraj Nagar near Monday Market",
            city: "Faridabad, Haryana 121003",
            phone: "+91-XXXXX-XXXXX",
            email: "faridabad@rentmyevent.com",
        },
        {
            title: "Delhi Office",
            address: "202 2nd floor, Veer Sarwakar Block, Nirman Vihar",
            city: "Delhi 110092",
            phone: "+91-XXXXX-XXXXX",
            email: "delhi@rentmyevent.com",
        },
    ]

    function updateForm(key: string, value: string) {
        setForm((s) => ({ ...s, [key]: value }))
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setSubmitting(true)
        try {
            // Simulate form submission
            await new Promise((resolve) => setTimeout(resolve, 1000))
            setSubmitted(true)
            setForm({ name: "", email: "", phone: "", subject: "Event Inquiry", message: "" })
            setTimeout(() => setSubmitted(false), 5000)
        } catch (error) {
            console.error("Error submitting form:", error)
        } finally {
            setSubmitting(false)
        }
    }

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
                                <span className="text-[#2cc16f]">Get in </span>
                                <span className="bg-gradient-to-r from-[#ff9700] to-[#dc5f5f] bg-clip-text text-transparent">Touch</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
                                We'd love to hear about your event. Reach out to us and let's create something <span className="text-[#2cc16f] font-semibold">amazing together</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Info Cards */}
                <section className="section-diag section-diag--a py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-white rounded-lg border border-gray-200/60 p-8 hover:shadow-lg transition-all duration-300 animate-scale-in">
                                <Phone className="w-12 h-12 text-[#2cc16f] mb-4" />
                                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Call Us</h3>
                                <p className="text-gray-600 mb-2">+91-XXXXX-XXXXX</p>
                                <p className="text-sm text-gray-500">Available 24/7 for event inquiries</p>
                            </div>

                            <div
                                className="bg-white rounded-lg border border-gray-200/60 p-8 hover:shadow-lg transition-all duration-300 animate-scale-in"
                                style={{ animationDelay: "0.1s" }}
                            >
                                <Mail className="w-12 h-12 text-[#ff9700] mb-4" />
                                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Email Us</h3>
                                <p className="text-gray-600 mb-2">info@rentmyevent.com</p>
                                <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                            </div>

                            <div
                                className="bg-white rounded-lg border border-gray-200/60 p-8 hover:shadow-lg transition-all duration-300 animate-scale-in"
                                style={{ animationDelay: "0.2s" }}
                            >
                                <Clock className="w-12 h-12 text-[#dc5f5f] mb-4" />
                                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Business Hours</h3>
                                <p className="text-gray-600 mb-1">Mon - Fri: 9 AM - 6 PM</p>
                                <p className="text-gray-600">Sat: 10 AM - 4 PM</p>
                            </div>
                        </div>

                        {/* Office Locations */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {offices.map((office, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-lg border border-gray-200/60 p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                                    style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
                                >
                                    <MapPin className="w-8 h-8 text-[#2cc16f] mb-3" />
                                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{office.title}</h3>
                                    <p className="text-sm text-gray-600 mb-1">{office.address}</p>
                                    <p className="text-sm text-gray-600 mb-4">{office.city}</p>
                                    <div className="border-t pt-4">
                                        <p className="text-sm text-gray-700 mb-1">
                                            <span className="font-semibold">Phone:</span> {office.phone}
                                        </p>
                                        <p className="text-sm text-gray-700">
                                            <span className="font-semibold">Email:</span> {office.email}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="section-diag section-diag--b py-16 md:py-24">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1a1a1a] animate-fade-in-down">
                            Send Us a <span className="bg-gradient-to-r from-[#2cc16f] to-[#ff9700] bg-clip-text text-transparent">Message</span>
                        </h2>
                        <p className="text-center text-gray-600 mb-12 animate-fade-in-up animate-delay-200">
                            Tell us about your event and we'll get back to you with a custom proposal within 24 hours.
                        </p>

                        {submitted && (
                            <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800 animate-fade-in-up">
                                ✓ Thank you! We've received your message. We'll contact you soon.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up animate-delay-300">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        value={form.name}
                                        onChange={(e) => updateForm("name", e.target.value)}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2cc16f] transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => updateForm("email", e.target.value)}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2cc16f] transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Phone</label>
                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={(e) => updateForm("phone", e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2cc16f] transition-colors"
                                    placeholder="+91-XXXXX-XXXXX"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Subject</label>
                                <select
                                    value={form.subject}
                                    onChange={(e) => updateForm("subject", e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2cc16f] transition-colors"
                                >
                                    <option>Equipment Rental</option>
                                    <option>Event Planning</option>
                                    <option>On-Site Management</option>
                                    <option>Custom Package</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Message</label>
                                <textarea
                                    value={form.message}
                                    onChange={(e) => updateForm("message", e.target.value)}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2cc16f] transition-colors resize-none"
                                    placeholder="Tell us about your event..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full bg-gradient-to-r from-[#2cc16f] to-[#ff9700] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                            >
                                {submitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
