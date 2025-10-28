import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-[#FEF9F3] text-[#6B4E71] overflow-hidden border-t-2 border-[#FFB3D9]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div className="min-w-0">
            <h3 className="text-2xl font-black bg-gradient-to-r from-[#FF6B9D] to-[#E6D5FF] bg-clip-text text-transparent mb-4">RENT MY EVENT</h3>
            <p className="text-sm mb-6 text-[#8B6B8D] font-medium leading-relaxed">Your premium event rental and management solutions across Delhi NCR.</p>
            <div className="space-y-3 text-sm">
              <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 text-[#6B4E71] hover:text-[#FF6B9D] transition font-bold group">
                <Phone className="w-5 h-5 text-[#FFB3D9] group-hover:animate-float" />
                <span className="underline-hover">+91 XXXX XXXX XX</span>
              </a>
              <a href="mailto:info@rentmyevent.com" className="flex items-center gap-2 text-[#6B4E71] hover:text-[#FF6B9D] transition font-bold group">
                <Mail className="w-5 h-5 text-[#FFB3D9] group-hover:animate-float" />
                <span className="underline-hover">info@rentmyevent.com</span>
              </a>
              <div className="flex items-center gap-2 text-[#6B4E71] font-bold">
                <MapPin className="w-5 h-5 text-[#FFB3D9]" />
                <span>Delhi NCR, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <h4 className="text-lg font-black text-[#FF6B9D] mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "🏠 Home", href: "/" },
                { label: "ℹ️ About Us", href: "/about" },
                { label: "🛠️ Services", href: "/services" },
                { label: "📧 Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[#8B6B8D] hover:text-[#FF6B9D] transition font-bold hover:translate-x-1 inline-block">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <h4 className="text-lg font-black text-[#FF6B9D] mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "📦 Equipment Rental", href: "#" },
                { label: "🎉 Event Management", href: "#" },
                { label: "🔧 Technical Support", href: "#" },
                { label: "💡 Consultation", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[#8B6B8D] hover:text-[#FF6B9D] transition font-bold hover:translate-x-1 inline-block">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="min-w-0">
            <h4 className="text-white font-bold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe for updates and special offers</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-3 py-2 bg-gray-800 text-white text-sm rounded-l"
              />
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 text-white text-sm rounded-r transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-gray-500">© 2025 Rent My Event. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
