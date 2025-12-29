# Guía de Personalización ITALVEN

Esta guía está diseñada para que los clientes puedan personalizar fácilmente los colores y estilos de la plataforma ITALVEN según sus necesidades específicas.

## Personalización de Colores

Todos los colores de la plataforma se controlan desde un único archivo: `app/globals.css`

### Ubicación del Archivo

```
italven/
└── app/
    └── globals.css  ← ARCHIVO PRINCIPAL DE ESTILOS
```

### Colores Editables

Abra el archivo `app/globals.css` y busque la sección `:root`. Aquí encontrará todas las variables de color que puede modificar:

#### 1. Colores Primarios de Marca

```css
--brand-primary: oklch(0.55 0.18 240);     /* Color principal - Azul corporativo */
--brand-secondary: oklch(0.45 0.15 260);   /* Color secundario - Azul marino */
--brand-accent: oklch(0.65 0.2 200);       /* Color de acento - Azul claro */
```

**Cómo modificar:**
- El primer número (0.55) controla la luminosidad (0 = negro, 1 = blanco)
- El segundo número (0.18) controla la intensidad del color (0 = gris, mayor = más saturado)
- El tercer número (240) es el tono del color (0-360, donde 0/360=rojo, 120=verde, 240=azul)

**Ejemplos de colores comunes:**
- Rojo: `oklch(0.55 0.22 25)`
- Verde: `oklch(0.55 0.15 145)`
- Naranja: `oklch(0.65 0.18 45)`
- Morado: `oklch(0.55 0.18 300)`

#### 2. Colores de Estado

```css
--brand-success: oklch(0.6 0.15 145);      /* Verde - Para mensajes de éxito */
--brand-warning: oklch(0.75 0.15 85);      /* Ámbar - Para advertencias */
--brand-error: oklch(0.55 0.22 25);        /* Rojo - Para errores */
```

#### 3. Colores Neutrales (Grises)

```css
--neutral-50: oklch(0.99 0 0);   /* Casi blanco */
--neutral-100: oklch(0.97 0 0);  /* Gris muy claro */
--neutral-200: oklch(0.93 0 0);  /* Gris claro */
/* ... hasta ... */
--neutral-900: oklch(0.15 0 0);  /* Casi negro */
```

**Nota:** Generalmente no necesita modificar estos valores a menos que desee un esquema de grises personalizado.

#### 4. Redondeo de Esquinas

```css
--radius: 0.75rem;  /* Controla qué tan redondeadas son las esquinas */
```

**Valores sugeridos:**
- `0.5rem` - Esquinas sutilmente redondeadas
- `0.75rem` - Redondeo moderado (valor actual)
- `1rem` - Esquinas más redondeadas
- `0rem` - Esquinas completamente cuadradas

### Modo Oscuro

Si desea personalizar los colores del modo oscuro, edite la sección `.dark` en el mismo archivo:

```css
.dark {
  --background: var(--neutral-900);
  --foreground: var(--neutral-50);
  /* ... otros colores para modo oscuro ... */
}
```

### Aplicar Cambios

1. Guarde el archivo `app/globals.css`
2. Si está en modo desarrollo (`npm run dev`), los cambios se aplicarán automáticamente
3. Si está en producción, deberá recompilar: `npm run build` y luego `npm start`

## Ejemplo Práctico: Cambiar a Colores Verdes

Si desea cambiar el esquema de color principal de azul a verde:

```css
:root {
  /* Reemplace estos valores en app/globals.css */
  --brand-primary: oklch(0.55 0.15 145);     /* Verde corporativo */
  --brand-secondary: oklch(0.45 0.15 160);   /* Verde oscuro */
  --brand-accent: oklch(0.65 0.2 135);       /* Verde claro */
}
```

## Personalización de Textos

Para cambiar los textos de la plataforma:

### Página de Inicio (Landing Page)
- Archivo: `components/home/hero-section.tsx`
- Busque el título principal y modifíquelo según necesite

### Información de Contacto
- Archivo: `components/layout/footer.tsx`
- Modifique teléfonos, emails y direcciones

### Datos de la Empresa
- Archivo: `app/layout.tsx` (para metadatos SEO)
- Archivo: `components/home/about-section.tsx` (para descripción corporativa)

## Conexión con API Real

La plataforma viene con datos de ejemplo. Para conectar con su API real:

### 1. Configurar Variables de Entorno

Cree un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_API_URL=https://su-api.com
```

### 2. Estructura de Endpoints Requerida

Su API debe proporcionar estos endpoints:

- `GET /repuestos` - Lista de repuestos con filtros opcionales
- `GET /repuestos/:id` - Detalle de un repuesto
- `GET /repuestos/:id/proveedores` - Proveedores de un repuesto
- `GET /proveedores` - Lista de proveedores
- `GET /proveedores/:id` - Detalle de un proveedor
- `GET /categorias` - Lista de categorías

### 3. Formato de Respuesta

Los datos deben seguir la estructura definida en `lib/api.ts`. Consulte el archivo `lib/mock-data.ts` para ver ejemplos de la estructura esperada.

## Soporte Técnico

Para asistencia técnica o consultas:

- **Email:** contacto@italven.com
- **Teléfono:** +58 412 123 4567

## Recursos Adicionales

- **Documentación de Next.js:** https://nextjs.org/docs
- **Documentación de TailwindCSS:** https://tailwindcss.com/docs
- **Paleta de colores OKLCH:** https://oklch.com

---

**Nota Importante:** Realice siempre una copia de seguridad antes de modificar archivos. Si no está seguro de un cambio, consulte con un desarrollador.
