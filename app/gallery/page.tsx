import { Header } from "@/components/header"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export const metadata = {
  title: "Gallery - TEJOVIKAS & GELS | Our Learning Journey",
  description: "View our gallery showcasing classroom sessions, events, and student activities.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-cream via-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-orange">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Glimpses of our vibrant learning environment and happy students
            </p>
          </div>
        </div>
      </section>

      <GallerySection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
