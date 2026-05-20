export const SITE = {
  name: 'MANFRAN',
  tagline: 'Soluciones integrales en comercio exterior',
  description:
    'Agente de carga y despachante de aduana en Argentina. Importación, exportación y logística internacional.',
  url: 'https://www.manfran.com',
  email: 'info@manfran.com',
  phone: '+54 11 XXXX-XXXX',
  address: 'Buenos Aires, Argentina',
}

export const HERO = {
  headline: 'Movemos tu carga.',
  headlineAccent: 'En todo el mundo.',
  subheadline: 'Soluciones integrales en comercio exterior',
  ctaPrimary: { label: 'Consultanos', href: '#contacto' },
  ctaSecondary: { label: 'Conocé nuestros servicios', href: '#servicios' },
}

// Datos a confirmar con Franco y Manuel — placeholders realistas
export const STATS = [
  { value: 200, suffix: '+', label: 'Clientes' },
  { value: 5000, suffix: '+', label: 'Operaciones' },
  { value: 15, suffix: '', label: 'Industrias' },
  { value: 10, suffix: 'M kg', label: 'Carga movida' },
]

export const SERVICES = [
  {
    id: 'importacion',
    icon: '📦',
    title: 'Importación',
    description:
      'Gestión integral de importaciones: coordinación de embarques, despacho aduanero y entrega en destino.',
  },
  {
    id: 'exportacion',
    icon: '✈️',
    title: 'Exportación',
    description:
      'Exportación de mercaderías con cobertura aérea, marítima y terrestre a cualquier destino del mundo.',
  },
  {
    id: 'despacho',
    icon: '📋',
    title: 'Despacho Aduanero',
    description:
      'Trámites aduaneros y documentación completa. Clasificación arancelaria y liquidación de tributos.',
  },
  {
    id: 'logistica',
    icon: '🚛',
    title: 'Logística Integral',
    description:
      'Coordinación puerta a puerta: retiro, almacenaje, transporte interno y distribución local.',
  },
  {
    id: 'asesoria',
    icon: '💡',
    title: 'Asesoría',
    description:
      'Consultoría en comercio exterior: normativa, regímenes especiales, optimización de costos.',
  },
]

export const WHY_US = [
  {
    title: 'Experiencia probada',
    description: 'Más de una década operando en el comercio exterior argentino.',
  },
  {
    title: 'Equipo dedicado',
    description: 'Un referente asignado a cada cliente. Sin intermediarios.',
  },
  {
    title: 'Cobertura total',
    description: 'Aéreo, marítimo y terrestre. A cualquier destino del mundo.',
  },
  {
    title: 'Tecnología aplicada',
    description: 'Seguimiento en tiempo real y reporting automatizado.',
  },
]

export const PROCESS_STEPS = [
  { step: 1, title: 'Consulta', description: 'Analizamos tu operación y necesidades.' },
  { step: 2, title: 'Cotización', description: 'Te enviamos una propuesta detallada en 24 hs.' },
  { step: 3, title: 'Coordinación', description: 'Gestionamos embarque, documentos y aduana.' },
  { step: 4, title: 'Seguimiento', description: 'Monitoreo en tiempo real hasta destino final.' },
  { step: 5, title: 'Entrega', description: 'Cierre de la operación y reporting completo.' },
]

export const INDUSTRIES = [
  'Alimentos y bebidas',
  'Tecnología',
  'Autopartes',
  'Textil',
  'Maquinaria',
  'Farmacéutica',
  'Agro',
  'Electrónica',
]

export const QUOTER = {
  serviceTypes: [
    { value: 'importacion', label: 'Importación' },
    { value: 'exportacion', label: 'Exportación' },
    { value: 'despacho', label: 'Despacho aduanero' },
    { value: 'logistica', label: 'Logística integral' },
  ],
  incoterms: [
    'EXW', 'FCA', 'CPT', 'CIP', 'DAP', 'DPU', 'DDP',
    'FAS', 'FOB', 'CFR', 'CIF',
  ],
  cargoTypes: [
    { value: 'general', label: 'Carga general' },
    { value: 'refrigerada', label: 'Refrigerada' },
    { value: 'peligrosa', label: 'Peligrosa (IMO)' },
    { value: 'sobredimensionada', label: 'Sobredimensionada' },
    { value: 'valores', label: 'Alto valor' },
  ],
  transportModes: [
    { value: 'aereo', label: 'Aéreo' },
    { value: 'maritimo', label: 'Marítimo' },
    { value: 'terrestre', label: 'Terrestre' },
    { value: 'multimodal', label: 'Multimodal' },
  ],
}
