"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Camera, Video, ArrowRight, ExternalLink, Play, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function DroneServicesBanner() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
  const [currentShowcase, setCurrentShowcase] = useState(0)

  const showcaseItems = [
    {
      type: "image",
      src: "/photos/drone.jpg",
      alt: "Aerial wedding ceremony shot",
      title: "Ceremónia z výšky",
    },
    {
      type: "image",
      src: "/photos/drone1.jpg",
      alt: "Wedding venue aerial view",
      title: "Svadobné miesto",
    },
    {
      type: "video",
      src: "/videos/drone.mp4",
      alt: "Wedding drone video",
      title: "Svadobné video",
    },
    {
      type: "image",
      src: "/photos/drone3.jpg",
      alt: "Couple aerial portrait",
      title: "Portrét páru",
    },
  ]

  const nextShowcase = () => {
    setCurrentShowcase((prev) => (prev + 1) % showcaseItems.length)
  }

  const prevShowcase = () => {
    setCurrentShowcase((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length)
  }

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.02)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px]"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <Badge className="rounded-full px-4 py-2 text-sm font-medium bg-primary/20 text-primary border-primary/30">
                <Camera className="w-4 h-4 mr-2" />
                Partnerské služby
              </Badge>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Zachyťte svoju svadbu{" "}
                <span className="text-primary relative">
                  z výšky
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute -bottom-2 left-0 right-0 h-[4px] bg-primary/80 rounded-full origin-left"
                  ></motion.span>
                </span>
              </h2>

              <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                Profesionálne drone snímanie a filmovanie pre váš výnimočný deň. Pridajte úchvatné letecké zábery do
                svojho svadobného balíčka.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Video className="w-5 h-5" />, title: "4K Video", desc: "Ultra HD kvalita" },
                { icon: <Camera className="w-5 h-5" />, title: "Letecké foto", desc: "Profesionálne zábery" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                    <p className="text-sm text-slate-400">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300 group transform hover:-translate-y-1"
              >
                Pridať do balíčka
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-black hover:bg-white/10 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 group"
              >
                Navštíviť web
                <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </motion.div>

            {/* Business Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-6 border-t border-white/10"
            >
              <p className="text-slate-400 text-sm mb-2">Partnerská služba od</p>
              <h3 className="text-white font-bold text-lg">SkyLYX Drone Services</h3>
              <p className="text-slate-400 text-sm">Profesionálne letecké snímanie od roku 2020</p>
            </motion.div>
          </motion.div>

          {/* Right side - Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Showcase */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl">
              <div className="relative w-full h-full">
                <Image
                  src={showcaseItems[currentShowcase].src || "/placeholder.svg"}
                  alt={showcaseItems[currentShowcase].alt}
                  fill
                  className="object-cover"
                />

                {/* Video Play Button */}
                {showcaseItems[currentShowcase].type === "video" && (
                  <button
                    onClick={() => setSelectedVideo(currentShowcase)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors duration-300 group"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </button>
                )}

                {/* Overlay with title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h4 className="text-white font-semibold text-lg">{showcaseItems[currentShowcase].title}</h4>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevShowcase}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:bg-black/70 transition-all duration-300 flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextShowcase}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:bg-black/70 transition-all duration-300 flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-3 mt-6 justify-center">
              {showcaseItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentShowcase(index)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentShowcase
                      ? "border-primary shadow-lg shadow-primary/30"
                      : "border-white/20 hover:border-white/40"
                  }`}
                >
                  <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-cover" />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Play className="w-3 h-3 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-6 -left-6 bg-primary/90 backdrop-blur-sm rounded-2xl p-4 border border-primary/30"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">200+</div>
                <div className="text-xs text-primary-foreground/80">Svadieb</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4K</div>
                <div className="text-xs text-white/80">Ultra HD</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full aspect-video rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                className="w-full h-full object-cover" 
                controls 
                autoPlay 
                poster={showcaseItems[selectedVideo].src}
                onError={(e) => {
                  console.error('Video failed to load:', e);
                  const videoElement = e.target as HTMLVideoElement;
                  videoElement.style.display = 'none';
                }}
              >
                <source 
                  src={showcaseItems[selectedVideo].src} 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>

              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:bg-black/70 transition-all duration-300 flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
