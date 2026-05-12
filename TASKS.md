@"
# TASKS.md

Estados permitidos:

- pendiente
- en_curso
- bloqueada
- completada
- descartada

## Fase 0: Configuración inicial

| ID | Tarea | Responsable | Estado |
|---|---|---|---|
| TASK-000 | Crear estructura base del repositorio | Product Manager Agent | completada |
| TASK-001 | Crear README.md | Product Manager Agent | completada |
| TASK-002 | Crear AGENTS.md | Product Manager Agent | completada |
| TASK-003 | Crear CLAUDE.md | Product Manager Agent | completada |
| TASK-004 | Crear GEMINI.md | Product Manager Agent | completada |
| TASK-005 | Crear CUADERNO_GENERAL.md | Product Manager Agent | completada |
| TASK-006 | Crear CHANGELOG.md | Product Manager Agent | pendiente |
| TASK-007 | Crear DECISION_LOG.md | Product Manager Agent | pendiente |
| TASK-008 | Crear QUALITY_GATE.md | QA Agent | pendiente |
| TASK-009 | Crear PHASE_TEMPLATE.md | Product Manager Agent | pendiente |

## Fase 1: Diseño del MVP

| ID | Tarea | Responsable | Estado |
|---|---|---|---|
| TASK-010 | Definir alcance funcional del MVP | Product Manager Agent | pendiente |
| TASK-011 | Redactar docs/mvp.md | Product Manager Agent | pendiente |
| TASK-012 | Definir ruta piloto Balbanera-Pallatanga-Bucay | Product Manager Agent | pendiente |
| TASK-013 | Definir protocolo de captura de video | Data Engineering Agent | pendiente |
| TASK-014 | Redactar docs/protocolo_captura.md | Data Engineering Agent | pendiente |

## Fase 2: Datos y visión computacional

| ID | Tarea | Responsable | Estado |
|---|---|---|---|
| TASK-020 | Definir clases del modelo | Computer Vision Agent | pendiente |
| TASK-021 | Crear script de extracción de frames | Computer Vision Agent | pendiente |
| TASK-022 | Diseñar estructura del dataset | Data Engineering Agent | pendiente |
| TASK-023 | Crear script base de entrenamiento YOLO | Computer Vision Agent | pendiente |
| TASK-024 | Crear script de validación del modelo | Computer Vision Agent | pendiente |

## Fase 3: Dashboard web

| ID | Tarea | Responsable | Estado |
|---|---|---|---|
| TASK-030 | Crear app Next.js en apps/web-dashboard | Frontend Dashboard Agent | pendiente |
| TASK-031 | Crear layout principal | Frontend Dashboard Agent | pendiente |
| TASK-032 | Crear mapa de eventos | Frontend Dashboard Agent | pendiente |
| TASK-033 | Crear tarjetas KPI | Frontend Dashboard Agent | pendiente |
| TASK-034 | Preparar despliegue en Vercel | Frontend Dashboard Agent | pendiente |
"@ | Set-Content TASKS.md -Encoding UTF8