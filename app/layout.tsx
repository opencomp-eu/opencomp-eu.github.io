import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import BackgroundPattern from "@/components/background-pattern"
import { I18nProvider } from "@/components/i18n-provider"

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Tell Font Awesome to skip adding CSS automatically since it's already imported
config.autoAddCss = false


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OpenComp - Digital Sovereignty for European Organizations",
  description: "Helping European organizations achieve digital sovereignty through open, auditable, and controllable systems. Our first product Morpheus helps you switch to the Matrix protocol.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <I18nProvider>
            <BackgroundPattern>{children}</BackgroundPattern>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
