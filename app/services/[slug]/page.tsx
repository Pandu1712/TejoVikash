import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CheckCircle2, MessageCircle, ArrowLeft, Wifi, Users, Clock, Award } from "lucide-react"

const servicesData: Record<
  string,
  {
    title: string
    description: string
    longDescription: string
    image: string
    features: string[]
    benefits: string[]
    curriculum: string[]
    color: string
  }
> = {
  tuitions: {
    title: "Tuitions",
    description: "Comprehensive academic support for all subjects and grades",
    longDescription:
      "Our tuition program provides personalized academic support across all subjects and grade levels. With experienced teachers and proven methodologies, we help students build strong foundations and excel in their academics.",
    image: "/placeholder.svg?height=500&width=800",
    features: [
      "All Subjects Coverage",
      "All Grade Levels",
      "Exam Preparation",
      "Homework Assistance",
      "Doubt Clearing Sessions",
    ],
    benefits: [
      "Improved academic performance",
      "Better understanding of concepts",
      "Increased confidence",
      "Regular progress tracking",
      "Personalized attention",
    ],
    curriculum: ["Mathematics", "Science", "English", "Social Studies", "Languages", "Computer Science"],
    color: "bg-orange",
  },
  abacus: {
    title: "Abacus",
    description: "Ancient tool for modern minds - develop mental calculation skills",
    longDescription:
      "The Abacus program is designed to enhance mental arithmetic abilities in children. Using the ancient counting tool, students develop concentration, memory, and lightning-fast calculation skills that benefit them throughout life.",
    image: "/placeholder.svg?height=500&width=800",
    features: [
      "Mental Arithmetic",
      "Concentration Building",
      "Memory Enhancement",
      "Speed Calculation",
      "Brain Development",
    ],
    benefits: [
      "Improved focus and concentration",
      "Enhanced memory retention",
      "Faster calculation abilities",
      "Better problem-solving skills",
      "Increased self-confidence",
    ],
    curriculum: [
      "Basic Abacus Operations",
      "Addition & Subtraction",
      "Multiplication",
      "Division",
      "Mental Math",
      "Speed Tests",
    ],
    color: "bg-purple",
  },
  "vedic-mathematics": {
    title: "Vedic Mathematics",
    description: "Unlock ancient mathematical secrets for modern success",
    longDescription:
      "Vedic Mathematics teaches powerful calculation techniques derived from ancient Indian scriptures. These methods simplify complex calculations, making mathematics enjoyable and boosting speed for competitive examinations.",
    image: "/placeholder.svg?height=500&width=800",
    features: ["Speed Techniques", "Shortcut Methods", "Competitive Exam Prep", "Mental Agility", "Problem Solving"],
    benefits: [
      "Faster calculations",
      "Reduced exam anxiety",
      "Better competitive exam scores",
      "Enhanced logical thinking",
      "Love for mathematics",
    ],
    curriculum: [
      "Sutras Introduction",
      "Multiplication Tricks",
      "Division Techniques",
      "Square & Cube Roots",
      "Algebraic Methods",
      "Geometry Shortcuts",
    ],
    color: "bg-red",
  },
  "summer-camp": {
    title: "Summer Camp",
    description: "Fun-filled learning experience during vacations",
    longDescription:
      "Our Summer Camp combines education with entertainment, offering children a memorable vacation experience. Through various activities, workshops, and games, children develop new skills while making friends and having fun.",
    image: "/placeholder.svg?height=500&width=800",
    features: ["Fun Activities", "Skill Development", "Creative Workshops", "Team Building", "Social Skills"],
    benefits: [
      "Productive vacation time",
      "New skills learned",
      "Improved social abilities",
      "Enhanced creativity",
      "Lasting friendships",
    ],
    curriculum: [
      "Art & Craft",
      "Public Speaking",
      "Science Experiments",
      "Sports & Games",
      "Music & Dance",
      "Personality Development",
    ],
    color: "bg-sunflower",
  },
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData[slug]
  if (!service) return { title: "Service Not Found" }

  return {
    title: `${service.title} - TEJOVIKAS & GELS | Premium Education`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-cream via-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center gap-2 text-orange hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 ${service.color}/20 px-4 py-2 rounded-full mb-4`}>
                <Wifi className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">Online & Offline Available</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{service.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{service.longDescription}</p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" asChild>
                  <a
                    href={`https://wa.me/919876543210?text=Hi, I'm interested in ${service.title} program`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Enquire Now
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange text-orange hover:bg-orange hover:text-white bg-transparent"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
                <div className="space-y-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Benefits</h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">What We Cover</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {service.curriculum.map((item, index) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-center gap-4"
              >
                <span
                  className={`w-10 h-10 ${service.color} rounded-full flex items-center justify-center text-white font-bold`}
                >
                  {index + 1}
                </span>
                <span className="font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Why Choose Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Expert Teachers", desc: "Qualified & experienced faculty" },
              { icon: Clock, title: "Flexible Timings", desc: "Batches to suit your schedule" },
              { icon: Wifi, title: "Online Options", desc: "Learn from anywhere" },
              { icon: Award, title: "Proven Results", desc: "Track record of success" },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-2xl bg-cream hover:shadow-lg transition-shadow">
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange to-sunflower">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their learning journey with our {service.title} program.
          </p>
          <Button size="lg" className="bg-white text-orange hover:bg-cream" asChild>
            <a
              href={`https://wa.me/919876543210?text=Hi, I'm interested in ${service.title} program. Please share more details.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Enquire on WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  )
}
