import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t" style={{display:"flex", justifyContent:"center"}}>
      <div className="container py-12 md:py-16" >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/lg.png" alt="Italven Logo" width={120} height={40} />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Plataforma líder en información de repuestos automotrices. Conectamos proveedores con profesionales del
              sector.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/catalogo" className="hover:text-primary transition-colors">
                  Catálogo de Productos
                </Link>
              </li>
              <li>
                <Link href="/proveedores" className="hover:text-primary transition-colors">
                  Directorio de Proveedores
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/catalogo?categoria=frenos" className="hover:text-primary transition-colors">
                  Sistema de Frenos
                </Link>
              </li>
              <li>
                <Link href="/catalogo?categoria=motor" className="hover:text-primary transition-colors">
                  Componentes de Motor
                </Link>
              </li>
              <li>
                <Link href="/catalogo?categoria=suspension" className="hover:text-primary transition-colors">
                  Suspensión
                </Link>
              </li>
              <li>
                <Link href="/catalogo?categoria=transmision" className="hover:text-primary transition-colors">
                  Transmisión
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Caracas, Venezuela</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+58 412 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>contacto@italven.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ITALVEN. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
