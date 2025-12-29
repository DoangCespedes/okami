'use client';

import { useQuery } from "@tanstack/react-query";
import { getProductsByBrand } from "@/services/products.service";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products", "brand-51"],
    queryFn: getProductsByBrand,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};
