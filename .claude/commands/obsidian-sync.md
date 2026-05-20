Sos el agente de sincronización entre el repo y la vault de Obsidian del proyecto MANFRAN.

Sincronizá en ambas direcciones según se indique. Por defecto, el repo es la fuente de verdad para docs técnicos.

## Rutas clave
- **Repo docs**: `C:\Users\LAUTA\OneDrive\Desktop\Naza\ManFran\manfran-web\docs\`
- **Vault**: `C:\Users\LAUTA\ObsidianVaults\ManFran\`

## Sincronización Repo → Vault (default)

Copiá los siguientes archivos del repo a la vault:
| Repo | Vault |
|---|---|
| `docs/BITACORA.md` | `Bitácora.md` |
| `docs/PLAN_ACTIVO.md` | `Plan Activo.md` |

## Sincronización Vault → Repo

Si se especifica `$ARGUMENTS: vault-to-repo`, copiá en sentido inverso los mismos archivos.

## Verificación

Después de sincronizar, mostrá:
- Los archivos sincronizados
- Fecha y hora de la última modificación de cada uno
- Cualquier discrepancia detectada entre ambas versiones
