import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-20 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-extrabold text-xl mb-4 tracking-tight">City Vadapav</h3>
            <p className="text-background/80 leading-relaxed">
              India's favorite vadapav. Quality, consistency, and profitability guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-5 tracking-tight">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block text-background/80 hover:text-background">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block text-background/80 hover:text-background">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#franchise" className="hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block text-background/80 hover:text-background">
                  Franchise
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block text-background/80 hover:text-background">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Franchise */}
          <div>
            <h4 className="font-bold text-base mb-5 tracking-tight">Franchise</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#franchise" className="hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block text-background/80 hover:text-background">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="#franchise" className="hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block text-background/80 hover:text-background">
                  Models
                </Link>
              </li>
              <li>
                <Link href="#franchise" className="hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block text-background/80 hover:text-background">
                  ROI
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block text-background/80 hover:text-background">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base mb-5 tracking-tight">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 group">
                <Phone size={18} className="flex-shrink-0 mt-0.5 text-secondary" />
                <a href="tel:+918000000000" className="hover:text-secondary transition-colors text-background/80 hover:text-background">
                  +91 80000 00000
                </a>
              </li>
              <li className="flex gap-3 group">
                <Mail size={18} className="flex-shrink-0 mt-0.5 text-secondary" />
                <a href="mailto:cityvadapav8@gmail.com" className="hover:text-secondary transition-colors text-background/80 hover:text-background break-all">
                  cityvadapav8@gmail.com
                </a>
              </li>
              <li className="flex gap-3 group">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-secondary" />
                <a 
                  href="https://maps.app.goo.gl/GYCTirczaDCUEmwB6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors text-background/80 hover:text-background leading-relaxed"
                >
                  Shop-06, SHREE VISHNUDHARA CROSS ROAD, Knpis circle, Opp. Setu Vertica, Gota, Ahmedabad, Gujarat 382481
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-5">
            <Link href="#" className="hover:text-secondary transition-all duration-300 hover:scale-110 w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-background/20">
              <Facebook size={22} />
            </Link>
            <Link href="#" className="hover:text-secondary transition-all duration-300 hover:scale-110 w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-background/20">
              <Instagram size={22} />
            </Link>
            <Link href="#" className="hover:text-secondary transition-all duration-300 hover:scale-110 w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-background/20">
              <Twitter size={22} />
            </Link>
          </div>
          <p className="text-sm text-background/70 font-medium">© 2026 City Vadapav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
