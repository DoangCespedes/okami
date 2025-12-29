# ITALVEN - Plataforma de Repuestos Automotrices

Plataforma frontend moderna desarrollada con React 18 y Next.js 14 (App Router) para la gestión y consulta de repuestos automotrices y proveedores.

## Características Principales

- **Landing Page Corporativa**: Diseño moderno con hero section, slider de productos destacados, sección de marcas asociadas y llamados a la acción
- **Catálogo de Productos**: Sistema completo de búsqueda y filtrado por categorías con paginación
- **Detalle de Producto**: Vista detallada con galería de imágenes, especificaciones técnicas y lista de proveedores disponibles
- **Perfil de Proveedor**: Información completa del proveedor con mapa interactivo y enlace a Google Maps
- **Sistema de Tema Global**: Colores y estilos completamente personalizables mediante variables CSS
- **Responsive Design**: Optimizado para móvil, tablet y desktop

## Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **Next.js 14** - Framework con App Router
- **TailwindCSS v4** - Estilos utility-first con sistema de tokens personalizables
- **React Query (TanStack Query)** - Gestión de estado y cache del lado del cliente
- **Leaflet** - Mapas interactivos con integración a Google Maps
- **TypeScript** - Tipado estático
- **Next/Image** - Optimización automática de imágenes

## Estructura del Proyecto

```
italven/
├── app/                          # Routes del App Router
│   ├── catalogo/                 # Vista de catálogo y detalle de productos
│   │   ├── [id]/                 # Página de detalle de producto
│   │   └── page.tsx              # Página principal del catálogo
│   ├── proveedores/              # Vistas de proveedores
│   │   └── [id]/                 # Página de detalle de proveedor
│   ├── globals.css               # Estilos globales y variables de tema
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Landing page
├── components/                   # Componentes reutilizables
│   ├── catalog/                  # Componentes del catálogo
│   │   ├── category-filter.tsx   # Filtro por categorías
│   │   ├── pagination.tsx        # Componente de paginación
│   │   ├── product-card.tsx      # Tarjeta de producto
│   │   ├── product-grid.tsx      # Grid de productos
│   │   └── search-bar.tsx        # Barra de búsqueda
│   ├── home/                     # Componentes del landing
│   │   ├── about-section.tsx     # Sección "Acerca de"
│   │   ├── brands-section.tsx    # Marcas asociadas
│   │   ├── cta-section.tsx       # Call to action
│   │   ├── featured-products.tsx # Productos destacados
│   │   └── hero-section.tsx      # Hero principal
│   ├── layout/                   # Componentes de layout
│   │   ├── footer.tsx            # Footer global
│   │   └── header.tsx            # Header con navegación
│   ├── product/                  # Componentes de producto
│   │   ├── image-gallery.tsx     # Galería de imágenes
│   │   ├── product-info.tsx      # Información del producto
│   │   └── supplier-list.tsx     # Lista de proveedores
│   ├── supplier/                 # Componentes de proveedor
│   │   └── supplier-map.tsx      # Mapa con Leaflet
│   ├── providers/                # React context providers
│   │   └── query-provider.tsx    # Provider de React Query
│   └── ui/                       # Componentes de UI base (shadcn)
├── lib/                          # Utilidades y lógica de negocio
│   ├── hooks/                    # Custom hooks
│   │   └── use-api.ts            # Hooks de React Query
│   ├── api.ts                    # Cliente de API
│   ├── mock-data.ts              # Datos de prueba
│   └── utils.ts                  # Funciones utilitarias
└── public/                       # Assets estáticos
```

## Personalización del Tema

El sistema de tema está completamente basado en variables CSS editables en `app/globals.css`. Para personalizar los colores según las exigencias del cliente:

### Colores de Marca (Editables)

