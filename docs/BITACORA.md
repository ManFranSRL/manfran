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
- Stats reales + datos de contacto (pendiente Franco/Manuel)
- DNS manfran.com (bloqueante — pendiente Manuel)

---

## 2026-05-22 — Sesión 6: Footer final, Hero video, Botones Avenir

**Qué se hizo:**

- **Footer — refinements finales (múltiples iteraciones con referencia SVG)**:
  - Logo emblema duplicado: `h-32` → `h-64` (256px), posicionado con `self-start object-top`
  - Layout reestructurado: logo | 3 columnas en `grid flex-1` | social icons (`flex-row`, `self-start`)
  - Eliminada línea horizontal (`border-t`) encima de la fila de copyright
  - Copyright y links legales en blanco puro (`text-white`)
  - Columna Contacto: email, teléfono y dirección convertidos a `<span>` estático (sin links, sin underline, sin color — texto informativo únicamente)
  - Social icons: disposición horizontal (`flex-row gap-3`), tamaño incrementado a `h-11 w-11` / iconos `h-5 w-5`
  - Espaciado reducido entre copyright y logo gigante: `mt-section-lg` → `mt-10`
  - Jerarquía tipográfica: títulos de columna `text-base`, links `text-sm` (headers > contenido)
  - Gap entre columnas reducido: `gap-x-6 lg:gap-x-8`
  - Fix bug Tailwind v4: `text-[var(--color-blue)]` no resolvía correctamente → cambiado a token registrado `text-manfran-blue` / `hover:text-manfran-blue` / `hover:border-manfran-blue`

- **Hero v3 — Video background**:
  - Reemplazado `ParticleCanvas` (canvas con partículas) por `<video autoPlay loop muted playsInline>`
  - Video `hero-bg.mp4` (19.1 MB, 20s, fondo blanco) copiado de `assets/video/` a `public/assets/video/`
  - Overlay doble para compensar el fondo blanco del video:
    - Capa 1: `bg-[var(--color-gray-900)]/75` — aplasta el blanco a casi negro
    - Capa 2: gradiente `from-[var(--color-blue-deep)]/50 via-[var(--color-blue-deep)]/20 to-transparent` — tinte azul MANFRAN tenue
  - Video verificado en browser: `readyState: 4` (cargado), `paused: false` (reproduciendo)

- **Botones — Avenir Next Condensed en todo el sitio**:
  - Regla global en `globals.css`: `button { font-family: var(--font-display); font-weight: 700; }` — cubre todos los `<button>` presentes y futuros
  - `Button.tsx`: reemplazado `font-semibold` (weight 600, faux bold en Avenir) por `font-display font-bold uppercase tracking-wide` (weight 700, el registrado en el TTF)
  - Navbar "Consultanos", CookieConsent, Quoter tabs ya tenían `font-display` explícito — confirmado sin cambios adicionales

**Archivos modificados:**
- `src/components/layout/Footer.tsx` — refinements finales completos
- `src/components/sections/Hero.tsx` — video background, eliminado ParticleCanvas
- `src/app/globals.css` — regla global `button { font-display }`
- `src/components/ui/Button.tsx` — `font-display font-bold uppercase tracking-wide`
- `public/assets/video/hero-bg.mp4` — nuevo (19.1 MB, untracked por tamaño)

**Build status:** TypeScript sin errores (`npx tsc --noEmit` limpio).

**Pendiente:**
- Fase D: refactor de secciones internas (Stats, Services, WhyUs, Process, Quoter, Contact)
- Fase E: motion unificado + carrusel logos
- Mobile review
- Stats reales + datos de contacto (pendiente Franco/Manuel)
- DNS manfran.com (bloqueante — pendiente Manuel)

---

## 2026-05-22 — Sesión 7: Fase D (secciones internas), Fase E setup, Services pin-scroll

**Qué se hizo:**

- **Fase D — Migración de tokens en todas las secciones internas:**
  - `Stats.tsx`: `py-section-sm px-gutter`, `max-w-site`, `font-bold`, `text-manfran-blue`
  - `WhyUs.tsx`: `py-section px-gutter`, `max-w-site`, eyebrow `font-display font-bold text-manfran-blue`, `bg-manfran-blue`
  - `Process.tsx`: ídem + `border-manfran-blue/40 bg-manfran-blue/10` en círculos, step numbers `text-manfran-blue font-bold`
  - `Quoter.tsx`: `py-section px-gutter`, selects `bg-manfran-gray-900`, tab active `text-manfran-blue border-manfran-blue bg-manfran-blue/5`. **Feedback de Franco implementado**: ServiceForm expandido con campos cargoDescription/weight/volume; CargoForm expandido con origin/destination.
  - `Contact.tsx`: `py-section px-gutter`, `max-w-site`, `overflow-x-hidden`, form column `min-w-0`, todos los colores tokenizados
  - `globals.css`: añadido `--width-site` y grises adicionales al bloque `@theme inline` para habilitar `max-w-site` y `bg-manfran-gray-900`

