"use client";

import Navbar from "@/components/navbar";
import PromoStrips from "@/components/promo-strips";
import Footer from "@/components/footer";
import SectionHeader from "@/components/ui/section-header";
import { Award, Users, Clock, Zap } from "lucide-react";

// Try to use your own SVGs/illustration URLs for backgrounds and sections
const HeroIllustration = () => (
    <img
        src="/illustrations/event-hero.svg"
        alt="Events Illustration"
        className="w-full max-w-xl mx-auto animate-fade-in-up"
        style={{ marginTop: "-4rem" }}
    />
);

const SectionWave = () => (
    <svg
        viewBox="0 0 1440 100"
        className="block w-full h-16"
        preserveAspectRatio="none"
    >
        <path
            fill="#eaf7f0"
            fillOpacity="1"
            d="M0,32L60,42C120,53,240,75,360,85.3C480,96,600,96,720,85.3C840,75,960,53,1080,42.7C1200,32,1320,32,1380,32L1440,32L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
        />
    </svg>
);

export default function About() {
    const stats = [
        { value: "10+", label: "Years of Experience" },
        { value: "500+", label: "Events Organized" },
        { value: "100+", label: "Team Members" },
        { value: "24/7", label: "Support Available" },
    ];

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
    ];

    return (
        <>
            <main className="min-h-screen bg-gradient-to-br from-[#eaf7f0] via-white to-[#fff5ea] relative">
                <PromoStrips />
                <Navbar />

                {/* Hero Section with Illustration */}
                <section className="pt-20 pb-10 relative text-center">
                    <div className="absolute inset-0 pointer-events-none z-0">
                        {/* Use a decorative SVG or blob */}
                        <img src="/decor/hero-bg-blob.svg" alt="" className="w-full h-full object-cover mix-blend-soft-light" />
                    </div>
                    <div className="relative max-w-7xl mx-auto px-4 z-10">
                        <SectionHeader
                            title="About"
                            highlight="Rent My Event"
                            subtitle="Over a decade of excellence in event management and equipment rental across Delhi NCR"
                            onDark
                            className="text-center animate-fade-in-up"
                        />
                        <HeroIllustration />
                    </div>
                    <SectionWave />
                </section>

                {/* Stats Section with Cards */}
                <section className="pb-16">
                    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 relative">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-50"
                                style={{ animationDelay: `${idx * 0.08 + 0.2}s` }}
                            >
                                <div className="text-4xl font-bold text-[#2cc16f] mb-2">{stat.value}</div>
                                <div className="text-base font-medium text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Our Story Section with Illustration */}
                <section className="bg-gradient-to-br from-[#fff5ea] via-[#eaf7f0] to-white py-20 relative overflow-x-hidden">
                    <div className="absolute left-0 top-0 w-1/2 h-full -z-10">
                        <img src="/illustrations/story-blob.svg" alt="" className="object-cover w-full h-full" />
                    </div>
                    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a1a1a]">
                                Our <span className="bg-gradient-to-r from-[#2cc16f] to-[#ff9700] bg-clip-text text-transparent">Story</span>
                            </h2>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Started from a small rental, now a trusted leader. Our team crafts meaningful events for every scale in Delhi NCR.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                We blend technology, creativity, and passion to deliver events that spark lasting memories. Let us turn your ideas into experiences.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="/illustrations/team-activity.svg"
                                alt="Team activity"
                                className="rounded-xl shadow-xl bg-white border border-gray-100 w-full h-auto max-w-md"
                            />
                        </div>
                    </div>
                </section>

                {/* Values Section with icons */}
                <section className="py-20 bg-white relative">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#171717]">
                            <span className="bg-gradient-to-r from-[#2cc16f] via-[#ff9700] to-[#dc5f5f] bg-clip-text text-transparent">Our Values</span>
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                            {values.map((value, idx) => {
                                const Icon = value.icon;
                                return (
                                    <div key={idx} className="bg-gradient-to-br from-white via-[#eaf7f0] to-[#fff5ea] rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center">
                                        <Icon className="w-14 h-14 text-[#2cc16f] mb-6" />
                                        <h3 className="text-lg font-bold text-[#171717] mb-2">{value.title}</h3>
                                        <p className="text-gray-600 text-center text-sm">{value.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA Section with Illustration */}
                <section className="pt-20 pb-16 bg-gradient-to-br from-[#eaf7f0] via-white to-[#fff5ea] text-center relative">
                    <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
                        <img src="/illustrations/contact-cta.svg" alt="Contact event team illustration" className="w-64 mb-8" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#ff9700] to-[#dc5f5f] bg-clip-text text-transparent">
                            Ready to Create Your Perfect Event?
                        </h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Let's work together to bring your vision to life. Contact us today for a consultation.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-gradient-to-r from-[#2cc16f] to-[#ff9700] text-white px-8 py-3 rounded-lg font-semibold shadow hover:shadow-lg transition-all duration-300"
                        >
                            Get in Touch
                        </a>
                    </div>
                    <SectionWave />
                </section>
            </main>
            <Footer />
        </>
    );
}
