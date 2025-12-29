"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { QueryProvider } from "@/components/providers/query-provider"
import { useProveedores } from "@/lib/hooks/use-api"
import { Building2, MapPin, Phone, Mail, Search, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

function ProveedoresContent() {
  const { data: proveedores, isLoading } = useProveedores()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProveedores = proveedores?.filter(
    (p) =>
      p.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.ciudad.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.pais.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-b py-12">
          <div className="container">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Directorio de Proveedores</h1>
                <p className="text-muted-foreground">
                  {proveedores ? `${proveedores.length} proveedores verificados` : "Cargando..."}
                </p>
              </div>
            </div>

            <div className="relative max-w-2xl">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar por nombre, ciudad o país..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
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
            ) : filteredProveedores && filteredProveedores.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProveedores.map((proveedor) => (
                  <Card key={proveedor.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-xl mb-2 line-clamp-1">{proveedor.nombre}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{proveedor.descripcion}</p>
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
                            <span>
                              {proveedor.ciudad}, {proveedor.pais}
                            </span>
                          </div>

                          {proveedor.telefono && (
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                              <a href={`tel:${proveedor.telefono}`} className="hover:text-primary transition-colors">
                                {proveedor.telefono}
                              </a>
                            </div>
                          )}

                          {proveedor.correo && (
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                              <a
                                href={`mailto:${proveedor.correo}`}
                                className="hover:text-primary transition-colors truncate"
                              >
                                {proveedor.correo}
                              </a>
                            </div>
                          )}
                        </div>

                        <Button className="w-full" asChild>
                          <Link href={`/proveedores/${proveedor.id}`}>
                            Ver Perfil Completo
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-4">
                  <Building2 className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No se encontraron proveedores</h3>
                <p className="text-muted-foreground">Intenta buscar con otros términos</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

export default function ProveedoresPage() {
  return (
    <QueryProvider>
      <div style={{display:"flex", justifyContent:"center"}}>
        <ProveedoresContent />
      </div>
    </QueryProvider>
  )
}
