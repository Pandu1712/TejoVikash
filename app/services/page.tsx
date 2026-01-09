import { Header } from "@/components/header"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export const metadata = {
  title: "Our Services - TEJOVIKAS & GELS | Premium Education Programs",
  description:
    "Explore our educational services including Tuitions, Abacus, Vedic Mathematics, and Summer Camp programs.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-cream via-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-purple">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive educational programs designed for every learner
            </p>
          </div>
        </div>
      </section>

      <ServicesSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
