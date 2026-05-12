# DECISION_LOG.md

## DEC-001

Fecha: 2026-05-12
Decisión: Entrenamiento fuera del vehículo.
Motivo: Reduce complejidad operativa, evita depender de GPU en campo y permite validar calidad de datos antes de usar el modelo.
Impacto: El MVP prioriza captura, etiquetado, entrenamiento y validación fuera del vehículo.
Estado: aceptada.

---

## DEC-002

Fecha: 2026-05-12
Decisión: Dashboard en Vercel.
Motivo: Despliegue rápido, bajo costo y compatibilidad nativa con Next.js.
Impacto: El frontend principal vive en `apps/web-dashboard`.
Estado: aceptada.

---

## DEC-003

Fecha: 2026-05-12
Decisión: YOLO como modelo base.
Motivo: Buen equilibrio entre velocidad, ecosistema, entrenamiento y futura compatibilidad edge.
Impacto: Los scripts de entrenamiento y validación usan Ultralytics YOLO.
Estado: aceptada.

---

## DEC-004

Fecha: 2026-05-12
Decisión: Monorepo.
Motivo: Facilita compartir documentación, scripts, apps y paquetes futuros.
Impacto: Se usa estructura `apps/`, `packages/`, `scripts/`, `database/` y `docs/`.
Estado: aceptada.

---

## DEC-005

Fecha: 2026-05-12
Decisión: Eventos locales versionables para el MVP.
Motivo: Permite conectar el dashboard con datos reales normalizados sin bloquear el avance por la configuración de Supabase.
Impacto: `scripts/upload_events.py` normaliza CSV/JSON y publica `apps/web-dashboard/public/data/events.json`. Supabase queda como siguiente integración.
Estado: aceptada.
