# MANFRAN Design System

## Colores
| Token | Hex | Uso |
|---|---|---|
| `--color-black` | `#1A1A1A` | Fondo principal |
| `--color-blue` | `#00A0D8` | Acento primario, CTAs |
| `--color-blue-dark` | `#0088B8` | Hover en azul |
| `--color-blue-light` | `#33B8E8` | Variante clara |
| `--color-gray-900` | `#111111` | Fondo alternativo (secciones oscuras) |
| `--color-gray-800` | `#1E1E1E` | Cards, surfaces |
| `--color-white` | `#FFFFFF` | Texto principal |

## Tipografía
| Variable | Fuente | Uso |
|---|---|---|
| `--font-display` | Barlow Condensed | Headings, labels, botones |
| `--font-body` | Inter | Párrafos, descripciones |

### Escala de headings (font-display, uppercase, extrabold)
- H1: `text-6xl md:text-8xl`
- H2: `text-4xl md:text-6xl`
- H3: `text-xl md:text-2xl`

## Componentes
### Button
- `primary`: fondo azul, glow on hover
- `secondary`: border azul, fill on hover
- `ghost`: texto con underline
- Tamaños: `sm`, `md`, `lg`

### Badge
- `blue`: fondo azul
- `outline`: borde azul
- `subtle`: fondo blanco/5

## Animaciones (Framer Motion)
- **Entrada**: `opacity: 0 → 1`, `y: 24 → 0`, `duration: 0.7`, `ease: [0.22, 1, 0.36, 1]`
- **Stagger delay**: 0.08–0.15s entre items de grid
- **Counter-up**: easing cubic, 1800ms
- **Hover**: `transition: all 300ms`

## Patrones de sección
Cada sección sigue este patrón:
1. Label pequeño en azul (`text-[var(--color-blue)] text-sm uppercase tracking-widest`)
2. Heading grande (`font-display text-4xl md:text-6xl font-extrabold uppercase`)
3. Descripción (`text-white/50`)
4. Contenido principal

## Fondo de secciones
- Secciones impares: `bg-[var(--color-black)]`
- Secciones pares: `bg-[var(--color-gray-900)]`
