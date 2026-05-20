# Bitácora técnica — MANFRAN Web

_Log cronológico. Tercera persona. Factual. Espejado en ObsidianVaults/ManFran/Bitácora.md_

---

## 2026-05-20

Se inicializó el proyecto `manfran-web` con Next.js 16.2.6, React 19, Tailwind CSS v4, TypeScript estricto.

**Estructura creada:**
- Arquitectura de carpetas completa (src/app, components, lib, styles, docs, scripts)
- Assets de marca copiados a `assets/brand/` y `public/assets/brand/`
- CLAUDE.md con instrucciones del proyecto y sistema Obsidian

**Componentes implementados:**
- `layout/Navbar.tsx` — sticky, responsive, scroll-aware
- `layout/Footer.tsx`
- `sections/Hero.tsx` — fondo con partículas canvas, Framer Motion fade+slide
- `sections/Stats.tsx` — 4 métricas con animación counter-up
- `sections/Services.tsx` — grid de 5 servicios con hover effects
- `sections/WhyUs.tsx` — 4 diferenciadores con animación al scroll
- `sections/Process.tsx` — timeline de 5 pasos
- `sections/Quoter.tsx` — cotizador con 2 tabs (servicio / mercadería), validación zod
- `sections/Contact.tsx` — formulario de contacto con validación

**Configuración:**
- Tailwind v4 con tokens CSS custom en `src/styles/tokens.css`
- Google Fonts: Barlow Condensed (display) + Inter (body) via `next/font`
- Metadatos SEO completos en `layout.tsx`

**Vault Obsidian:**
- Notas raíz creadas: Index, Bitácora, Memoria, Handoff Notes, Plan Activo
- Subcarpetas: 01-Proyecto Web, 02-Negocio, 03-Automatizaciones, 04-Credenciales, 05-Ideas

**Pendiente:**
- Instalar dependencias y correr dev server ✓ (resuelto en sesión 2)
- Deploy en Vercel ✓ (resuelto en sesión 2)
- Confirmar datos de stats con Franco y Manuel
- Contenido final de todos los textos

---

## 2026-05-20 — Sesión 2: Favicon, OG image, tema Obsidian, GitHub y Vercel

**Qué se hizo:**
- Creado tema Obsidian MANFRAN con fuentes locales (Avenir Next Condensed Bold + Helvetica) y colores de marca. Font-weight unificado a 600 en todos los headings H1–H6
- Creadas fuentes locales en vault: `assets/fonts/` con avenir-next-condensed-bold.ttf, Helvetica.ttf, Helvetica-Bold.ttf, helvetica-light.ttf
- Corregido `globals.css`: eliminado `@import url()` duplicado de Google Fonts (ya se cargan vía `next/font`)
- Favicon optimizado a 32×32 px (`public/favicon-32.png`) y `favicon.ico` regenerado
- OG image copiada a `public/og-image.png`, referencias actualizadas en `layout.tsx`
- Cuenta GitHub creada (ManFranSRL), repo `manfran-web` creado y push completado
- Cuenta Vercel creada y conectada al repo, deploy inicial exitoso
- Dominio `manfran.com` agregado a Vercel — registros DNS obtenidos pero pendientes de configurar
- Skills de Claude Code creadas: `/session-close`, `/obsidian-handoff`, `/obsidian-sync`

**Archivos modificados:**
- `src/app/globals.css` — eliminado @import de Google Fonts duplicado
- `src/app/layout.tsx` — OG image actualizada a `.png`
- `public/favicon.ico` — regenerado desde favicon.png editado
- `public/favicon-32.png` — nuevo, 32×32 px
- `public/og-image.png` — nuevo
- `.claude/commands/session-close.md` — nueva skill
- `.claude/commands/obsidian-handoff.md` — nueva skill
- `.claude/commands/obsidian-sync.md` — nueva skill

**Pendiente:**
- DNS manfran.com — bloqueado hasta hablar con Manuel (tiene acceso a Google Workspace)
  - CNAME: www → 417ddb1d3a6e551e.vercel-dns-017.com.
  - A: @ → 216.198.79.1
- Confirmar datos reales de stats con Franco y Manuel
- Contenido final de textos
