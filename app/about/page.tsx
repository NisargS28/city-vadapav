"use client"

import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Heart, MapPin, Users, TrendingUp, Clock } from "lucide-react"

const milestones = [
  {
    year: "2016",
    title: "The Beginning",
    description: "Started as a small street food stall in Ahmedabad with a vision to serve authentic vadapav",
  },
  {
    year: "2018",
    title: "First Outlet",
    description: "Opened our first permanent outlet in Maninagar, gaining instant popularity",
  },
  {
    year: "2020",
    title: "Brand Expansion",
    description: "Expanded to 3 outlets across Ahmedabad despite challenging times",
  },
  {
    year: "2023",
    title: "Franchise Launch",
    description: "Launched franchise model to share our success with aspiring entrepreneurs",
  },
  {
    year: "2026",
    title: "Growing Strong",
    description: "Now operating 4+ outlets with many more franchise partners joining us",
  },
]

const outlets = [
  {
    name: "Maninagar Outlet",
    location: "Maninagar, Ahmedabad",
    opened: "2018",
    description: "Our flagship outlet where it all began. Known for highest footfall and authentic taste.",
    image: "/shop.jpg",
  },
  {
    name: "Satellite Outlet",
    location: "Satellite, Ahmedabad",
    opened: "2020",
    description: "Premium location serving the corporate crowd with quick service.",
    image: "/shop.jpg",
  },
  {
    name: "Vastrapur Outlet",
    location: "Vastrapur, Ahmedabad",
    opened: "2021",
    description: "Popular among students and young professionals in the area.",
    image: "/shop.jpg",
  },
  {
    name: "CG Road Outlet",
    location: "CG Road, Ahmedabad",
    opened: "2022",
    description: "Located in the heart of shopping district, serves thousands daily.",
    image: "/shop.jpg",
  },
]

const values = [
  {
    icon: Heart,
    title: "Quality First",
    description: "We never compromise on the quality of ingredients and preparation",
  },
  {
    icon: Users,
    title: "Customer Delight",
    description: "Every customer leaves with a smile and satisfied taste buds",
  },
  {
    icon: Award,
    title: "Authentic Taste",
    description: "Traditional recipes passed down with our special touch",
  },
  {
    icon: TrendingUp,
    title: "Growth Together",
    description: "We grow when our franchise partners and customers grow",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-24 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">Our Story</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed font-medium">
            From a humble street food stall to Gujarat's most loved vadapav franchise – 
            discover the journey of passion, perseverance, and delicious vadapav
          </p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl h-96 lg:h-[550px] overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent z-10"></div>
              <Image
                src="/logo.png"
                alt="City Vadapav Founder"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">The City Vadapav Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It all started in 2016 with a simple dream – to bring the authentic taste of street-style 
                vadapav to every corner of Gujarat. What began as a small stall in Ahmedabad has now 
                transformed into a beloved brand with loyal customers across the city.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our founder, driven by passion for authentic flavors and entrepreneurial spirit, 
                experimented with traditional recipes and created the perfect blend of spices that 
                makes our vadapav unique. The secret? Fresh ingredients, perfect timing, and a lot of heart.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The overwhelming response from customers encouraged us to expand. Each outlet opened 
                with the same commitment to quality and taste that made our first stall successful. 
                Today, we're not just serving vadapav – we're creating opportunities for entrepreneurs 
                who share our passion.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our franchise model is built on the foundation of shared success. We believe in empowering 
                our partners with the knowledge, support, and systems that helped us grow. When you join 
                City Vadapav, you're not just starting a business – you're joining a family.
              </p>
              <Button size="lg" asChild className="text-base font-semibold px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl mt-4">
                <a href="/#franchise">Join Our Franchise Family</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 tracking-tight">Our Core Values</h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">The principles that guide everything we do</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <Card key={idx} className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 hover:-translate-y-2 group cursor-pointer">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 tracking-tight">Our Journey</h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">Milestones that shaped our success story</p>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative pl-12 pb-16 border-l-4 border-primary/30 last:pb-0 group hover:border-primary transition-colors duration-300">
                <div className="absolute left-[-11px] top-0 w-5 h-5 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
                <div className="mb-3">
                  <span className="inline-block bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-md">
                    {milestone.year}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{milestone.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outlets Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 tracking-tight">Our Outlets</h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Each outlet is a testament to our commitment to quality and service. 
            Visit us at any location to experience the authentic City Vadapav taste.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {outlets.map((outlet, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 hover:-translate-y-2 group">
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-10"></div>
                  <Image
                    src={outlet.image}
                    alt={outlet.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{outlet.name}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <MapPin size={18} className="text-primary" />
                        <span className="font-medium">{outlet.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full">
                      <Clock size={16} className="text-primary" />
                      <span className="text-sm font-bold text-primary">{outlet.opened}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed">{outlet.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 hover:scale-105 group cursor-pointer">
              <p className="text-5xl md:text-6xl font-extrabold text-primary mb-3 group-hover:scale-110 transition-transform">10+</p>
              <p className="text-muted-foreground font-medium">Years of Experience</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-secondary/5 hover:bg-secondary/10 transition-all duration-300 hover:scale-105 group cursor-pointer">
              <p className="text-5xl md:text-6xl font-extrabold text-secondary mb-3 group-hover:scale-110 transition-transform">4+</p>
              <p className="text-muted-foreground font-medium">Active Outlets</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-accent/5 hover:bg-accent/10 transition-all duration-300 hover:scale-105 group cursor-pointer">
              <p className="text-5xl md:text-6xl font-extrabold text-accent mb-3 group-hover:scale-110 transition-transform">50+</p>
              <p className="text-muted-foreground font-medium">Food Items</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 hover:scale-105 group cursor-pointer">
              <p className="text-5xl md:text-6xl font-extrabold text-primary mb-3 group-hover:scale-110 transition-transform">1000+</p>
              <p className="text-muted-foreground font-medium">Daily Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Be Part of Our Success Story</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto text-primary-foreground/90 leading-relaxed font-medium">
            Join hundreds of successful franchise partners who are building their future with City Vadapav
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-base font-semibold px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <a href="/#franchise">Apply for Franchise</a>
            </Button>
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-base font-semibold px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl" asChild>
              <a href="https://wa.me/918000000000" target="_blank" rel="noopener noreferrer">
                Contact on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
