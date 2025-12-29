import { Button } from "@/components/ui/button"
import { ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container relative py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Plataforma Líder en Repuestos Automotrices
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Encuentra el Repuesto <span className="text-primary">Perfecto</span> para tu Vehículo
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-xl">
              Conectamos talleres mecánicos y profesionales del sector automotriz con los mejores proveedores de
              repuestos. Información detallada, proveedores verificados, ubicaciones exactas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <Link href="/catalogo">
                  Explorar Catálogo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/proveedores">
                  <Search className="mr-2 h-4 w-4" />
                  Buscar Proveedores
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Proveedores</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Repuestos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Categorías</div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px] animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <div className="relative h-full flex items-center justify-center">
              <Image
                src="/automotive-parts-premium-display.jpg"
                alt="Repuestos Automotrices Premium"
                width={600}
                height={600}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
