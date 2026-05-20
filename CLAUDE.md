# CLAUDE.md — MANFRAN Web Project

## Contexto del proyecto
Landing page y ecosistema digital de MANFRAN, empresa argentina de forwarding y comercio exterior.
Dominio: www.manfran.com | Stack: Next.js 14 + TypeScript + Tailwind + Framer Motion

## Identidad de marca
- Negro: #1A1A1A | Azul: #00A0D8 | Blanco: #FFFFFF
- Tipografía oficial de marca: **Avenir Next Condensed Bold** (display) + **Helvetica** (body, con variantes light y bold). Archivos `.ttf` en `assets/fonts/`.
- Tono: profesional, directo, confiable — sin jerga corporativa vacía

## Stack técnico
- Framework: Next.js 14 (App Router)
- Lenguaje: TypeScript estricto
- Estilos: Tailwind CSS + tokens CSS custom en /src/styles/tokens.css
- Animaciones: Framer Motion para scroll y entrada, Three.js/Spline para fondo hero
- Deploy: Vercel
- Fuentes: locales vía `next/font/local` desde `assets/fonts/` (Avenir Next Condensed Bold + Helvetica). El one-shot inicial usó Barlow Condensed + Inter desde Google Fonts como placeholder — pendiente de migrar a las fuentes reales en el refactor.

## Convenciones de código
- Componentes: PascalCase, un componente por archivo
- Tipos: siempre tipar props con TypeScript interfaces
- CSS: Tailwind classes primero, CSS custom solo para animaciones complejas
- Imágenes: next/image siempre, con alt descriptivo
- No usar `any` en TypeScript

## Estructura de secciones (landing)
1. **Hero** — headline + CTA + fondo animado (partículas CSS)
2. **Stats** — métricas clave con animación counter-up (clientes, operaciones, industrias, kg)
3. **Servicios** — grid de servicios con iconos (importación, exportación, despacho, logística)
4. **Por qué MANFRAN** — diferenciadores clave con animación de entrada
5. **Proceso** — flujo de trabajo simplificado (timeline horizontal)
6. **Cotizador** — formulario interactivo (servicio + mercadería), tabs, zod + react-hook-form
7. **Contacto** — form simple + datos de contacto

## SEO y metadatos
- Título: "MANFRAN | Soluciones integrales en comercio exterior"
- Descripción: "Agente de carga y despachante de aduana en Argentina. Importación, exportación y logística internacional."
- OG image: /public/og-image.jpg

## Comandos frecuentes
- `npm run dev` — servidor local
- `npm run build` — build de producción
- `npm run lint` — ESLint
- `npx tsc --noEmit` — check de tipos

## Sistema Obsidian (segundo cerebro)
Vault: `C:\Users\LAUTA\ObsidianVaults\ManFran`
- **Index.md** — mapa de la vault, punto de entrada del agente
- **Handoff Notes.md** — leer SIEMPRE al iniciar sesión
- **Plan Activo.md** — estado de tareas, espejado en docs/PLAN_ACTIVO.md
- **Bitácora.md** — log técnico, espejado en docs/BITACORA.md
- **Memoria.md** — razonamiento y decisiones

Al iniciar sesión: leer Handoff Notes.md + Plan Activo.md de la vault.
Al cerrar sesión: ejecutar skill `session-close` para sincronizar vault y repo.

## Fases del proyecto
- **Fase 1 (actual)**: Landing page estática con animaciones
- **Fase 1.5**: Video background con Higgsfield DoP MCP (evaluar cuando diseño aprobado)
- **Fase 2**: Automatizaciones (Google Sheets + Telegram Bot + APIs)
- **Fase 3**: Sistema agéntico con Claude como orquestador

## Subagentes disponibles
- `@obsidian-agent` — lee/escribe la vault, mantiene contexto entre sesiones
- `@quoter-agent` (Fase 2) — recibe datos del cotizador → calcula aranceles → responde
- `@higgsfield-agent` (Fase 1.5) — genera video backgrounds via Higgsfield MCP
- `@web-agent` (Fase 2) — scraping, APIs externas, tracking
- `@sheets-agent` (Fase 2) — lectura/escritura Google Sheets
- `@telegram-agent` (Fase 2) — envío de mensajes, manejo de comandos

## Lo que NO hacer
- No usar Create React App ni Vite (usamos Next.js)
- No hardcodear textos en componentes — usar constants.ts
- No usar styled-components ni CSS-in-JS
- No modificar archivos en /assets/brand/ sin confirmación
- No commitear /04 - Credenciales/ de la vault ni .env.local
