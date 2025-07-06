"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "Ako funguje rezervácia svadobného auta?",
      answer:
        "Rezervácia je jednoduchá. Kontaktujte nás telefonicky alebo cez formulár, dohodneme si stretnutie a spoločne vyberieme ideálne vozidlo pre váš veľký deň. Rezerváciu potvrdíme zálohou.",
    },
    {
      question: "Môžem si neskôr zmeniť typ vozidla?",
      answer:
        "Áno, zmeny sú možné až do 14 dní pred termínom svadby, v závislosti od dostupnosti vozidiel. Za zmeny môže byť účtovaný poplatok.",
    },
    {
      question: "Je v cene zahrnutý šofér?",
      answer:
        "Áno, všetky naše balíčky zahŕňajú mladého, elegantného a profesionálneho šoféra s dlhoročnými skúsenosťami so svadobnými udalosťami. Náš šofér je štýlový, reprezentatívny a vždy upravený.",
    },
    {
      question: "Ponúkate zľavy pre svadby mimo sezóny?",
      answer:
        "Áno, ponúkame špeciálne ceny pre svadby v mesiacoch november až marec. Kontaktujte nás pre viac informácií o aktuálnych zľavách.",
    },
    {
      question: "Ako ďaleko môžeme cestovať?",
      answer:
        "Poskytujeme služby po celom Slovensku. Pre vzdialenosti nad 100 km od Bratislavy môže byť účtovaný príplatok za dopravu.",
    },
    {
      question: "Aký typ podpory ponúkate?",
      answer:
        "Poskytujeme kompletnú podporu od rezervácie až po deň svadby. Náš tím je k dispozícii 24/7 počas vášho svadobného dňa pre akékoľvek potreby.",
    },
  ]

  return (
    <section id="faq" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Často kladené{" "}
              <span className="text-primary relative">
                otázky
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
              Nájdite odpovede na bežné otázky o našich službách prenájmu svadobných vozidiel. Ak nenájdete odpoveď na
              svoju otázku, neváhajte nás kontaktovať.
            </p>
          </motion.div>

          {/* Right side - FAQ Accordion */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${i}`}
                    className="border border-border/40 rounded-xl px-6 py-2 mb-4 bg-gradient-to-b from-background to-muted/10 backdrop-blur"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
