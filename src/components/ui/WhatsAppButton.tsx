'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { SITE } from '@/lib/constants'

// Formatea el número para wa.me: saca espacios y el + inicial
const waNumber = SITE.phone.replace(/\D/g, '')
const waHref = `https://wa.me/${waNumber}?text=Hola%2C%20quisiera%20hacer%20una%20consulta%20sobre%20sus%20servicios.`

export function WhatsAppButton() {
  return (
    <motion.a
      href={waHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full"
      style={{
        filter: 'drop-shadow(0 0 12px rgba(0,160,216,0.50))',
        transition: 'filter 0.3s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.filter = 'drop-shadow(0 0 22px rgba(0,160,216,0.80))'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.filter = 'drop-shadow(0 0 12px rgba(0,160,216,0.50))'
      }}
    >
      <Image
        src="/assets/manfran-whatsapp-icon.svg"
        alt="WhatsApp"
        width={56}
        height={56}
        priority
      />
    </motion.a>
  )
}
