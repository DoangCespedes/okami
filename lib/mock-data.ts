import type { Repuesto, Proveedor, CategoriaRepuesto } from "./api"

// Mock data para desarrollo y testing
// Eliminar cuando se conecte con el API real

export const mockCategorias: CategoriaRepuesto[] = [
  { id: "frenos", nombre: "Sistema de Frenos", descripcion: "Discos, pastillas y componentes de frenado" },
  { id: "motor", nombre: "Motor", descripcion: "Filtros, bujías y componentes del motor" },
  { id: "suspension", nombre: "Suspensión", descripcion: "Amortiguadores y componentes de suspensión" },
  { id: "transmision", nombre: "Transmisión", descripcion: "Embrague y componentes de transmisión" },
  { id: "electrico", nombre: "Sistema Eléctrico", descripcion: "Baterías, alternadores y componentes eléctricos" },
  { id: "refrigeracion", nombre: "Refrigeración", descripcion: "Radiadores y sistema de enfriamiento" },
  { id: "escape", nombre: "Sistema de Escape", descripcion: "Catalizadores y tubos de escape" },
  { id: "direccion", nombre: "Dirección", descripcion: "Cajas de dirección y terminales" },
]

export const mockProveedores: Proveedor[] = [
  {
    id: "prov-1",
    nombre: "AutoParts Venezuela C.A.",
    descripcion: "Distribuidor oficial de repuestos automotrices con más de 20 años de experiencia",
    pais: "Venezuela",
    ciudad: "Caracas",
    telefono: "+58 212 555-0100",
    correo: "ventas@autoparts.ve",
    ubicacion: { lat: 10.4806, lng: -66.9036 },
    datosLegales: "RIF: J-12345678-9",
  },
  {
    id: "prov-2",
    nombre: "Repuestos Italven",
    descripcion: "Importadores directos de repuestos europeos de alta calidad",
    pais: "Venezuela",
    ciudad: "Valencia",
    telefono: "+58 241 555-0200",
    correo: "info@italven.com.ve",
    ubicacion: { lat: 10.1621, lng: -68.0077 },
    datosLegales: "RIF: J-87654321-0",
  },
  {
    id: "prov-3",
    nombre: "Motor Plus",
    descripcion: "Especialistas en componentes de motor y transmisión",
    pais: "Venezuela",
    ciudad: "Maracaibo",
    telefono: "+58 261 555-0300",
    correo: "contacto@motorplus.ve",
    ubicacion: { lat: 10.6666, lng: -71.6124 },
    datosLegales: "RIF: J-11223344-5",
  },
]

export const mockRepuestos: Repuesto[] = [
  {
    id: "rep-1",
    nombre: "Disco de Freno Ventilado 280mm",
    descripcion:
      "Disco de freno ventilado de alto rendimiento, fabricado en hierro fundido. Diseño optimizado para máxima disipación de calor.",
    precio: 89.99,
    categoria: "frenos",
    peso: 7.5,
    compatibilidad: ["Toyota Corolla 2015-2020", "Honda Civic 2016-2021", "Mazda 3 2014-2019"],
    imagenes: ["/brake-disc-automotive.jpg"],
    proveedorIds: ["prov-1", "prov-2"],
  },
  {
    id: "rep-2",
    nombre: "Filtro de Aceite Premium",
    descripcion:
      "Filtro de aceite de alta eficiencia con tecnología sintética. Retiene hasta 99% de partículas contaminantes.",
    precio: 24.99,
    categoria: "motor",
    peso: 0.4,
    compatibilidad: ["Universal - Consultar compatibilidad"],
    imagenes: ["/oil-filter-automotive.jpg"],
    proveedorIds: ["prov-1", "prov-3"],
  },
  {
    id: "rep-3",
    nombre: "Amortiguador Deportivo Gas",
    descripcion:
      "Amortiguador a gas de alto rendimiento para conducción deportiva. Ofrece mejor respuesta y estabilidad.",
    precio: 149.99,
    categoria: "suspension",
    peso: 3.2,
    compatibilidad: ["Ford Fiesta 2011-2017", "Ford Focus 2012-2018"],
    imagenes: ["/shock-absorber-automotive.jpg"],
    proveedorIds: ["prov-2", "prov-3"],
  },
  {
    id: "rep-4",
    nombre: "Kit de Embrague Completo",
    descripcion:
      "Kit de embrague completo con disco, plato de presión y cojinete piloto. Instalación profesional recomendada.",
    precio: 299.99,
    categoria: "transmision",
    peso: 12.5,
    compatibilidad: ["Chevrolet Aveo 2012-2018", "Chevrolet Spark 2013-2020"],
    imagenes: ["/clutch-kit-automotive.jpg"],
    proveedorIds: ["prov-1", "prov-2", "prov-3"],
  },
  {
    id: "rep-5",
    nombre: "Batería 75Ah 12V",
    descripcion: "Batería de alto amperaje para arranque seguro. Libre de mantenimiento con 2 años de garantía.",
    precio: 189.99,
    categoria: "electrico",
    peso: 18.0,
    compatibilidad: ["Universal - Verificar medidas"],
    imagenes: ["/car-battery.png"],
    proveedorIds: ["prov-1", "prov-3"],
  },
  {
    id: "rep-6",
    nombre: "Radiador de Aluminio",
    descripcion:
      "Radiador de aluminio con tecnología de enfriamiento rápido. Mayor eficiencia que radiadores convencionales.",
    precio: 249.99,
    categoria: "refrigeracion",
    peso: 5.8,
    compatibilidad: ["Nissan Sentra 2013-2019", "Nissan Versa 2012-2019"],
    imagenes: ["/aluminum-radiator.jpg"],
    proveedorIds: ["prov-2"],
  },
  {
    id: "rep-7",
    nombre: "Pastillas de Freno Cerámicas",
    descripcion:
      "Pastillas de freno cerámicas de bajo ruido. Excelente poder de frenado en condiciones húmedas y secas.",
    precio: 64.99,
    categoria: "frenos",
    peso: 1.2,
    compatibilidad: ["Toyota Camry 2012-2018", "Honda Accord 2013-2017"],
    imagenes: ["/ceramic-brake-pads.png"],
    proveedorIds: ["prov-1", "prov-2"],
  },
  {
    id: "rep-8",
    nombre: "Bujías de Iridio (Set 4 piezas)",
    descripcion:
      "Bujías de iridio de larga duración. Mejoran el rendimiento del motor y reducen el consumo de combustible.",
    precio: 79.99,
    categoria: "motor",
    peso: 0.3,
    compatibilidad: ["Universal - Consultar especificaciones"],
    imagenes: ["/iridium-spark-plugs.jpg"],
    proveedorIds: ["prov-3"],
  },
]
