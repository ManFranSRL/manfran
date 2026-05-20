'use client'

import { motion } from 'framer-motion'
import { WHY_US } from '@/lib/constants'

export function WhyUs() {
  return (
    <section id="por-que" className="py-24 px-6 bg-[var(--color-gray-900)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[var(--color-blue)] text-sm font-semibold uppercase tracking-widest">
              Por qué MANFRAN
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold uppercase text-white mt-3 leading-none">
              La diferencia<br />
              <span className="text-[var(--color-blue)]">que importa</span>
            </h2>
            <p className="text-white/50 mt-6 leading-relaxed">
              Más de una década en el comercio exterior argentino nos da la experiencia para resolver cualquier operación con precisión y confianza.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="p-5 bg-white/3 border border-white/8 rounded-xl"
              >
                <div className="w-8 h-0.5 bg-[var(--color-blue)] mb-4" />
                <h3 className="font-display text-lg font-bold uppercase text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
