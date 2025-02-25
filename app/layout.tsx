import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

// components
import Header from "@/components/Header"
import PageTransition from "@/components/PageTransition"
import StairTransition from "@/components/StairTransition"
import TopLeftImg from "@/components/TopLeftImage"
import ParticlesContainer from "@/components/ParticlesContainer"
import Circles from "@/components/Circle"
import { Providers } from "@/components/providers"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Usman.",
  description: "My portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-[#FFFFF0] dark:bg-[#1c1c22] ${jetbrainsMono.variable}`}
      >
        <Providers>
          {/* <ParticlesContainer /> */}
          {/* <TopLeftImg /> */}
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </Providers>
      </body>
    </html>
  )
}
