'use client'

import { useEffect, useState } from 'react'
import { MARQUEE_ITEMS } from '@/lib/constants'

// Cada track repite los ítems para garantizar que sea más ancho que
// cualquier viewport — clave para que el loop no muestre huecos ni saltos.
const REPEAT = 3

function Track() {
  return (
    <div className="flex shrink-0 items-center">
      {Array.from({ length: REPEAT }).map((_, r) =>
        MARQUEE_ITEMS.map((item) => (
          <span key={`${r}-${item}`} className="flex items-center">
            <span className="px-8 font-display text-sm uppercase tracking-[0.12em] text-white">
              {item}
            </span>
            <span className="text-white/40" aria-hidden="true">
              •
            </span>
          </span>
        ))
      )}
    </div>
  )
}

export function Marquee() {
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const onScroll = () => setCollapsed(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="overflow-hidden bg-[var(--color-blue)] transition-all duration-300 ease-out"
      style={{ height: collapsed ? 0 : 36, opacity: collapsed ? 0 : 1 }}
      aria-hidden={collapsed}
    >
      <div className="flex h-9 items-center">
        {/* Dos tracks idénticos: el keyframe traslada exactamente -50%
            (un track), así el segundo ocupa la posición del primero
            y el reinicio es invisible. */}
        <div className="flex w-max shrink-0 animate-[marquee_60s_linear_infinite] items-center">
          <Track />
          <Track />
        </div>
      </div>
    </div>
  )
}