- **Fase E — Setup de motion/Lenis:**
  - Desinstalado `framer-motion`, instalado `motion` (motion.dev, sucesor del mismo autor, API idéntica, mejor rendimiento)
  - Todos los imports actualizados de `'framer-motion'` → `'motion/react'`
  - `SmoothScroll.tsx` (nuevo): `ReactLenis` con `duration: 1.2`, easing exponencial, `smoothWheel: true`. Envuelve `{children}` en `layout.tsx`. Reemplaza `html { scroll-behavior: smooth }`.
  - `globals.css`: añadido `@keyframes typewriter { from: width 0; to: width 100% }`. Eliminado `html { scroll-behavior: smooth }`. Añadida regla global `button { font-family: var(--font-display); font-weight: 700 }`.

- **Services v2 — Rediseño completo pin-scroll horizontal:**
  - Descartado grid de tarjetas → reemplazado por sección sticky con scroll horizontal (5 tarjetas × 100vh = 500vh total)
  - Patrón sticky: outer div `height: 5×100vh`, inner div `position: sticky; top: 0; height: 100vh; overflow: hidden`
  - `useScroll` + `useTransform` para mapear `scrollYProgress [0,1]` → `x [0vw, -400vw]`
  - Fondos: array `BG_GRADIENTS[]` con 5 gradientes lineales por servicio (azul-portuario, navy-nocturno, negro-púrpura, ámbar-oscuro, teal-verde)
  - Vignettes: bottom (`from-black/85`) + left (`from-black/50`) para legibilidad de texto
  - Contenido: título `clamp(3.5rem, 8vw, 7rem)` en `bottom-20 left-16`, descripción `text-white/55`
  - `ProgressDots`: 5 dots con `useMotionValueEvent`, dot activo `w-6 h-1.5 bg-manfran-blue` (elongado)
  - Mobile fallback: stack vertical con animación `whileInView`
  - MANFRAN emblema `opacity-[0.08]` en `bottom-20 right-16`

- **Services v3 — Retouches:**
  - `TypewriterEyebrow`: componente con `useInView` + CSS `@keyframes typewriter` + `steps(text.length, end)`. Tamaño `clamp(0.9rem, 1.4vw, 1.1rem)`, `letterSpacing: 0.22em`. Texto más grande y animado.
  - Eliminados contadores `"01 — 05"` por servicio
  - Eliminado dash azul (`w-14 h-px bg-manfran-blue`) debajo de cada servicio
  - Descripción: añadido `font-display` → Avenir Next Condensed en vez de Helvetica
  - Eliminado scroll hint ("SCROLL ——") del desktop

- **Prompts de generación IA para imágenes de fondo** (5 prompts, uno por servicio, con paletas de color exactas de los gradientes): generados y documentados para uso con Midjourney/FLUX. Especifican no humanos en primer plano, logo MANFRAN integrado en la escena.

**Archivos modificados:**
- `src/app/globals.css` — typewriter keyframe, select option bg, button global rule
- `src/app/layout.tsx` — SmoothScroll wrapper
- `src/components/layout/SmoothScroll.tsx` — nuevo (Lenis)
- `src/components/sections/Stats.tsx` — tokens v2
- `src/components/sections/Services.tsx` — rediseño completo (pin-scroll + TypewriterEyebrow + ProgressDots)
- `src/components/sections/WhyUs.tsx` — tokens v2
- `src/components/sections/Process.tsx` — tokens v2
- `src/components/sections/Quoter.tsx` — tokens v2 + campos Franco feedback
- `src/components/sections/Contact.tsx` — tokens v2 + overflow fix

**Incidente técnico resuelto:**
- Caché de Next.js no invalidaba imports renombrados de `framer-motion` → `motion`. Resuelto con `rmdir /s /q .next` y reinicio del servidor.

**Pendiente:**
- Obtener imágenes reales para Services (prompts listos, generación pendiente)
- Carrusel de logos clientes (bloqueado — pendiente permiso de Franco)
- DNS manfran.com (bloqueante — pendiente Manuel)

