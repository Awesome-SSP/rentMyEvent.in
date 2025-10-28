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
    <section className="section-diag section-diag--a py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#1a1a1a] animate-fade-in-down">
            <span className="text-[#1a1a1a]">Why Choose </span>
            <span className="bg-gradient-to-r from-[#2cc16f] via-[#ff9700] to-[#dc5f5f] bg-clip-text text-transparent">Rent My Event</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            <span className="text-[#ff9700] font-semibold">Services & management you can trust</span> — transparent pricing, award‑winning execution and goal‑oriented planning.
          </p>
        </header>

        {/* Highlight cards (marketing copy as cards) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {highlights.map((h) => {
            const Icon = h.icon
            return (
              <article
                key={h.title}
                className="group bg-white/6 dark:bg-black/20 backdrop-blur-sm border border-white/8 dark:border-white/6 rounded-2xl p-6 hover:scale-[1.01] transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-none w-16 h-16 rounded-lg bg-[#5a3a7a]/12 flex items-center justify-center text-[#5a3a7a]">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#111827] dark:text-white">{h.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{h.content}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Benefits grid (updated) */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="flex items-start gap-4 bg-white/5 dark:bg-black/16 backdrop-blur-sm border border-white/6 rounded-lg p-6"
              >
                <div className="flex-none w-20 h-20 rounded-lg bg-[#5a3a7a]/12 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-[#5a3a7a]" />
                </div>
                <div>
                  <h4 className="text-md font-semibold text-[#111827] dark:text-white">{benefit.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
