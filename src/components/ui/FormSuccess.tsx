'use client'

import { useEffect } from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'

interface FormSuccessProps {
  title: string
  subtitle: string
  onReset: () => void
  autoResetMs?: number
}

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
        className="mb-6"
        style={{ filter: 'drop-shadow(0 0 20px rgba(0,160,216,0.55))' }}
      >
        <Image
          src="/assets/manfran-check-icon.svg"
          alt="Enviado"
          width={72}
          height={72}
        />
      </motion.div>
      <p className="font-display text-2xl font-bold uppercase text-white">{title}</p>
      <p className="text-white/50 mt-2">{subtitle}</p>
    </motion.div>
  )
}
