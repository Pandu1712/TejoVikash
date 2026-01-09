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
    const handleScroll = () => setIsScrolled(window.scrollY > 20)

    setActiveLink(window.location.pathname)
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* ✅ LOGOS – visible on ALL screen sizes */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/Logo1.png"
              alt="TEJOVIKAS Logo"
              width={48}
              height={48}
              className="ml-10 object-contain sm:w-[56px] sm:h-[56px]"
            />

            <div className="h-8 w-px bg-orange-300" />

            <Image
              src="/images/Logo2.jpeg"
              alt="GELS Logo"
              width={64}
              height={48}
              className="object-contain sm:w-[80px] sm:h-[56px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeLink === link.href
                    ? "bg-orange text-white shadow-md"
                    : "text-foreground hover:bg-orange/10 hover:text-orange"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-orange text-orange hover:bg-orange hover:text-white"
              asChild
            >
              <a href="tel:+919876543210">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>

            <Button
              size="sm"
              className="bg-green-500 hover:bg-green-600 text-white"
              asChild
            >
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-80 bg-cream">
              <div className="flex flex-col h-full">

                {/* ✅ Mobile Logos */}
                <div className=" flex items-center gap-3 mb-8 pt-4">
                  <Image
                    src="/images/Logo1.png"
                    alt="TEJOVIKAS Logo"
                    width={44}
                    height={44}
                    className="object-contain"
                  />
                  <Image
                    src="/images/Logo2.jpeg"
                    alt="GELS Logo"
                    width={70}
                    height={44}
                    className="object-contain "
                  />
                </div>

                {/* Mobile Nav */}
                <nav className="flex flex-col gap-2 ">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setActiveLink(link.href)}
                        className={`px-4 py-3 rounded-lg text-base font-medium ${
                          activeLink === link.href
                            ? "bg-orange text-white"
                            : "hover:bg-orange/10"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="mt-auto pb-8 flex flex-col gap-3">
                  <Button className="bg-orange text-white" asChild>
                    <a href="tel:+919876543210">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>

                  <Button className="bg-green-500 text-white" asChild>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
