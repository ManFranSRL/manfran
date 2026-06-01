import Image from 'next/image'
import { SITE, SERVICES, SOCIAL, FOOTER } from '@/lib/constants'

const SERVICIOS = SERVICES.map((s) => ({ label: s.title, href: '#servicios' }))

const NAVEGACION = [
  { label: 'Por qué MANFRAN', href: '#por-que' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Cotizador', href: '#cotizador' },
  { label: 'Contacto', href: '#contacto' },
]

const headerClass = 'font-display text-base uppercase tracking-[0.14em] text-white'
const linkClass = 'font-display text-sm text-white/50 transition-colors hover:text-white'
const staticClass = 'font-display text-sm text-white/50'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="sticky bottom-0 z-0 bg-[var(--color-gray-900)]">
      <div className="mx-auto max-w-site px-gutter pb-8 pt-12 lg:px-gutter-nav">
        {/* Main row: logo | 3 columns | social */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-x-16">
          {/* Logo */}
          <Image
            src="/assets/brand/logo-emblema.png"
            alt="MANFRAN"
            width={512}
            height={512}
            className="h-40 w-40 shrink-0 self-start object-contain object-top"
          />

          {/* 3 columns */}
          <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:gap-x-8">
            <div className="flex flex-col gap-3">
              <span className={headerClass}>Servicios</span>
              {SERVICIOS.map((link) => (
                <a key={link.label} href={link.href} className={linkClass}>
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span className={headerClass}>Navegación</span>
              {NAVEGACION.map((link) => (
                <a key={link.label} href={link.href} className={linkClass}>
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span className={headerClass}>Contacto</span>
              <span className={staticClass}>{SITE.email}</span>
              <span className={staticClass}>{SITE.phone}</span>
              <span className={staticClass}>{SITE.address}</span>
            </div>
          </div>

          {/* Social icons — horizontal row, top-aligned with column titles */}
          <div className="flex flex-row gap-3 self-start">
            {SOCIAL.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/55 transition-colors hover:border-manfran-blue hover:text-manfran-blue"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright row — no border, white text */}
        <div className="mt-10 flex flex-col gap-4 pt-6 md:flex-row md:items-center md:justify-between">
          <span className="font-display text-sm text-white">
            {FOOTER.copyrightPrefix} {year} {FOOTER.copyrightSuffix}
          </span>
          <div className="flex gap-8">
            {FOOTER.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display text-sm text-white transition-colors hover:text-white/60"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Big logo */}
        <div className="mt-6 select-none" aria-hidden="true">
          <Image
            src="/assets/brand/logo-manfran.svg"
            alt=""
            width={1361}
            height={321}
            className="h-auto w-full"
          />
        </div>
      </div>
    </footer>
  )
}
