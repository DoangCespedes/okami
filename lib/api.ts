const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.italven.com"

import { mockCategorias, mockProveedores, mockRepuestos } from "./mock-data"

export interface Repuesto {
  id: string
  nombre: string
  descripcion: string
  precio: number
  categoria: string
  peso?: number
  compatibilidad?: string[]
  imagenes: string[]
  proveedorIds: string[]
}

export interface Proveedor {
  id: string
  nombre: string
  descripcion: string
  pais: string
  ciudad: string
  telefono: string
  correo: string
  ubicacion?: {
    lat: number
    lng: number
  }
  datosLegales?: string
}

export interface CategoriaRepuesto {
  id: string
  nombre: string
  descripcion?: string
}

class APIClient {
  private baseURL: string
  private useMockData: boolean

  constructor(baseURL: string) {
    this.baseURL = baseURL
    this.useMockData = !process.env.NEXT_PUBLIC_API_URL || baseURL.includes("italven.com")
  }

  private async fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
    if (this.useMockData) {
      await new Promise((resolve) => setTimeout(resolve, 500))
    }

    const response = await fetch(`${this.baseURL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`)
    }

    return response.json()
  }

  // Endpoints de Repuestos
  async getRepuestos(params?: {
    categoria?: string
    busqueda?: string
    page?: number
    limit?: number
  }): Promise<{ data: Repuesto[]; total: number }> {
    if (this.useMockData) {
      let filtered = [...mockRepuestos]

      if (params?.categoria) {
        filtered = filtered.filter((r) => r.categoria === params.categoria)
      }

      if (params?.busqueda) {
        const query = params.busqueda.toLowerCase()
        filtered = filtered.filter(
          (r) =>
            r.nombre.toLowerCase().includes(query) ||
            r.descripcion.toLowerCase().includes(query) ||
            r.compatibilidad?.some((c) => c.toLowerCase().includes(query)),
        )
      }

      const page = params?.page || 1
      const limit = params?.limit || 12
      const start = (page - 1) * limit
      const end = start + limit

      return {
        data: filtered.slice(start, end),
        total: filtered.length,
      }
    }

    const searchParams = new URLSearchParams()
    if (params?.categoria) searchParams.append("categoria", params.categoria)
    if (params?.busqueda) searchParams.append("q", params.busqueda)
    if (params?.page) searchParams.append("page", params.page.toString())
    if (params?.limit) searchParams.append("limit", params.limit.toString())

    const query = searchParams.toString()
    return this.fetchAPI(`/repuestos${query ? `?${query}` : ""}`)
  }

  async getRepuesto(id: string): Promise<Repuesto> {
    if (this.useMockData) {
      const repuesto = mockRepuestos.find((r) => r.id === id)
      if (!repuesto) {
        throw new Error("Repuesto no encontrado")
      }
      return repuesto
    }

    return this.fetchAPI(`/repuestos/${id}`)
  }

  // Endpoints de Proveedores
  async getProveedores(): Promise<Proveedor[]> {
    if (this.useMockData) {
      return mockProveedores
    }

    return this.fetchAPI("/proveedores")
  }

  async getProveedor(id: string): Promise<Proveedor> {
    if (this.useMockData) {
      const proveedor = mockProveedores.find((p) => p.id === id)
      if (!proveedor) {
        throw new Error("Proveedor no encontrado")
      }
      return proveedor
    }

    return this.fetchAPI(`/proveedores/${id}`)
  }

  async getProveedoresByRepuesto(repuestoId: string): Promise<Proveedor[]> {
    if (this.useMockData) {
      const repuesto = mockRepuestos.find((r) => r.id === repuestoId)
      if (!repuesto || !repuesto.proveedorIds) {
        return []
      }
      return mockProveedores.filter((p) => repuesto.proveedorIds.includes(p.id))
    }

    return this.fetchAPI(`/repuestos/${repuestoId}/proveedores`)
  }

  // Endpoints de Categorías
  async getCategorias(): Promise<CategoriaRepuesto[]> {
    if (this.useMockData) {
      return mockCategorias
    }

    return this.fetchAPI("/categorias")
  }
}

export const apiClient = new APIClient(API_BASE_URL)
