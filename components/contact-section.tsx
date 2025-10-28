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
    <section className="section-diag section-diag--a py-16 md:py-24 relative" aria-label="Get in touch">
      {/* Floating decorative elements */}
      <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB3D9] to-[#E6D5FF] opacity-15 blur-2xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-20 left-5 w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#B3F0E8] opacity-10 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "1.5s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Addresses */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 animate-fade-in-down">
              <span className="text-[#FF6B9D]">GET IN </span>
              <span className="bg-gradient-to-r from-[#FFB3D9] to-[#E6D5FF] bg-clip-text text-transparent">TOUCH</span>
            </h2>
            <p className="text-[#6B4E71] mb-6 animate-fade-in-up animate-delay-200 font-medium">
              Send us a message or visit our offices — we cover <span className="text-[#FF6B9D] font-semibold">Gurugram, Faridabad and Delhi</span>.
            </p>

            <div className="space-y-4">
              {ADDRESSES.map((addr) => (
                <div key={addr.title} className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-pink-200 hover:bg-white/90 transition-all">
                  <h3 className="font-semibold text-[#6B4E71]">{addr.title}</h3>
                  <address className="not-italic text-sm text-[#8B6B8D] mt-1">
                    {addr.lines.map((l, i) => (
                      <div key={i}>{l}</div>
                    ))}
                  </address>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#6B4E71]">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4 bg-white/95 p-6 rounded-lg border border-pink-200">
              <div>
                <label className="block text-sm font-medium text-[#6B4E71]">Your Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="input-premium mt-1 block w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#6B4E71]">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="input-premium mt-1 block w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#6B4E71]">Message</label>
                <textarea
                  required
                  rows={8}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="input-premium mt-1 block w-full"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-premium px-4 py-2 text-sm font-semibold disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send"}
                </button>

                {sent && <div className="text-sm text-[#FF6B9D] font-medium">Message sent — we will contact you soon.</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}