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
      <main className="min-h-screen bg-gray-50 text-gray-800">
        <PromoStrips />
        <Navbar />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white to-slate-50 pt-14 pb-20 md:pt-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#2cc16f] via-[#ff9700] to-[#dc5f5f]">
                About Rent My Event
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Over a decade of excellence in <span className="text-[#ff9700] font-semibold">event management and equipment rental</span> across Delhi NCR
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{ animation: `pop-in 0.3s ease ${idx * 0.05}s both` } as React.CSSProperties}
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#2cc16f] mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a1a1a]">
                Our <span className="bg-gradient-to-r from-[#2cc16f] to-[#ff9700] bg-clip-text text-transparent">Story</span>
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                What started as a small equipment rental business has grown into one of Delhi NCR's most trusted event management companies. Our journey is marked by countless successful events, satisfied clients, and a team passionate about creating memorable experiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we combine cutting-edge technology with creative expertise to deliver events that leave lasting impressions. From intimate gatherings to large-scale conferences, we're here to make your vision a reality.
              </p>
            </div>
            <div className="relative animate-fade-in-right">
              <img
                src="/professional-event-setup-with-modern-equipment.jpg"
                alt="Our team at work"
                className="rounded-xl shadow-xl border border-gray-200/60 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a1a1a]">
              <span className="bg-gradient-to-r from-[#2cc16f] via-[#ff9700] to-[#dc5f5f] bg-clip-text text-transparent">Our Values</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => {
                const Icon = value.icon
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 border border-gray-200/60 hover:shadow-lg transition-all duration-300"
                    style={{ animation: `scale-in 0.3s ease ${idx * 0.05}s both` } as React.CSSProperties}
                  >
                    <Icon className="w-10 h-10 text-[#2cc16f] mb-4" />
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white to-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a1a1a]">
              Ready to Create <span className="bg-gradient-to-r from-[#ff9700] to-[#dc5f5f] bg-clip-text text-transparent">Your Perfect Event</span>?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Let's work together to bring your vision to life. Contact us today for a consultation.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#2cc16f] to-[#ff9700] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
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
