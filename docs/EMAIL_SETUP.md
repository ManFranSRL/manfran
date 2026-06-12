# Emails automáticos — Resend (Fase 2)

Sistema de emails de los formularios del sitio. Por cada envío salen **dos** emails:

1. **Al cliente** — auto-respuesta de marca ("recibimos tu mensaje/cotización").
2. **Interno** — notificación del lead a `info@manfran.com` + CEOs, con `Reply-To` = email del cliente (responder = contestarle directo).

## Arquitectura

```
Form (Contact / Quoter)
  └─ fetch → /api/contact  ó  /api/quote   (valida con zod)
        └─ src/lib/email/send.ts            (orquesta los 2 envíos)
              ├─ render.ts  → llena tokens {{...}} de las plantillas .html
              └─ client.ts  → Resend
```

| Archivo | Rol |
|---|---|
| `src/lib/email/config.ts` | Remitente, destinatarios internos, labels, datos de contacto |
| `src/lib/email/client.ts` | Cliente Resend (lee `RESEND_API_KEY`) |
| `src/lib/email/render.ts` | Reemplaza tokens `{{token}}` y escapa HTML |
| `src/lib/email/send.ts` | Funciones de envío + generación de REF |
| `src/app/api/contact/route.ts` | Endpoint del form de contacto |
| `src/app/api/quote/route.ts` | Endpoint del cotizador (servicio + mercadería) |
| `src/emails/cliente/*.html` | Plantillas que recibe el cliente |
| `src/emails/interno/*.html` | Plantillas que recibe el equipo |

## Plantillas — cómo editarlas

Son `.html` con tokens `{{token}}`. Editá el diseño libremente; **mientras conserves los tokens, el código no se toca.** Tokens por plantilla:

- **contacto:** `{{firstName}} {{name}} {{email}} {{company}} {{message}}`
- **cotizacion-servicio:** `{{ref}} {{firstName}} {{name}} {{email}} {{phone}} {{serviceType}} {{transportMode}} {{cargoType}} {{origin}} {{destination}} {{cargoDescription}} {{weight}} {{volume}} {{notes}}`
- **cotizacion-mercaderia:** `{{ref}} {{firstName}} {{name}} {{email}} {{origin}} {{destination}} {{incoterm}} {{cargoDescription}} {{weight}} {{volume}} {{hsCode}}`
- Comunes en pies: `{{contactEmail}} {{contactPhone}}`

> Las imágenes en emails deben ser **URLs absolutas** (`https://manfran.com/assets/email/...`). Los logos viven en `public/assets/email/` (`wordmark.png`, `outline.png`) — placeholders; reemplazar por los assets exactos del DS.
> Las exportaciones originales del diseñador están en la raíz del repo (`contacto.html`, etc.) como referencia de diseño.

## DNS en Resend (Squarespace)

Resend usa el subdominio `send.manfran.com` para envío → **no toca los MX ni el SPF de Google Workspace.** Registros agregados en Squarespace (`account.squarespace.com/domains`):

| Tipo | Nombre | Datos |
|---|---|---|
| TXT | `resend._domainkey` | `p=...` (DKIM, valor completo de Resend) |
| MX | `send` | `feedback-smtp.<región>.amazonses.com` (prioridad 10) |
| TXT | `send` | `v=spf1 include:amazonses.com ~all` |
| TXT | `_dmarc` | `v=DMARC1; p=none;` |

**NO tocar:** `MX @ → smtp.google.com`, `TXT @ → v=spf1 include:_spf.google.com ~all`, `TXT google._domainkey`, registros de Vercel (`A @`, `CNAME www`).

## Variables de entorno

- Local: `RESEND_API_KEY` en `.env.local`.
- Producción: misma key en Vercel → Project Settings → Environment Variables.

## Pendientes (TODO)

- [x] Destinos internos: `info@manfran.com` (Manuel) + `franco@manfran.com`.
- [x] Teléfono real cargado (`config.ts` + `constants.ts`).
- [x] `RESEND_API_KEY` en `.env.local` + Vercel.
- [x] Dominio verificado en Resend.
- [ ] Prueba real punta a punta (enviar desde el form en producción y confirmar recepción).
- [ ] Reemplazar logos `public/assets/email/{wordmark,outline}.png` por los assets exactos del DS.
- [ ] (Opcional) rate-limiting en las rutas API para evitar abuso del envío.
