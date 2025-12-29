"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <header style={{display:"flex", justifyContent:"center"}}  className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-17 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/lg.png" alt="Italven Logo" width={120} height={40} />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Inicio
          </Link>
          <Link href="/catalogo" className="text-sm font-medium transition-colors hover:text-primary">
            Catálogo
          </Link>
          <Link href="/proveedores" className="text-sm font-medium transition-colors hover:text-primary">
            Proveedores
          </Link>
          <Link href="/contacto" className="text-sm font-medium transition-colors hover:text-primary">
            Contacto
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button className="hidden md:flex" onClick={() => router.push('/catalogo')}> <Search className="h-5 w-5" /> Buscar Repuestos</Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Inicio
            </Link>
            <Link href="/catalogo" className="text-sm font-medium transition-colors hover:text-primary">
              Catálogo
            </Link>
            <Link href="/proveedores" className="text-sm font-medium transition-colors hover:text-primary">
              Proveedores
            </Link>
            <Link href="/contacto" className="text-sm font-medium transition-colors hover:text-primary">
              Contacto
            </Link>
            <Button className="w-full" onClick={() => router.push('/catalogo')}>Buscar Repuestos</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
