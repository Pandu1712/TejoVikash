import { Header } from "@/components/header"
import { ReviewsSection } from "@/components/reviews-section"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export const metadata = {
  title: "Reviews - TEJOVIKAS & GELS | Parent Testimonials",
  description: "Read what parents and students say about their experience with TEJOVIKAS & GELS.",
}

export default function ReviewsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-cream via-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-sunflower">
                Testimonials
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">Hear what parents and students have to say about us</p>
          </div>
        </div>
      </section>

      <ReviewsSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
