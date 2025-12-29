"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ImageGallery } from "@/components/product/image-gallery"
import { ProductInfo } from "@/components/product/product-info"
import { SupplierList } from "@/components/product/supplier-list"
import { Button } from "@/components/ui/button"
import { QueryProvider } from "@/components/providers/query-provider"
import { useRepuesto } from "@/lib/hooks/use-api"
import { ArrowLeft, Store } from "lucide-react"
import Link from "next/link"
import { use } from "react"

interface ProductDetailPageProps {
  params: Promise<{ id: string }>
}

function ProductDetailContent({ params }: { params: { id: string } }) {
  const { data: product, isLoading, error } = useRepuesto(params.id)

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="aspect-square bg-muted animate-pulse rounded-2xl" />
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-muted animate-pulse rounded-lg" />
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-10 w-3/4 bg-muted animate-pulse rounded" />
                <div className="h-6 w-full bg-muted animate-pulse rounded" />
                <div className="h-32 w-full bg-muted animate-pulse rounded" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 py-12">
          <div className="container text-center">
            <h1 className="text-3xl font-bold mb-4">Producto no encontrado</h1>
            <p className="text-muted-foreground mb-6">El repuesto que buscas no existe o ha sido eliminado.</p>
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
        <div className="border-b bg-muted/30">
          <div className="container py-6">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/catalogo">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al Catálogo
              </Link>
            </Button>
          </div>
        </div>

        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <ImageGallery images={product.imagenes} alt={product.nombre} />
              <ProductInfo product={product} />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Store className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Proveedores Disponibles</h2>
                  <p className="text-muted-foreground">Contacta directamente con los proveedores</p>
                </div>
              </div>
              <SupplierList repuestoId={params.id} />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default function ProductDetailPage(props: ProductDetailPageProps) {
  const params = use(props.params)
  return (
    <QueryProvider>
      <div style={{display:"flex", justifyContent:"center"}}>
        <ProductDetailContent params={params} />
      </div>
    </QueryProvider>
  )
}
