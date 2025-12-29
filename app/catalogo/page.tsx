"use client"

import { SearchBar } from "@/components/catalog/search-bar"
import { CategoryFilter } from "@/components/catalog/category-filter"
import { ProductGrid } from "@/components/catalog/product-grid"
import { Pagination } from "@/components/catalog/pagination"
import { QueryProvider } from "@/components/providers/query-provider"
import { useRepuestos } from "@/lib/hooks/use-api"
import { useState } from "react"
import { Package } from "lucide-react"

function CatalogContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  const { data, isLoading } = useRepuestos({
    busqueda: searchQuery,
    categoria: selectedCategory,
    page: currentPage,
    limit: itemsPerPage,
  })

  const totalPages = data ? Math.ceil(data.total / itemsPerPage) : 1

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const handleCategoryChange = (category: string | undefined) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-b py-12">
          <div className="container">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Package className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Catálogo de Repuestos</h1>
                <p className="text-muted-foreground">
                  {data ? `${data.total} repuestos disponibles` : "Explora nuestro catálogo completo"}
                </p>
              </div>
            </div>

            <SearchBar onSearch={handleSearch} initialValue={searchQuery} />
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-8">
          <div className="container">
            <div className="mb-8">
              <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
            </div>

            <ProductGrid products={data?.data || []} isLoading={isLoading} />

            {data && data.total > itemsPerPage && (
              <div className="mt-12">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

export default function CatalogPage() {
  return (
    <QueryProvider>
      <div style={{display:"flex", justifyContent:"center"}}>
        <CatalogContent/>
      </div>
    </QueryProvider>
  )
}
