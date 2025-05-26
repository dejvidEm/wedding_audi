"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function WeddingHero() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.8])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const toggleVideo = () => {
    const video = document.getElementById("hero-video") as HTMLVideoElement
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <motion.div ref={heroRef} className="relative h-screen w-full overflow-hidden bg-black -mt-16">
      {/* Your Specific Video Background */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 opacity-70 w-full h-[120%] -top-[10%]">
        <video
          id="hero-video"
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/photos/hero.webp"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Simple Elegant Overlay */}
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-black/30" />

      {/* Centered Minimal Content */}
      <motion.div style={{ y: contentY }} className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center max-w-4xl mx-auto mt-24 px-8">
          {/* Clean Typography */}
          <h1 className="text-4xl md:text-xl lg:text-7xl font-bold text-white mb-8 sm:leading-[0.85] overflow-visible">
            <span
              className={`block transition-all duration-2000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}
              style={{ transitionDelay: "0.3s" }}
            >
              Elegancia,
            </span>
            <span
              className={`block text-primary font-black italic transition-all duration-2000 ease-out transform-gpu ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-24 scale-95"}`}
              style={{ transitionDelay: "0.8s", willChange: "transform" }}
            >
              ktorú počuť aj cítiť.
            </span>
          </h1>

          {/* Simple Subtitle */}
          <p
            className={`text-xl md:text-2xl text-white/70 mb-16 font-light leading-relaxed max-w-2xl mx-auto transition-all duration-2000 delay-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
            style={{ transitionDelay: "1.3s" }}
          >
            Štýl, ktorý ohúri. Zvuk, ktorý zanechá dojem.
          </p>

          {/* Clean CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-2000 ease-out ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"}`}
            style={{ transitionDelay: "1.8s" }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 px-12 py-4 text-base font-medium tracking-wide rounded-full shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-500 group transform hover:-translate-y-1"
            >
              Rerezvovať teraz
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white/80 hover:text-white px-12 py-4 text-base font-light tracking-wide rounded-full border border-white/20 hover:border-white/40 backdrop-blur-sm hover:bg-white/5 transition-all duration-500 hover:scale-105 transform hover:-translate-y-1"
            >
              Balíčky
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Minimal Video Control */}
      <button
        onClick={toggleVideo}
        className="absolute bottom-8 right-8 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-xl"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </button>

      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/40 animate-bounce">
        <div className="w-px h-8 bg-white/30 rounded-full"></div>
      </div>
    </motion.div>
  )
}
