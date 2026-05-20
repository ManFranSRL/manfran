'use client'

import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '@/lib/constants'

export function Process() {
  return (
    <section id="proceso" className="py-24 px-6 bg-[var(--color-black)] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-blue)] text-sm font-semibold uppercase tracking-widest">
            Cómo trabajamos
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold uppercase text-white mt-3">
            Proceso simple
          </h2>
        </motion.div>

        <div className="relative">
          {/* connecting line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-white/8" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full border border-[var(--color-blue)]/40 bg-[var(--color-blue)]/10 mb-4 z-10">
                  <span className="font-display text-2xl font-extrabold text-[var(--color-blue)]">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold uppercase text-white mb-1">{step.title}</h3>
                <p className="text-white/50 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
