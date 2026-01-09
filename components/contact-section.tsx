"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Hi, I'm interested in your services.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AService: ${formData.service}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/919876543210?text=${whatsappMessage}`, "_blank")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-red/10 text-red font-semibold rounded-full text-sm mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red to-orange">With Us</span>
          </h2>
          <p className="text-muted-foreground">
            Have questions? We&apos;re here to help. Reach out to us and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <Card className="border-none shadow-xl bg-gradient-to-br from-cream to-white">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
              <CardDescription>Fill the form below and we&apos;ll get back to you via WhatsApp</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="border-orange/30 focus:border-orange"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                      className="border-orange/30 focus:border-orange"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="border-orange/30 focus:border-orange"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Interested Service</Label>
                  <Select onValueChange={(value) => handleChange("service", value)}>
                    <SelectTrigger className="border-orange/30 focus:border-orange">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tuitions">Tuitions</SelectItem>
                      <SelectItem value="abacus">Abacus</SelectItem>
                      <SelectItem value="vedic-mathematics">Vedic Mathematics</SelectItem>
                      <SelectItem value="summer-camp">Summer Camp</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="border-orange/30 focus:border-orange"
                  />
                </div>
                <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: MapPin, title: "Visit Us", info: "123 Education Street, Knowledge City, India - 500001" },
                { icon: Phone, title: "Call Us", info: "+91 98765 43210" },
                { icon: Mail, title: "Email Us", info: "info@tejovikas.com" },
                { icon: Clock, title: "Working Hours", info: "Mon - Sat: 9:00 AM - 8:00 PM" },
              ].map((item) => (
                <Card key={item.title} className="border-orange/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.info}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map placeholder */}
            <Card className="border-orange/20 overflow-hidden">
              <div className="relative h-64 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5427093977956!2d78.48671!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzA2LjIiTiA3OMKwMjknMTIuMiJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
