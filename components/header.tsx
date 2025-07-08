"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  activeSection: string
}

export function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["sluzby", "galeria", "referencie", "cennik", "faq", "kontakt"]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/70 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className={`container flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-16 pt-2" : "h-20 pt-4"}`}>
        <div className="flex items-center gap-2 font-bold pt-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-05-20_at_22.44.33-removebg-preview-v05dT0MnwJmO8v9Fb9j7yxE3topCe6.png"
            alt="Wedding Audi Logo"
            width={240}
            height={70}
            className={`w-auto transition-all duration-300 ${isScrolled ? "h-12" : "h-20"}`}
            style={{ cursor: 'pointer' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            {navItems.map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className={`text-sm font-medium transition-colors ${
                  activeSection === section
                    ? "text-foreground font-semibold"
                    : isScrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-foreground/90 hover:text-foreground"
                }`}
                onClick={e => {
                  if (section !== 'kontakt') {
                    e.preventDefault();
                    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {section === "sluzby"
                  ? "Služby"
                  : section === "galeria"
                    ? "Galéria"
                    : section === "referencie"
                      ? "Referencie"
                      : section === "cennik"
                        ? "Cenník"
                        : section === "faq"
                          ? "FAQ"
                          : section === "kontakt"
                            ? "Kontakt"
                            : section}
              </Link>
            ))}
          </nav>
          <Button className="rounded-full" onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}>
            Kontaktujte nás
            <ChevronRight className="ml-1 size-4" />
          </Button>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 inset-x-0 bg-white/90 backdrop-blur-sm border-b"
        >
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className={`py-2 text-sm font-medium ${
                  activeSection === section ? "text-foreground font-semibold" : ""
                }`}
                onClick={e => {
                  if (section !== 'kontakt') {
                    e.preventDefault();
                    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
              >
                {section === "sluzby"
                  ? "Služby"
                  : section === "galeria"
                    ? "Galéria"
                    : section === "referencie"
                      ? "Referencie"
                      : section === "cennik"
                        ? "Cenník"
                        : section === "faq"
                          ? "FAQ"
                          : section === "kontakt"
                            ? "Kontakt"
                            : section}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Button className="rounded-full" onClick={() => { setMobileMenuOpen(false); document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' }) }}>
                Kontaktujte nás
                <ChevronRight className="ml-1 size-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
