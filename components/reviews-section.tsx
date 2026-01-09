"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Parent",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "My son's performance in mathematics has improved dramatically since joining TEJOVIKAS. The Vedic Mathematics program is exceptional!",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Parent",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The Abacus classes have transformed my daughter's concentration and calculation speed. Highly recommended!",
  },
  {
    id: 3,
    name: "Anita Patel",
    role: "Parent",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Summer camp was an amazing experience for my kids. They learned so much while having fun. Thank you GELS team!",
  },
  {
    id: 4,
    name: "Suresh Reddy",
    role: "Parent",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The teachers are very dedicated and provide individual attention. My child looks forward to every class.",
  },
  {
    id: 5,
    name: "Meera Nair",
    role: "Parent",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Online classes during pandemic were seamless. The quality of education remained excellent. Great infrastructure!",
  },
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextReview = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-cream to-orange/10">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-sunflower/20 text-orange font-semibold rounded-full text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Parents Say{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-sunflower">About Us</span>
          </h2>
          <p className="text-muted-foreground">
            Don&apos;t just take our word for it - hear from our happy parents and students
          </p>
        </div>

        {/* Reviews carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl border-none overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <Quote className="w-12 h-12 text-sunflower/30 mb-6" />
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={reviews[currentIndex].avatar || "/placeholder.svg"}
                    alt={reviews[currentIndex].name}
                    fill
                    className="rounded-full object-cover border-4 border-sunflower"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {Array.from({ length: reviews[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-sunflower text-sunflower" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-foreground italic mb-6 leading-relaxed">
                    &ldquo;{reviews[currentIndex].text}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{reviews[currentIndex].name}</p>
                    <p className="text-muted-foreground text-sm">{reviews[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-orange text-orange hover:bg-orange hover:text-white bg-transparent"
              onClick={prevReview}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-orange w-8" : "bg-orange/30"
                  }`}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-orange text-orange hover:bg-orange hover:text-white bg-transparent"
              onClick={nextReview}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
