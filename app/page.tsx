"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import WeddingHero from "@/components/hero2"
import { LogosSection } from "@/components/logos-section"
import { FeaturesSection } from "@/components/features-section"
import { GallerySection } from "@/components/gallery-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { PhoneVideoSection } from "@/components/phone-video-section"
import { GiftCardBanner } from "@/components/gift-card-banner"
import { DroneServicesBanner } from "@/components/drone_banner"

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    // Observe all sections with Slovak IDs
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div className="flex min-h-[100dvh] flex-col pt-16">
      <Header activeSection={activeSection} />
      <main className="flex-1">
        <WeddingHero />
        <FeaturesSection />
        <GallerySection />
        <PhoneVideoSection />
        <GiftCardBanner />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <DroneServicesBanner/>
        <FaqSection />
        <ContactFormSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
