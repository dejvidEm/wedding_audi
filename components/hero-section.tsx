"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Calculate parallax values
  const videoParallax = scrollY * 0.4 // Adjust the multiplier to control parallax intensity

  return (
    <section className="relative w-full min-h-screen overflow-hidden -mt-16">
      {/* Mobile: Full-width video background */}
      <div className="absolute inset-0 md:hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translateY(${videoParallax * 0.3}px)`,
            height: `calc(100% + ${Math.abs(videoParallax * 0.3)}px)`,
          }}
        >
        </div>
      </div>

      {/* Desktop: Split layout */}
      <div className="hidden md:block">
        {/* Left half - white background */}
        <div className="absolute top-0 left-0 w-[40%] h-full bg-white"></div>

        {/* Right half - video background with parallax */}
        <div className="absolute top-0 right-0 w-[60%] h-full overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              transform: `translateY(${videoParallax}px)`,
              height: `calc(100% + ${videoParallax}px)`,
            }}
          >
            <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
              <source
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-05-19%20at%2019.46.09%20%28online-video-cutter.com%29-WMjMByPq3FUiTCuuja99JB5Iweihgh.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Content overlay - responsive positioning */}
      <div className="container relative z-20 h-full min-h-screen flex flex-col justify-center px-4 md:px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto md:mx-0 text-center md:text-left"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Prenájom svadobných áut
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tight mb-6 md:mb-8">
            <span className="text-white md:text-foreground font-bold">Váš </span>
            <span className="text-white md:text-black font-great-vibes">
              <span className="relative inline-block">
                Dokonalý
                <span
                  className="absolute -bottom-0 left-0 right-0 h-[8px]"
                  style={{
                    background: "linear-gradient(90deg, hsl(36, 60%, 60%), hsl(36, 60%, 60%) 70%, transparent 100%)",
                    height: "6px",
                    borderRadius: "3px",
                    transform: "rotate(-1deg) translateY(5px)",
                    opacity: 0.9,
                    width: "120%",
                  }}
                ></span>
              </span>{" "}
              Svadobný Deň
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="group rounded-full h-12 px-6 sm:px-8 text-base">
              Rezervovať auto
              <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-12 px-6 sm:px-8 text-base bg-white/90 md:bg-transparent border-white md:border-input text-black md:text-foreground hover:bg-white/80 md:hover:bg-accent"
            >
              Naše vozidlá
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 mt-6 text-xs sm:text-sm">
            <div className="flex items-center gap-1 text-white md:text-muted-foreground">
              <Check className="size-3 sm:size-4 text-primary" />
              <span>Bezplatná konzultácia</span>
            </div>
            <div className="flex items-center gap-1 text-white md:text-muted-foreground">
              <Check className="size-3 sm:size-4 text-primary" />
              <span>Luxusné vozidlá</span>
            </div>
            <div className="flex items-center gap-1 text-white md:text-muted-foreground">
              <Check className="size-3 sm:size-4 text-primary" />
              <span>Mladý elegantný šofér</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
