"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CalendarIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after submission
    e.currentTarget.reset()

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="kontakt" className="w-full py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
          {/* Left side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-background p-6 rounded-xl border border-border/40 shadow-lg"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Celé meno
                </label>
                <Input id="name" placeholder="napr. Ján a Zuzana Novákovi" required className="bg-background" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Emailová adresa
                </label>
                <Input id="email" type="email" placeholder="priklad@email.com" required className="bg-background" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefónne číslo
                </label>
                <Input id="phone" type="tel" placeholder="+421 900 123 456" className="bg-background" />
              </div>

              <div>
                <label htmlFor="venue" className="block text-sm font-medium mb-2">
                  Miesto svadby
                </label>
                <Input id="venue" placeholder="Názov miesta alebo lokácia" className="bg-background" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-2">
                    Dátum svadby
                  </label>
                  <div className="relative">
                    <Input
                      id="date"
                      type="date"
                      className={cn("bg-background pl-10", !isClient && "appearance-none")}
                    />
                    <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  </div>
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium mb-2">
                    Čas svadby
                  </label>
                  <div className="relative">
                    <Input id="time" type="time" className="bg-background" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Správa
                </label>
                <Textarea
                  id="message"
                  placeholder="Povedzte nám o svojich svadobných plánoch a ako vám môžeme pomôcť..."
                  rows={4}
                  className="resize-none bg-background"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-primary hover:bg-primary/90 h-12"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Odosielam..." : isSubmitted ? "Správa odoslaná!" : "Odoslať správu"}
              </Button>

              {isSubmitted && (
                <p className="text-sm text-green-600 text-center">
                  Ďakujeme za vašu správu! Čoskoro sa vám ozveme, aby sme prediskutovali váš výnimočný deň.
                </p>
              )}
            </form>
          </motion.div>

          {/* Right side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Kontakt
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Spojte sa{" "}
                <span className="text-primary relative">
                  s nami
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
                Pripravení začať plánovať svadbu svojich snov? Spojte sa s naším tímom odborníkov pre bezplatnú
                konzultáciu.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefón</h4>
                  <p className="text-muted-foreground">+421 900 123 456</p>
                  <p className="text-sm text-muted-foreground">Pondelok - Piatok: 9:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">kontakt@weddingaudi.sk</p>
                  <p className="text-sm text-muted-foreground">Odpovieme do 24 hodín</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Adresa</h4>
                  <p className="text-muted-foreground">Svadobná 123</p>
                  <p className="text-muted-foreground">811 04 Bratislava</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Otváracie hodiny</h4>
                  <p className="text-muted-foreground">Po - Pi: 9:00 - 18:00</p>
                  <p className="text-muted-foreground">So: 10:00 - 16:00</p>
                  <p className="text-muted-foreground">Ne: Zatvorené</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
