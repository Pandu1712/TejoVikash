"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const galleryImages = [
  { id: 1, src: "/classroom-learning.png", alt: "Classroom Session", category: "Classroom" },
  { id: 2, src: "/abacus-training-for-kids.jpg", alt: "Abacus Training", category: "Abacus" },
  { id: 3, src: "/summer-camp-activities-children.jpg", alt: "Summer Camp Fun", category: "Summer Camp" },
  { id: 4, src: "/vedic-mathematics-class.jpg", alt: "Vedic Math Class", category: "Vedic Maths" },
  { id: 5, src: "/placeholder.svg?height=400&width=600", alt: "Award Ceremony", category: "Events" },
  { id: 6, src: "/placeholder.svg?height=400&width=600", alt: "Online Class", category: "Online" },
  { id: 7, src: "/placeholder.svg?height=400&width=600", alt: "Group Study", category: "Classroom" },
  { id: 8, src: "/placeholder.svg?height=400&width=600", alt: "Outdoor Activities", category: "Summer Camp" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openImage = (index: number) => setSelectedImage(index)
  const closeImage = () => setSelectedImage(null)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-purple/10 text-purple font-semibold rounded-full text-sm mb-4">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Glimpses of Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-orange">
              Learning Journey
            </span>
          </h2>
          <p className="text-muted-foreground">Take a look at our vibrant learning environment and happy students</p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => openImage(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white text-sm font-medium">{image.category}</span>
                <p className="text-white/80 text-xs">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={closeImage}>
          <DialogContent className="max-w-4xl p-0 bg-black/95 border-none">
            <VisuallyHidden>
              <DialogTitle>Gallery Image</DialogTitle>
            </VisuallyHidden>
            {selectedImage !== null && (
              <div className="relative aspect-video">
                <Image
                  src={galleryImages[selectedImage].src || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white hover:bg-white/20"
                  onClick={closeImage}
                >
                  <X className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white font-medium">{galleryImages[selectedImage].alt}</p>
                  <p className="text-white/60 text-sm">
                    {selectedImage + 1} / {galleryImages.length}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
