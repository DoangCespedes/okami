'use client';

import { HeroSlider } from "@/components/home/hero-slider"
import { OkamiBrandShowcase } from "@/components/home/okami-brand-showcase"
import { FeaturedProducts } from "@/components/home/featured-products"
import { BrandsSection } from "@/components/home/brands-section"
import { AboutSection } from "@/components/home/about-section"
import { CTASection } from "@/components/home/cta-section"
import { QueryProvider } from "@/components/providers/query-provider"
import { useProducts } from "@/hooks/api/useProducts"
import { useOkamiClients } from "@/hooks/api/useOkamiClients";

export default function HomePage() {

  const { data, isLoading, error } = useProducts();
  const { data: dataClients, isLoading: isLoadingClients, error: errorClients } = useOkamiClients();

  console.log(data, "AQUI VEMOS TODO LOS PRODUCTOS")
  console.log(dataClients, "AQUI VEMOS TODOS LOS CLIENTES")

  return (
    <QueryProvider>
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          <HeroSlider />
          <div style={{display:"flex", justifyContent:"center"}}>
            <OkamiBrandShowcase />
          </div>
          <div style={{display:"flex", justifyContent:"center"}}>
            <FeaturedProducts />
          </div>
          <div style={{display:"flex", justifyContent:"center"}}>
            <BrandsSection />
          </div>
          <div style={{display:"flex", justifyContent:"center"}}>
            <AboutSection />
          </div>
            <CTASection />
        </main>
      </div>
    </QueryProvider>
  )
}
