# Plan Activo

> Estado mutable de tareas. Actualizar en cada sesión.

---

## Fase 1: Landing page (one-shot inicial)

### ✅ Completado (Sesiones 1–3, 2026-05-20)
- [x] Estructura de proyecto Next.js + Tailwind v4 + TypeScript
- [x] CLAUDE.md, tokens CSS v1, lib/constants.ts, lib/utils.ts
- [x] layout.tsx con metadatos SEO
- [x] Navbar v1, Footer v1, Hero v1, Stats v1, Services v1, WhyUs v1, Process v1, Quoter v1, Contact v1
- [x] Deploy en Vercel, Favicon, OG image
- [x] Vault Obsidian: estructura completa
- [x] Skills `/session-close`, `/obsidian-handoff`, `/obsidian-sync`

### ✅ Completado en Sesión 4 (2026-05-20)
- [x] Auditoría visual del one-shot, investigación Nuvocargo
- [x] Plan de refactor en 5 fases definido y congelado

---

## Fase 1.5: Rediseño visual

### ✅ Completado en Sesión 5 (2026-05-22)
- [x] **Fase A — Sistema de diseño 2.0**: fuentes reales Avenir + Helvetica, tokens.css v2, globals.css v2
- [x] **Fase B — Esqueleto**: Navbar v2 (liquid glass + hide-on-scroll + Marquee), Footer v2
- [x] **Fase C — Hero + UI**: Hero v2 (CSS crossfade), CookieConsent (liquid glass), assets de marca

### ✅ Completado en Sesión 6 (2026-05-22)
- [x] Footer v3 definitivo (logo 256px, 3 col, social horizontal, copyright blanco)
- [x] Hero v3 (video background hero-bg.mp4 + overlay doble)
- [x] Botones Avenir: regla global CSS + Button.tsx

### ✅ Completado en Sesión 7 (2026-05-22)
- [x] **Fase D — Secciones internas**: Stats, WhyUs, Process, Quoter, Contact migrados a tokens v2
- [x] Quoter: feedback Franco → ServiceForm con cargoDescription/weight/volume; CargoForm con origin/destination
- [x] **Fase E parcial — Motion/Lenis setup**: framer-motion → motion (motion.dev), SmoothScroll.tsx con ReactLenis
- [x] **Services v2 + v3 — Rediseño pin-scroll horizontal**: 5×100vh sticky, gradientes, TypewriterEyebrow, ProgressDots

### ✅ Completado en Sesión 8 (2026-05-26)
- [x] Services — Imágenes reales de IA (5 desktop + 5 mobile)
- [x] Services — Spotlight/torch hover
- [x] Services — Mobile unificado al mismo pin-scroll
- [x] Services — Retouches: sin watermarks, descripción font-normal, overlay 0.60

### ✅ Completado en Sesión 9 (2026-05-26)
- [x] **WhyUs v2 — Grid asimétrico + clip-path reveal scroll-driven + liquid glass**
- [x] **Process v3 — Timeline horizontal**: 5 círculos liquid-glass, línea scroll-driven illumination
- [x] **Quoter v3 — Background image + glass card**: alineación derecha, labels Avenir
- [x] **Sistema de fades entre todas las secciones**
- [x] **Sticky footer reveal** estilo Sensei.tech
- [x] **Footer v4 — spacing compactado**

### ✅ Completado en Sesión 10 (2026-05-27)
- [x] **ClientsCarousel — Doble marquee**: 2 filas opuestas, hover-pause por fila, loop seamless, 4 logos
- [x] **Stats v3 — Full black**: bg #000, números Avenir grandes, labels Avenir uppercase
- [x] **Hero fade corregido**: `to-[#000000]` (antes `to-[#111111]`)
- [x] **Transición carousel→Services corregida**: negro puro, sin franja azul
- [x] **Services eyebrow fix**: stacking context resuelto, "NUESTROS SERVICIOS" visible en posición original

---

## 🔄 Próximo — En orden de prioridad

### 🔴 Revisión posible (sujeta a feedback)
- [ ] **Revisiones visuales puntuales** — el usuario dio el diseño por terminado pero mencionó que puede haber cambios.

### 🟡 Prioridad alta
- [ ] **Mobile review fino** (toda la landing)
- [ ] **Regenerar `background_quoter.jpg` en 4K** (3840×2160) — TODO marcado en código de Quoter

### 🟡 Prioridad media
- [ ] Agregar más logos al carrusel (editar `CLIENTS` en `constants.ts` + copiar a `public/assets/clients/`)
- [ ] Reemplazar hero-bg.mp4 por video final sin watermark

### 🔵 Baja prioridad / cosmético
- [ ] Presets Motion unificados en `lib/motion.ts`
- [ ] Microinteracciones botones y links

---

## Fase 1 — Pendientes paralelos (contenido)
- [ ] Confirmar datos reales de stats con Franco y Manuel
- [ ] Completar phone/email reales en `constants.ts`
- [ ] Contenido final de todos los textos

## ⏳ Bloqueantes
- [ ] **DNS manfran.com** — esperar a Manuel (Google Workspace)
  - CNAME: `www` → `417ddb1d3a6e551e.vercel-dns-017.com.`
  - A: `@` → `216.198.79.1`
- [ ] **Stats + contacto reales** — esperar a Franco/Manuel

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
