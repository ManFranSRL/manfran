'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CLIENTS } from '@/lib/constants'

// El track se repite hasta superar cualquier viewport. Con 4 logos por lista,
// 6 repeticiones aseguran ~24 logos visibles antes del loop.
const REPEAT = 6

type Direction = 'left' | 'right'

// Rota el array de logos. Para que el loop sea seamless, AMBOS LogoTrack
// dentro de la misma fila deben tener el mismo contenido — el offset
// se aplica a nivel de fila, no de track.
function rotate<T>(arr: T[], n: number): T[] {
  const k = ((n % arr.length) + arr.length) % arr.length
  return [...arr.slice(k), ...arr.slice(0, k)]
}

function LogoTrack({ items }: { items: typeof CLIENTS }) {
  return (
    <div
      className="flex shrink-0 items-center gap-16 md:gap-24 pr-16 md:pr-24"
      aria-hidden="true"
    >
      {Array.from({ length: REPEAT }).map((_, r) =>
        items.map((logo) => (
          <div
            key={`${r}-${logo.name}`}
            className="relative flex h-16 w-32 shrink-0 items-center justify-center md:h-20 md:w-40"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              sizes="160px"
              className="object-contain opacity-60 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
              style={logo.invert ? { filter: 'brightness(0) invert(1)' } : undefined}
              draggable={false}
            />
          </div>
        ))
      )}
    </div>
  )
}

function CarouselRow({
  direction,
  offset = 0,
  duration = 90,
}: {
  direction: Direction
  offset?: number
  duration?: number
}) {
  const [paused, setPaused] = useState(false)
  const items = offset === 0 ? CLIENTS : rotate(CLIENTS, offset)

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Fades laterales (full black) para que los logos aparezcan/desaparezcan sin corte */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#000000] to-transparent md:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#000000] to-transparent md:w-40" />

      <div
        className="flex w-max items-center animate-[marquee_90s_linear_infinite]"
        style={{
          animationDuration: `${duration}s`,
          animationPlayState: paused ? 'paused' : 'running',
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        {/* IMPORTANTE: ambos tracks deben ser idénticos para que el loop -50% sea seamless */}
        <LogoTrack items={items} />
        <LogoTrack items={items} />
      </div>
    </div>
  )
}

export function ClientsCarousel() {
  return (
    <section className="relative bg-[#000000] pt-8 pb-section-sm overflow-hidden">
      {/* Fusión inferior: fade a negro puro para entrada cinematográfica en Services */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48 bg-gradient-to-b from-transparent to-[#000000]" />

      <div className="max-w-site mx-auto px-gutter">
        <h2
          className="font-display font-bold uppercase text-white text-center mb-10 md:mb-12 leading-[0.95]"
          style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.1rem)', letterSpacing: '0.22em' }}
        >
          Confían en MANFRAN
        </h2>
      </div>

      <div className="flex flex-col gap-8 md:gap-10">
        <CarouselRow direction="left" offset={0} duration={90} />
        <CarouselRow direction="right" offset={2} duration={90} />
      </div>
    </section>
  )
}
