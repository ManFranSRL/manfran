import Image from 'next/image'
import { SITE } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-[var(--color-gray-900)] border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <Image
              src="/assets/brand/logo-white-on-dark.png"
              alt="MANFRAN"
              width={120}
              height={38}
              className="h-8 w-auto object-contain mb-3"
            />
            <p className="text-white/40 text-sm max-w-xs">{SITE.tagline}</p>
          </div>

          <div className="flex gap-12 text-sm text-white/60">
            <div className="flex flex-col gap-2">
              <span className="text-white/30 text-xs uppercase tracking-wider mb-1">Servicios</span>
              <a href="#servicios" className="hover:text-white transition-colors">Importación</a>
              <a href="#servicios" className="hover:text-white transition-colors">Exportación</a>
              <a href="#servicios" className="hover:text-white transition-colors">Despacho Aduanero</a>
              <a href="#servicios" className="hover:text-white transition-colors">Logística</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white/30 text-xs uppercase tracking-wider mb-1">Contacto</span>
              <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">{SITE.email}</a>
              <a href={`tel:${SITE.phone}`} className="hover:text-white transition-colors">{SITE.phone}</a>
              <span>{SITE.address}</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/25">
          <span>© {new Date().getFullYear()} MANFRAN. Todos los derechos reservados.</span>
          <span>Agente de carga · Despachante de aduana · Argentina</span>
        </div>
      </div>
    </footer>
  )
}
