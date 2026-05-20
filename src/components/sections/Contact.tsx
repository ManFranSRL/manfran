'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
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
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800))
    console.log('Contact:', data)
    setSent(true)
  }

  return (
    <section id="contacto" className="py-24 px-6 bg-[var(--color-black)]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[var(--color-blue)] text-sm font-semibold uppercase tracking-widest">
            Contacto
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold uppercase text-white mt-3 leading-none">
            Hablemos<br />
            <span className="text-[var(--color-blue)]">de tu operación</span>
          </h2>
          <p className="text-white/50 mt-6 leading-relaxed">
            Contanos qué necesitás y te respondemos dentro de las 24 hs hábiles con una propuesta a medida.
          </p>

          <div className="mt-10 flex flex-col gap-4 text-sm">
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
              <span className="text-[var(--color-blue)]">✉</span>
              {SITE.email}
            </a>
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
              <span className="text-[var(--color-blue)]">✆</span>
              {SITE.phone}
            </a>
            <span className="flex items-center gap-3 text-white/60">
              <span className="text-[var(--color-blue)]">⊙</span>
              {SITE.address}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {sent ? (
            <div className="text-center py-16">
              <span className="text-5xl">✅</span>
              <p className="text-white font-display text-2xl font-bold uppercase mt-6">¡Mensaje enviado!</p>
              <p className="text-white/50 mt-2">Nos ponemos en contacto pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <div>
                <input {...register('name')} placeholder="Nombre y apellido *" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[var(--color-blue)]" />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <input {...register('email')} type="email" placeholder="Email *" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[var(--color-blue)]" />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <input {...register('company')} placeholder="Empresa" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[var(--color-blue)]" />
              </div>
              <div>
                <textarea {...register('message')} rows={4} placeholder="¿En qué te podemos ayudar? *" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[var(--color-blue)] resize-none" />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
              </div>
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
