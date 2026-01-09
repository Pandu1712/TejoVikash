"use client"

import Image from "next/image"
import { CheckCircle2, Users, Award, BookOpen, Target } from "lucide-react"

const features = [
  "Experienced and certified teachers",
  "Personalized attention to every student",
  "Modern teaching methodologies",
  "Regular progress assessments",
  "Interactive learning environment",
  "Flexible online & offline options",
]

const stats = [
  { icon: Users, value: "1000+", label: "Students Taught" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: BookOpen, value: "4", label: "Programs Offered" },
  { icon: Target, value: "95%", label: "Success Rate" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image & Stats */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/happy-students-learning-in-classroom-with-teacher.jpg"
                alt="Students learning at TEJOVIKAS"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange/40 to-transparent" />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-cream rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-orange" />
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-sunflower/20 text-orange font-semibold rounded-full text-sm mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nurturing Excellence Through{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-red">
                  Quality Education
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                TEJOVIKAS & GELS has been at the forefront of educational excellence for over a decade. Our mission is
                to inspire and empower young minds through innovative teaching methods and personalized attention.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              We believe every child has unique potential. Our comprehensive programs in Tuitions, Abacus, Vedic
              Mathematics, and Summer Camps are designed to unlock that potential and build confident, capable learners
              ready for the future.
            </p>

            {/* Process steps */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Our Process</h3>
              <div className="flex flex-wrap gap-3">
                {["Assessment", "Custom Plan", "Interactive Learning", "Progress Tracking", "Achievement"].map(
                  (step, index) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-foreground font-medium">{step}</span>
                      {index < 4 && <span className="text-orange hidden sm:inline">→</span>}
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Logos */}
            <div className="flex items-center gap-6 pt-4">
              <Image src="/images/image.png" alt="TEJOVIKAS" width={80} height={80} className="object-contain" />
              <Image src="/images/image.png" alt="GELS" width={100} height={80} className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
