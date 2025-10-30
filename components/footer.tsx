import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative text-[#E2E8F0] overflow-hidden box-border">
      {/* Subtle top border and gradient sheen to separate from content */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/0 to-white/0" />
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Company Info */}
          <div className="min-w-0">
            <h3 className="text-white font-black text-lg mb-4 bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent">RENT MY EVENT</h3>
            <p className="text-sm mb-4 text-[#CBD5E1] font-medium leading-relaxed">Your one-stop event rental and management company in Delhi NCR.</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 hover:text-[#8B5CF6] transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span>+91 7065 4415 47</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#8B5CF6] transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span>rentmyevents@gmail.com </span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#8B5CF6] transition-colors duration-300">
                <MapPin className="w-4 h-4" />
                <span>Delhi NCR, India</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="min-w-0">
            <h4 className="text-white font-black mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
                { label: "Blog", href: "/blog" },
              ].map((item) => (
                <li key={item.label}>
                  <a aria-label={item.label} href={item.href} className="text-[#CBD5E1] hover:text-[#8B5CF6] transition-colors duration-300 font-medium break-words">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <h4 className="text-white font-black mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "LED Walls", href: "/services#led-walls" },
                { label: "Projectors", href: "/services#projectors" },
                { label: "Audio Systems", href: "/services#audio" },
                { label: "Video Solutions", href: "/services#video" },
              ].map((item) => (
                <li key={item.label}>
                  <a aria-label={item.label} href={item.href} className="text-[#CBD5E1] hover:text-[#8B5CF6] transition-colors duration-300 font-medium break-words">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="min-w-0">
            <h4 className="text-white font-black mb-4">Newsletter</h4>
            <p className="text-sm mb-4 font-medium text-[#CBD5E1]">Subscribe for updates and special offers</p>
            <form className="flex" action="#" method="post">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-3 py-2 bg-white/5 text-white placeholder:text-[#94A3B8] text-sm rounded-l border border-white/10 focus:border-[#8B5CF6] focus:outline-none"
                aria-label="Email address"
              />
              <button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:shadow-lg px-4 py-2 text-white text-sm font-semibold rounded-r transition" aria-label="Subscribe to newsletter">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10" />

        {/* Social Links & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4 mb-2 md:mb-0">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Twitter, label: "Twitter" },
              { icon: Instagram, label: "Instagram" },
              { icon: Linkedin, label: "LinkedIn" },
            ].map(({ icon: Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="text-[#CBD5E1] hover:text-[#8B5CF6] hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="text-sm text-[#94A3B8] font-medium">© 2025 Rent My Event. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
