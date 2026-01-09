"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("/")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    // Set active link based on current path
    setActiveLink(window.location.pathname)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logos */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/image.png" alt="TEJOVIKAS Logo" width={60} height={60} className="object-contain" />
            </Link>
            <div className="hidden sm:block h-10 w-px bg-orange-300" />
            <Link href="/" className="hidden sm:flex items-center">
              <Image src="/images/image.png" alt="GELS Logo" width={80} height={60} className="object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeLink === link.href
                    ? "bg-orange text-white shadow-md"
                    : "text-foreground hover:bg-sunflower/20 hover:text-orange"
                }`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-orange text-orange hover:bg-orange hover:text-white bg-transparent"
              asChild
            >
              <a href="tel:+919876543210">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white" asChild>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-cream">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8 pt-4">
                  <Image
                    src="/images/image.png"
                    alt="TEJOVIKAS Logo"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                  <Image src="/images/image.png" alt="GELS Logo" width={70} height={50} className="object-contain" />
                </div>
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <Link
                        href={link.href}
                        className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                          activeLink === link.href ? "bg-orange text-white" : "text-foreground hover:bg-sunflower/30"
                        }`}
                        onClick={() => setActiveLink(link.href)}
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto pb-8 flex flex-col gap-3">
                  <Button className="w-full bg-orange hover:bg-orange/90 text-white" asChild>
                    <a href="tel:+919876543210">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white" asChild>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
