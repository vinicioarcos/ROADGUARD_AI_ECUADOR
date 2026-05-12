@"
# DECISION_LOG.md

## DEC-001

Fecha: 2026-05-12

Decisión: El entrenamiento del modelo se realizará fuera del vehículo.

Motivo: El entrenamiento deep learning requiere GPU, validación y control de calidad de datos. En el vehículo se hará captura de video e inferencia, no entrenamiento.

Impacto: Reduce complejidad del MVP y mejora control del modelo.

Estado: aceptada.

---

## DEC-002

Fecha: 2026-05-12

Decisión: El dashboard web será desplegable en Vercel.

Motivo: Permite despliegue rápido, bajo costo y buena integración con Next.js.

Impacto: Se prioriza Next.js para apps/web-dashboard.

Estado: aceptada.

---

## DEC-003

Fecha: 2026-05-12

Decisión: YOLO será el modelo base para detección de baches.

Motivo: YOLO permite detección en tiempo real y tiene buena compatibilidad con dispositivos edge.

Impacto: Los scripts de entrenamiento e inferencia se diseñarán alrededor de Ultralytics YOLO.

Estado: aceptada.
"@ | Set-Content DECISION_LOG.md -Encoding UTF8