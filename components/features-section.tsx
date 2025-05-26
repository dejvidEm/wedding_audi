"use client"

import { motion } from "framer-motion"
import { BarChart, Layers, Shield, Star, Users, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ParallaxFeatures } from "@/components/parallax-features"

export function FeaturesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: "Luxusné audi s8 Plus",
      description: "Zvuk ladený na mieru, 700PS a 900Nm, všetko po čom si kedy túžil",
      icon: <Star className="size-5" />,
    },
    {
      title: "Profesionálny šofér",
      description: "Profesionálny, upravený a reprezentatívny šofér k vašim službám",
      icon: <BarChart className="size-5" />,
    },
    {
      title: "Podpora 24/7",
      description: "Náš oddaný tím je vždy k dispozícii na pomoc s akýmikoľvek otázkami alebo obavami.",
      icon: <Zap className="size-5" />,
    },
  ]

  return (
    <section id="sluzby" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            AUDI s8 Plus
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Dokonalé auto pre váš{" "}
            <span className="text-foreground relative">
              dokonalý
              <span
                className="absolute -bottom-1 left-0 right-0 h-[3px]"
                style={{
                  background: "linear-gradient(90deg, hsl(36, 60%, 60%), hsl(36, 60%, 60%) 70%, transparent 100%)",
                  borderRadius: "2px",
                  transform: "rotate(-1deg)",
                  opacity: 0.8,
                }}
              ></span>
            </span>{" "}
            svadobný deň
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
          Elegantná limuzína s dušou športovca.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-24"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={item}>
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Parallax Features Section */}
        <ParallaxFeatures />
      </div>
    </section>
  )
}
