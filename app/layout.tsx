import type React from "react"
import "@/styles/globals.css"
import { Inter, Great_Vibes } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })
const greatVibes = Great_Vibes({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes"
})

export const metadata: Metadata = {
  title: "Wedding Audi - Prenájom luxusnej svadobnej limuzíny",
  description:
    "Prenájom luxusnej svadobnej limuzíny pre váš veľký deň. Elegantné auto, profesionálne služby a nezabudnuteľné zážitky.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${greatVibes.variable}`}>{children}</body>
    </html>
  )
}