---

## 2026-05-26 — Sesión 8: Services con imágenes reales, spotlight hover, mobile pin-scroll

**Qué se hizo:**

- **Services — Imágenes reales de IA por servicio:**
  - 5 imágenes `_desktop.png` + 5 `_mobile.png` generadas (IA, con paletas que replican los gradientes de cada tarjeta)
  - Copiadas de `assets/services/` a `public/assets/services/` para servir como rutas estáticas
  - `Image` con `fill` + `object-cover` como base de cada tarjeta

- **Spotlight / torch hover effect (desktop):**
  - Cada `ServiceCard` trackea posición del mouse con `onMouseMove` relativo al `getBoundingClientRect` de la tarjeta
  - Overlay único `position: absolute; inset: 0`: en reposo = `rgba(0,0,0,0.60)` con transición 0.6s; en hover = `radial-gradient(circle 320px at Xpx Ypx, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.62) 100%)` sin transición (inmediato al movimiento)
  - Al salir el mouse: vuelve suavemente al overlay sólido
  - Vignettes de legibilidad (bottom + left) permanecen en `z-[2]`, sobre el spotlight

- **Services mobile unificado (mismo pin-scroll que desktop):**
  - Eliminado el stack vertical `md:hidden`
  - Un único `containerRef` de `5×100vh` para todas las resoluciones
  - `ServiceCard` renderiza ambas imágenes con CSS `md:hidden` / `hidden md:block`
  - Posicionamiento del contenido responsive: `bottom-16 left-6` en mobile, `bottom-20 left-16` en desktop
  - Título con `clamp(2.8rem, 8vw, 7rem)` (arranca más chico en mobile)
  - Spotlight: sin efecto en touch (no hay `onMouseMove`), overlay estático al 60%

- **Retouches en Services:**
  - Eliminados números watermark grandes (01, 02, ...) de cada tarjeta
  - Eliminado logo emblema MANFRAN watermark de cada tarjeta
  - Descripción con `font-normal` (Avenir sin bold)
  - Overlay reducido de `0.80` → `0.60` para que la imagen respire más

**Archivos modificados:**
- `src/components/sections/Services.tsx` — imágenes reales, spotlight, mobile unificado, retouches
- `public/assets/services/` — 10 imágenes nuevas (5 desktop + 5 mobile, untracked por tamaño)

**Build status:** Sin errores de consola. Verificado en Chrome DevTools MCP (desktop 1440px + mobile 390px emulado).

**Pendiente:**
- Investigación scroll effects → aplicar a WhyUs, Process (sticky cards + clip-path reveal)
- Carrusel doble de logos clientes (bloqueado — pendiente permiso Franco)
- DNS manfran.com (bloqueante — pendiente Manuel)
- Stats reales + datos de contacto (pendiente Franco/Manuel)

---

## 2026-05-26 — Process redesign, fades entre secciones, Quoter con background, sticky footer reveal

**Qué se hizo:**

- **Process v3 — Timeline horizontal con scroll effects:**
  - Reescrito desde cero. Layout horizontal en desktop con 5 círculos conectados por línea, texto debajo de cada círculo. Mobile vertical con círculos a la izquierda y texto a la derecha.
  - Círculos con efecto liquid-glass: fondo sólido `#080808` (matchea bg de la sección) + capa de gradiente radial azul + gradiente especular top-left para simular brillo.
  - Borde y glow scroll-driven: cada círculo arranca con borde `rgba(0,160,216,0.18)` y se enciende a `rgba(0,160,216,0.75)` con box-shadow azul cuando el scroll alcanza su slot.
  - Línea conectora: track base `white/10` + overlay azul iluminado que crece de izquierda a derecha con `useTransform(scrollYProgress, [0.02, 0.92], ['0%', '100%'])`. Renderizada antes de los círculos en el DOM para que los círculos la tapen limpiamente (sin backdrop-blur que la difuminara).
  - Texto de cada paso: opacidad 0.1 → 1 + translateY 18 → 0 driven por scroll thresholds escalonados.
  - Sin hover effect (removido por pedido del usuario).

- **Sistema de fades entre todas las secciones:**
  - Cada sección con bg distinto tiene un gradiente top/bottom que funde con el color del vecino. Cadena: Hero (`#1A1A1A`) → Stats (`#111111`) → Services (`#1A1A1A`) → WhyUs (`#111111`) → Process (`#080808`) → Quoter (img + `#080808` fades) → Contact (`#1A1A1A`) → Footer (`#111111`).
  - Casos especiales: el salto de WhyUs (`#111111`) → Process (`#080808`) se maneja con un solo fade `h-56` en el top de Process (en lugar de dos gradientes que colisionaban en el borde).
  - Todos los fades usan `pointer-events-none` y z-index entre 1-30 según contexto.

