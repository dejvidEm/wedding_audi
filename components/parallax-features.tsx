"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const IMG_PADDING = 12

export function ParallaxFeatures() {
  return (
    <div className="bg-background">
      <TextParallaxContent
        imgUrl="/photos/prva1.jpg"
        subheading="Elegance"
        heading="Unleashed with class."
      >
        <ExampleContent
          title="Tvoríme nezabudnuteľné chvíle"
description="Doprajte si príchod na svadbu vo veľkom štýle. Naša Audi S8 s unikátnym zvukom a eleganciou dodá vášmu veľkému dňu tú pravú iskru a nezabudnuteľnú atmosféru."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/photos/prva.webp"
        subheading="Presence"
        heading="Defined by distinction."
      >
        <ExampleContent
          title="Štýl, ktorý ohúri"
description="Luxusná limuzína Audi S8 spája komfort, výkon a ladný dizajn. Ideálna voľba pre tých, ktorí chcú na svojej svadbe niečo výnimočné – niečo, čo zanechá dojem."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/photos/tretia.jpg"
        subheading="Performance"
        heading="Tailored. Timeless. Thrilling."
      >
        <ExampleContent
          title="Príchod, na ktorý sa nezabúda"
description="Zabudnite na klasiku. Vaša svadobná jazda môže byť zážitkom, o ktorom sa bude hovoriť. Audi S8 s na mieru ladeným zvukom prinesie energiu, štýl a eleganciu v jednom."
        />
      </TextParallaxContent>
    </div>
  )
}

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string
  subheading: string
  heading: string
  children: React.ReactNode
}) => {
  return (
    <div className="px-2 md:px-3">
      <div className="relative h-[100vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  )
}

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - 1rem)`,
        top: "0.5rem",
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  )
}

const OverlayCopy = ({ subheading, heading }: { subheading: string; heading: string }) => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [250, -250])
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">{subheading}</p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  )
}

const ExampleContent = ({
  title,
  description,
}: {
  title: string
  description: string
}) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">{title}</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-8 text-xl text-muted-foreground md:text-2xl">{description}</p>
      <Button size="lg" className="group" onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}>
        Naše balíčky{" "}
        <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Button>
    </div>
  </div>
)
