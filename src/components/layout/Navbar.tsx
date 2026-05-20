'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Por qué MANFRAN', href: '#por-que' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Cotizador', href: '#cotizador' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[var(--color-black)]/95 backdrop-blur-sm border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/brand/logo-white-on-dark.png"
            alt="MANFRAN"
            width={140}
            height={44}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
            Consultanos
          </Button>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={cn('h-0.5 bg-white transition-all', menuOpen && 'rotate-45 translate-y-2')} />
            <span className={cn('h-0.5 bg-white transition-all', menuOpen && 'opacity-0')} />
            <span className={cn('h-0.5 bg-white transition-all', menuOpen && '-rotate-45 -translate-y-2')} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[var(--color-black)] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="w-full" onClick={() => { setMenuOpen(false); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Consultanos
          </Button>
        </div>
      )}
    </header>
  )
}
