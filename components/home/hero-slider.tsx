"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ShoppingCart, Info } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface Slide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  cta: string
  ctaLink: string
  badge?: string
  isFullImage?: boolean
}

const slides: Slide[] = [
  {
    id: 1,
    title: "EL MEJOR REGALO ",
    subtitle: "Es la calidad",
    description:
      "Productos de calidad premium para tu taller. Calidad, confort y seguridad garantizados.",
    image: "/images/haz-20crecertu-20negocio-20en-20diciembre-20con-20nosotros.png",
    cta: "Ver Promociones",
    ctaLink: "/catalogo",
    badge: "PROMOCIÓN",
    isFullImage: false,
  },
  {
    id: 2,
    title: "GARANTÍA EXTENDIDA",
    subtitle: "3 Años de Garantía",
    description:
      "Tu inversión protegida por 3 años completos. Respaldo y confianza en cada repuesto OKAMI.",
    image: "/images/whatsapp-20image-202025-12-12-20at-206.jpeg",
    cta: "Conocer Más",
    ctaLink: "/catalogo",
    badge: "CERTIFICADO",
    isFullImage: false,
  },
  {
    id: 3,
    title: "LA SUSPENSIÓN LÍDER",
    subtitle: "En el Mercado",
    description:
      "OKAMI Shock Absorber: La suspensión líder en el mercado. Calidad, confort y seguridad garantizados.",
    image: "/images/la-20suspesi-c3-b3n-20lider-20en-20el-20mercado.png",
    cta: "Ver Suspensión",
    ctaLink: "/catalogo?categoria=suspension",
    badge: "LÍDER DEL MERCADO",
    isFullImage: false,
  },
  {
    id: 4,
    title: "PEQUEÑAS PIEZAS",
    subtitle: "GRAN suspensión",
    description:
      "El secreto de un viaje suave está aquí. Componentes de suspensión de alta calidad para tu vehículo.",
    image: "/images/peque-c3-b1as-20piezas-2c-20gran-20suspensi-c3-b3n.png",
    cta: "Ver Productos",
    ctaLink: "/catalogo",
    badge: "CALIDAD PREMIUM",
    isFullImage: false,
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const slide = slides[currentSlide]

  return (
    <section className="relative h-[700px] md:h-[650px] lg:h-[700px] overflow-hidden bg-okami-gradient-radial">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-20" />
      </div>

      {/* Slide Content */}
      <div className="container relative h-full flex items-center">
        {slide.isFullImage ? (
          // Full Image Layout for Promotional Content
          <div className="relative w-full h-full flex items-center justify-center animate-zoom-in">
            
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={`${slide.title} ${slide.subtitle}`}
              fill
              className="object-contain drop-shadow-2xl px-4 md:px-8 lg:px-16"
              priority
            />

            {/* Navigation Buttons - Positioned on sides of viewport */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 md:p-3 transition-all border border-white/30 shadow-xl"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 md:p-3 transition-all border border-white/30 shadow-xl"
              aria-label="Siguiente slide"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>
        ) : (
          // Two Column Layout for Regular Slides
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full py-8 lg:py-12">
            {/* Mobile: Image First, Desktop: Content First */}
            <div className="relative w-full max-w-[520px] mx-auto aspect-[1/1] md:aspect-[4/3] lg:aspect-[1/1] animate-zoom-in order-1 lg:order-2">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl rounded-3xl animate-pulse-glow" />
              <div className="relative h-full flex items-center justify-center px-16 md:px-20 lg:px-12">
                <Image
                  src={slide.image}
                  alt={`${slide.title} ${slide.subtitle}`}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />


                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 md:p-3 transition-all border border-white/30 shadow-xl"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 md:p-3 transition-all border border-white/30 shadow-xl"
                  aria-label="Siguiente slide"
                >
                  <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-4 md:space-y-6 text-white z-10 animate-slide-in-left order-2 lg:order-1">
              {slide.badge && (
                <div className="inline-block">
                  <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-bold uppercase tracking-wider border border-white/30">
                    {slide.badge}
                  </span>
                </div>
              )}

              <div className="space-y-2 md:space-y-3">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-balance">
                  {slide.title}
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wide text-balance">
                  {slide.subtitle}
                </h2>
              </div>

              <p className="hidden md:block text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed max-w-lg text-pretty">
                {slide.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-bold text-base md:text-lg h-12 md:h-14 px-6 md:px-8 group"
                  asChild
                >
                  <Link href={slide.ctaLink}>
                    <ShoppingCart className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    {slide.cta}
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm font-bold text-base md:text-lg h-12 md:h-14 px-6 md:px-8"
                  asChild
                >
                  <Link href="/catalogo">
                    <Info className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Más Información
                  </Link>
                </Button>
              </div>

              {/* Stats - Compact on mobile */}
              <div className="flex items-center gap-4 md:gap-8 pt-4 md:pt-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-black">500+</div>
                  <div className="text-xs md:text-sm text-white/80 font-medium">Talleres</div>
                </div>
                <div className="w-px h-8 md:h-12 bg-white/30" />
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-black">100%</div>
                  <div className="text-xs md:text-sm text-white/80 font-medium">Calidad</div>
                </div>
                <div className="w-px h-8 md:h-12 bg-white/30" />
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-black">24/7</div>
                  <div className="text-xs md:text-sm text-white/80 font-medium">Soporte</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-1.5 md:h-2 rounded-full transition-all",
              index === currentSlide ? "w-8 md:w-12 bg-white" : "w-1.5 md:w-2 bg-white/40 hover:bg-white/60",
            )}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {isAutoPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
            }}
          />
        </div>
      )}
    </section>
  )
}
