'use client'

import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'

export function Services() {
  return (
    <section id="servicios" className="py-24 px-6 bg-[var(--color-black)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-blue)] text-sm font-semibold uppercase tracking-widest">
            Nuestros servicios
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold uppercase text-white mt-3">
            Todo lo que necesitás
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Cobertura integral de tu operación, desde el origen hasta el destino final.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white/3 hover:bg-white/6 border border-white/8 hover:border-[var(--color-blue)]/40 rounded-xl p-6 transition-all duration-300 cursor-default"
            >
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <h3 className="font-display text-xl font-bold uppercase text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
              <div className="mt-4 h-0.5 w-0 bg-[var(--color-blue)] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
