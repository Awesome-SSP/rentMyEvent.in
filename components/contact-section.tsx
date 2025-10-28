"use client"

import React, { useState } from "react"

const ADDRESSES = [
  {
    title: "Gurugram Address",
    lines: [
      "4th Floor, Iris Tech Park, 406 B, Badshahpur Sohna Rd Hwy, Sector 48",
      "Gurugram, Haryana 122018",
    ],
  },
  {
    title: "Faridabad Address",
    lines: ["44 foot road, Dheeraj Nagar near Monday Market", "Faridabad, Haryana 121003"],
  },
  {
    title: "Delhi Address",
    lines: ["202 2nd floor, Veer Sarwakar Block, Nirman Vihar", "Delhi 110092"],
  },
]

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Get in touch about event rentals & management",
    message:
      " Hi, I would like to inquire about your event management and equipment rental services. Please provide more details.",
  })
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: typeof form[K]) {
    setForm((s) => ({ ...s, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    try {
      // Replace with real API call if needed
      console.log("Contact form submit:", form)
      await new Promise((r) => setTimeout(r, 700))
      setSent(true)
      setForm({
        name: "",
        email: "",
        subject: form.subject,
        message: form.message,
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="relative py-16 md:py-32 bg-gradient-to-b from-white via-[#FEF9F3] to-[#FFE6F0]/15 overflow-hidden" aria-label="Get in touch">
      {/* Premium Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-40 w-96 h-96 bg-gradient-to-bl from-[#FFB3D9]/15 to-[#E6D5FF]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 left-40 w-80 h-80 bg-gradient-to-tr from-[#FF6B9D]/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-slide-up-blur">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-[#6B4E71]">Get In </span>
            <span className="bg-gradient-to-r from-[#FF6B9D] via-[#FFB3D9] to-[#E6D5FF] bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-[#8B6B8D] text-base md:text-lg font-bold max-w-2xl mx-auto animate-fade-in-up animate-delay-100">
            We're here to help! <span className="text-[#FF6B9D]">Contact us for event consultations.</span>
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-[#FFB3D9] to-[#E6D5FF] rounded-full mx-auto mt-4 animate-fade-in-up animate-delay-200"></div>
        </div>

        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-start">
          {/* Addresses Section */}
          <div className="animate-slide-in-left" style={{ animationDuration: "0.8s" }}>
            <h3 className="text-2xl md:text-3xl font-black text-[#6B4E71] mb-8">Our Offices</h3>

            <div className="space-y-6">
              {ADDRESSES.map((addr, idx) => (
                <div
                  key={addr.title}
                  className="group bg-gradient-to-br from-white to-[#FEF9F3] border-2 border-[#FFB3D9] p-6 md:p-8 rounded-2xl shadow-premium hover:shadow-premium-lg transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 animate-slide-up-blur"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#FFB3D9] to-[#E6D5FF] rounded-lg flex items-center justify-center shadow-premium group-hover:scale-110 transition-transform duration-500">
                      <span className="text-lg">📍</span>
                    </div>
                    <h4 className="text-lg md:text-xl font-black text-[#FF6B9D] group-hover:text-[#FFB3D9] transition-colors duration-300">
                      {addr.title}
                    </h4>
                  </div>
                  <address className="not-italic text-sm md:text-base text-[#8B6B8D] leading-relaxed font-bold space-y-1">
                    {addr.lines.map((l, i) => (
                      <div key={i}>{l}</div>
                    ))}
                  </address>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right" style={{ animationDuration: "0.8s" }}>
            <div className="bg-gradient-to-br from-white to-[#FEF9F3] border-2 border-[#FFB3D9] p-8 md:p-10 rounded-2xl shadow-premium-lg">
              <h3 className="text-2xl md:text-3xl font-black text-[#6B4E71] mb-8">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="animate-fade-in-up animate-delay-200">
                  <label className="block text-sm md:text-base font-black text-[#6B4E71] mb-2">Your Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Enter your full name"
                    className="input-pro w-full px-4 py-3 md:py-4 rounded-lg text-base font-bold focus:ring-2 focus:ring-[#FF6B9D] focus:ring-offset-2"
                  />
                </div>

                {/* Email Field */}
                <div className="animate-fade-in-up animate-delay-300">
                  <label className="block text-sm md:text-base font-black text-[#6B4E71] mb-2">Email Address</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="Enter your email"
                    className="input-pro w-full px-4 py-3 md:py-4 rounded-lg text-base font-bold focus:ring-2 focus:ring-[#FF6B9D] focus:ring-offset-2"
                  />
                </div>

                {/* Message Field */}
                <div className="animate-fade-in-up animate-delay-400">
                  <label className="block text-sm md:text-base font-black text-[#6B4E71] mb-2">Your Message</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell us about your event requirements..."
                    className="input-pro w-full px-4 py-3 md:py-4 rounded-lg text-base font-bold resize-none focus:ring-2 focus:ring-[#FF6B9D] focus:ring-offset-2"
                  />
                </div>

                {/* Submit Button & Status */}
                <div className="flex items-center gap-4 animate-fade-in-up animate-delay-500">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-pro px-8 md:px-10 py-3 md:py-4 rounded-lg font-black text-base md:text-lg shadow-premium-lg hover:shadow-premium-hover disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 transition-all duration-300"
                  >
                    {submitting ? "🚀 Sending..." : "📧 Send Message"}
                  </button>

                  {sent && (
                    <div className="text-base md:text-lg font-black text-[#FF6B9D] flex items-center gap-2 animate-slide-down-blur">
                      ✅ Message sent!
                    </div>
                  )}
                </div>

                {/* Help Text */}
                <p className="text-xs md:text-sm text-[#8B6B8D] font-bold">
                  💡 We'll get back to you within 24 hours during business hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}