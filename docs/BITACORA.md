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
- Instalar dependencias y correr dev server
- Deploy en Vercel
- Confirmar datos de stats con Franco y Manuel
- Contenido final de todos los textos
