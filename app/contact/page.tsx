import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export const metadata = {
  title: "Contact Us - TEJOVIKAS & GELS | Get In Touch",
  description: "Contact TEJOVIKAS & GELS for inquiries about our educational programs and services.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-cream via-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red to-orange">Contact Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We&apos;d love to hear from you. Get in touch with us today!
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
