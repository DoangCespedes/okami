"use client"

import { SupplierMap } from "@/components/supplier/supplier-map"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { QueryProvider } from "@/components/providers/query-provider"
import { useProveedor } from "@/lib/hooks/use-api"
import { ArrowLeft, Building2, Mail, MapPin, Phone, FileText } from "lucide-react"
import Link from "next/link"
import { use } from "react"

interface SupplierDetailPageProps {
  params: Promise<{ id: string }>
}

function SupplierDetailContent({ params }: { params: { id: string } }) {
  const { data: proveedor, isLoading, error } = useProveedor(params.id)

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 py-12">
          <div className="container">
            <div className="space-y-6">
              <div className="h-10 w-48 bg-muted animate-pulse rounded" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="h-96 bg-muted animate-pulse rounded-xl" />
                <div className="h-96 bg-muted animate-pulse rounded-xl" />
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (error || !proveedor) {
    return (
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 py-12">
          <div className="container text-center">
            <h1 className="text-3xl font-bold mb-4">Proveedor no encontrado</h1>
            <p className="text-muted-foreground mb-6">El proveedor que buscas no existe o ha sido eliminado.</p>
            <Button asChild>
              <Link href="/catalogo">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al Catálogo
              </Link>
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="border-b bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container py-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/catalogo">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver
              </Link>
            </Button>

            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shrink-0">
                <Building2 className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{proveedor.nombre}</h1>
                <p className="text-lg text-muted-foreground">{proveedor.descripcion}</p>
              </div>
            </div>
          </div>
        </div>

        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-xl font-bold mb-4">Información de Contacto</h2>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Ubicación</p>
                          <p className="font-medium">
                            {proveedor.ciudad}, {proveedor.pais}
                          </p>
                        </div>
                      </div>

                      {proveedor.telefono && (
                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Teléfono</p>
                            <a href={`tel:${proveedor.telefono}`} className="font-medium hover:text-primary">
                              {proveedor.telefono}
                            </a>
                          </div>
                        </div>
                      )}

                      {proveedor.correo && (
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Correo Electrónico</p>
                            <a href={`mailto:${proveedor.correo}`} className="font-medium hover:text-primary">
                              {proveedor.correo}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {proveedor.datosLegales && (
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <h2 className="text-xl font-bold">Datos Legales</h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{proveedor.datosLegales}</p>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Ubicación en Mapa</h2>
                <SupplierMap
                  nombre={proveedor.nombre}
                  ubicacion={proveedor.ubicacion}
                  direccion={`${proveedor.ciudad}, ${proveedor.pais}`}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default function SupplierDetailPage(props: SupplierDetailPageProps) {
  const params = use(props.params)
  return (
    <QueryProvider>
      <div style={{display:"flex", justifyContent:"center"}}>
        <SupplierDetailContent params={params} />
      </div>
    </QueryProvider>
  )
}
