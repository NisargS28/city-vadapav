"use client"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChefHat, TrendingUp, Zap, Award, Users, IndianRupee, MapPin, BookOpen, Phone, Mail, Briefcase } from "lucide-react"
import { menuItems } from "@/lib/menuItems"

const uspCards = [
  {
    icon: IndianRupee,
    title: "Low Investment",
    description: "Start with minimal capital. Setup cost from ₹6 lakhs* only.",
  },
  {
    icon: TrendingUp,
    title: "High Margins",
    description: "High profit margins on every order. Rapid scaling potential.",
  },
  {
    icon: Zap,
    title: "Fast ROI",
    description: "Recover investment in 18* months. Depends on location & operations.",
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
    investment: "₹ 6 Lakhs",
    features: ["Machines & Equipments*","Interior", "Staff Training", "FSSAI License", "Marketing Support"],
  },
  // {
  //   title: "FOCO Model",
  //   subtitle: "Food Outlet, Company Operated",
  //   investment: "₹8 - 12 Lakhs",
  //   features: ["Premium location", "Company manages operations", "Higher revenue potential", "Passive income option"],
  // },
]

export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/mpqlwngo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setFormStatus('success')
        form.reset()
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        setFormStatus('error')
        setTimeout(() => setFormStatus('idle'), 5000)
      }
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 5000)
    }
  }

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
                  src="/logo.png"
                  alt="City Vadapav Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="text-center lg:text-left space-y-6 animate-in fade-in slide-in-from-bottom duration-700">
              <div className="inline-block bg-secondary/20 px-5 py-2.5 rounded-full mb-2 backdrop-blur-sm border border-secondary/30">
                <span className="text-secondary font-semibold text-sm tracking-wide uppercase">✨ Franchise Opportunity</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-balance leading-tight tracking-tight">
                Mumbai's Favorite Vadapav – Now a Profitable Franchise Opportunity
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-primary-foreground/90 leading-relaxed font-medium">
                Join thousands of successful franchise partners. Low investment, high margins, fast ROI. Build your
                business with City Vadapav.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="secondary" asChild className="text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <a href="#franchise">Apply for Franchise</a>
                </Button>
                <Button size="lg" className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl" asChild>
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
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 tracking-tight">Why Choose City Vadapav?</h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">Discover the advantages that make us Gujarat's #1 vadapav franchise</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uspCards.map((card, idx) => {
              const Icon = card.icon
              return (
                <Card key={idx} className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 hover:-translate-y-2 group cursor-pointer">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Popular Vadapav Section */}
      <section id="menu" className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 tracking-tight">Our Popular Vadapav</h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">Experience the authentic taste of Gujarat's favorite street food</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Vadapav Image */}
            <div className="relative rounded-3xl h-96 lg:h-[500px] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent z-10"></div>
              <Image
                src="/regular-vadapav.png"
                alt="City Vadapav"
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Right Side - Description */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vadapav is the quintessential street food that has captured hearts across India. 
                At City Vadapav, we've perfected this iconic snack with our special blend of spices, fresh ingredients, and 
                authentic preparation methods.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each vadapav features a perfectly spiced potato filling, coated in gram flour batter and fried to golden 
                perfection. Served in a soft pav bun with our signature chutneys and crispy fried green chilies, it's a 
                flavor explosion in every bite.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From classic vadapav to cheese, butter, and special variants, we offer a range that caters to every palate. 
                Our commitment to quality, hygiene, and authentic taste has made us Gujarat's most trusted vadapav brand.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button size="lg" asChild className="text-base font-semibold px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <a href="/menu">Explore Our Full Menu</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Our Brand Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2016, City Vadapav started as a humble street food stall in Ahmedabad. Today, we've grown into
                Gujarat's most loved vadapav franchise with 4+ outlets across Ahmedabad.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment to quality, hygiene, and consistency has made us the preferred choice for entrepreneurs
                and customers alike. We don't just serve food; we serve dreams and opportunities.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 my-10 pt-8">
                <div className="text-center p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2">4+</p>
                  <p className="text-muted-foreground text-sm font-medium">Active Outlets</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary/5 hover:bg-secondary/10 transition-colors">
                  <p className="text-4xl md:text-5xl font-extrabold text-secondary mb-2">10+</p>
                  <p className="text-muted-foreground text-sm font-medium">Years Experience</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors">
                  <p className="text-4xl md:text-5xl font-extrabold text-accent mb-2">50+</p>
                  <p className="text-muted-foreground text-sm font-medium">Food Items</p>
                </div>
              </div>

              <Button size="lg" asChild className="text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <a href="#contact">Become a Partner</a>
              </Button>
            </div>
            <div className="relative rounded-3xl h-96 lg:h-[500px] overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent z-10"></div>
              <Image
                src="/shop.jpg"
                alt="About City Vadapav"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 tracking-tight">Success Stories</h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">Hear from our thriving franchise partners across India</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="text-white" size={28} />
                  </div>
                  <div>
                    <p className="font-bold text-lg group-hover:text-primary transition-colors">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm font-medium">{testimonial.city}</p>
                  </div>
                </div>
                <p className="text-foreground italic text-lg leading-relaxed">"{testimonial.quote}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Section */}
      <section id="franchise" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 tracking-tight">Franchise Model</h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">Choose the perfect model to start your successful vadapav business</p>

          <div className="flex justify-center mb-16">
            {franchiseModels.map((model, idx) => (
              <Card key={idx} className="p-10 border-2 hover:border-primary transition-all duration-300 max-w-md w-full hover:shadow-2xl hover:-translate-y-2 group">
                <h3 className="text-3xl font-extrabold mb-3 group-hover:text-primary transition-colors">{model.title}</h3>
                <p className="text-muted-foreground mb-6 text-base">{model.subtitle}</p>
                <p className="text-4xl font-extrabold text-primary mb-8 tracking-tight">{model.investment} <span className="text-lg font-normal text-muted-foreground">Onwards</span></p>
                <ul className="space-y-4 mb-10">
                  {model.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        <span className="text-primary-foreground text-sm font-bold">✓</span>
                      </div>
                      <span className="text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full text-base font-semibold py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl" asChild>
                  <a href="#contact">Choose This Model</a>
                </Button>
              </Card>
            ))}
          </div>

          {/* Franchise Benefits */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 p-10 mb-16 border-2 border-primary/20 shadow-xl">
            <h3 className="text-3xl font-extrabold mb-8 text-center tracking-tight">What We Provide</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: BookOpen, label: "Comprehensive Training" },
                { icon: Zap, label: "Setup & Branding" },
                { icon: TrendingUp, label: "Marketing Support" },
                { icon: Award, label: "24/7 Assistance" },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="text-center group cursor-pointer">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="text-primary" size={36} />
                    </div>
                    <p className="font-bold text-base">{item.label}</p>
                  </div>
                )
              })}
            </div>
          </Card>

          {/* Franchise Requirements */}
          <Card className="p-10 mb-16 border-2 hover:border-primary/30 transition-all duration-300 shadow-xl">
            <h3 className="text-3xl font-extrabold mb-8 text-center tracking-tight">Franchise Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="text-accent" size={36} />
                </div>
                <h4 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">Space Requirement</h4>
                <p className="text-muted-foreground leading-relaxed">Minimum 200-300 sq. ft. area in a high footfall location (commercial area, near colleges, offices, or transit points)</p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <IndianRupee className="text-accent" size={36} />
                </div>
                <h4 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">Investment Capacity</h4>
                <p className="text-muted-foreground leading-relaxed">Initial investment of ₹6 lakhs onwards with working capital for first 3 months of operations</p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <ChefHat className="text-accent" size={36} />
                </div>
                <h4 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">Business Commitment</h4>
                <p className="text-muted-foreground leading-relaxed">Dedication to maintain brand standards, quality, and willingness to actively participate in day-to-day operations</p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <Briefcase className="text-accent" size={36} />
                </div>
                <h4 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">Food Business Experience</h4>
                <p className="text-muted-foreground leading-relaxed">Prior experience in food service, retail, or hospitality industry is preferred but not mandatory (training provided)</p>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <p className="text-xl text-muted-foreground mb-8 font-medium">Ready to start your City Vadapav journey?</p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base font-semibold px-10 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl" asChild>
              <a href="#contact">Apply for Franchise Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact/Apply Section */}
      <section id="contact" className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 tracking-tight">Join City Vadapav</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Fill out the form below and our team will contact you within 24 hours.
          </p>

          <Card className="p-10 shadow-2xl border-2 hover:border-primary/30 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  className="px-5 py-4 rounded-xl border-2 border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-background transition-all duration-300 font-medium"
                  required
                  disabled={formStatus === 'submitting'}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  className="px-5 py-4 rounded-xl border-2 border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-background transition-all duration-300 font-medium"
                  required
                  disabled={formStatus === 'submitting'}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  className="px-5 py-4 rounded-xl border-2 border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-background transition-all duration-300 font-medium"
                  required
                  disabled={formStatus === 'submitting'}
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City *"
                  className="px-5 py-4 rounded-xl border-2 border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-background transition-all duration-300 font-medium"
                  required
                  disabled={formStatus === 'submitting'}
                />
              </div>
              
              <textarea
                name="message"
                placeholder="Tell us about yourself and why you want to join City Vadapav..."
                rows={5}
                className="w-full px-5 py-4 rounded-xl border-2 border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-background resize-none transition-all duration-300 font-medium"
                disabled={formStatus === 'submitting'}
              ></textarea>
              
              {formStatus === 'success' && (
                <div className="p-4 rounded-xl bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 text-center font-medium">
                  Thank you! Your application has been submitted successfully. We'll contact you within 24 hours.
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="p-4 rounded-xl bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 text-center font-medium">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-base font-semibold py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? 'Submitting...' : 'Submit Application'}
              </Button>
            </form>
          </Card>

          {/* Additional Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <a href="tel:+919265494325" className="hover:text-primary transition-all duration-300 block group hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Phone className="text-primary" size={32} />
                </div>
                <p className="font-bold text-base mb-2">Call Us</p>
                <p className="text-muted-foreground font-medium">
                  +91 92654 94325
                </p>
              </a>
            </div>
            <div className="text-center">
              <a href="mailto:cityvadapav8@gmail.com" className="hover:text-primary transition-all duration-300 block group hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Mail className="text-primary" size={32} />
                </div>
                <p className="font-bold text-base mb-2">Email Us</p>
                <p className="text-muted-foreground font-medium">
                  cityvadapav8@gmail.com
                </p>
              </a>
            </div>
            <div className="text-center">
              <a 
                href="https://maps.app.goo.gl/GYCTirczaDCUEmwB6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-all duration-300 block group hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="text-primary" size={32} />
                </div>
                <p className="font-bold text-base mb-2">Visit Us</p>
                <p className="text-muted-foreground font-medium">
                  Ahmedabad, Gujarat, India
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
