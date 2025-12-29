import { Zap, Shield, Award, TrendingUp } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Shield,
    title: "Calidad Garantizada",
    description: "Certificación ISO 9001. Todos nuestros productos OKAMI cumplen con estándares internacionales.",
  },
  {
    icon: Zap,
    title: "Alto Rendimiento",
    description: "Tecnología japonesa de última generación para máximo desempeño en cualquier condición.",
  },
  {
    icon: Award,
    title: "Garantía Extendida",
    description: "Respaldo de fábrica con garantía extendida en todos los productos OKAMI.",
  },
  {
    icon: TrendingUp,
    title: "Mejor Precio",
    description: "Relación calidad-precio imbatible. Ahorra hasta 30% comparado con marcas premium.",
  },
]

export function OkamiBrandShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        {/* Brand Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider">
            Marca Oficial
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-balance">
            ¿Por qué elegir <span className="text-primary">OKAMI</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            OKAMI representa lo mejor de la ingeniería japonesa aplicada a repuestos automotrices. Calidad premium al
            alcance de tu taller.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Brand Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-card rounded-2xl p-8 md:p-12 border border-border">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-black">
              Tecnología <span className="text-primary">OKAMI</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              OKAMI nace de la fusión entre tradición japonesa y tecnología de vanguardia. Cada componente es diseñado y
              probado bajo los más rigurosos estándares de calidad.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Con más de 20 años de experiencia en el mercado automotriz, OKAMI se ha consolidado como la marca de
              confianza para talleres y profesionales que buscan rendimiento sin comprometer calidad.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span className="text-sm font-medium">Made in Japan</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span className="text-sm font-medium">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span className="text-sm font-medium">Warranty Included</span>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
            <Image src="/okami-technology-showcase.jpg" alt="OKAMI Technology" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
