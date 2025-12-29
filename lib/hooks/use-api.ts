"use client"

import { useQuery, type UseQueryOptions } from "@tanstack/react-query"
import { apiClient, type Repuesto } from "@/lib/api"

// Repuestos hooks
export function useRepuestos(params?: {
  categoria?: string
  busqueda?: string
  page?: number
  limit?: number
}) {
  return useQuery({
    queryKey: ["repuestos", params],
    queryFn: () => apiClient.getRepuestos(params),
  })
}

export function useRepuesto(id: string, options?: Omit<UseQueryOptions<Repuesto>, "queryKey" | "queryFn">) {
  return useQuery({
    queryKey: ["repuesto", id],
    queryFn: () => apiClient.getRepuesto(id),
    enabled: !!id,
    ...options,
  })
}

// Proveedores hooks
export function useProveedores() {
  return useQuery({
    queryKey: ["proveedores"],
    queryFn: () => apiClient.getProveedores(),
  })
}

export function useProveedor(id: string) {
  return useQuery({
    queryKey: ["proveedor", id],
    queryFn: () => apiClient.getProveedor(id),
    enabled: !!id,
  })
}

export function useProveedoresByRepuesto(repuestoId: string) {
  return useQuery({
    queryKey: ["proveedores", "repuesto", repuestoId],
    queryFn: () => apiClient.getProveedoresByRepuesto(repuestoId),
    enabled: !!repuestoId,
  })
}

// Categorías hooks
export function useCategorias() {
  return useQuery({
    queryKey: ["categorias"],
    queryFn: () => apiClient.getCategorias(),
  })
}
