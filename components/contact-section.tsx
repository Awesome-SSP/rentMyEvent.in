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
  const [touched, setTouched] = useState<{ [k: string]: boolean }>({})

  const errors = {
    name: form.name.trim().length < 2 ? "Please enter your full name." : "",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? "" : "Enter a valid email address.",
    message: form.message.trim().length < 10 ? "Please provide a few details about your event." : "",
  }

  function update<K extends keyof typeof form>(key: K, value: typeof form[K]) {
    setForm((s) => ({ ...s, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // mark all as touched to show errors if any
    setTouched({ name: true, email: true, message: true })
    if (errors.name || errors.email || errors.message) return
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
    <section className="relative py-20 md:py-40 bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#2D1B4E] overflow-hidden" aria-label="Get in touch">
      {/* subtle background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-[#6366F1]/15 to-[#8B5CF6]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-24 w-[28rem] h-[28rem] bg-gradient-to-tr from-[#EC4899]/12 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-start">
          {/* Addresses */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              <span className="text-white">Get in </span>
              <span className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Send us a message or visit our offices — we cover
              <span className="text-[#8B5CF6] font-semibold"> Gurugram, Faridabad and Delhi</span>.
            </p>

            <div className="space-y-4">
              {ADDRESSES.map((addr) => (
                <div key={addr.title} className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10">
                  <h3 className="font-semibold text-white">{addr.title}</h3>
                  <address className="not-italic text-sm text-gray-300 mt-1">
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
            <h3 className="text-xl font-black mb-3 text-white">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5 bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300">Your Name</label>
                <input
                  id="contact-name"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  onBlur={() => setTouched((s) => ({ ...s, name: true }))}
                  aria-invalid={!!errors.name && touched.name}
                  aria-describedby={!!errors.name && touched.name ? "error-name" : undefined}
                  className="mt-1 block w-full rounded-lg border border-white/10 bg-white/10 text-white placeholder:text-[#94A3B8] px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                  placeholder="John Doe"
                />
                {touched.name && errors.name && (
                  <p id="error-name" className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  id="contact-email"
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  onBlur={() => setTouched((s) => ({ ...s, email: true }))}
                  aria-invalid={!!errors.email && touched.email}
                  aria-describedby={!!errors.email && touched.email ? "error-email" : undefined}
                  className="mt-1 block w-full rounded-lg border border-white/10 bg-white/10 text-white placeholder:text-[#94A3B8] px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                  placeholder="you@example.com"
                />
                {touched.email && errors.email && (
                  <p id="error-email" className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={8}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  onBlur={() => setTouched((s) => ({ ...s, message: true }))}
                  aria-invalid={!!errors.message && touched.message}
                  aria-describedby={!!errors.message && touched.message ? "error-message" : undefined}
                  className="mt-1 block w-full rounded-lg border border-white/10 bg-white/10 text-white placeholder:text-[#94A3B8] px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                  placeholder="Tell us about your event..."
                />
                {touched.message && errors.message && (
                  <p id="error-message" className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] px-5 py-2.5 text-sm font-bold text-white disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#6366F1]/30 transition"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>

                {sent && <div className="text-sm text-emerald-400">Message sent — we will contact you soon.</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}