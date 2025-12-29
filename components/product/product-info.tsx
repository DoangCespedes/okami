import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Package, Weight, CheckCircle2 } from "lucide-react"
import type { Repuesto } from "@/lib/api"

interface ProductInfoProps {
  product: Repuesto
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Badge>{product.categoria}</Badge>
          <span className="text-sm text-muted-foreground">SKU: {product.id}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{product.nombre}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">{product.descripcion}</p>
      </div>

      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardContent className="p-6">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-4xl font-bold text-primary">${product.precio}</span>
            <span className="text-lg text-muted-foreground">USD</span>
          </div>
          <p className="text-sm text-muted-foreground">Precio de referencia - Consulte con proveedores</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {product.peso && (
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <Weight className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Peso</p>
                <p className="font-semibold">{product.peso} kg</p>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
              <Package className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Proveedores</p>
              <p className="font-semibold">{product.proveedorIds?.length || 0} disponibles</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {product.compatibilidad && product.compatibilidad.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">Compatibilidad</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.compatibilidad.map((vehiculo, index) => (
                <Badge key={index} variant="secondary">
                  {vehiculo}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
