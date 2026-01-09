"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail, Heart } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
]

const services = [
  { name: "Tuitions", href: "/services/tuitions" },
  { name: "Abacus", href: "/services/abacus" },
  { name: "Vedic Mathematics", href: "/services/vedic-mathematics" },
  { name: "Summer Camp", href: "/services/summer-camp" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-foreground to-gray-900 text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image src="/images/image.png" alt="TEJOVIKAS" width={50} height={50} className="object-contain" />
              <Image
                src="/images/image.png"
                alt="GELS"
                width={70}
                height={50}
                className="object-contain bg-white rounded p-1"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Inspiring future leaders through quality education. We offer comprehensive programs in Tuitions, Abacus,
              Vedic Mathematics, and Summer Camps.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-sunflower">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-sunflower">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-sunflower">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">123 Education Street, Knowledge City, India - 500001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 text-sm hover:text-white">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange flex-shrink-0" />
                <a href="mailto:info@tejovikas.com" className="text-gray-400 text-sm hover:text-white">
                  info@tejovikas.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} TEJOVIKAS & GELS. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red fill-red" /> for Education
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
