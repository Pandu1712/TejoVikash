"use client"

import { Phone, MessageCircle } from "lucide-react"

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:+919876543210"
        className="w-14 h-14 bg-orange rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  )
}
