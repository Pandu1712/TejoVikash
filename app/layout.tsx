import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "TEJOVIKAS & GELS - Inspiring Future | Premium Education Services",
  description:
    "TEJOVIKAS & GELS offers premium educational services including Tuitions, Abacus, Vedic Mathematics, and Summer Camp. Online and offline classes available.",
  keywords:
    "tuitions, abacus, vedic mathematics, summer camp, online classes, education, TEJOVIKAS, GELS",
  authors: [{ name: "TEJOVIKAS & GELS" }],
  creator: "TEJOVIKAS & GELS",
  publisher: "TEJOVIKAS & GELS",

  icons: {
    icon: "/Favicon1.png",
    apple: "/Favicon1.png",
  },

  openGraph: {
    title: "TEJOVIKAS & GELS - Inspiring Future",
    description:
      "Premium educational services including Tuitions, Abacus, Vedic Mathematics, and Summer Camp",
    type: "website",
    locale: "en_IN",
    siteName: "TEJOVIKAS & GELS",
  },

  twitter: {
    card: "summary_large_image",
    title: "TEJOVIKAS & GELS - Inspiring Future",
    description:
      "Premium educational services including Tuitions, Abacus, Vedic Mathematics, and Summer Camp",
  },

  robots: {
    index: true,
    follow: true,
  },

  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#E67E22",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
