'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { QUOTER } from '@/lib/constants'

const serviceSchema = z.object({
  serviceType: z.string().min(1, 'Seleccioná el tipo de servicio'),
  origin: z.string().min(2, 'Indicá el origen'),
  destination: z.string().min(2, 'Indicá el destino'),
  transportMode: z.string().min(1, 'Seleccioná el modo de transporte'),
  cargoType: z.string().min(1, 'Seleccioná el tipo de carga'),
  cargoDescription: z.string().min(3, 'Describí la mercadería'),
  weight: z.string().min(1, 'Indicá el peso aproximado'),
  volume: z.string().optional(),
  notes: z.string().optional(),
  name: z.string().min(2, 'Tu nombre'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
})

const cargoSchema = z.object({
  origin: z.string().min(2, 'Indicá el origen'),
  destination: z.string().min(2, 'Indicá el destino'),
  incoterm: z.string().min(1, 'Seleccioná el Incoterm'),
  cargoDescription: z.string().min(3, 'Describí la mercadería'),
  weight: z.string().min(1, 'Indicá el peso'),
  volume: z.string().optional(),
  hsCode: z.string().optional(),
  name: z.string().min(2, 'Tu nombre'),
  email: z.string().email('Email inválido'),
})

type ServiceFormData = z.infer<typeof serviceSchema>
type CargoFormData = z.infer<typeof cargoSchema>

function ServiceForm() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ServiceFormData>({
    resolver: zodResolver(serviceSchema),
  })

  const onSubmit = async (data: ServiceFormData) => {
    setError(null)
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind: 'servicio', ...data }),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => null)
        throw new Error(body?.error ?? 'No se pudo enviar la cotización.')
      }
      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo enviar la cotización. Intentá de nuevo.')
    }
  }

  if (sent) {
    return (
      <div className="text-center py-12">
        <span className="text-4xl">✅</span>
        <p className="text-white font-display text-2xl font-bold uppercase mt-4">¡Consulta enviada!</p>
        <p className="text-white/50 mt-2">Te contactamos dentro de las 24 hs hábiles.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="sm:col-span-2">
        <label className="font-display text-xs text-white uppercase tracking-wider mb-1 block">Tipo de servicio *</label>
        <select {...register('serviceType')} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-manfran-blue">
          <option value="">Seleccioná...</option>
          {QUOTER.serviceTypes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
        </select>
        {errors.serviceType && <p className="text-red-400 text-xs mt-1">{errors.serviceType.message}</p>}
      </div>

      <div>
        <label className="font-display text-xs text-white uppercase tracking-wider mb-1 block">Origen *</label>
        <input {...register('origin')} placeholder="Ciudad / país" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-manfran-blue" />
        {errors.origin && <p className="text-red-400 text-xs mt-1">{errors.origin.message}</p>}
      </div>

      <div>
        <label className="font-display text-xs text-white uppercase tracking-wider mb-1 block">Destino *</label>
        <input {...register('destination')} placeholder="Ciudad / país" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-manfran-blue" />
        {errors.destination && <p className="text-red-400 text-xs mt-1">{errors.destination.message}</p>}
      </div>

      <div>
        <label className="font-display text-xs text-white uppercase tracking-wider mb-1 block">Modo de transporte *</label>
        <select {...register('transportMode')} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-manfran-blue">
          <option value="">Seleccioná...</option>
          {QUOTER.transportModes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
        </select>
        {errors.transportMode && <p className="text-red-400 text-xs mt-1">{errors.transportMode.message}</p>}
      </div>

      <div>
        <label className="font-display text-xs text-white uppercase tracking-wider mb-1 block">Tipo de carga *</label>
        <select {...register('cargoType')} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-manfran-blue">
          <option value="">Seleccioná...</option>
          {QUOTER.cargoTypes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
        </select>
        {errors.cargoType && <p className="text-red-400 text-xs mt-1">{errors.cargoType.message}</p>}
      </div>

      <div className="sm:col-span-2">
        <label className="font-display text-xs text-white uppercase tracking-wider mb-1 block">Descripción de la mercadería *</label>
        <textarea {...register('cargoDescription')} rows={2} placeholder="Qué producto es, país de origen, valor aproximado en USD..." className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-manfran-blue resize-none" />
        {errors.cargoDescription && <p className="text-red-400 text-xs mt-1">{errors.cargoDescription.message}</p>}
      </div>

      <div>
        <label className="font-display text-xs text-white uppercase tracking-wider mb-1 block">Peso aprox. (kg) *</label>
        <input {...register('weight')} placeholder="Ej: 500" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-manfran-blue" />
        {errors.weight && <p className="text-red-400 text-xs mt-1">{errors.weight.message}</p>}
      </div>

      <div>
        <label className="font-display text-xs text-white uppercase tracking-wider mb-1 block">Volumen aprox. (m³)</label>
        <input {...register('volume')} placeholder="Ej: 2.5" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-manfran-blue" />
      </div>

      <div>
        <label className="font-display text-xs text-white uppercase tracking-wider mb-1 block">Tu nombre *</label>
        <input {...register('name')} placeholder="Nombre y apellido" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-manfran-blue" />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="font-display text-xs text-white uppercase tracking-wider mb-1 block">Email *</label>
        <input {...register('email')} type="email" placeholder="empresa@ejemplo.com" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-manfran-blue" />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div className="sm:col-span-2">
        <label className="font-display text-xs text-white uppercase tracking-wider mb-1 block">Comentarios adicionales</label>
        <textarea {...register('notes')} rows={3} placeholder="Urgencia, requerimientos especiales, fechas estimadas..." className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-manfran-blue resize-none" />
      </div>

      <div className="sm:col-span-2">
        {error && <p className="text-red-400 text-xs mb-2">{error}</p>}
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Solicitar cotización'}
        </Button>
      </div>
    </form>
  )
}

function CargoForm() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<CargoFormData>({
    resolver: zodResolver(cargoSchema),
  })

  const onSubmit = async (data: CargoFormData) => {
    setError(null)
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind: 'mercaderia', ...data }),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => null)
        throw new Error(body?.error ?? 'No se pudo enviar la cotización.')
      }
      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo enviar la cotización. Intentá de nuevo.')
    }
  }

  if (sent) {
    return (
      <div className="text-center py-12">
        <span className="text-4xl">✅</span>
        <p className="text-white font-display text-2xl font-bold uppercase mt-4">¡Consulta enviada!</p>
        <p className="text-white/50 mt-2">Te contactamos dentro de las 24 hs hábiles.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="font-display text-xs text-white uppercase tracking-wider mb-1 block">Origen *</label>
        <input {...register('origin')} placeholder="Ciudad / país" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-manfran-blue" />
        {errors.origin && <p className="text-red-400 text-xs mt-1">{errors.origin.message}</p>}
      </div>

      <div>
        <label className="font-display text-xs text-white uppercase tracking-wider mb-1 block">Destino *</label>
        <input {...register('destination')} placeholder="Ciudad / país" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-manfran-blue" />
        {errors.destination && <p className="text-red-400 text-xs mt-1">{errors.destination.message}</p>}
      </div>

      <div className="sm:col-span-2">
        <label className="font-display text-xs text-white uppercase tracking-wider mb-1 block">Descripción de la mercadería *</label>
        <textarea {...register('cargoDescription')} rows={2} placeholder="Qué producto es, país de origen, valor aproximado en USD..." className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-manfran-blue resize-none" />
        {errors.cargoDescription && <p className="text-red-400 text-xs mt-1">{errors.cargoDescription.message}</p>}
      </div>

      <div>
        <label className="font-display text-xs text-white uppercase tracking-wider mb-1 block">Peso (kg) *</label>
        <input {...register('weight')} placeholder="Ej: 500" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-manfran-blue" />
        {errors.weight && <p className="text-red-400 text-xs mt-1">{errors.weight.message}</p>}
      </div>

      <div>
        <label className="font-display text-xs text-white uppercase tracking-wider mb-1 block">Volumen (m³)</label>
        <input {...register('volume')} placeholder="Ej: 2.5" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-manfran-blue" />
      </div>

      <div>
        <label className="font-display text-xs text-white uppercase tracking-wider mb-1 block">Posición arancelaria (NCM)</label>
        <input {...register('hsCode')} placeholder="Ej: 8471.30" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-manfran-blue" />
      </div>

      <div>
        <label className="font-display text-xs text-white uppercase tracking-wider mb-1 block">Incoterm *</label>
        <select {...register('incoterm')} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-manfran-blue">
          <option value="">Seleccioná...</option>
          {QUOTER.incoterms.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        {errors.incoterm && <p className="text-red-400 text-xs mt-1">{errors.incoterm.message}</p>}
      </div>

      <div>
        <label className="font-display text-xs text-white uppercase tracking-wider mb-1 block">Tu nombre *</label>
        <input {...register('name')} placeholder="Nombre y apellido" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-manfran-blue" />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="font-display text-xs text-white uppercase tracking-wider mb-1 block">Email *</label>
        <input {...register('email')} type="email" placeholder="empresa@ejemplo.com" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-manfran-blue" />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div className="sm:col-span-2">
        {error && <p className="text-red-400 text-xs mb-2">{error}</p>}
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Solicitar cotización'}
        </Button>
      </div>
    </form>
  )
}

type Tab = 'servicio' | 'mercaderia'

export function Quoter() {
  const [activeTab, setActiveTab] = useState<Tab>('servicio')

  return (
    <section id="cotizador" className="relative py-section px-gutter overflow-hidden bg-black">

      {/* ── Background image ── */}
      {/* TODO: reemplazar background_quoter.jpg por versión 4K cuando esté lista */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/background_quoter.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        {/* Overlay capa 1: base oscura */}
        <div className="absolute inset-0 bg-[#1a1a1a]/50" />
        {/* Overlay capa 2: gradiente de profundidad — llega a transparente en el 40% */}
        <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-[#1a1a1a]/50 to-transparent" />
        {/* Fusión superior: funde con el bg de la sección Proceso (#080808) */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#080808] to-transparent z-10 pointer-events-none" />
        {/* Fusión inferior: funde con el bg de la sección Contacto */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080808] to-transparent z-10 pointer-events-none" />
      </div>

      <div className="relative z-20 max-w-site mx-auto">
       <div className="ml-auto w-full md:max-w-[580px] lg:max-w-[620px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-left mb-12"
        >
          <span className="font-display text-manfran-blue text-sm font-bold uppercase tracking-widest">
            Cotizador online
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-white mt-3">
            ¿Cuánto cuesta tu operación?
          </h2>
          <p className="text-white/50 mt-4">
            Completá el formulario y te respondemos en menos de 24 hs hábiles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="bg-white/[0.06] backdrop-blur-2xl border border-white/[0.10] rounded-2xl overflow-hidden"
        >
          {/* Tabs */}
          <div className="flex border-b border-white/8">
            {(['servicio', 'mercaderia'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 font-display font-bold uppercase text-sm tracking-wider transition-all ${
                  activeTab === tab
                    ? 'text-manfran-blue border-b-2 border-manfran-blue bg-manfran-blue/5'
                    : 'text-white/40 hover:text-white/70'
                }`}
              >
                Cotizar {tab}
              </button>
            ))}
          </div>

          {/* Form content */}
          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === 'servicio' ? <ServiceForm /> : <CargoForm />}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
       </div>
      </div>

    </section>
  )
}
