"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin } from "lucide-react"

interface SupplierMapProps {
  nombre: string
  ubicacion?: {
    lat: number
    lng: number
  }
  direccion: string
}

export function SupplierMap({ nombre, ubicacion, direccion }: SupplierMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    if (!mapRef.current || !ubicacion || typeof window === "undefined") return

    const initMap = async () => {
      try {
        const L = await import("leaflet")
        await import("leaflet/dist/leaflet.css")

        // Fix for default markers in Leaflet with webpack
        delete (L.Icon.Default.prototype as any)._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
          iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        })

        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove()
        }

        const map = L.map(mapRef.current).setView([ubicacion.lat, ubicacion.lng], 15)

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 19,
        }).addTo(map)

        L.marker([ubicacion.lat, ubicacion.lng])
          .addTo(map)
          .bindPopup(`<strong>${nombre}</strong><br>${direccion}`)
          .openPopup()

        mapInstanceRef.current = map
      } catch (error) {
        console.error("Error loading map:", error)
      }
    }

    initMap()

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [ubicacion, nombre, direccion])

  if (!ubicacion) {
    return (
      <Card>
        <CardContent className="p-12 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
            <MapPin className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Ubicación no disponible</h3>
          <p className="text-muted-foreground">No se ha proporcionado información de ubicación</p>
        </CardContent>
      </Card>
    )
  }

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${ubicacion.lat},${ubicacion.lng}`

  return (
    <Card>
      <CardContent className="p-0">
        <div ref={mapRef} className="w-full h-[400px] rounded-t-xl" />
        <div className="p-4">
          <Button asChild className="w-full">
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Abrir en Google Maps
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
