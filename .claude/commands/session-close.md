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

## 8. Resumen final de sesión

Mostrá en la respuesta un bloque así:

---
### ✅ Sincronización completada

| Archivo | Estado |
|---|---|
| `docs/BITACORA.md` | ✅ Actualizado + commiteado |
| `Bitácora.md` (vault) | ✅ Sincronizado |
| `Handoff Notes.md` (vault) | ✅ Actualizado |
| `Plan Activo.md` (vault) | ✅ Actualizado |
| `Memoria.md` (vault) | ✅ Actualizado |

---

### 🛠️ Lo que se hizo esta sesión
[Lista clara y concisa de todo lo trabajado, en lenguaje para el usuario — no técnico puro. Ejemplo: "Se creó el favicon de 32×32", "Se configuró el tema de Obsidian", etc.]

---

### 📋 Lo que queda por hacer
Tomalo del Plan Activo actualizado. Separado por prioridad:

**🔴 Bloqueantes:**
[tareas que no se pueden avanzar sin algo externo]

**🟡 Próxima sesión:**
[tareas listas para hacer en la próxima sesión, ordenadas por prioridad]

**🔵 Más adelante:**
[tareas de fases futuras]

---

### 💡 Para arrancar la próxima sesión
Recordale al usuario que ejecute `/obsidian-handoff` al inicio de la próxima sesión para recuperar todo el contexto.
---
