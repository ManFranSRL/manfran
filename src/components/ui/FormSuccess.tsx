'use client'

import { useEffect } from 'react'
import { motion } from 'motion/react'

interface FormSuccessProps {
  title: string
  subtitle: string
  /** Se llama tras `autoResetMs` para volver al formulario (fade out → fade in). */
  onReset: () => void
  autoResetMs?: number
}

/**
 * Notificación de éxito de formularios — estética MANFRAN (check azul + glow).
 * Aparece con fade/scale, dibuja el check, y a los ~4.5s dispara `onReset`
 * para que el padre (AnimatePresence) la funda de salida y reaparezca el form.
 */
export function FormSuccess({ title, subtitle, onReset, autoResetMs = 4500 }: FormSuccessProps) {
  useEffect(() => {
    const t = setTimeout(onReset, autoResetMs)
    return () => clearTimeout(t)
  }, [onReset, autoResetMs])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center text-center py-14"
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-manfran-blue"
        style={{ boxShadow: '0 0 30px rgba(0,160,216,0.5)' }}
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <motion.path
            d="M4 12.5l5 5L20 6.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.35, duration: 0.5, ease: 'easeOut' }}
          />
        </svg>
      </motion.div>
      <p className="font-display text-2xl font-bold uppercase text-white">{title}</p>
      <p className="text-white/50 mt-2">{subtitle}</p>
    </motion.div>
  )
}
