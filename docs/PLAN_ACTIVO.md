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
- [x] **WhyUs v2 — Grid asimétrico + clip-path reveal scroll-driven + liquid glass** (cards con backdrop-blur sobre bg con glow blobs)
- [x] **Process v3 — Timeline horizontal**: 5 círculos liquid-glass conectados por línea iluminada scroll-driven, layout asimétrico con texto debajo (desktop) o derecha (mobile)
- [x] **Quoter v3 — Background image + glass card**: imagen `background_quoter.jpg` 2752×1536, overlay doble negro `#1A1A1A`, card form liquid glass, alineación derecha para no tapar logo MANFRAN de la imagen, labels Avenir Bold blanco
- [x] **Sistema de fades entre todas las secciones**: cadena de gradientes top/bottom que funden con el color del vecino (Hero → Stats → Services → WhyUs → Process → Quoter → Contact → Footer)
- [x] **Sticky footer reveal** estilo Sensei.tech: `<main relative z-[1]>` + `<footer sticky bottom-0 z-0>`, compatible con Lenis
- [x] **Footer v4 — spacing compactado** (~340px menos altura) para entrar en viewport al revelar

---

## 🔄 Próximo

### Prioridad alta
- [ ] **Regenerar `background_quoter.jpg` en 4K** (3840×2160) para máxima nitidez en pantallas grandes — TODO marcado en código de Quoter
- [ ] **Mobile review fino** (toda la landing)

### Prioridad media
- [ ] Presets Motion unificados en `lib/motion.ts`
- [ ] Microinteracciones botones y links
- [ ] **Carrusel doble de logos clientes** — bloqueado hasta permiso de Franco

### Pendiente — Post-diseño
- [ ] Reemplazar hero-bg.mp4 por video final sin watermark

---

## Fase 1 — Pendientes paralelos (contenido)
- [ ] Confirmar datos reales de stats con Franco y Manuel
- [ ] Completar phone/email reales en `constants.ts`
- [ ] Contenido final de todos los textos

## ⏳ Bloqueantes
- [ ] **DNS manfran.com** — esperar a Manuel (Google Workspace)
  - CNAME: `www` → `417ddb1d3a6e551e.vercel-dns-017.com.`
  - A: `@` → `216.198.79.1`
- [ ] **Carrusel logos clientes** — esperar permiso de Franco

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
