"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FAQS } from "@/lib/faq-data"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section className="diagonal-bg-dark py-16 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#1a1a1a] animate-fade-in-down">
          <span className="text-[#2cc16f]">Frequently </span>
          <span className="text-[#ff9700]">Asked </span>
          <span className="bg-gradient-to-r from-[#ff9700] to-[#dc5f5f] bg-clip-text text-transparent">Questions</span>
        </h2>

        <div className="space-y-3">
          {FAQS.map((faq, index) => (
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
