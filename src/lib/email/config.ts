/**
 * Configuración central de emails MANFRAN.
 *
 * Dos flujos por formulario:
 *  1. Email al CLIENTE  → auto-respuesta de marca (plantillas en src/emails/cliente)
 *  2. Email INTERNO     → notificación del lead a info@ + CEOs (src/emails/interno)
 *
 * El remitente usa el dominio verificado en Resend (manfran.com).
 * Ver docs/EMAIL_SETUP.md para el detalle de DNS / Resend.
 */

// Remitente que ve el cliente. Debe ser una dirección @manfran.com del dominio
// verificado en Resend. No-reply para dejar claro que es un canal automático.
export const FROM = {
  // Mostrar nombre de marca + dirección técnica
  default: 'MANFRAN <no-reply@manfran.com>',
} as const

// Casilla de respuesta para las auto-respuestas al cliente: si el cliente
// responde, le llega al equipo (no a un buzón muerto).
export const REPLY_TO = 'info@manfran.com'

/**
 * Destinatarios de la notificación interna del lead.
 * TODO(Naza): completar los mails individuales de Manuel y Franco.
 * Por ahora solo info@ está activo; descomentá/cargá los otros cuando los tengas.
 */
export const TEAM_RECIPIENTS: string[] = [
  'info@manfran.com', // Manuel
  'franco@manfran.com',
]

// Base URL del sitio para construir URLs absolutas de imágenes en los emails
// (los clientes de correo NO resuelven rutas relativas).
export const SITE_URL = 'https://manfran.com'

// Datos de contacto que aparecen en los pies de los emails.
export const CONTACT = {
  email: 'info@manfran.com',
  phone: '+54 11 5141 2350',
  hours: 'Lunes a viernes · 9 — 18 h',
} as const

// ── Mapas de labels: traducen los `value` de los selects del cotizador
// a etiquetas legibles para mostrar en el email. Espejan src/lib/constants.ts.
export const SERVICE_LABELS: Record<string, string> = {
  importacion: 'Importación',
  exportacion: 'Exportación',
  despacho: 'Despacho aduanero',
  logistica: 'Logística integral',
}

export const TRANSPORT_LABELS: Record<string, string> = {
  aereo: 'Aéreo',
  maritimo: 'Marítimo',
  terrestre: 'Terrestre',
  multimodal: 'Multimodal',
}

export const CARGO_LABELS: Record<string, string> = {
  general: 'Carga general',
  refrigerada: 'Refrigerada',
  peligrosa: 'Peligrosa (IMO)',
  sobredimensionada: 'Sobredimensionada',
  valores: 'Alto valor',
}
