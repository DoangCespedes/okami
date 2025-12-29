import Image from "next/image"

const brands = [
  { name: "Bosch", logo: "/bosch-logo.jpg" },
  { name: "NGK", logo: "/ngk-logo.jpg" },
  { name: "Monroe", logo: "/monroe-logo.png" },
  { name: "Brembo", logo: "/brembo-logo.png" },
  { name: "Mahle", logo: "/mahle-logo.jpg" },
  { name: "Gates", logo: "/generic-gate-logo.png" },
]

export function BrandsSection() {
  return (
    <section className="py-16 bg-background border-y">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Marcas Asociadas</h2>
          <p className="text-muted-foreground">Trabajamos con las marcas líderes de la industria automotriz</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
