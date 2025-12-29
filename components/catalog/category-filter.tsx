"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCategorias } from "@/lib/hooks/use-api"
import { Filter, X } from "lucide-react"
import { useState } from "react"

interface CategoryFilterProps {
  selectedCategory?: string
  onCategoryChange: (category: string | undefined) => void
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const { data: categorias, isLoading } = useCategorias()
  const [isOpen, setIsOpen] = useState(false)

  if (isLoading) {
    return (
      <div className="flex gap-2 overflow-x-auto pb-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-9 w-24 bg-muted animate-pulse rounded-full" />
        ))}
      </div>
    )
  }

  const displayedCategories = isOpen ? categorias : categorias?.slice(0, 6)

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium">Categorías</span>
        {selectedCategory && (
          <Badge variant="secondary" className="ml-auto">
            1 filtro activo
          </Badge>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === undefined ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(undefined)}
          className="rounded-full"
        >
          Todas
        </Button>

        {displayedCategories?.map((categoria) => (
          <Button
            key={categoria.id}
            variant={selectedCategory === categoria.id ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(categoria.id)}
            className="rounded-full"
          >
            {categoria.nombre}
            {selectedCategory === categoria.id && <X className="ml-2 h-3 w-3" />}
          </Button>
        ))}

        {categorias && categorias.length > 6 && (
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="rounded-full">
            {isOpen ? "Ver menos" : `Ver más (${categorias.length - 6}+)`}
          </Button>
        )}
      </div>
    </div>
  )
}
