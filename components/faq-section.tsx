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
    <section className="relative py-16 md:py-32 bg-gradient-to-b from-white via-[#FEF9F3] to-[#FFE6F0]/10 overflow-hidden">
      {/* Premium Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-br from-[#E6D5FF]/15 to-[#FFB3D9]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 right-20 w-96 h-96 bg-gradient-to-bl from-[#FFB3D9]/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-slide-up-blur">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-[#6B4E71]">Frequently </span>
            <span className="bg-gradient-to-r from-[#FF6B9D] via-[#FFB3D9] to-[#E6D5FF] bg-clip-text text-transparent">Asked Questions</span>
          </h2>
          <p className="text-[#8B6B8D] text-base md:text-lg font-bold max-w-2xl mx-auto animate-fade-in-up animate-delay-100">
            Get answers to common questions about our <span className="text-[#FF6B9D]">premium event rental services</span>
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-[#FFB3D9] to-[#E6D5FF] rounded-full mx-auto mt-4 animate-fade-in-up animate-delay-200"></div>
        </div>

        {/* Premium FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group border-2 border-[#FFB3D9] rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-lg bg-gradient-to-br from-white to-[#FEF9F3] transition-all duration-500 animate-slide-up-blur"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Question Button */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between bg-gradient-to-r from-white to-[#FEF9F3] hover:from-[#FFE6F0] hover:to-[#FEF9F3] transition-all duration-300 group-hover:pl-10"
              >
                <span className="font-black text-[#6B4E71] text-left text-base md:text-lg group-hover:text-[#FF6B9D] transition-colors duration-300">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#FF6B9D] transition-all flex-shrink-0 duration-500 group-hover:scale-125 ${openIndex === index ? "rotate-180 text-[#FF6B9D]" : ""
                    }`}
                />
              </button>

              {/* Answer Content - Premium Slide Down Animation */}
              {openIndex === index && (
                <div className="px-6 md:px-8 py-6 md:py-8 bg-gradient-to-r from-[#FFE6F0] to-[#FEF9F3] border-t-2 border-[#FFB3D9] animate-slide-down-blur">
                  <p className="text-[#6B4E71] text-base md:text-lg leading-relaxed font-bold">
                    {faq.answer}
                  </p>

                  {/* Accent Bottom Line */}
                  <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[#FF6B9D] to-[#FFB3D9] rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 p-8 md:p-12 bg-gradient-to-br from-[#FFB3D9]/10 to-[#E6D5FF]/10 border-2 border-[#FFB3D9] rounded-2xl text-center animate-fade-in-up animate-delay-400">
          <h3 className="text-2xl md:text-3xl font-black text-[#6B4E71] mb-4">
            Still have questions?
          </h3>
          <p className="text-[#8B6B8D] text-base md:text-lg font-bold mb-6">
            Our team is ready to help! <span className="text-[#FF6B9D]">Contact us for personalized support.</span>
          </p>
          <button className="btn-pro px-10 py-4 rounded-lg font-black text-lg shadow-premium-lg hover:shadow-premium-hover transform hover:-translate-y-1 transition-all duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}
