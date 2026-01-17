"use client"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChefHat, TrendingUp, Zap, Award, Users, DollarSign, MapPin, BookOpen, Phone, Mail } from "lucide-react"
import { menuItems } from "@/lib/menuItems"

const uspCards = [
  {
    icon: DollarSign,
    title: "Low Investment",
    description: "Start with minimal capital. Setup cost from ₹3-5 lakhs only.",
  },
  {
    icon: TrendingUp,
    title: "High Margins",
    description: "60-70% profit margins on every order. Rapid scaling potential.",
  },
  {
    icon: Zap,
    title: "Fast ROI",
    description: "Recover investment in 8-12 months. Proven business model.",
  },
  {
    icon: Award,
    title: "Full Support",
    description: "Complete training, supply chain, and marketing support provided.",
  },
]

const testimonials = [
  {
    name: "Rajesh Kumar",
    city: "Pune",
    quote: "City Vadapav transformed my career. Best decision I made for my family.",
    image: "avatar-1",
  },
  {
    name: "Priya Sharma",
    city: "Bangalore",
    quote: "Professional support team and consistent supply. Highly profitable business.",
    image: "avatar-2",
  },
  {
    name: "Vikram Patel",
    city: "Delhi",
    quote: "Strong brand recognition and amazing customer demand. Exceeding targets!",
    image: "avatar-3",
  },
]

const franchiseModels = [
  {
    title: "FOFO Model",
    subtitle: "Food Outlet, Franchisee Operated",
    investment: "₹3.5 - 5 Lakhs",
    features: ["Small kiosk setup", "Minimal staff needed", "High profit margins", "Quick setup (15 days)"],
  },
  {
    title: "FOCO Model",
    subtitle: "Food Outlet, Company Operated",
    investment: "₹8 - 12 Lakhs",
    features: ["Premium location", "Company manages operations", "Higher revenue potential", "Passive income option"],
  },
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", "Classic", "Cheese", "Butter", "Jain", "Combos"]
  const filteredMenu =
    selectedCategory === "All" ? menuItems : menuItems.filter((item) => item.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 md:py-32"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Logo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md aspect-square">
                <Image
                  src="/LOGO.png"
                  alt="City Vadapav Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block bg-secondary/20 px-4 py-2 rounded-full mb-6">
                <span className="text-secondary font-semibold text-sm">Franchise Opportunity</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                India's Favorite Vadapav – Now a Profitable Franchise Opportunity
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
                Join thousands of successful franchise partners. Low investment, high margins, fast ROI. Build your
                business with City Vadapav.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="secondary" asChild>
                  <a href="#franchise">Apply for Franchise</a>
                </Button>
                <Button size="lg" className="bg-[#25D366] hover:bg-[#20ba5a] text-white" asChild>
                  <a href="https://wa.me/918000000000" target="_blank" rel="noopener noreferrer">
                    Contact on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose City Vadapav?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uspCards.map((card, idx) => {
              const Icon = card.icon
              return (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-muted-foreground text-sm">{card.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Popular Menu</h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground border border-border hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenu.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative bg-gradient-to-br from-secondary to-accent h-48 flex items-center justify-center">
                  {item.image.startsWith('/') ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <ChefHat size={64} className="text-background/30" />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.category}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Brand Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2015, City Vadapav started as a humble street food stall in Mumbai. Today, we've grown into
                India's most loved vadapav franchise with 500+ outlets across 50 cities.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our commitment to quality, hygiene, and consistency has made us the preferred choice for entrepreneurs
                and customers alike. We don't just serve food; we serve dreams and opportunities.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-muted-foreground text-sm">Active Outlets</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary">10+</p>
                  <p className="text-muted-foreground text-sm">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">50+</p>
                  <p className="text-muted-foreground text-sm">Cities Across India</p>
                </div>
              </div>

              <Button size="lg" asChild>
                <a href="#franchise">Become a Partner</a>
              </Button>
            </div>
            <div className="relative rounded-2xl h-96">
              <Image
                src="/about.png"
                alt="About City Vadapav"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.city}</p>
                  </div>
                </div>
                <p className="text-foreground italic">"{testimonial.quote}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Section */}
      <section id="franchise" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Franchise Models</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {franchiseModels.map((model, idx) => (
              <Card key={idx} className="p-8 border-2 hover:border-primary transition-colors">
                <h3 className="text-2xl font-bold mb-2">{model.title}</h3>
                <p className="text-muted-foreground mb-4">{model.subtitle}</p>
                <p className="text-3xl font-bold text-primary mb-6">{model.investment}</p>
                <ul className="space-y-3 mb-8">
                  {model.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-foreground text-xs font-bold">✓</span>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" asChild>
                  <a href="#contact">Choose This Model</a>
                </Button>
              </Card>
            ))}
          </div>

          {/* Franchise Benefits */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6">What We Provide</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: BookOpen, label: "Comprehensive Training" },
                { icon: Zap, label: "Setup & Branding" },
                { icon: TrendingUp, label: "Marketing Support" },
                { icon: Award, label: "24/7 Assistance" },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="text-center">
                    <Icon className="text-primary mx-auto mb-3" size={32} />
                    <p className="font-semibold">{item.label}</p>
                  </div>
                )
              })}
            </div>
          </Card>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">Ready to start your City Vadapav journey?</p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="#contact">Apply for Franchise Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact/Apply Section */}
      <section id="contact" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Join City Vadapav</h2>
          <p className="text-center text-muted-foreground mb-8">
            Fill out the form below and our team will contact you within 24 hours.
          </p>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  className="px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  required
                />
                <input
                  type="text"
                  placeholder="City *"
                  className="px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select className="px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background">
                  <option value="">Select Investment Budget *</option>
                  <option value="3-5">₹3-5 Lakhs</option>
                  <option value="5-8">₹5-8 Lakhs</option>
                  <option value="8-12">₹8-12 Lakhs</option>
                  <option value="12+">₹12+ Lakhs</option>
                </select>
                <select className="px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background">
                  <option value="">Preferred Model *</option>
                  <option value="fofo">FOFO (Franchisee Operated)</option>
                  <option value="foco">FOCO (Company Operated)</option>
                  <option value="undecided">Still Deciding</option>
                </select>
              </div>
              <textarea
                placeholder="Tell us about yourself and why you want to join City Vadapav..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
              ></textarea>
              <Button type="submit" size="lg" className="w-full">
                Submit Application
              </Button>
            </form>
          </Card>

          {/* Additional Contact Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Phone className="text-primary mx-auto mb-3" size={32} />
              <p className="font-semibold mb-1">Call Us</p>
              <p className="text-muted-foreground">
                <a href="tel:+918000000000">+91 80000 00000</a>
              </p>
            </div>
            <div className="text-center">
              <Mail className="text-primary mx-auto mb-3" size={32} />
              <p className="font-semibold mb-1">Email Us</p>
              <p className="text-muted-foreground">
                <a href="mailto:franchise@cityvadapav.com">franchise@cityvadapav.com</a>
              </p>
            </div>
            <div className="text-center">
              <MapPin className="text-primary mx-auto mb-3" size={32} />
              <p className="font-semibold mb-1">Visit Us</p>
              <p className="text-muted-foreground">Mumbai, India</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
