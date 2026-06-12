import { Resend } from 'resend'

/**
 * Cliente Resend singleton. La API key se lee de la env var RESEND_API_KEY
 * (ver .env.example). Se instancia lazy para no romper el build si falta la key
 * en tiempo de compilación.
 */
let client: Resend | null = null

export function getResend(): Resend {
  if (!process.env.RESEND_API_KEY) {
    throw new Error(
      'RESEND_API_KEY no está definida. Cargala en .env.local (local) y en Vercel (producción).',
    )
  }
  if (!client) {
    client = new Resend(process.env.RESEND_API_KEY)
  }
  return client
}
