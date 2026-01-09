"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calculator, Brain, Sun, ArrowRight, Wifi, Users, Clock } from "lucide-react"

const services = [
  {
    id: "tuitions",
    title: "Tuitions",
    icon: BookOpen,
    color: "bg-orange",
    description:
      "Comprehensive academic support for all subjects and grades. Expert teachers helping students excel in their studies.",
    features: ["All Subjects", "All Grades", "Exam Preparation", "Homework Help"],
    image: "/tuition-class-with-students-studying.jpg",
  },
  {
    id: "abacus",
    title: "Abacus",
    icon: Calculator,
    color: "bg-purple",
    description:
      "Ancient tool for modern minds. Develop mental calculation skills and boost concentration through our Abacus program.",
    features: ["Mental Math", "Concentration", "Speed Calculation", "Brain Development"],
    image: "/child-learning-abacus-calculation.jpg",
  },
  {
    id: "vedic-mathematics",
    title: "Vedic Mathematics",
    icon: Brain,
    color: "bg-red",
    description:
      "Unlock the secrets of ancient Indian mathematics. Learn shortcuts and techniques for lightning-fast calculations.",
    features: ["Speed Techniques", "Problem Solving", "Competitive Exams", "Mental Agility"],
    image: "/vedic-mathematics-formulas-on-board.jpg",
  },
  {
    id: "summer-camp",
    title: "Summer Camp",
    icon: Sun,
    color: "bg-sunflower",
    description:
      "Fun-filled learning experience during vacations. Activities that combine education with entertainment.",
    features: ["Fun Activities", "Skill Development", "Creative Learning", "Social Skills"],
    image: "/children-summer-camp-activities-fun.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-orange/10 text-orange font-semibold rounded-full text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Premium Educational Programs for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-purple">Every Learner</span>
          </h2>
          <p className="text-muted-foreground">
            Choose from our range of expertly designed programs. All services available in both online and offline
            modes.
          </p>
        </div>

        {/* Online badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg">
            <Wifi className="w-5 h-5 text-green-500" />
            <span className="font-medium text-foreground">All Programs Available Online</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 ${service.color}/60 mix-blend-multiply`} />
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span key={feature} className="px-3 py-1 bg-muted rounded-full text-sm text-foreground">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button className={`${service.color} hover:opacity-90 text-white flex-1`} asChild>
                    <Link href={`/services/${service.id}`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white bg-transparent"
                    asChild
                  >
                    <a
                      href={`https://wa.me/919876543210?text=Hi, I'm interested in ${service.title} program`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enquire
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 items-center bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-2 text-foreground">
              <Users className="w-5 h-5 text-orange" />
              <span>Small Batch Sizes</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-2 text-foreground">
              <Clock className="w-5 h-5 text-purple" />
              <span>Flexible Timings</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-2 text-foreground">
              <Wifi className="w-5 h-5 text-green-500" />
              <span>Online Classes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