```css
:root {
  /* Colores primarios de marca */
  --brand-primary: oklch(0.55 0.18 240);     /* Azul corporativo */
  --brand-secondary: oklch(0.45 0.15 260);   /* Azul marino */
  --brand-accent: oklch(0.65 0.2 200);       /* Azul acento */
  --brand-success: oklch(0.6 0.15 145);      /* Verde éxito */
  --brand-warning: oklch(0.75 0.15 85);      /* Ámbar advertencia */
  --brand-error: oklch(0.55 0.22 25);        /* Rojo error */

  /* Colores neutrales */
  --neutral-50 hasta --neutral-900           /* Escala de grises */
  
  /* Radio de bordes */
  --radius: 0.75rem;                         /* Redondeo global */
}
```

### Uso en Componentes

Los componentes usan tokens semánticos que heredan de los colores de marca:

- `bg-primary` / `text-primary` - Color primario de marca
- `bg-accent` / `text-accent` - Color de acento
- `bg-muted` / `text-muted-foreground` - Colores neutrales
- `border-border` - Bordes

## Configuración del API

### Variables de Entorno

Crear un archivo `.env.local`:

```env
# URL del API de ITALVEN (opcional - usa mock data si no está configurado)
NEXT_PUBLIC_API_URL=https://api.italven.com
```

### Integración con API Real

El proyecto incluye datos mock para desarrollo. Para conectar con el API real:

1. Configurar `NEXT_PUBLIC_API_URL` en las variables de entorno
2. Verificar que el API siga la estructura de endpoints definida en `lib/api.ts`:
   - `GET /repuestos` - Lista de repuestos con filtros
   - `GET /repuestos/:id` - Detalle de repuesto
   - `GET /repuestos/:id/proveedores` - Proveedores de un repuesto
   - `GET /proveedores` - Lista de proveedores
   - `GET /proveedores/:id` - Detalle de proveedor
   - `GET /categorias` - Lista de categorías

### Tipos TypeScript

Los tipos están definidos en `lib/api.ts`:

```typescript
interface Repuesto {
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

interface Proveedor {
  id: string
  nombre: string
  descripcion: string
  pais: string
  ciudad: string
  telefono: string
  correo: string
  ubicacion?: { lat: number; lng: number }
  datosLegales?: string
}
```

## Instalación y Desarrollo

### Requisitos Previos

- Node.js 18 o superior
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## Funcionalidades por Vista

### Landing Page (/)

- Hero section con llamado a la acción
- Slider automático de productos destacados
- Grid de marcas asociadas con efectos hover
- Sección corporativa con características principales
- Call to action final
- Completamente responsive

### Catálogo (/catalogo)

- Barra de búsqueda por nombre/compatibilidad
- Filtros por categoría (múltiples opciones)
- Grid responsive de productos
- Paginación completa
- Estado de carga con skeletons
- Estado vacío cuando no hay resultados

### Detalle de Producto (/catalogo/[id])

- Galería de imágenes con navegación
- Información técnica completa
- Precio de referencia
- Compatibilidad con vehículos
- Lista de proveedores disponibles
- Enlaces directos a perfil de proveedor

### Perfil de Proveedor (/proveedores/[id])

- Información corporativa completa
- Datos de contacto (teléfono, email)
- Ubicación en mapa interactivo (Leaflet)
- Botón para abrir en Google Maps
- Datos legales (RIF, etc.)

## Optimizaciones Implementadas

- **SEO**: Metadata optimizada en cada página
- **Imágenes**: Optimización automática con next/image
- **Cache**: React Query con estrategia de stale-while-revalidate
- **Performance**: Code splitting automático con App Router
- **Accesibilidad**: Etiquetas ARIA y navegación por teclado
- **Responsive**: Mobile-first design con breakpoints optimizados

## Despliegue

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Otros Proveedores

El proyecto es compatible con cualquier proveedor que soporte Next.js:

- Netlify
- AWS Amplify
- Railway
- Render

## Soporte

Para soporte técnico o consultas sobre la plataforma:

- Email: contacto@italven.com
- Teléfono: +58 412 123 4567

## Licencia

Copyright © 2025 ITALVEN. Todos los derechos reservados.
```

```json file="" isHidden
