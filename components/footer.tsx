import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">City Vadapav</h3>
            <p className="text-background/80 text-sm">
              India's favorite vadapav. Quality, consistency, and profitability guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-secondary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#franchise" className="hover:text-secondary transition-colors">
                  Franchise
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-secondary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Franchise */}
          <div>
            <h4 className="font-semibold mb-4">Franchise</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#franchise" className="hover:text-secondary transition-colors">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="#franchise" className="hover:text-secondary transition-colors">
                  Models
                </Link>
              </li>
              <li>
                <Link href="#franchise" className="hover:text-secondary transition-colors">
                  ROI
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-secondary transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <a href="tel:+918000000000" className="hover:text-secondary transition-colors">
                  +91 80000 00000
                </a>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <a href="mailto:franchise@cityvadapav.com" className="hover:text-secondary transition-colors">
                  franchise@cityvadapav.com
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <Link href="#" className="hover:text-secondary transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-secondary transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-secondary transition-colors">
              <Twitter size={20} />
            </Link>
          </div>
          <p className="text-sm text-background/60">© 2025 City Vadapav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
