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

---

## 2026-05-20 — Sesión 3: Confirmación de workflow y estructura de sesiones

**Qué se hizo:**
- Confirmado que abrir la próxima sesión desde `manfran-web` es la práctica recomendada — skills de `.claude/commands/` se cargan automáticamente
- Aclarado el flujo de trabajo para próximas sesiones: `/obsidian-handoff` (entrada), trabajo, `/session-close` (salida)
- Sin cambios en código — sesión de confirmación y alineación de procesos

**Archivos modificados:**
- Ninguno (sin cambios en código)

**Pendiente:**
- Esperar confirmación de Franco/Manuel para stats reales
- Confirmar datos de contacto finales
- DNS manfran.com (bloqueante — requiere acceso Google Workspace de Manuel)

---

## 2026-05-20 — Sesión 4: Auditoría visual y dirección de rediseño (Nuvocargo como referencia)

**Qué se hizo:**
- Diagnóstico del resultado del one-shot: identidad de marca correctamente trasladada, pero ejecución de diseño plana (espaciado uniforme, tipografías sin presencia, scroll sin storytelling, cards con sombras, hero sin profundidad)
- Investigación profunda de https://www.nuvocargo.com/ con WebFetch + inspección DOM en vivo via Chrome DevTools MCP. Extracción de valores reales: tipografía (GT Super Display 60/64 letter-spacing -1.2px, Value Sans Pro body 14px), paleta (cream #FAF8F6, forest #1B473F y #307460, dark-gray #404040 — sin blanco ni negro puros), espaciado (max-width 1440px, padding lateral 32/80px, ritmo asimétrico 64/80/96/192px), composición del hero (video + overlay gradient verde + 1 CTA invertido), navbar hide-on-scroll, footer cream gigante con padding-top 168px, scroll lineal sin parallax (Webflow IX2, no GSAP/Lenis/Framer)
- Screenshots de referencia guardados en `.tmp/nuvo-hero.png`, `nuvo-stats.png`, `nuvo-agents.png`, `nuvo-pilot.png`, `nuvo-footer.png`
- Creada nota `01-Proyecto Web/Auditoría Visual.md` en la vault con diagnóstico + reporte completo de Nuvo + top 10 patrones replicables + plan de refactor en 5 fases (Sistema → Esqueleto → Hero+Stats → Sections → Motion)
- Evaluación del repo Hallmark (Nutlope) como referencia secundaria de componentes marketing, no como framework a adoptar
- Decisiones de dirección tomadas y congeladas:
  1. Tipografía intacta — se mantiene Barlow Condensed + Inter, solo se ajustan tamaños/tracking/line-height
  2. Paleta intacta — se mantiene negro #1A1A1A / azul #00A0D8 / blanco #FFFFFF, con permiso explícito para gradientes con el azul MANFRAN
  3. Hero con background generado por Higgsfield (no video real) + capa tenue de azul MANFRAN superpuesta — adelanta parcialmente Fase 1.5
  4. Naza aprueba decisiones estéticas y de arquitectura (no requiere Franco/Manuel para diseño, sí para contenido)

**Archivos modificados:**
- `ObsidianVault/ManFran/01-Proyecto Web/Auditoría Visual.md` — nuevo
- `.tmp/nuvo-*.png` — 5 screenshots de referencia (untracked)

**Pendiente:**
- Activar `@higgsfield-agent` para generar el background del hero
- Fase A: refactor de `tokens.css` (escala tipográfica nueva, escala de espaciado 80/96/192, container 1440px)
- Fase B: refactor de Navbar (hide-on-scroll + mega-menu) y Footer (cream gigante)
- Fase C: refactor de Hero + Stats (gradient blend hero→stats, números estáticos serif gigantes)
- DNS manfran.com (sigue bloqueado — requiere Manuel)
- Stats reales y datos de contacto (sigue pendiente — requiere Franco/Manuel)

**Corrección registrada al cierre:**
- Las fuentes oficiales de marca son **Avenir Next Condensed Bold (display)** + **Helvetica (body, light, bold)** — archivos `.ttf` ya presentes en `assets/fonts/`. El one-shot inicial usó Barlow Condensed + Inter desde Google Fonts como placeholder. CLAUDE.md, Auditoría Visual, Handoff Notes y Plan Activo corregidos. Tarea agregada al plan: migrar a `next/font/local` con las fuentes reales durante el refactor (Fase A).

---

## 2026-05-22 — Sesión 5: Rediseño visual Fases A, B y C

**Qué se hizo:**

