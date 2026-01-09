import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-yellow-50 to-orange-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <Image
          src="/images/image.png"
          alt="TEJOVIKAS"
          width={120}
          height={120}
          className="mx-auto mb-8 animate-float"
        />
        <h1 className="text-6xl font-bold text-orange mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-orange hover:bg-orange/90 text-white">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-orange text-orange hover:bg-orange hover:text-white bg-transparent"
          >
            <Link href="javascript:history.back()">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
