import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Repuesto } from "@/lib/api"

interface ProductCardProps {
  product: Repuesto
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col">
      <div className="relative h-48 bg-muted overflow-hidden">
        <Image
          src={product.imagenes?.[0] || "/placeholder.svg?height=200&width=300&query=auto+part"}
          alt={product.nombre}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.categoria && <Badge className="absolute top-3 left-3">{product.categoria}</Badge>}
      </div>

      <CardContent className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.nombre}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-1">{product.descripcion}</p>

        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary">${product.precio}</span>
            <span className="text-sm text-muted-foreground">USD</span>
          </div>

          {product.proveedorIds && product.proveedorIds.length > 0 && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{product.proveedorIds.length} proveedores disponibles</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button variant="outline" className="w-full group/btn bg-transparent" asChild>
          <Link href={`/catalogo/${product.id}`}>
            Ver Detalles
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
