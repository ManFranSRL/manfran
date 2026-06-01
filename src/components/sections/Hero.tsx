'use client'

import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { HERO } from '@/lib/constants'

function RotatingWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [words.length])

  return (
    <span className="inline-grid align-baseline">
      {words.map((word, i) => (
        <span
          key={word}
          aria-hidden={i !== index}
          className="col-start-1 row-start-1 transition-all duration-[450ms] ease-out"
          style={{
            opacity: i === index ? 1 : 0,
            transform: i === index ? 'translateY(0)' : 'translateY(0.32em)',
          }}
        >
          {word}
        </span>
      ))}
    </span>
  )
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-[var(--color-black)]">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay capa 1: oscurece el fondo blanco del video */}
      <div className="absolute inset-0 bg-[var(--color-gray-900)]/75" />

      {/* Overlay capa 2: tinte azul MANFRAN tenue */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-blue-deep)]/50 via-[var(--color-blue-deep)]/20 to-transparent" />

      {/* Fusión inferior → Stats (black puro #000000) */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#000000] z-[1] pointer-events-none" />

      {/* Contenido */}
      <div className="relative z-10 w-full px-gutter pb-14 lg:px-gutter-nav">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[3rem] font-bold uppercase leading-[1.04] tracking-normal sm:text-[4rem] lg:text-[4.4rem]"
        >
          <span className="block text-white">
            <RotatingWord words={HERO.rotatingWords} />
          </span>
          <span className="block text-white">{HERO.slogan.line2}</span>
          {HERO.slogan.accentLines.map((line) => (
            <span key={line} className="block text-[var(--color-blue)]">
              {line}
            </span>
          ))}
        </motion.h1>
      </div>
    </section>
  )
}
