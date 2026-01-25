"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/menu", label: "Menu" },
  { href: "/#franchise", label: "Franchise" },
  { href: "/#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-105">
              <Image src="/LOGO.png" alt="City Vadapav Logo" width={44} height={44} className="rounded-xl" />
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:inline bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">City Vadapav</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-foreground/80 hover:text-primary font-medium transition-all duration-300 hover:scale-105 relative group">
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex gap-3">
            <Button variant="outline" asChild className="transition-all duration-300 hover:scale-105 hover:shadow-md">
              <a href="#contact">Contact Us</a>
            </Button>
            <Button asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold">
              <a href="#franchise">Apply Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-6 flex flex-col gap-5 pb-4 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-all duration-300 hover:translate-x-1 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-4 border-t">
              <Button variant="outline" asChild size="sm" className="flex-1 transition-all duration-300 hover:scale-105">
                <a href="#contact">Contact Us</a>
              </Button>
              <Button asChild size="sm" className="flex-1 transition-all duration-300 hover:scale-105 font-semibold">
                <a href="#franchise">Apply Now</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
