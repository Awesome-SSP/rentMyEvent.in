"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1)

  const faqs = [
    {
      question: "What types of equipment do you offer for rent?",
      answer:
        "We offer a comprehensive range of professional event rental equipment including LED walls, projectors, PA systems, conference systems, lighting equipment, and audio-visual solutions for all types of events.",
    },
    {
      question: "How far in advance should I book equipment?",
      answer:
        "We recommend booking at least 2–3 weeks in advance for standard events. For peak seasons or large-scale events, book as early as possible to ensure availability. We can often accommodate last-minute requests subject to stock.",
    },
    {
      question: "Do you provide technical support during events?",
      answer:
        "Yes. Our trained technicians provide on-site setup, testing and live support throughout your event to ensure everything runs smoothly.",
    },
    {
      question: "What is your delivery and setup policy?",
      answer:
        "We provide delivery and professional setup within Delhi NCR. Setup times depend on equipment and venue — we coordinate schedules to minimise disruption and complete testing before the event starts.",
    },
    {
      question: "Can you customize packages for specific events?",
      answer:
        "Absolutely. We create tailored rental packages based on event type, audience size, venue constraints and budget. Contact us for a custom quote and site consultation.",
    },
    {
      question: "What are your payment terms and methods?",
      answer:
        "We accept bank transfers, UPI and major cards. A deposit is typically required to confirm a booking, with the balance due according to the contract (usually before or on delivery).",
    },
    {
      question: "What is your cancellation and refund policy?",
      answer:
        "Cancellation terms vary by booking size and notice period. Small-event cancellations generally incur a modest fee if made within 72 hours; larger events require earlier notice. Refunds for deposits follow the contract terms.",
    },
    {
      question: "Do you offer insurance or damage waivers?",
      answer:
        "Clients are responsible for rented equipment during their event. We offer optional damage waivers and can advise on insurance options for high-value equipment — discuss this when booking.",
    },
    {
      question: "Are the systems compatible with my existing equipment?",
      answer:
        "Our equipment is industry-standard and designed to interoperate with common systems. Share your setup details and we’ll confirm compatibility or provide adapters as needed.",
    },
    {
      question: "How long does setup and teardown take?",
      answer:
        "Setup and teardown times depend on the scope; small setups may take 30–90 minutes, while large productions can take several hours. We include realistic timing estimates in each quote.",
    },
    {
      question: "Do you handle permits and venue approvals?",
      answer:
        "We advise clients on permit requirements and can coordinate with venues for technical approvals. For major outdoor installations, we recommend starting the permit process early.",
    },
    {
      question: "What safety measures do you follow on-site?",
      answer:
        "Safety is a priority: our technicians follow industry best practices, use certified rigging and cabling, and conduct pre-event safety checks. We also provide guidance on crowd and equipment safety.",
    },
  ]

  return (
    <section className="diagonal-bg-dark py-16 md:py-28 relative">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-5 w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB3D9] to-[#E6D5FF] opacity-15 blur-2xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#B3F0E8] to-[#FFB3D9] opacity-10 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#6B4E71] animate-fade-in-down">
          <span className="text-[#FF6B9D]">Frequently </span>
          <span className="text-[#FFB3D9]">Asked </span>
          <span className="bg-gradient-to-r from-[#FF6B9D] to-[#E6D5FF] bg-clip-text text-transparent">Questions</span>
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-pink-200 rounded-lg overflow-hidden shadow-soft animate-fade-in-up animate-delay-${(index + 1) * 100} bg-white hover:shadow-soft-hover transition-all`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-pink-50 transition-colors"
              >
                <span className="font-semibold text-[#6B4E71] text-left text-sm md:text-base">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#FF6B9D] transition-transform flex-shrink-0 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-pink-50 border-t border-pink-200 animate-fade-in-down">
                  <p className="text-[#6B4E71] text-sm md:text-base leading-relaxed animate-fade-in-up animate-delay-100 font-medium">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