- **Quoter v3 — Background image + glass card:**
  - Imagen `background_quoter.jpg` (2752×1536) movida a `public/assets/`. Renderizada con `next/image fill + object-cover` cubriendo toda la sección.
  - Overlay en dos capas estilo Hero pero en `#1A1A1A`: capa base `/50` uniforme + gradiente top `h-[40%]` que llega a transparente. Más fades de fusión top/bottom (h-40) con `#080808` para integrar con Process arriba.
  - Card del formulario migrada a liquid glass: `bg-white/[0.06] backdrop-blur-2xl border border-white/[0.10]` (mismo lenguaje que Navbar/CookieConsent).
  - Inputs cambiados de `bg-manfran-gray-900` → `bg-black/40` para contraste sobre el glass.
  - Layout asimétrico: contenedor del formulario + header alineados a la derecha (`ml-auto max-w-[620px]`) para que el logo MANFRAN de los contenedores quede visible a la izquierda.
  - Labels de los campos cambiados a `font-display` (Avenir Next Condensed) en blanco puro.

- **Sticky footer reveal:**
  - Patrón a la Sensei.tech: `<main className="relative z-[1]">` cubre el footer; `<footer className="sticky bottom-0 z-0">` queda detrás. Al llegar al final del scroll, el footer se revela desde abajo mientras Contact sigue visible.
  - Footer compactado para entrar en viewport: top padding `168px → 48px`, logo emblema `256px → 160px`, gap entre filas `56px → 40px`, margin antes copyright `96px → 40px`, etc. (~340px menos de altura total).

**Archivos modificados:**
- `src/components/sections/Process.tsx` — rewrite completo
- `src/components/sections/Quoter.tsx` — background image + glass card + alineación derecha + labels Avenir
- `src/components/sections/Hero.tsx` — fade bottom hacia Stats
- `src/components/sections/Stats.tsx` — fades top/bottom
- `src/components/sections/Services.tsx` — fades top/bottom
- `src/components/sections/WhyUs.tsx` — fade top
- `src/components/sections/Contact.tsx` — fades top/bottom
- `src/components/layout/Footer.tsx` — sticky + spacing compactado
- `src/app/page.tsx` — main wrapper con `relative z-[1]`
- `public/assets/background_quoter.jpg` — imagen nueva (untracked)

**Build status:** TypeScript sin errores en cada paso. Verificado en preview server.

**Pendiente:**
- Regenerar `background_quoter.jpg` en 4K para máxima nitidez (TODO marcado en código)
- Mobile review fino de toda la landing
- Presets Motion unificados en `lib/motion.ts`
- Microinteracciones botones/links
- Carrusel doble de logos clientes (bloqueado — Franco)
- DNS manfran.com (bloqueante — Manuel)
- Stats reales + datos de contacto (Franco/Manuel)

---

## 2026-05-27 — Sesión 10: Doble carrusel de logos + refinamiento visual Stats/Hero/Services

**Qué se hizo:**

- **Doble carrusel de clientes (nuevo componente `ClientsCarousel.tsx`):**
  - 2 filas de logos que scrollean en direcciones opuestas (izquierda y derecha)
  - 4 logos copiados de `assets/carousel/` a `public/assets/clients/`: Diesel Tellier (PNG), Grupo Eslabón (PNG), Guido (SVG), Marcela Koury (SVG)
  - Hover-pause independiente por fila: al parar el mouse sobre una fila, esa fila se pausa; la otra sigue moviéndose
  - Loop seamless corregido: ambos tracks dentro de la misma fila son idénticos (fix crítico — tener contenido distinto en los dos tracks rompía el `translateX(-50%)` y generaba un corte visible al reiniciar). El offset visual entre filas se aplica a nivel de fila, no de track.
  - Duración 90s (relanzado de 45s para velocidad más suave)
  - `invert: true` en Diesel Tellier: logo oscuro invisible sobre bg negro → `brightness(0) invert(1)` lo convierte a silueta blanca
  - Fades laterales `from-[#000000]` para entrada suave de logos
  - Título "Confían en MANFRAN" — Avenir, blanco, uppercase, tamaño pequeño (eyebrow style)
  - Insertado entre Stats y Services en `page.tsx`

