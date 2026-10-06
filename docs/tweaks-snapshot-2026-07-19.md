# IntelliBra design-lab snapshot

Captured from the visible local concept-lab controls on 2026-07-19 before the panel was disabled for the Vercel preview deployment.

| Page | Setting | Captured choice | Code value |
| --- | --- | --- | --- |
| Home | Homepage hero | Editorial center | `centered` |
| Home | Crisis story layout | Impact mosaic | `mosaic` |
| Home | Crisis stat boxes | Evidence matrix | `matrix` |
| Home | Our Journey | Timeline | `timeline` |
| Clinical Trial | Trial registry section | Hidden | `hidden` |
| Clinical Trial | Eligibility section | Clear decision | `split` |
| Clinical Trial | Recruiting centers | Coverage grid | `coverage` |
| Our Team | Team page direction | Portrait mosaic | `mosaic` |
| News | News page direction | Editorial dispatch | `dispatch` |
| Contact | Contact form style | Crisp outline | `outlined` |

## Deployment behavior

- These values are now the fixed defaults in `lib/tweaks-context.tsx`.
- Previously saved browser preferences are intentionally ignored.
- `TweaksPanel` remains in the codebase for future design work but is no longer mounted in the public layout.
- Re-enable the import and component in `app/[locale]/layout.tsx` when the concept lab is needed again.

## Visual evidence

- Local capture before deactivation: `.codex-tweaks-current-open.jpg`
