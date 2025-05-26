"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Play, Pause } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function PhoneVideoSection() {
  const [isPlaying, setIsPlaying] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const phoneY = useTransform(scrollYProgress, [0, 0.5, 1], [150, 0, -150])
  const phoneRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 0, 8])
  const phoneScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9])
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const toggleVideo = () => {
    const video = document.getElementById("phone-video") as HTMLVideoElement
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
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Content Side */}
          <motion.div style={{ opacity: textOpacity }} className="space-y-8 lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Nezabudnuteľný zážitok
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Váš svadobný deň{" "}
                <span className="text-primary relative">
                  v plnom prúde
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-[3px]"
                    style={{
                      background: "linear-gradient(90deg, hsl(36, 60%, 60%), hsl(36, 60%, 60%) 70%, transparent 100%)",
                      borderRadius: "2px",
                      transform: "rotate(-1deg)",
                      opacity: 0.8,
                    }}
                  ></span>
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Audi S8 nie je len dopravný prostriedok – je to kulisa vašich spomienok.
S jej unikátnym vzhľadom a ladeným zvukom dodá vašim fotkám aj videám atmosféru ako z filmu.
Každý záber bude štýlový, každý moment nezabudnuteľný.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="grid gap-4">
                {[
                  { title: "Nezabudnuteľné zábery", desc: "Zdieľajte okamžiky z Vášho dňa" },
                  { title: "Fotogenické vozidlo", desc: "Profesionálne zábery kedykoľvek, z akehokoľvek uhlu" },
                  { title: "Sociálne médiá", desc: "Získa si nie len Vás, ale aj Vašich followerov" },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 px-8 group">
                Kontaktuje Nás
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  →
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Phone Video Side */}
          <motion.div style={{ y: phoneY, rotate: phoneRotate, scale: phoneScale }} className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Phone Frame */}
              <div className="relative w-[280px] h-[560px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl border border-gray-700">
                {/* Screen */}
                <div className="relative w-full h-full bg-black rounded-[2.2rem] overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-30 border-l border-r border-gray-800"></div>

                  {/* Speaker */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-700 rounded-full z-30"></div>

                  {/* Front Camera */}
                  <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 translate-x-8 w-2 h-2 bg-gray-800 rounded-full z-30"></div>

                  {/* Video */}
                  <video
                    id="phone-video"
                    className="absolute inset-0 w-full h-full object-cover rounded-[2.2rem]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster="/placeholder.svg?height=560&width=280&query=luxury wedding car vertical mobile"
                    onError={(e) => {
                      console.error('Video loading error:', e);
                      const videoElement = e.target as HTMLVideoElement;
                      videoElement.style.display = 'none';
                    }}
                  >
                    <source src="/videos/video2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 rounded-[2.2rem]"></div>

                  {/* Play/Pause Button */}
                  <button
                    onClick={toggleVideo}
                    className="absolute bottom-8 right-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 z-20"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </button>

                  {/* Status Bar */}
                  <div className="absolute top-12 left-6 right-6 flex justify-between items-center text-white text-xs z-20 font-medium">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="flex gap-0.5">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                      </div>
                      <svg className="w-6 h-3 ml-1" viewBox="0 0 24 12" fill="white">
                        <rect x="1" y="3" width="18" height="6" rx="2" fill="none" stroke="white" strokeWidth="1" />
                        <rect x="20" y="5" width="2" height="2" rx="0.5" fill="white" />
                      </svg>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-20"></div>
                </div>

                {/* Phone Buttons - Volume and Power */}
                <div className="absolute left-[-3px] top-24 w-1 h-8 bg-gray-600 rounded-l"></div>
                <div className="absolute left-[-3px] top-36 w-1 h-12 bg-gray-600 rounded-l"></div>
                <div className="absolute right-[-3px] top-32 w-1 h-16 bg-gray-600 rounded-r"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 w-16 h-16 bg-primary/20 rounded-full blur-xl"
              ></motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -right-8 w-20 h-20 bg-primary/15 rounded-full blur-xl"
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
