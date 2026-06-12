import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Renderer mínimo de plantillas de email basado en tokens `{{clave}}`.
 *
 * Las plantillas viven como `.html` en src/emails/ (editables tal cual se
 * exportan de la herramienta de diseño). Solo hay que mantener los tokens
 * `{{...}}` donde van los datos dinámicos. Si el diseño cambia, se reemplaza
 * el HTML conservando los tokens y el código de acá no se toca.
 *
 * Nota Vercel: los .html se leen con fs en runtime. Para que el bundle los
 * incluya, next.config.ts declara `outputFileTracingIncludes` para src/emails.
 */

// Cache de archivos leídos (no cambian entre requests en una misma instancia).
const cache = new Map<string, string>()

function loadTemplate(relPath: string): string {
  const cached = cache.get(relPath)
  if (cached) return cached
  const abs = join(process.cwd(), 'src', 'emails', relPath)
  const raw = readFileSync(abs, 'utf8')
  cache.set(relPath, raw)
  return raw
}

/** Escapa HTML para evitar romper el markup (o inyección) con datos del form. */
export function escapeHtml(value: unknown): string {
  if (value === null || value === undefined || value === '') return '—'
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/**
 * Carga una plantilla y reemplaza todos los `{{token}}` por los valores dados
 * (escapados). Tokens sin valor quedan como "—". Tokens sobrantes en el data
 * que no estén en la plantilla se ignoran.
 */
export function renderTemplate(
  relPath: string,
  data: Record<string, unknown>,
): string {
  const tpl = loadTemplate(relPath)
  return tpl.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_, key: string) =>
    escapeHtml(data[key]),
  )
}
