"use client"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { menuItems } from "@/lib/menuItems"

export default function MenuPage() {

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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">Our Menu</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed font-medium">
            Discover our wide range of delicious vadapav variants, sides, and beverages. 
            Every item crafted with love and authentic flavors.
          </p>
        </div>
      </section>

      {/* Menu Gallery */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {menuItems.map((item, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-2 hover:border-primary/30 hover:-translate-y-2 cursor-pointer">
                <div className="relative h-72 bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src={item.image || "/regular-vadapav.png"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors duration-300">{item.name}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Photos Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 tracking-tight">Our Complete Menu</h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">Browse our full menu selection</p>
          <div className="space-y-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 hover:-translate-y-2 group cursor-pointer">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                <Image
                  src="/menu-1.jpeg"
                  alt="City Vadapav Menu 1"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 hover:-translate-y-2 group cursor-pointer">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                <Image
                  src="/menu-2.jpeg"
                  alt="City Vadapav Menu 2"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Want to Start Your Own Outlet?</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Join our franchise family and serve these delicious items to customers in your area. 
            We provide complete support from setup to operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-base font-semibold px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <a href="/#franchise">View Franchise Details</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base font-semibold px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <a href="/#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
