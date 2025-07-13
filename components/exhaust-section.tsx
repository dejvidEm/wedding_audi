"use client"

import { motion } from "framer-motion"
import { Volume2, Zap, Settings, Instagram } from "lucide-react"

export function ExhaustSection() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Zvuk, ktorý <span className="text-primary">ohúri</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Náš custom exhaust systém vytvára jedinečný zvuk, ktorý doplní váš svadobný deň nezabudnuteľnou atmosférou
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Custom Exhaust */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 h-full border border-gray-700 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Custom Exhaust
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Ručne vyrobený výfukový systém, ktorý poskytuje perfektnú rovnováhu medzi výkonom a elegantným zvukom
              </p>
            </div>
          </motion.div>

          {/* Tuned Sound */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 h-full border border-gray-700 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Volume2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Tuned Sound
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Optimalizovaný zvuk motoru pre maximálny zážitok - od jemného burčania po mohutný ryk
              </p>
            </div>
          </motion.div>

          {/* Performance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 h-full border border-gray-700 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Výkon & Elegancia
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Kombinácia výkonu a štýlu - váš svadobný deň si zaslúži len to najlepšie
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-300 mb-6">
            Sledujte nás na Instagrame a pozrite si viac
          </p>
          <div className="flex justify-center">
            <a 
              href="https://www.instagram.com/weddingaudi.sk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              @weddingaudi
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 