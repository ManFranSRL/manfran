'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { STATS } from '@/lib/constants'

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count.toLocaleString('es-AR')}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative bg-[#000000] pt-section pb-10 px-gutter overflow-hidden">
      {/* Sin fade superior: el Hero ya termina en #000000 y fluye sin corte. */}
      <div className="max-w-site mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center"
          >
            <span
              className="font-display font-bold text-manfran-blue leading-none"
              style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)' }}
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
            </span>
            <span className="font-display font-bold uppercase text-white/55 text-xs md:text-sm tracking-[0.22em] mt-3">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
