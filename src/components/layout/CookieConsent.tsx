'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useState } from 'react'
import { COOKIE } from '@/lib/constants'

const STORAGE_KEY = 'manfran-cookie-consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY)) return
    const timer = setTimeout(() => setVisible(true), 900)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = (choice: 'accepted' | 'rejected') => {
    window.localStorage.setItem(STORAGE_KEY, choice)
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-[60] w-[min(420px,calc(100vw-3rem))] rounded-2xl bg-white/[0.06] p-6 backdrop-blur-2xl"
          role="dialog"
          aria-label="Aviso de cookies"
        >
          <p className="font-body text-[13px] leading-relaxed text-white/80">
            {COOKIE.textBefore}
            <span className="font-bold text-white">{COOKIE.privacyLabel}</span>
            {COOKIE.textAfter}
          </p>
          <div className="mt-5 flex gap-3">
            <button
              onClick={() => dismiss('accepted')}
              className="relative flex-1 overflow-hidden rounded-full bg-[var(--color-blue)] py-2.5 font-display text-base text-white ring-1 ring-inset ring-white/25 transition-transform hover:scale-[1.03]"
            >
              <span
                className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent"
                aria-hidden="true"
              />
              <span className="relative">{COOKIE.accept}</span>
            </button>
            <button
              onClick={() => dismiss('rejected')}
              className="flex-1 rounded-full bg-black py-2.5 font-display text-base text-white ring-1 ring-inset ring-white/15 transition-transform hover:scale-[1.03]"
            >
              {COOKIE.reject}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
