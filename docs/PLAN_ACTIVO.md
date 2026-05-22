# Plan Activo

> Estado mutable de tareas. Actualizar en cada sesión.
> Ver también: [[Handoff Notes]], [[Bitácora]], [[Auditoría Visual]]

---

## Fase 1: Landing page (one-shot inicial)

### ✅ Completado (2026-05-20, Sesiones 1–3)
- [x] Estructura de proyecto Next.js 16 + Tailwind v4 + TypeScript
- [x] CLAUDE.md
- [x] Assets de marca copiados
- [x] Tokens CSS y globals.css (v1 — reemplazados en Sesión 5)
- [x] `lib/constants.ts` con todos los textos
- [x] `lib/utils.ts`
- [x] layout.tsx con metadatos SEO
- [x] Navbar v1 (sticky, responsive, scroll-aware)
- [x] Footer v1
- [x] Hero v1 (partículas canvas + Framer Motion)
- [x] Stats v1 (counter-up animado)
- [x] Services v1 (grid con hover)
- [x] WhyUs v1 (scroll animations)
- [x] Process v1 (timeline)
- [x] Quoter v1 (2 tabs, zod + react-hook-form)
- [x] Contact v1 (formulario validado)
- [x] page.tsx con composición completa
- [x] Docs: ROADMAP, BITACORA, DESIGN_SYSTEM, AUTOMATIONS
- [x] Vault Obsidian: estructura completa
- [x] Deploy en Vercel
- [x] Favicon 32×32 y OG image
- [x] Tema Obsidian MANFRAN
- [x] Skills `/session-close`, `/obsidian-handoff`, `/obsidian-sync`

### ✅ Completado en Sesión 4 (2026-05-20)
- [x] Diagnóstico visual del one-shot
- [x] Investigación profunda de Nuvocargo (DOM + screenshots)
- [x] Nota `01-Proyecto Web/Auditoría Visual.md` creada
- [x] Plan de refactor en 5 fases definido
- [x] 4 decisiones de dirección congeladas

---

## Fase 1.5: Rediseño visual

### ✅ Completado en Sesión 5 (2026-05-22)
- [x] **Fase A — Sistema de diseño 2.0**
  - [x] Migración de fuentes: `next/font/local` con Avenir Next Condensed Bold + Helvetica
  - [x] `tokens.css` v2 (escala tipográfica, spacing, radius, easings, shadows)
  - [x] `globals.css` v2: cascade layer fix + `@theme inline` + `@keyframes marquee`
  - [x] Fix `--font-display`/`--font-body` en tokens.css (conflicto con next/font hash)
- [x] **Fase B — Esqueleto**
  - [x] Navbar v2: liquid glass, hide-on-scroll, Marquee integrada, gap-12 nav items
  - [x] Marquee v1: CSS keyframe, loop sin saltos, collapse on scroll, `shrink-0` fix
  - [x] Footer v2: logo emblema + 3 columnas + social SVG + logo gigante + copyright/legal
- [x] **Fase C — Hero + UI**
  - [x] Hero v2: slogan bottom-left, animación CSS crossfade (sin AnimatePresence)
  - [x] CookieConsent: liquid glass, delay 900ms, localStorage persistence
  - [x] Assets: `logo-emblema.png` y `logo-manfran.svg` en `public/assets/brand/`
  - [x] `constants.ts`: SOCIAL, HERO, MARQUEE_ITEMS, COOKIE, FOOTER

### ✅ Completado en Sesión 6 (2026-05-22)
- [x] **Footer v3 — refinements finales**
  - [x] Logo emblema duplicado: h-64 (256px), `self-start object-top`
  - [x] Layout: logo | grid 3 columnas | social horizontal (`self-start`)
  - [x] Border-t encima del copyright eliminado
  - [x] Copyright y links legales en blanco puro
  - [x] Columna Contacto: texto estático (spans, sin links)
  - [x] Social icons horizontal, h-11/w-11, iconos h-5/w-5
  - [x] Gap reducido entre columnas y logo↔big-logo
  - [x] Jerarquía tipográfica: headers `text-base` > links `text-sm`
  - [x] Fix: `text-manfran-blue` (token Tailwind v4 correcto)
- [x] **Hero v3 — Video background**
  - [x] `<video autoPlay loop muted playsInline>` reemplaza ParticleCanvas
  - [x] `hero-bg.mp4` (19.1 MB) en `public/assets/video/`
  - [x] Overlay doble: gris-900/75 + gradiente blue-deep tenue
- [x] **Botones — Avenir universal**
  - [x] Regla global CSS: `button { font-family: var(--font-display); font-weight: 700 }`
  - [x] `Button.tsx`: `font-display font-bold uppercase tracking-wide`

### 🔄 Próximo — Fase D (secciones internas)
- [ ] Stats: `font-extrabold` → `font-bold`, `px-6 py-16` → tokens, `max-w-5xl` → `max-w-site`
- [ ] Services: font-display en eyebrow + heading, padding/container tokens, border opacity sintax fix
- [ ] WhyUs: ídem Services
- [ ] Process: ídem Services
- [ ] Quoter: ídem + `<select>` background oscuro para opciones visibles
- [ ] Contact: fix overflow horizontal 6px, tokens, font-display en eyebrow
- [ ] Revisar que no quede ningún `font-extrabold` en secciones (Avenir weight 700 máximo)

### 🔲 Pendiente — Fase E (motion)
- [ ] Presets Framer Motion unificados (durations, easings) en archivo compartido
- [ ] Carrusel de logos clientes (dos filas opuestas, auto-scroll)
- [ ] Microinteracciones botones y "Learn more →"

### 🔲 Pendiente — Post-diseño
- [ ] Mobile review y ajustes finos
- [ ] Reemplazar hero-bg.mp4 por video final sin watermark (cuando disponible)

---

## Fase 1 — Pendientes paralelos (contenido)
- [ ] Confirmar datos reales de stats con Franco y Manuel
- [ ] Completar phone/email reales en `constants.ts`
- [ ] Contenido final de todos los textos (con Franco/Manuel)

## ⏳ Bloqueantes
- [ ] **DNS manfran.com** — esperar a Manuel (acceso Google Workspace)
  - CNAME: `www` → `417ddb1d3a6e551e.vercel-dns-017.com.`
  - A: `@` → `216.198.79.1`
  - Panel: https://admin.google.com

---

## Fase 2 (automatizaciones)
- [ ] Backend cotizador → Google Sheets
- [ ] Formulario contacto → Resend email
- [ ] Bot Telegram: /nueva_op, /estado, /cotizar
- [ ] Webhook cotizador → Sheets → Telegram alert

## Fase 3 (agentes Claude)
- [ ] Agente cotizador con Claude API
- [ ] Agente seguimiento de envíos
- [ ] Agente tipo de cambio (BCRA)
- [ ] Agente documental
