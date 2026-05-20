# MANFRAN — Automatizaciones (Fase 2)

## Cotizador → Google Sheets
- Formulario web → API Route Next.js → Google Sheets API
- Hoja: una fila por consulta (fecha, nombre, email, tipo, origen, destino, notas)
- Trigger: nueva fila → notificación Telegram a Manuel y Franco

## Bot de Telegram
Comandos planeados:
- `/nueva_op` — registrar nueva operación
- `/estado [código]` — consultar estado de operación
- `/cotizar` — flujo de cotización por chat
- `/tipo_cambio` — última actualización BCRA/blue

## Agentes Claude (Fase 3)
- **Cotizador**: recibe datos → calcula aranceles vía API AFIP/TARIC → responde estimado
- **Seguimiento**: consulta tracking APIs → actualiza Sheets → alerta si hay demoras
- **Tipo de cambio**: monitorea BCRA → alerta si variación > X%
- **Documental**: verifica docs de una operación → lista faltantes → envía recordatorio

## Variables de entorno necesarias
Ver `.env.example` para lista completa.
