@"
# AGENTS.md

Este archivo define los agentes responsables del proyecto RoadGuard AI Ecuador.

## Regla general

Todo agente debe leer primero:

1. README.md
2. CUADERNO_GENERAL.md
3. TASKS.md
4. DECISION_LOG.md
5. QUALITY_GATE.md

Ningún agente debe modificar arquitectura, base de datos o flujo principal sin registrar la decisión en DECISION_LOG.md.

## Product Manager Agent

Responsable de alcance, fases, tareas, entregables y visión comercial del MVP.

Archivos principales:

- CUADERNO_GENERAL.md
- TASKS.md
- docs/mvp.md
- reports/comercial/

## Computer Vision Agent

Responsable del modelo de detección de baches y daños viales.

Archivos principales:

- scripts/train_yolo.py
- scripts/validate_model.py
- datasets/
- reports/tecnico/

## Data Engineering Agent

Responsable del flujo de datos, base de datos, GPS y eventos detectados.

Archivos principales:

- database/schema.sql
- database/migrations/
- scripts/upload_events.py
- docs/modelo_datos.md

## Frontend Dashboard Agent

Responsable del dashboard web desplegable en Vercel.

Archivos principales:

- apps/web-dashboard/
- docs/despliegue_vercel.md

## Edge Inference Agent

Responsable del módulo de captura e inferencia en vehículo.

Archivos principales:

- apps/edge-inference/
- scripts/extract_frames.py

## MLOps Agent

Responsable de versionar datasets, modelos y métricas.

Archivos principales:

- reports/tecnico/
- QUALITY_GATE.md
- CHANGELOG.md

## QA Agent

Responsable de verificar calidad técnica, documental y operativa.
"@ | Set-Content AGENTS.md -Encoding UTF8