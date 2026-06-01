'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { PROCESS_STEPS } from '@/lib/constants'

const COUNT = PROCESS_STEPS.length

// Section background — circles use this as their base fill so the line is
// cleanly hidden behind them rather than bleeding through via backdrop-blur.
const SECTION_BG = '#080808'

interface StepCircleProps {
  step: (typeof PROCESS_STEPS)[number]
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
  start: number
  end: number
}

function StepCircle({ step, scrollYProgress, start, end }: StepCircleProps) {
  // Border brightens as scroll reaches this step
  const borderColor = useTransform(
    scrollYProgress,
    [start, end],
    ['rgba(0,160,216,0.18)', 'rgba(0,160,216,0.75)']
  )
  // Outer glow and inner shine appear on scroll
  const glowShadow = useTransform(
    scrollYProgress,
    [start, end],
    [
      '0 0 0px rgba(0,160,216,0)',
      '0 0 20px rgba(0,160,216,0.42), 0 0 40px rgba(0,160,216,0.14), inset 0 1px 0 rgba(255,255,255,0.18)',
    ]
  )

  return (
    <div className="relative w-14 h-14 flex-shrink-0">
      {/* Solid base — same colour as section bg so line is hidden cleanly */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ background: SECTION_BG }}
      />

      {/* Glass layer — subtle blue tint on top of the solid base */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 35% 35%, rgba(0,160,216,0.16) 0%, rgba(0,160,216,0.05) 60%, transparent 100%)',
          border: '1px solid',
          borderColor,
          boxShadow: glowShadow,
        }}
      />

      {/* Specular top-left shine */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.04) 35%, transparent 55%)',
        }}
      />

      {/* Number */}
      <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-manfran-blue z-10 select-none"
        style={{ fontSize: '0.88rem' }}>
        {String(step.step).padStart(2, '0')}
      </span>
    </div>
  )
}

// ─── Section ────────────────────────────────────────────────────────────────
export function Process() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 65%', 'end 35%'],
  })

  // Horizontal line grows left → right with scroll (desktop)
  const lineWidth = useTransform(scrollYProgress, [0.02, 0.92], ['0%', '100%'])
  // Vertical line grows top → bottom with scroll (mobile)
  const lineHeight = useTransform(scrollYProgress, [0.02, 0.92], ['0%', '100%'])

  // Line spans between circle centers: offset = 50% / COUNT
  const lineOffset = `${100 / (COUNT * 2)}%`

  return (
    <section
      ref={sectionRef}
      id="proceso"
      className="relative py-section px-gutter overflow-hidden"
      style={{ background: SECTION_BG }}
    >
      {/* Fusión superior ← WhyUs (#111111) */}
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#111111] to-transparent z-[1] pointer-events-none" />

      {/* ── Header ── */}
      <motion.div
        className="max-w-site mx-auto mb-16 md:mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="font-display text-manfran-blue text-sm font-bold uppercase tracking-widest">
          Cómo trabajamos
        </span>
        <h2
          className="font-display font-bold uppercase text-white mt-3 leading-none"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
        >
          Proceso simple
        </h2>
      </motion.div>

      {/* ── Desktop: horizontal timeline ── */}
      <div className="hidden md:block max-w-site mx-auto">
        <div className="relative">

          {/* Line FIRST in DOM so circles paint on top */}
          {/* Dim track */}
          <div
            className="absolute h-px bg-white/[0.10] pointer-events-none"
            style={{ top: '27px', left: lineOffset, right: lineOffset }}
          />
          {/* Illuminated overlay — grows left → right */}
          <div
            className="absolute h-px overflow-hidden pointer-events-none"
            style={{ top: '27px', left: lineOffset, right: lineOffset }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full"
              style={{
                width: lineWidth,
                background:
                  'linear-gradient(to right, rgba(0,160,216,0.95) 0%, rgba(0,160,216,0.55) 100%)',
                boxShadow: '0 0 6px rgba(0,160,216,0.85)',
              }}
            />
          </div>

          {/* Circles + text SECOND (on top of line) */}
          <div className="flex">
            {PROCESS_STEPS.map((step, i) => {
              const start = 0.05 + (i / COUNT) * 0.72
              const end = start + 0.15
              const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1])
              const y = useTransform(scrollYProgress, [start, end], [18, 0])
              return (
                <motion.div
                  key={step.step}
                  className="flex-1 flex flex-col items-center"
                  style={{ opacity, y }}
                >
                  <StepCircle
                    step={step}
                    scrollYProgress={scrollYProgress}
                    start={start}
                    end={end}
                  />
                  <div className="mt-6 text-center px-2">
                    <h3
                      className="font-display font-bold uppercase text-white leading-none"
                      style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.15rem)' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-white/40 mt-2 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>

      {/* ── Mobile: vertical timeline ── */}
      <div className="md:hidden max-w-site mx-auto">
        <div className="relative">

          {/* Vertical track FIRST */}
          <div
            className="absolute top-7 w-px bg-white/[0.10] pointer-events-none"
            style={{ left: '27px', bottom: '7px' }}
          />
          <div
            className="absolute top-7 w-px overflow-hidden pointer-events-none"
            style={{ left: '27px', bottom: '7px' }}
          >
            <motion.div
              className="absolute top-0 left-0 right-0"
              style={{
                height: lineHeight,
                background:
                  'linear-gradient(to bottom, rgba(0,160,216,0.95) 0%, rgba(0,160,216,0.45) 100%)',
                boxShadow: '0 0 6px rgba(0,160,216,0.80)',
              }}
            />
          </div>

          {/* Steps SECOND */}
          <div className="flex flex-col">
            {PROCESS_STEPS.map((step, i) => {
              const start = 0.05 + (i / COUNT) * 0.72
              const end = start + 0.15
              const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1])
              const y = useTransform(scrollYProgress, [start, end], [16, 0])
              return (
                <motion.div
                  key={step.step}
                  className="flex gap-6 items-start"
                  style={{ opacity, y }}
                >
                  <StepCircle
                    step={step}
                    scrollYProgress={scrollYProgress}
                    start={start}
                    end={end}
                  />
                  <div className="flex-1 pt-2 pb-10 last:pb-0">
                    <h3 className="font-display font-bold uppercase text-white leading-none text-xl">
                      {step.title}
                    </h3>
                    <p className="text-white/40 mt-2 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>

    </section>
  )
}
