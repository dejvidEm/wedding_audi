"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

type GalleryImage = {
  src: string
  alt: string
}

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0)

  const galleryImages: GalleryImage[] = [
    { src: "/photos/main1.webp", alt: "Luxusné svadobné auto Audi" },
    { src: "/photos/main2.webp", alt: "Svadobná výzdoba vozidla" },
    { src: "/photos/main3.webp", alt: "Interiér svadobného auta" },
    { src: "/photos/main4.webp", alt: "Calendar scheduling tool" },
    { src: "/photos/main5.webp", alt: "Data reporting charts" },
    { src: "/photos/main6.webp", alt: "User profile settings" },
    { src: "/photos/main7.webp", alt: "User activity feed" },
    { src: "/photos/main8.webp", alt: "Notification center interface" },
  ]

  const sliderImages: GalleryImage[] = [
    { src: "/photos/1.webp", alt: "Project management board" },
    { src: "/photos/7.webp", alt: "Team chat interface" },
    { src: "/photos/3.webp", alt: "Document collaboration" },
    { src: "/photos/4.webp", alt: "Analytics dashboard dark mode" },
    { src: "/photos/5.webp", alt: "Task management interface" },
    { src: "/photos/6.webp", alt: "Calendar view with events" },
  ]

  const openImagePreview = (index: number) => {
    setSelectedImage(index)
  }

  const closeImagePreview = () => {
    setSelectedImage(null)
  }

  const nextSliderImage = () => {
    setCurrentSliderIndex((prev) => (prev + 1) % sliderImages.length)
  }

  const prevSliderImage = () => {
    setCurrentSliderIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)
  }

  return (
    <section id="galeria" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Galéria
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Pozrite si Audi S8 PLUS akcii</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Luxusná limuzína pre Vás veľký deň
          </p>
        </div>

        {/* Simple Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl border border-border/40 cursor-pointer"
              onClick={() => openImagePreview(index)}
            >
              <div className="aspect-video w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  quality={75} 
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>

        

        {/* Simple Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeImagePreview}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="aspect-video w-full">
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  quality={75} 
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-2 right-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
                onClick={closeImagePreview}
              >
                <X className="size-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}