- **Migración de fuentes (Fase A)**: eliminadas Google Fonts (Barlow Condensed + Inter). Implementadas Avenir Next Condensed Bold y Helvetica (light/regular/bold) desde `assets/fonts/` vía `next/font/local`. Variables `--font-display` y `--font-body` inyectadas en el `<html>`. Corregido conflicto de cascade: `tokens.css` ya no define `--font-display`/`--font-body` (los pisaba con el nombre literal en vez del hash de next/font).
- **Sistema de tokens v2 (Fase A)**: refactor completo de `src/styles/tokens.css` — escala tipográfica display (2.5–4.5rem), tracking negativo, line-height display 1.05, escala de espaciado section-sm/section/section-lg, gutters (2rem / 5rem), container 1440px, tokens de radius, shadows, easings y durations. Alias en `globals.css` vía bloque `@theme inline`.
- **Fix crítico de cascade layers**: `globals.css` no emitía la declaración master `@layer theme, base, components, utilities;`. Sin ella, el `* { padding:0; margin:0 }` del Preflight en `@layer base` pisaba todas las utilidades de padding/margin de Tailwind (`px-6`, `py-24`, etc. producían 0). Fix: se agrega la declaración como primera línea. Eliminado `* { padding:0; margin:0 }` hardcodeado que ya venía del one-shot.
- **Navbar v2 (Fase B)**: reemplazada navbar sticky opaca por navbar con efecto liquid glass (`bg-white/[0.06] backdrop-blur-2xl`). Implementado hide-on-scroll con `useRef` para `lastScrollY`. Integrado componente `<Marquee />` encima del nav bar. Ajustada separación entre ítems de nav. Botón "Consultanos" con sheen glass effect.
- **Marquee (nuevo, Fase B)**: componente nuevo `src/components/layout/Marquee.tsx`. Animación CSS con `@keyframes marquee { from: translateX(0) to: translateX(-50%) }`. Dos tracks duplicados para loop perfecto. Fix clave: `shrink-0` en el wrapper animado (sin él, el flex parent lo encogía y el loop reiniciaba en posición incorrecta). Colapso con height/opacity al hacer scroll.
- **Footer v2 (Fase B)**: reemplazado footer genérico. Logo emblema (h-32 w-32) arriba a la izquierda. Grid de 3 columnas (Servicios / Navegación / Contacto), todos los textos en `font-display` (Avenir). Iconos sociales SVG (LinkedIn, Instagram, WhatsApp) arriba a la derecha. Fila de copyright + links legales. Logo gigante `logo-manfran.svg` full-width al fondo. Padding-top 168px en desktop.
- **Hero v2 (Fase C)**: slogan movido a esquina inferior izquierda (`flex-col justify-end`). Animación MOVEMOS↔ENTREGAMOS reemplazada: descartada `AnimatePresence` de Framer Motion (incompatible con React 19 Strict Mode — quedaba frozen en `opacity:0`). Implementada con CSS puro: `inline-grid`, todas las palabras montadas en la misma celda, `transition-opacity/transform`. Texto reestructurado: línea 1 = palabra animada, línea 2 = "tu carga.", líneas 3-4 en azul MANFRAN.
- **CookieConsent (nuevo, Fase C)**: componente `src/components/layout/CookieConsent.tsx`. Efecto liquid glass (`bg-white/[0.06] backdrop-blur-2xl`). Delay 900ms, persistencia en `localStorage`. Botón Aceptar (azul + sheen) / Rechazar (negro). Posicionado `fixed bottom-6 right-6 z-[60]`.
- **Assets de marca**: agregados `public/assets/brand/logo-emblema.png` (5000×5000, fondo transparente) y `public/assets/brand/logo-manfran.svg` (1361×321, logotipo horizontal completo).
- **constants.ts**: añadidos exports `SOCIAL` (LinkedIn/Instagram/WhatsApp con SVG paths), `HERO`, `MARQUEE_ITEMS`, `COOKIE`, `FOOTER`.

**Archivos modificados:**
- `src/app/globals.css` — cascade layer fix + @theme inline + keyframe marquee
- `src/app/layout.tsx` — migración next/font/local (Avenir + Helvetica)
- `src/app/page.tsx` — import CookieConsent
- `src/styles/tokens.css` — tokens v2 completo
- `src/lib/constants.ts` — SOCIAL, HERO, MARQUEE_ITEMS, COOKIE, FOOTER
- `src/components/layout/Navbar.tsx` — v2 glass + hide-on-scroll + Marquee
- `src/components/layout/Marquee.tsx` — nuevo
- `src/components/layout/Footer.tsx` — v2 completo
- `src/components/layout/CookieConsent.tsx` — nuevo
- `src/components/sections/Hero.tsx` — v2 slogan bottom-left + animación CSS
- `public/assets/brand/logo-emblema.png` — nuevo
- `public/assets/brand/logo-manfran.svg` — nuevo
- `assets/referencia_hero.svg` — referencia de diseño (untracked)
- `assets/referencia_footer.svg` — referencia de diseño (untracked)

**Build status al cierre:** `✓ Compiled successfully` — sin errores TypeScript ni ESLint.

**Pendiente:**
- Fase D: refactor de secciones internas (Stats, Services, WhyUs, Process, Quoter, Contact)
  - Migrar `font-extrabold` → `font-bold` en todos los componentes (Avenir registrada a weight 700)
  - Migrar `px-6 py-24 max-w-7xl` → tokens de design system (`px-gutter`, `py-section`, `max-w-site`)
  - Agregar `font-display` a eyebrows y headings de sección
  - Fix overflow horizontal de 6px (Contact section)
  - Estilizar `<select>` con background oscuro (option visibility)
- Fase E: motion unificado + carrusel logos
- Hero video con Higgsfield (cuando diseño aprobado)
- Stats reales + datos de contacto (pendiente Franco/Manuel)
- DNS manfran.com (bloqueante — pendiente Manuel)
