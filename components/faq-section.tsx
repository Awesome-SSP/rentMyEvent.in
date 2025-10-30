"use client"

import { useState, useRef, useEffect, Suspense } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

// Lazy loading components for performance
const LazyFloatingDecoration = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return isVisible ? <>{children}</> : null
}

const LazyFAQItem = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<div className="h-16 animate-pulse bg-gray-200/10 rounded-2xl" />}>{children}</Suspense>
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1)
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

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
    <section
      ref={ref}
      className="relative py-20 md:py-40 bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#2D1B4E] overflow-hidden"
    >
      {/* Background accents kept minimal for pro theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-br from-[#6366F1]/12 to-[#8B5CF6]/6 rounded-full blur-3xl animate-service-card-float"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-bl from-[#EC4899]/10 to-transparent rounded-full blur-3xl animate-service-card-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 3D Header */}
        <div className="text-center mb-20 relative">
          {/* Title decorations removed for a cleaner look */}

          <div className="inline-block mb-8 relative">
            <span className="px-6 py-3 bg-gradient-to-r from-[#6366F1]/20 to-[#8B5CF6]/20 border border-[#6366F1]/30 rounded-full text-sm font-bold text-[#6366F1] backdrop-blur-xl">Frequently Asked Questions</span>

            {/* Floating particles around badge */}
            <div className="absolute -top-2 -left-2 w-2 h-2 bg-[#6366F1] rounded-full animate-ping-slow"></div>
            <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-[#EC4899] rounded-full animate-ping-slow" style={{ animationDelay: "0.5s" }}></div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 relative z-10">
            <span className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent animate-gradient-x">
              Get Your Answers
            </span>
          </h2>

          {/* 3D Text Shadow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent blur-sm opacity-30 -z-10">
            Get Your Answers
          </div>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Find quick answers to common questions about our <span className="text-[#6366F1] font-bold">premium event rental services</span>
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-200/60 rounded-lg overflow-hidden hover:border-[#5a3a7a]/30 transition-colors animate-fade-in-up animate-delay-${(index + 1) * 100}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50/50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-left text-sm md:text-base">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#5a3a7a] transition-transform flex-shrink-0 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-200/60 animate-fade-in-down">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed animate-fade-in-up animate-delay-100">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