- **Stats v3 — full black aesthetic:**
  - Fondo cambiado de `#111111` → `#000000` (negro puro, referencia Nomenclator.com.ar)
  - Números: `clamp(2.5rem, 4.5vw, 4rem)` con `leading-none` para evitar recorte (era clamp 3.5–6rem)
  - Labels: `font-display` Avenir, uppercase, `tracking-[0.22em]`, white/55 (antes Helvetica light)
  - Padding: `pt-section pb-10` — se reduce el gap inferior hacia el carrusel
  - Fade superior removido: Hero ya termina en negro puro, fluye sin corte

- **Hero → Stats fade corregido:**
  - Fade inferior de Hero cambiado de `to-[#111111]` → `to-[#000000]` h-40, para coincidir con el nuevo bg negro puro de Stats

- **Transición carousel → Services:**
  - Fallo inicial: carousel funde a `#012447` (azul) y Services arranca desde ese color → franja azul saturada visible
  - Fix: ambos lados usan negro puro `#000000` (carousel bottom `to-[#000000]` h-48, Services top `from-[#000000]` h-48)

- **Services — "NUESTROS SERVICIOS" visible sobre el overlay (fix de stacking context):**
  - Causa raíz: `position: sticky` crea su propio stacking context. Con z:auto en el parent, todo lo que estuviera dentro del sticky perdía contra z-30 del section, sin importar el z-index interno del eyebrow.
  - Fix: ambas fades de sección (top/bottom) se movieron dentro del `<div sticky>`. Ahora eyebrow (z-35) y fades (z-30) comparten el mismo stacking context → eyebrow visible sobre el gradiente.
  - Eyebrow vuelve a `top-6 left-6 md:top-10 md:left-16` (posición original, esquina superior izquierda)
  - Una sola instancia en el sticky wrapper con `useInView({ once: true })` → anima solo en la primera card (Importación), no en cada tarjeta

**Archivos modificados:**
- `src/components/sections/ClientsCarousel.tsx` — nuevo componente
- `src/components/sections/Stats.tsx` — bg negro, números más pequeños, labels Avenir, padding reducido
- `src/components/sections/Hero.tsx` — fade inferior `to-[#000000]` h-40
- `src/components/sections/Services.tsx` — fades dentro del sticky, eyebrow stacking context fix
- `src/lib/constants.ts` — nuevo export `CLIENTS` con 4 logos + flag `invert`
- `src/app/page.tsx` — import + inserción de `ClientsCarousel`
- `public/assets/clients/` — 4 logos (untracked)

**Estado al cierre:** La landing está **visualmente terminada**. El usuario dio explícitamente por finalizado el diseño web, con nota de que puede haber revisiones puntuales. Bloqueantes externos persisten (DNS, contenido real).

**Build status:** TypeScript sin errores. Verificado por eval de DOM (screenshots del preview tool time-outean por carga del video + Lenis + marquees).

**Pendiente:**
- Regenerar `background_quoter.jpg` en 4K (TODO marcado en código de Quoter)
- Mobile review fino de toda la landing (posible en próximas sesiones)
- DNS manfran.com (bloqueante — Manuel)
- Stats + contacto reales (bloqueante — Franco/Manuel)
- Video hero sin watermark (post-diseño)
- Fase 2: automatizaciones backend

---

## 2026-06-11 — Sesión 11: Configuración DNS y conexión del dominio manfran.com (web en vivo)

**Qué se hizo:**

- **Diagnóstico del DNS** (el bloqueante venía "esperando a Manuel / Google Workspace"):
  - `nslookup -type=NS manfran.com` → nameservers `ns-cloud-c{1..4}.googledomains.com` (Google Cloud DNS)
  - Estado previo: `manfran.com` (A) apuntaba a IPs de Squarespace (198.185.159.x / 198.49.23.x) y `www` (CNAME) → `ext-sq.squarespace.com` → página de parking de Squarespace
  - **Hallazgo clave:** el dominio se registró vía Google Domains, que en 2023 migró a **Squarespace**. El DNS NO se edita en `admin.google.com` (eso es solo Google Workspace), sino en el panel de **Squarespace Domains**.

