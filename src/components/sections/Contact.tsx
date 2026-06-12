'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { FormSuccess } from '@/components/ui/FormSuccess'
import { SITE } from '@/lib/constants'

const schema = z.object({
  name: z.string().min(2, 'Nombre requerido'),
  email: z.string().email('Email inválido'),
  company: z.string().optional(),
  message: z.string().min(10, 'Contanos un poco más sobre tu necesidad'),
})

type FormData = z.infer<typeof schema>

export function Contact() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => null)
        throw new Error(body?.error ?? 'No se pudo enviar el mensaje.')
      }
      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo enviar el mensaje. Intentá de nuevo.')
    }
  }

  return (
    <section id="contacto" className="relative py-section px-gutter bg-[var(--color-black)] overflow-x-hidden">
      {/* Fusión superior ← Quoter (#080808) */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#080808] to-transparent z-[1] pointer-events-none" />
      {/* Fusión inferior → Footer (#111111) */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#111111] z-[1] pointer-events-none" />
      <div className="max-w-site mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-display text-manfran-blue text-sm font-bold uppercase tracking-widest">
            Contacto
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-white mt-3 leading-none">
            Hablemos<br />
            <span className="text-manfran-blue">de tu operación</span>
          </h2>
          <p className="text-white/50 mt-6 leading-relaxed">
            Contanos qué necesitás y te respondemos dentro de las 24 hs hábiles con una propuesta a medida.
          </p>

          <div className="mt-10 flex flex-col gap-4 text-sm">
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
              <span className="text-manfran-blue">✉</span>
              {SITE.email}
            </a>
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
              <span className="text-manfran-blue">✆</span>
              {SITE.phone}
            </a>
            <span className="flex items-center gap-3 text-white/60">
              <span className="text-manfran-blue">⊙</span>
              {SITE.address}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="min-w-0"
        >
          <AnimatePresence mode="wait">
          {sent ? (
            <FormSuccess
              key="success"
              title="¡Mensaje enviado!"
              subtitle="Nos ponemos en contacto pronto."
              onReset={() => { setSent(false); reset() }}
            />
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4"
            >
              <div>
                <input {...register('name')} placeholder="Nombre y apellido *" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-manfran-blue" />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <input {...register('email')} type="email" placeholder="Email *" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-manfran-blue" />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <input {...register('company')} placeholder="Empresa" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-manfran-blue" />
              </div>
              <div>
                <textarea {...register('message')} rows={4} placeholder="¿En qué te podemos ayudar? *" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-manfran-blue resize-none" />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </Button>
            </motion.form>
          )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
