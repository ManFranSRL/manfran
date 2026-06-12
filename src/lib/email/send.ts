import { getResend } from './client'
import { renderTemplate } from './render'
import {
  FROM,
  REPLY_TO,
  TEAM_RECIPIENTS,
  CONTACT,
  SERVICE_LABELS,
  TRANSPORT_LABELS,
  CARGO_LABELS,
} from './config'

// ── Tipos de datos de los formularios (espejan los schemas zod del front) ──

export interface ContactData {
  name: string
  email: string
  company?: string
  message: string
}

export interface ServiceQuoteData {
  serviceType: string
  origin: string
  destination: string
  transportMode: string
  cargoType: string
  cargoDescription: string
  weight: string
  volume?: string
  notes?: string
  name: string
  email: string
  phone?: string
}

export interface CargoQuoteData {
  origin: string
  destination: string
  incoterm: string
  cargoDescription: string
  weight: string
  volume?: string
  hsCode?: string
  name: string
  email: string
}

/** Primer nombre para el saludo ("Hola Andrea,"). */
function firstName(full: string): string {
  return full.trim().split(/\s+/)[0] || full
}

/** Referencia legible para cotizaciones: COT-2026-AB12CD. */
export function makeRef(): string {
  const year = new Date().getFullYear()
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase()
  return `COT-${year}-${rand}`
}

const FOOTER = {
  contactEmail: CONTACT.email,
  contactPhone: CONTACT.phone,
  contactHours: CONTACT.hours,
}

// ─────────────────────────────────────────────────────────────────────────
// CONTACTO
// ─────────────────────────────────────────────────────────────────────────
export async function sendContactEmails(data: ContactData) {
  const resend = getResend()

  const common = {
    name: data.name,
    firstName: firstName(data.name),
    email: data.email,
    company: data.company,
    message: data.message,
    ...FOOTER,
  }

  // 1) Auto-respuesta al cliente
  const clientHtml = renderTemplate('cliente/contacto.html', common)
  // 2) Notificación interna al equipo
  const internalHtml = renderTemplate('interno/contacto.html', common)

  await Promise.all([
    resend.emails.send({
      from: FROM.default,
      to: data.email,
      replyTo: REPLY_TO,
      subject: 'Recibimos tu mensaje · MANFRAN',
      html: clientHtml,
    }),
    resend.emails.send({
      from: FROM.default,
      to: TEAM_RECIPIENTS,
      replyTo: data.email, // responder = contestarle directo al cliente
      subject: `🔔 Nueva consulta — ${data.name}${data.company ? ` (${data.company})` : ''}`,
      html: internalHtml,
    }),
  ])
}

// ─────────────────────────────────────────────────────────────────────────
// COTIZACIÓN — SERVICIO
// ─────────────────────────────────────────────────────────────────────────
export async function sendServiceQuoteEmails(data: ServiceQuoteData) {
  const resend = getResend()
  const ref = makeRef()

  const common = {
    ref,
    name: data.name,
    firstName: firstName(data.name),
    email: data.email,
    phone: data.phone,
    serviceType: SERVICE_LABELS[data.serviceType] ?? data.serviceType,
    transportMode: TRANSPORT_LABELS[data.transportMode] ?? data.transportMode,
    cargoType: CARGO_LABELS[data.cargoType] ?? data.cargoType,
    origin: data.origin,
    destination: data.destination,
    cargoDescription: data.cargoDescription,
    weight: data.weight,
    volume: data.volume,
    notes: data.notes,
    ...FOOTER,
  }

  const clientHtml = renderTemplate('cliente/cotizacion-servicio.html', common)
  const internalHtml = renderTemplate('interno/cotizacion-servicio.html', common)

  await Promise.all([
    resend.emails.send({
      from: FROM.default,
      to: data.email,
      replyTo: REPLY_TO,
      subject: `Recibimos tu solicitud de cotización · ${ref}`,
      html: clientHtml,
    }),
    resend.emails.send({
      from: FROM.default,
      to: TEAM_RECIPIENTS,
      replyTo: data.email,
      subject: `🟦 Cotización servicio — ${common.serviceType} · ${data.origin} → ${data.destination} · ${data.name}`,
      html: internalHtml,
    }),
  ])

  return { ref }
}

// ─────────────────────────────────────────────────────────────────────────
// COTIZACIÓN — MERCADERÍA
// ─────────────────────────────────────────────────────────────────────────
export async function sendCargoQuoteEmails(data: CargoQuoteData) {
  const resend = getResend()
  const ref = makeRef()

  const common = {
    ref,
    name: data.name,
    firstName: firstName(data.name),
    email: data.email,
    origin: data.origin,
    destination: data.destination,
    incoterm: data.incoterm,
    cargoDescription: data.cargoDescription,
    weight: data.weight,
    volume: data.volume,
    hsCode: data.hsCode,
    ...FOOTER,
  }

  const clientHtml = renderTemplate('cliente/cotizacion-mercaderia.html', common)
  const internalHtml = renderTemplate('interno/cotizacion-mercaderia.html', common)

  await Promise.all([
    resend.emails.send({
      from: FROM.default,
      to: data.email,
      replyTo: REPLY_TO,
      subject: `Recibimos tu cotización de mercadería · ${ref}`,
      html: clientHtml,
    }),
    resend.emails.send({
      from: FROM.default,
      to: TEAM_RECIPIENTS,
      replyTo: data.email,
      subject: `🟦 Cotización mercadería — ${data.cargoDescription.slice(0, 40)} · ${data.name}`,
      html: internalHtml,
    }),
  ])

  return { ref }
}
