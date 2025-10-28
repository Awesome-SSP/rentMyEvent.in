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
    <section className="relative py-16 md:py-32 bg-gradient-to-b from-white via-[#FEF9F3] to-white overflow-hidden">
      {/* Premium Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-gradient-to-br from-[#FFB3D9]/20 to-[#E6D5FF]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-gradient-to-bl from-[#E6D5FF]/15 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-b from-[#FFB3D9]/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Section Header */}
        <header className="text-center mb-16 animate-slide-up-blur">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="text-[#6B4E71]">Why Choose </span>
            <span className="bg-gradient-to-r from-[#FF6B9D] via-[#FFB3D9] to-[#E6D5FF] bg-clip-text text-transparent">Rent My Event</span>
          </h2>
          <div className="h-2 w-40 bg-gradient-to-r from-[#FF6B9D] to-[#FFB3D9] rounded-full mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-[#6B4E71] max-w-3xl mx-auto font-bold leading-relaxed">
            <span className="text-[#FF6B9D]">Services & management you can trust</span> — transparent pricing, award-winning execution and goal-oriented planning.
          </p>
        </header>

        {/* Premium Highlight Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {highlights.map((h, idx) => {
            const Icon = h.icon
            return (
              <article
                key={h.title}
                className="group relative bg-gradient-to-br from-white to-[#FEF9F3] border-2 border-[#FFB3D9] rounded-2xl p-8 shadow-premium hover:shadow-premium-lg transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 animate-slide-up-blur"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Hover Glow */}
                <div className="absolute -inset-px bg-gradient-to-br from-[#FF6B9D]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative flex items-start gap-4">
                  {/* Icon Background with Glow */}
                  <div className="flex-none w-16 h-16 rounded-xl bg-gradient-to-br from-[#FFB3D9] to-[#E6D5FF] flex items-center justify-center text-white shadow-premium group-hover:shadow-premium-lg transform group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#6B4E71]">{h.title}</h3>
                    <p className="mt-2 text-sm text-[#7B5E81] leading-relaxed font-bold">{h.content}</p>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B9D] to-[#FFB3D9] rounded-b-2xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </article>
            )
          })}
        </div>

        {/* Premium Benefits Grid */}
        <div>
          <h3 className="text-4xl md:text-5xl font-black text-center text-[#6B4E71] mb-12">
            What You Get <span className="bg-gradient-to-r from-[#FF6B9D] to-[#FFB3D9] bg-clip-text text-transparent">With Us</span>
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="group relative bg-gradient-to-br from-white to-[#FEF9F3] border-2 border-[#FFB3D9] rounded-2xl p-8 shadow-premium hover:shadow-premium-lg transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 animate-slide-up-blur"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Hover Glow */}
                  <div className="absolute -inset-px bg-gradient-to-br from-[#FF6B9D]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="relative space-y-4">
                    {/* Icon with Gradient Background */}
                    <div className="flex items-center gap-4">
                      <div className="flex-none w-14 h-14 rounded-lg bg-gradient-to-br from-[#FFB3D9] to-[#E6D5FF] flex items-center justify-center shadow-premium group-hover:shadow-premium-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-lg font-black text-[#6B4E71]">{benefit.title}</h4>
                    </div>

                    {/* Description */}
                    <p className="text-[#7B5E81] leading-relaxed font-bold text-base">{benefit.description}</p>

                    {/* Check Mark */}
                    <div className="flex items-center gap-2 pt-2">
                      <span className="text-[#FF6B9D] text-xl">✓</span>
                      <span className="text-sm font-black text-[#6B4E71]">Guaranteed Quality</span>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B9D] to-[#FFB3D9] rounded-b-2xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in-up animate-delay-500">
          <button className="btn-pro px-10 py-5 rounded-lg font-black text-lg shadow-premium-lg hover:shadow-premium-hover transform hover:-translate-y-1 transition-all duration-300">
            Start Your Event Today 🎉
          </button>
        </div>
      </div>
    </section>
  )
}
