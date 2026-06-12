import { NextResponse } from 'next/server'
import { z } from 'zod'
import {
  sendServiceQuoteEmails,
  sendCargoQuoteEmails,
} from '@/lib/email/send'

export const runtime = 'nodejs'

const serviceSchema = z.object({
  kind: z.literal('servicio'),
  serviceType: z.string().min(1),
  origin: z.string().min(2),
  destination: z.string().min(2),
  transportMode: z.string().min(1),
  cargoType: z.string().min(1),
  cargoDescription: z.string().min(3),
  weight: z.string().min(1),
  volume: z.string().optional(),
  notes: z.string().optional(),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
})

const cargoSchema = z.object({
  kind: z.literal('mercaderia'),
  origin: z.string().min(2),
  destination: z.string().min(2),
  incoterm: z.string().min(1),
  cargoDescription: z.string().min(3),
  weight: z.string().min(1),
  volume: z.string().optional(),
  hsCode: z.string().optional(),
  name: z.string().min(2),
  email: z.string().email(),
})

const schema = z.discriminatedUnion('kind', [serviceSchema, cargoSchema])

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'JSON inválido' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Datos inválidos', issues: parsed.error.flatten() },
      { status: 422 },
    )
  }

  try {
    const result =
      parsed.data.kind === 'servicio'
        ? await sendServiceQuoteEmails(parsed.data)
        : await sendCargoQuoteEmails(parsed.data)
    return NextResponse.json({ ok: true, ref: result.ref })
  } catch (err) {
    console.error('[api/quote] error enviando email:', err)
    return NextResponse.json(
      { error: 'No se pudo enviar la cotización. Intentá de nuevo.' },
      { status: 500 },
    )
  }
}
