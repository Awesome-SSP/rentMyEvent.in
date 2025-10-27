import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 overflow-hidden box-border">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="min-w-0">
            <h3 className="text-white font-bold text-lg mb-4">RENT MY EVENT</h3>
            <p className="text-sm mb-4">Your one-stop event rental and management company in Delhi NCR.</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 XXXX XXXX XX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@rentmyevent.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Delhi NCR, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition break-words">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition break-words">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition break-words">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition break-words">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition break-words">
                  Equipment Rental
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition break-words">
                  Event Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition break-words">
                  Technical Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition break-words">
                  Consultation
                </a>
              </li>
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
