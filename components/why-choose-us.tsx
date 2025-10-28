import { Award, Package, Users, Clock, DollarSign, CheckCircle, Info } from "lucide-react"

export default function WhyChooseUs() {
  const highlights = [
    {
      title: "Rent My Event Agency Near Me",
      content:
        "THE BEST Rent My Event COMPANY IN GURGAON — Rent My Event Services tailored to make your events reminisce. We assist you in orchestrating smooth and spectacular events with high‑standard rental equipment and expert event management.",
      icon: Info,
    },
    {
      title: "Transparent & Reputable",
      content:
        "We uphold absolute openness—no surprise charges, no unpleasant surprises—only evident, professional service for your events.",
      icon: CheckCircle,
    },
    {
      title: "Award‑Winning Solutions",
      content:
        "We are a group of event management and rental professionals, producing flawless events with a decade of experience. Reliable in Gurgaon for making every event extraordinary.",
      icon: Award,
    },
    {
      title: "Goal‑Oriented Execution",
      content:
        "Being a top event rental and management company in Gurgaon, we offer end‑to‑end event solutions. We don't promise overnight miracles — we deliver events that run like clockwork and leave a lasting impression.",
      icon: Clock,
    },
  ]

  // replaced benefits with provided content (formatted as card items)
  const benefits = [
    {
      icon: Users,
      title: "Your Event, Our Priority",
      description: "We make your event our priority — dedicated planning and execution focused on your objectives.",
    },
    {
      icon: Clock,
      title: "Easy Event Planning",
      description: "Easy event planning from conception to completion — clear timelines and coordinated delivery.",
    },
    {
      icon: DollarSign,
      title: "Competitive Packages",
      description: "Competitive rental packages to suit all budgets — transparent pricing and flexible options.",
    },
    {
      icon: Package,
      title: "High‑Quality Equipment",
      description: "High-quality selection of event equipment — premium AV, lighting and staging for memorable experiences.",
    },
    {
      icon: CheckCircle,
      title: "Professional On‑site Assistance",
      description: "Professional on‑site assistance & speedy setup — technicians who ensure flawless execution.",
    },
    {
      icon: Package,
      title: "Tailored Solutions",
      description: "Tailored solutions for corporate and social functions — custom packages to meet event goals.",
    },

    // "What You Gain with Our Services"
    // {
    //   icon: Users,
    //   title: "Save Time",
    //   description: "Gain time using a one‑stop event partner — planning, logistics and execution handled for you.",
    // },
    // {
    //   icon: CheckCircle,
    //   title: "Stress‑Free Coordination",
    //   description: "Eliminate stress with effortless coordination — single point of contact and proactive communication.",
    // },
    // {
    //   icon: Award,
    //   title: "Impress Guests",
    //   description: "Impress guests with world‑class AV & rental equipment — polished presentation and impactful visuals.",
    // },
    // {
    //   icon: Clock,
    //   title: "Peace of Mind",
    //   description: "Relish peace of mind knowing details are managed by professionals — reliable teams and tested processes.",
    // },

  ]

  return (
    <section className="section-diag section-diag--a py-16 md:py-24 relative">
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-5 w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB3D9] to-[#E6D5FF] opacity-15 blur-2xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#B3F0E8] to-[#FFB3D9] opacity-10 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "1.5s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="text-center mb-10 animate-fade-in-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#6B4E71]">
            <span className="text-[#6B4E71]">Why Choose </span>
            <span className="bg-gradient-to-r from-[#FFB3D9] via-[#E6D5FF] to-[#FF6B9D] bg-clip-text text-transparent">Rent My Event</span>
          </h2>
          <p className="text-[#6B4E71] max-w-2xl mx-auto animate-fade-in-up animate-delay-200 font-medium">
            <span className="text-[#FF6B9D] font-semibold">Services & management you can trust</span> — transparent pricing, award‑winning execution and goal‑oriented planning.
          </p>
        </header>

        {/* Highlight cards (marketing copy as cards) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {highlights.map((h, idx) => {
            const Icon = h.icon
            return (
              <article
                key={h.title}
                className="group bg-white border-2 border-pink-200 rounded-2xl p-6 card-hover-lift shadow-soft animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-none w-16 h-16 rounded-lg bg-gradient-to-br from-[#FFB3D9] to-[#E6D5FF] flex items-center justify-center text-[#FF6B9D] shadow-soft">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#6B4E71]">{h.title}</h3>
                    <p className="mt-2 text-sm text-[#7B5E81] leading-relaxed font-medium">{h.content}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Benefits grid (updated) */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="flex items-start gap-4 bg-white border border-pink-200 rounded-lg p-6 card-hover-lift shadow-soft animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex-none w-20 h-20 rounded-lg bg-gradient-to-br from-[#FFB3D9] to-[#E6D5FF] flex items-center justify-center shadow-soft">
                  <Icon className="w-10 h-10 text-[#FF6B9D]" />
                </div>
                <div>
                  <h4 className="text-md font-bold text-[#6B4E71]">{benefit.title}</h4>
                  <p className="text-sm text-[#7B5E81] mt-1 font-medium">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
