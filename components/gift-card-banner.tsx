"use client"

import { motion } from "framer-motion"
import { Gift, ArrowRight, Sparkles, Calendar, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GiftCardBanner() {
  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-pulse"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/15 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6"
          >
            <Gift className="w-8 h-8 text-primary" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Darujte{" "}
            <span className="text-primary relative inline-block">
              nezabudnuteľný zážitok
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary/60 rounded-full origin-left"
              ></motion.span>
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Prekvapte svojich blízkych luxusným darčekovým poukazom v hodnote{" "}
            <span className="font-bold text-primary">500€</span> na naše prémiové svadobné služby
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10"
          >
            {[
              { icon: <Calendar className="w-4 h-4" />, text: "Platnosť 2 roky" },
              { icon: <Gift className="w-4 h-4" />, text: "Elegantné balenie" },
              { icon: <Crown className="w-4 h-4" />, text: "Prémiové služby" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-2 text-sm md:text-base"
              >
                <span className="text-primary">{feature.icon}</span>
                <span className="text-muted-foreground">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1"
            >
              <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Kúpiť darčekový poukaz
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/5 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Zistiť viac
            </Button>
          </motion.div>

          {/* Small Print */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-xs text-muted-foreground mt-6"
          >
            Darčekový poukaz je možné použiť na všetky naše služby. Nepodlieha refundácii.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
