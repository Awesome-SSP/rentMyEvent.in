import Navbar from "@/components/navbar"
import PromoStrips from "@/components/promo-strips"
import HeroSection from "@/components/hero-section"
import BrandsCarousel from "@/components/brands-carousel"
import WelcomeSection from "@/components/welcome-section"
import SearchResultsSection from "@/components/search-results-section"
import ServicesSection from "@/components/services-section"
import ServicesGrid from "@/components/services-grid"
import FAQSection from "@/components/faq-section"
import { FAQS } from "@/lib/faq-data"
import WhyChooseUs from "@/components/why-choose-us"
import Footer from "@/components/footer"
import ApproachSection from "@/components/approach-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <>
      {/* FAQPage JSON-LD for AEO (Answer Engine Optimization) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
              },
            })),
          }),
        }}
      />
      <main className="min-h-screen">
        <PromoStrips />
        <Navbar />
        <HeroSection />
        <BrandsCarousel />
        <WelcomeSection />
        <ServicesGrid />
        <ServicesSection />
        <SearchResultsSection />
        <FAQSection />
        <WhyChooseUs />
      </main>

      <ApproachSection />
      <ContactSection />
      <Footer />
    </>
  )
}
