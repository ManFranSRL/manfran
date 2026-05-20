Sos el agente de cierre de sesión del proyecto MANFRAN. Tu tarea es documentar todo lo que se hizo en esta sesión y sincronizar el repo con la vault de Obsidian.

Ejecutá los siguientes pasos EN ORDEN:

## 1. Leer estado actual del repo

Ejecutá:
```
git -C "C:\Users\LAUTA\OneDrive\Desktop\Naza\ManFran\manfran-web" diff --stat HEAD
git -C "C:\Users\LAUTA\OneDrive\Desktop\Naza\ManFran\manfran-web" status --short
```

## 2. Actualizar docs/BITACORA.md en el repo

Leé el archivo `docs/BITACORA.md` y agregá una nueva entrada al FINAL con este formato:

```
## YYYY-MM-DD — [título breve de la sesión]

**Qué se hizo:**
- [lista factual de cambios]

**Archivos modificados:**
- [lista de archivos]

**Pendiente:**
- [lista de pendientes]
```

Usá la fecha de hoy. Sé específico y factual, tercera persona.

## 3. Sincronizar Bitácora con la vault

Copiá el contenido completo de `docs/BITACORA.md` a `C:\Users\LAUTA\ObsidianVaults\ManFran\Bitácora.md`. Mantenés el historial completo.

## 4. Actualizar Handoff Notes en la vault

Leé `C:\Users\LAUTA\ObsidianVaults\ManFran\Handoff Notes.md` y REEMPLAZÁ la sección "Última actualización" con el estado actual. Incluí:
- ¿Dónde quedamos?
- ¿Qué está listo?
- ¿Qué falta para el próximo paso? (ordenado por prioridad)
- ¿Hay bloqueantes?
- Decisiones tomadas en esta sesión

## 5. Actualizar Plan Activo en la vault

Leé `C:\Users\LAUTA\ObsidianVaults\ManFran\Plan Activo.md` y mové las tareas completadas a ✅ y actualizá el estado de las pendientes.

Copiá también a `docs/PLAN_ACTIVO.md` en el repo.

## 6. Actualizar Memoria en la vault (opcional, primero persona)

Leé `C:\Users\LAUTA\ObsidianVaults\ManFran\Memoria.md` y agregá una entrada breve en primera persona explicando el razonamiento y decisiones de esta sesión. ¿Qué fue interesante? ¿Qué dudas quedaron?

## 7. Commit de los docs al repo

```
git -C "C:\Users\LAUTA\OneDrive\Desktop\Naza\ManFran\manfran-web" add docs/
git -C "C:\Users\LAUTA\OneDrive\Desktop\Naza\ManFran\manfran-web" commit -m "docs: sync session notes [$(date +%Y-%m-%d)]"
```

## 8. Confirmación final

Mostrá un resumen de lo que sincronizaste:
- ✅ BITACORA.md actualizado y sincronizado con vault
- ✅ Handoff Notes.md actualizado
- ✅ Plan Activo.md actualizado
- ✅ Memoria.md actualizado
- ✅ Commit creado en repo
