import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import ReactQueryProvider from "@/providers/react-query-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ITALVEN - Plataforma de Repuestos Automotrices",
  description:
    "Plataforma informativa líder en repuestos automotrices. Encuentra proveedores, catálogos y productos de calidad para tu negocio automotriz.",
  keywords: ["repuestos automotrices", "auto parts", "proveedores", "ITALVEN", "catálogo de repuestos"],
  authors: [{ name: "ITALVEN" }],
  openGraph: {
    title: "ITALVEN - Plataforma de Repuestos Automotrices",
    description: "Plataforma informativa líder en repuestos automotrices",
    type: "website",
    locale: "es_ES",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <ReactQueryProvider>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </ReactQueryProvider>
        
      </body>
    </html>
  )
}
