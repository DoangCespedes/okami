import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section style={{display:"flex", justifyContent:"center"}} className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container" >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            ¿Listo para Encontrar el Repuesto que Necesitas?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 leading-relaxed">
            Únete a miles de profesionales que confían en ITALVEN para encontrar repuestos de calidad y proveedores
            confiables.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group" asChild>
              <Link href="/catalogo">
                Explorar Catálogo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/contacto">Contactar</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
