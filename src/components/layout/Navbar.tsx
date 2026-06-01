'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { Marquee } from './Marquee'

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Por qué MANFRAN', href: '#por-que' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Cotizador', href: '#cotizador' },
]

export function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScroll = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setHidden(y > lastScroll.current && y > 160)
      lastScroll.current = y
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out',
        hidden && !menuOpen ? '-translate-y-full' : 'translate-y-0'
      )}
    >
      <Marquee />

      <div className="mx-auto max-w-site px-gutter pt-3 lg:px-gutter-nav">
        <div className="flex h-14 items-center justify-between rounded-2xl bg-white/[0.06] px-4 backdrop-blur-2xl lg:pl-6 lg:pr-3">
          <Link href="/" className="flex items-center" aria-label="MANFRAN — inicio">
            <Image
              src="/assets/brand/logo-manfran.svg"
              alt="MANFRAN"
              width={1361}
              height={321}
              className="h-7 w-auto"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-12 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-base text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={goToContact}
              className="relative overflow-hidden rounded-full bg-[var(--color-blue)] px-6 py-2.5 font-display text-base text-white ring-1 ring-inset ring-white/25 transition-transform hover:scale-[1.03]"
            >
              <span
                className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent"
                aria-hidden="true"
              />
              <span className="relative">Consultanos</span>
            </button>
          </div>

          <button
            className="p-2 text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
            aria-expanded={menuOpen}
          >
            <div className="flex w-6 flex-col gap-1.5">
              <span className={cn('h-0.5 bg-white transition-all', menuOpen && 'translate-y-2 rotate-45')} />
              <span className={cn('h-0.5 bg-white transition-all', menuOpen && 'opacity-0')} />
              <span className={cn('h-0.5 bg-white transition-all', menuOpen && '-translate-y-2 -rotate-45')} />
            </div>
          </button>
        </div>

        {menuOpen && (
          <div className="mt-2 flex flex-col gap-4 rounded-2xl bg-black/80 p-5 backdrop-blur-2xl md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-white/85 transition-colors hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false)
                goToContact()
              }}
              className="rounded-full bg-[var(--color-blue)] py-2.5 font-display text-base text-white ring-1 ring-inset ring-white/25"
            >
              Consultanos
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
