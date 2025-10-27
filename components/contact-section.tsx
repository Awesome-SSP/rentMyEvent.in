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
    <section className="section-diag section-diag--a py-16 md:py-24" aria-label="Get in touch">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Addresses */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">GET IN TOUCH</h2>
            <p className="text-gray-600 mb-6">
              Send us a message or visit our offices — we cover Gurugram, Faridabad and Delhi.
            </p>

            <div className="space-y-4">
              {ADDRESSES.map((addr) => (
                <div key={addr.title} className="bg-white/6 dark:bg-black/14 backdrop-blur-sm p-4 rounded-lg border border-white/8">
                  <h3 className="font-semibold text-[#111827] dark:text-white">{addr.title}</h3>
                  <address className="not-italic text-sm text-gray-600 mt-1">
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
            <h3 className="text-lg font-semibold mb-2">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4 bg-white/6 dark:bg-black/14 backdrop-blur-sm p-6 rounded-lg border border-white/8">
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-200 bg-white/60 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5a3a7a]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-200 bg-white/60 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5a3a7a]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  required
                  rows={8}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-200 bg-white/60 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5a3a7a]"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-md bg-[#5a3a7a] px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send"}
                </button>

                {sent && <div className="text-sm text-green-700">Message sent — we will contact you soon.</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}