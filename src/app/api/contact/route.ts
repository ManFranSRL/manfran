import { NextResponse } from 'next/server'
import { z } from 'zod'
import { sendContactEmails } from '@/lib/email/send'

export const runtime = 'nodejs'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
})

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
    await sendContactEmails(parsed.data)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/contact] error enviando email:', err)
    return NextResponse.json(
      { error: 'No se pudo enviar el mensaje. Intentá de nuevo.' },
      { status: 500 },
    )
  }
}
