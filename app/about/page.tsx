import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Users, Target, Heart, Award } from "lucide-react"

export const metadata = {
  title: "About Us - TEJOVIKAS & GELS | Inspiring Future",
  description: "Learn about TEJOVIKAS & GELS, our mission, vision, and commitment to quality education.",
}

const values = [
  { icon: Users, title: "Student-Centric", description: "Every decision we make puts students first" },
  { icon: Target, title: "Excellence", description: "We strive for excellence in everything we do" },
  { icon: Heart, title: "Passion", description: "Teaching is our passion, not just a profession" },
  { icon: Award, title: "Innovation", description: "We embrace new methods and technologies" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-cream via-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="text-orange">TEJOVIKAS</span> & <span className="text-red">GELS</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Inspiring future leaders through quality education since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-orange/10 to-sunflower/10 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, high-quality education that empowers students to achieve their full potential. We
                believe in nurturing not just academic excellence, but also character, creativity, and critical thinking
                skills.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple/10 to-red/10 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading educational institution that transforms young minds into confident, capable
                individuals ready to take on the challenges of tomorrow. We envision a world where every child has
                access to quality education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-orange" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
