import { CheckCircle2, Package, Shield, Truck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Package,
    title: "Amplio Catálogo",
    description: "Más de 10,000 repuestos de todas las categorías para vehículos de cualquier marca y modelo.",
  },
  {
    icon: Shield,
    title: "Proveedores Verificados",
    description: "Trabajamos únicamente con proveedores certificados y de confianza en toda Venezuela.",
  },
  {
    icon: Truck,
    title: "Ubicación Exacta",
    description: "Localiza proveedores cercanos con mapas interactivos y direcciones precisas.",
  },
  {
    icon: CheckCircle2,
    title: "Información Detallada",
    description: "Especificaciones técnicas completas, compatibilidad y datos de contacto directo.",
  },
]

export function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Plataforma Profesional para el Sector Automotriz
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            ITALVEN es la plataforma líder que conecta talleres mecánicos, distribuidores y profesionales del sector
            automotriz con proveedores confiables de repuestos en todo el país.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
