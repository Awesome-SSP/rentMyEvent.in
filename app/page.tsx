import Navbar from "@/components/navbar"
import PromoStrips from "@/components/promo-strips"
import HeroSection from "@/components/hero-section"
import BrandsCarousel from "@/components/brands-carousel"
import WelcomeSection from "@/components/welcome-section"
import SearchResultsSection from "@/components/search-results-section"
import ServicesSection from "@/components/services-section"
import ServicesGrid from "@/components/services-grid"
import FAQSection from "@/components/faq-section"
import WhyChooseUs from "@/components/why-choose-us"
import FooterPremium from "@/components/footer-premium"
import ApproachSection from "@/components/approach-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <>
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
      <FooterPremium />
    </>
  )
}