- **Edición de registros DNS en Squarespace:**
  - Borrados: los 4 registros A del apex que apuntaban a Squarespace + el CNAME `www` → `ext-sq.squarespace.com`
  - Agregados (Vercel):
    - A `@` → `216.198.79.1`
    - CNAME `www` → `417ddb1d3a6e551e.vercel-dns-017.com`
  - **Intactos** (no se tocaron): registros MX (correo Google Workspace), TXT (SPF/DKIM/verificación Google), y CNAME `_domainconnect` → `_domainconnect.domains.squarespace.com` (Domain Connect, no enruta tráfico, inofensivo)
  - TTL: 3600 / default

- **Resultado:** dominio propagado y verificado en Vercel. La landing está **en vivo en https://manfran.com** con SSL automático.

**Aprendizajes documentados:**
- Dominios registrados vía Google Workspace / Google Domains hoy se gestionan en **Squarespace**, aunque conserven nameservers `ns-cloud-*.googledomains.com`. El panel de DNS es `account.squarespace.com/domains`, no `admin.google.com`.
- El proyecto manfran en Vercel NO vive en la cuenta "Nazareno's projects" (esa solo tiene `gc.com` y `guido-command-center`) — está en la cuenta/equipo conectado al repo `ManFranSRL/manfran`.

**Archivos modificados:**
- Ninguno en código (cambios solo en DNS externo / Squarespace)
- `docs/PLAN_ACTIVO.md` — DNS marcado como resuelto, entrada Sesión 11

**Pendiente:**
- Próxima sesión: diseño de posts de Instagram (feed + historias) con claude.ai/design — adjuntar `src/` + `public/assets/brand/` + `CLAUDE.md` como codebase
- Mobile review fino de toda la landing
- Regenerar `background_quoter.jpg` en 4K
- Stats + contacto reales (bloqueante — Franco/Manuel)
- Fase 2: automatizaciones backend

---

## 2026-06-11 — Sesión 12: Emails automáticos con Resend + DS templates + assets corregidos

**Qué se hizo:**

- **Emails automáticos con Resend:**
  - Integración de `resend` en `src/app/api/contact/route.ts` y `src/app/api/quoter/route.ts`
  - Template HTML de email para auto-respuesta al cliente (`src/emails/cliente/contacto.html`) con variables `{{name}}`, `{{email}}`, `{{company}}`, `{{message}}`, `{{contactEmail}}`, `{{contactPhone}}`
  - Fuentes alojadas en `public/assets/email/fonts/` (Avenir Next Condensed Bold + Helvetica x3) para fallback en clientes de email
  - `FormSuccess.tsx` — nuevo componente UI con `AnimatePresence` + `motion` para reemplazar el estado emoji ✅ tanto en Contact como en Quoter. Props: `title`, `subtitle`, `onReset`

- **DS templates en root del repo:**
  - `contacto.html` — auto-respuesta contacto (DS preview con paths relativos + inline SVG icons)
  - `cotizacion-mercaderia.html` — auto-respuesta cotizador (mercadería)
  - `cotizacion-servicio.html` — auto-respuesta cotizador (servicio)
  - `icons.html` — librería de iconos Lucide para emails (ship, plane, truck, package, globe, file, pin, clock)

- **Assets de email corregidos (Sesión 13, 2026-06-12):**
  - `wordmark.png` en `public/assets/email/` reemplazado por versión sin fondo negro (`manfran-wordmark-white-orbit-plane.png`)
  - `box.png` renombrado a `package.png` en `public/assets/email/icons/` para alinear con nomenclatura de icons.html
  - Referencias actualizadas en `src/emails/cliente/contacto.html`

**Archivos modificados:**
- `src/components/sections/Contact.tsx` — `FormSuccess` + `AnimatePresence` wrapper
- `src/components/sections/Quoter.tsx` — `FormSuccess` + `AnimatePresence` en ServiceForm y CargoForm
- `src/components/ui/FormSuccess.tsx` — nuevo
- `src/emails/cliente/contacto.html` — template producción (icon: box.png → package.png)
- `public/assets/email/wordmark.png` — reemplazado (sin fondo negro)
- `public/assets/email/outline.png` — actualizado
- `public/assets/email/icons/package.png` — nuevo (ex box.png)
- `public/assets/email/icons/globe.png` — nuevo
- `public/assets/email/icons/file.png` — nuevo
- `contacto.html`, `cotizacion-mercaderia.html`, `cotizacion-servicio.html`, `icons.html` — nuevos (DS root)

**Build status:** TypeScript sin errores. Commit `c945edc` pusheado a main.

**Pendiente:**
- Mobile review fino de toda la landing
- Regenerar `background_quoter.jpg` en 4K
- Stats + contacto reales (bloqueante — Franco/Manuel)
- Video hero sin watermark
