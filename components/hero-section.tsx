"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Calculator, Brain, Sun } from "lucide-react"

const heroTexts = [
  "Empowering Young Minds",
  "Building Future Leaders",
  "Excellence in Education",
  "Inspiring Success Stories",
]

export function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % heroTexts.length)
        setIsVisible(true)
      }, 500)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-cream via-yellow-50 to-orange-50">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sunflower/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-md">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">Online & Offline Classes Available</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              <span
                className={`block transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                {heroTexts[currentText]}
              </span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-orange to-red">
                With TEJOVIKAS & GELS
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Transform your child&apos;s future with our comprehensive educational programs. From Tuitions to Abacus,
              Vedic Mathematics to Summer Camps - we nurture excellence.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-orange hover:bg-orange/90 text-white shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple text-purple hover:bg-purple hover:text-white bg-transparent"
                asChild
              >
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  Enquire Now
                </a>
              </Button>
            </div>

            {/* Quick service icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {[
                { icon: BookOpen, label: "Tuitions", color: "bg-orange" },
                { icon: Calculator, label: "Abacus", color: "bg-purple" },
                { icon: Brain, label: "Vedic Maths", color: "bg-red" },
                { icon: Sun, label: "Summer Camp", color: "bg-sunflower" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 p-4 bg-white/60 backdrop-blur rounded-xl hover:bg-white hover:shadow-lg transition-all cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Images */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Main image container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80 animate-float">
                  <Image
                    src="/images/image.png"
                    alt="TEJOVIKAS - Inspiring Education"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Floating cards */}
              <div
                className="absolute top-10 right-0 bg-white rounded-2xl p-4 shadow-xl animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">1000+</p>
                    <p className="text-sm text-muted-foreground">Happy Students</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-20 left-0 bg-white rounded-2xl p-4 shadow-xl animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange/20 rounded-full flex items-center justify-center">
                    <span className="text-orange font-bold">★</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Expert</p>
                    <p className="text-sm text-muted-foreground">Teachers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
