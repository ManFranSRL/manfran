'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { WHY_US } from '@/lib/constants'

// Asymmetric 3-col spans: wide–narrow / narrow–wide ("Z" pattern)
const CARD_SPANS = [
  'col-span-full md:col-span-2',
  'col-span-full md:col-span-1',
  'col-span-full md:col-span-1',
  'col-span-full md:col-span-2',
] as const

// Alternating reveal directions: even = from left, odd = from right
const REVEAL_FROM_LEFT = [true, false, true, false]

interface CardProps {
  item: (typeof WHY_US)[number]
  index: number
  sectionScrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
  isAnyHovered: boolean
  isHovered: boolean
  onHoverEnter: () => void
  onHoverLeave: () => void
}

function WhyUsCard({
  item,
  index,
  sectionScrollYProgress,
  isAnyHovered,
  isHovered,
  onHoverEnter,
  onHoverLeave,
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const fromLeft = REVEAL_FROM_LEFT[index]

  // Per-card scroll: completes reveal well before the section ends
  // 'end 75%' means animation finishes when card bottom is still at 75% of viewport
  const { scrollYProgress: cardProgress } = useScroll({
    target: cardRef,
    offset: ['start 95%', 'end 75%'],
  })

  // Scroll-driven clip-path with ease-out cubic
  const clipPath = useTransform(cardProgress, (v) => {
    const clamped = Math.max(0, Math.min(1, v))
    const eased = 1 - Math.pow(1 - clamped, 3)
    const pct = ((1 - eased) * 100).toFixed(2)
    return fromLeft ? `inset(0 0 0 ${pct}%)` : `inset(0 ${pct}% 0 0)`
  })

  // Parallax: bg gradient shifts slightly vs scroll
  const bgOffset = (index % 2 === 0 ? 1 : -1) * 8
  const bgY = useTransform(
    sectionScrollYProgress,
    [0, 1],
    [`${-bgOffset}%`, `${bgOffset}%`]
  )

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden min-h-[220px] md:min-h-[280px] ${CARD_SPANS[index]}`}
      style={{ clipPath }}
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
    >
      {/* Liquid glass base */}
      <div className="absolute inset-0 bg-white/[0.04] backdrop-blur-md" />

      {/* Parallax inner glow — shifts with scroll for depth */}
      <motion.div
        className="absolute inset-[-20%] pointer-events-none"
        style={{
          y: bgY,
          background:
            index % 3 === 0
              ? 'radial-gradient(ellipse 80% 80% at 85% 15%, rgba(0,160,216,0.10) 0%, transparent 65%)'
              : index % 3 === 1
              ? 'radial-gradient(ellipse 80% 80% at 15% 85%, rgba(0,160,216,0.06) 0%, transparent 65%)'
              : 'radial-gradient(ellipse 80% 80% at 85% 85%, rgba(0,160,216,0.08) 0%, transparent 65%)',
        }}
        aria-hidden
      />

      {/* Border — glows blue on hover, subtle otherwise */}
      <div
        className="absolute inset-0 border pointer-events-none transition-colors duration-300"
        style={{
          borderColor: isHovered
            ? 'rgba(0,160,216,0.55)'
            : 'rgba(255,255,255,0.08)',
        }}
      />

      {/* Dim overlay for non-hovered neighbors */}
      <div
        className="absolute inset-0 z-20 bg-black pointer-events-none transition-opacity duration-300"
        style={{ opacity: isAnyHovered && !isHovered ? 0.45 : 0 }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10">
        <h3
          className="font-display font-bold uppercase text-white leading-none"
          style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
        >
          {item.title}
        </h3>
        <p className="text-white/50 mt-3 text-sm leading-relaxed max-w-xs">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

export function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  return (
    <section
      ref={sectionRef}
      id="por-que"
      className="relative py-section px-gutter bg-[var(--color-gray-900)] overflow-hidden"
    >
      {/* Fusión superior ← Services (#111111) */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#111111] to-transparent z-20 pointer-events-none" />

      {/* Background glow blobs — give the backdrop-blur something to catch */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: '55vw',
          height: '55vw',
          top: '-10%',
          right: '-15%',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(0,160,216,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: '40vw',
          height: '40vw',
          bottom: '0%',
          left: '-10%',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(0,160,216,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-site mx-auto">

        {/* Section header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-display text-manfran-blue text-sm font-bold uppercase tracking-widest block mb-3">
            Por qué MANFRAN
          </span>
          <h2
            className="font-display font-bold uppercase text-white leading-none"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
          >
            La diferencia<br />
            <span className="text-manfran-blue">que importa</span>
          </h2>
          <p className="text-white/50 mt-5 leading-relaxed max-w-md">
            Más de una década en el comercio exterior argentino nos da la experiencia para resolver cualquier operación con precisión y confianza.
          </p>
        </motion.div>

        {/* Asymmetric grid — 3 cols desktop, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {WHY_US.map((item, i) => (
            <WhyUsCard
              key={item.title}
              item={item}
              index={i}
              sectionScrollYProgress={scrollYProgress}
              isAnyHovered={hoveredIndex !== null}
              isHovered={hoveredIndex === i}
              onHoverEnter={() => setHoveredIndex(i)}
              onHoverLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
