# Plan Activo

> Estado mutable de tareas. Actualizar en cada sesión.
> Ver también: [[Handoff Notes]], [[Bitácora]], [[01-Proyecto Web/Auditoría Visual]]

---

## Fase 1: Landing page (one-shot inicial)

### ✅ Completado (2026-05-20, Sesiones 1–3)
- [x] Estructura de proyecto Next.js 16 + Tailwind v4 + TypeScript
- [x] CLAUDE.md
- [x] Assets de marca copiados
- [x] Tokens CSS y globals.css (v1, a refactorizar)
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

## Fase 1.5: Rediseño visual (NUEVO — prioridad actual)

### 🔄 Próximo
- [ ] **Higgsfield**: activar `@higgsfield-agent`, generar background del hero (paleta compatible con overlay azul MANFRAN, movimiento sutil estilo Nuvo)
- [ ] **Migración de fuentes**: reemplazar Barlow Condensed + Inter (Google Fonts, placeholder del one-shot) por **Avenir Next Condensed Bold + Helvetica** desde `assets/fonts/` vía `next/font/local`. Actualizar `layout.tsx`, `tokens.css` y referencias Tailwind.
- [ ] **Fase A — Sistema de diseño 2.0**: refactor `src/styles/tokens.css`
  - Escala tipográfica nueva con fuentes oficiales (display 48–60px Avenir Next Condensed Bold, tracking -0.02em, line-height 1.0–1.1; body Helvetica)
  - Escala de espaciado (80 / 96 / 192 px)
  - Container `max-w-[1440px]` + padding lateral 32px / nav 80px
  - Tokens de motion (easings, durations unificados)
  - Documentar en `docs/DESIGN_SYSTEM.md`
- [ ] **Fase B — Esqueleto**
  - Refactor Navbar: fixed transparente, hide-on-scroll, mega-menu desktop con descripciones por item
  - Refactor Footer: cream gigante, 4 columnas + social + logo grande, `padding-top: 168px`
- [ ] **Fase C — Hero + Stats**
  - Integrar background Higgsfield como `<video autoplay loop muted playsinline>`
  - Overlay `linear-gradient(transparent → rgba(0,160,216,0.4) → #003F5C)`
  - H1 60/64 con tracking -1.2px, 1 solo CTA invertido
  - Stats band azul oscuro continuo (sin corte), números estáticos display gigantes (sin counter-up)
- [ ] **Fase D — Sections**
  - Services como tiles sin shadow, `rounded-2xl`, separación solo por color
  - WhyUs con headline editorial 48/48
  - Process timeline rediseñado
  - Quoter con tipografía y spacing nuevos
  - Contact con CTA "wrap" final antes del footer
- [ ] **Fase E — Motion**
  - Presets Framer Motion unificados (durations, easings)
  - Carrusel de logos clientes (dos filas opuestas)
  - Microinteracciones de botones y "Learn more →"
- [ ] Mobile: review y ajustes finos

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
