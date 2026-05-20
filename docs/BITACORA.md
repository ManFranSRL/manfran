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
