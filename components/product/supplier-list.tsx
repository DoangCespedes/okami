"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useProveedoresByRepuesto } from "@/lib/hooks/use-api"

interface SupplierListProps {
  repuestoId: string
}

export function SupplierList({ repuestoId }: SupplierListProps) {
  const { data: proveedores, isLoading } = useProveedoresByRepuesto(repuestoId)

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="h-6 w-48 bg-muted animate-pulse rounded" />
                <div className="h-4 w-full bg-muted animate-pulse rounded" />
                <div className="h-4 w-32 bg-muted animate-pulse rounded" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (!proveedores || proveedores.length === 0) {
    return (
      <Card>
        <CardContent className="p-12 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
            <MapPin className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="font-semibold text-lg mb-2">No hay proveedores disponibles</h3>
          <p className="text-muted-foreground">Actualmente no tenemos proveedores para este repuesto</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {proveedores.map((proveedor) => (
        <Card key={proveedor.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="space-y-3 flex-1">
                <div>
                  <h3 className="font-semibold text-xl mb-1">{proveedor.nombre}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{proveedor.descripcion}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span>
                      {proveedor.ciudad}, {proveedor.pais}
                    </span>
                  </div>

                  {proveedor.telefono && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                      <a href={`tel:${proveedor.telefono}`} className="hover:text-primary transition-colors">
                        {proveedor.telefono}
                      </a>
                    </div>
                  )}

                  {proveedor.correo && (
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                      <a href={`mailto:${proveedor.correo}`} className="hover:text-primary transition-colors">
                        {proveedor.correo}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <Button asChild>
                <Link href={`/proveedores/${proveedor.id}`}>
                  Ver Detalles
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
