'use client'

import { useRef, useState, useCallback } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useInView,
  type MotionValue,
} from 'motion/react'
import Image from 'next/image'
import { SERVICES } from '@/lib/constants'

const BG_GRADIENTS = [
  'linear-gradient(135deg, #0a1628 0%, #003F5C 60%, #001520 100%)',
  'linear-gradient(135deg, #0d0d14 0%, #0a1f3d 50%, #001020 100%)',
  'linear-gradient(135deg, #0d0d0d 0%, #1a0a2e 60%, #0a0a18 100%)',
  'linear-gradient(135deg, #100800 0%, #1a1000 50%, #0d0800 100%)',
  'linear-gradient(135deg, #001a1a 0%, #003040 60%, #001a1a 100%)',
]

const SERVICE_IMAGES_DESKTOP = [
  '/assets/services/importacion_desktop.png',
  '/assets/services/exportacion_desktop.png',
  '/assets/services/despacho_desktop.png',
  '/assets/services/logistica_desktop.png',
  '/assets/services/asesoria_desktop.png',
]

const SERVICE_IMAGES_MOBILE = [
  '/assets/services/importacion_mobile.png',
  '/assets/services/exportacion_mobile.png',
  '/assets/services/despacho_mobile.png',
  '/assets/services/logistica_mobile.png',
  '/assets/services/asesoria_mobile.png',
]

const SPOTLIGHT_RADIUS = 320

function TypewriterEyebrow({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <span
      ref={ref}
      className="font-display text-manfran-blue font-bold uppercase block overflow-hidden whitespace-nowrap"
      style={{
        fontSize: 'clamp(0.75rem, 2.5vw, 1.1rem)',
        letterSpacing: '0.22em',
        animation: inView
          ? `typewriter 1.1s steps(${text.length}, end) 0.1s both`
          : 'none',
        width: inView ? undefined : 0,
      }}
    >
      {text}
    </span>
  )
}

function ProgressDots({
  scrollYProgress,
  count,
}: {
  scrollYProgress: MotionValue<number>
  count: number
}) {
  const [active, setActive] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.round(v * (count - 1)))
  })

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`rounded-full transition-all duration-500 ${
            i === active
              ? 'w-6 h-1.5 bg-manfran-blue'
              : 'w-1.5 h-1.5 bg-white/25'
          }`}
        />
      ))}
    </div>
  )
}

function ServiceCard({
  service,
  index,
  gradient,
  desktopImageSrc,
  mobileImageSrc,
}: {
  service: (typeof SERVICES)[number]
  index: number
  gradient: string
  desktopImageSrc: string
  mobileImageSrc: string
}) {
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  const handleMouseLeave = useCallback(() => setMouse(null), [])

  const spotlightStyle: React.CSSProperties = mouse
    ? {
        background: `radial-gradient(circle ${SPOTLIGHT_RADIUS}px at ${mouse.x}px ${mouse.y}px, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.62) 100%)`,
        transition: 'none',
      }
    : {
        background: 'rgba(0,0,0,0.60)',
        transition: 'background 0.6s ease',
      }

  return (
    <div
      ref={cardRef}
      className="relative flex-shrink-0 w-screen h-full md:cursor-crosshair"
      style={{ background: gradient }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Mobile image */}
      <Image
        src={mobileImageSrc}
        alt=""
        fill
        className="object-cover md:hidden"
        aria-hidden
        priority={index === 0}
      />
      {/* Desktop image */}
      <Image
        src={desktopImageSrc}
        alt=""
        fill
        className="object-cover hidden md:block"
        aria-hidden
        priority={index === 0}
      />

      {/* Spotlight overlay (desktop hover) / static dark overlay (mobile) */}
      <div className="absolute inset-0 z-[1]" style={spotlightStyle} />

      {/* Bottom vignette */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
      {/* Left vignette */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Card content */}
      <div className="absolute z-[4] bottom-16 left-6 right-6 md:bottom-20 md:left-16 md:right-auto md:max-w-2xl">
        <h3
          className="font-display font-bold uppercase text-white leading-[0.88]"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)' }}
        >
          {service.title}
        </h3>
        <p className="font-display font-normal text-white/55 mt-4 md:mt-6 text-base md:text-lg max-w-md leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  )
}

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const count = SERVICES.length
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0vw', `${-(count - 1) * 100}vw`]
  )

  return (
    <section id="servicios" className="relative">
      <div
        ref={containerRef}
        style={{ height: `${count * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Fusión superior — dentro del sticky para compartir stacking context con el eyebrow */}
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#000000] to-transparent z-30 pointer-events-none" />
          {/* Fusión inferior → WhyUs (#111111) */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#111111] z-30 pointer-events-none" />

          {/* Eyebrow — z-[35] > z-30 fades, mismo stacking context → visible */}
          <div className="absolute top-6 left-6 md:top-10 md:left-16 z-[35] pointer-events-none">
            <TypewriterEyebrow text="Nuestros servicios" />
          </div>

          {/* Horizontal moving track */}
          <motion.div
            style={{ x }}
            className="flex h-full will-change-transform"
          >
            {SERVICES.map((service, i) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={i}
                gradient={BG_GRADIENTS[i]}
                desktopImageSrc={SERVICE_IMAGES_DESKTOP[i]}
                mobileImageSrc={SERVICE_IMAGES_MOBILE[i]}
              />
            ))}
          </motion.div>

          <ProgressDots scrollYProgress={scrollYProgress} count={count} />
        </div>
      </div>
    </section>
  )
}
