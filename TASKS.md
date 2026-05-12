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
| TASK-006 | Crear CHANGELOG.md | Product Manager Agent | completada |
| TASK-007 | Crear DECISION_LOG.md | Product Manager Agent | completada |
| TASK-008 | Crear QUALITY_GATE.md | QA Agent | completada |
| TASK-009 | Crear PHASE_TEMPLATE.md | Product Manager Agent | completada |

## Fase 1: Diseño del MVP

| ID | Tarea | Responsable | Estado |
|---|---|---|---|
| TASK-010 | Definir alcance funcional del MVP | Product Manager Agent | completada |
| TASK-011 | Redactar docs/mvp.md | Product Manager Agent | completada |
| TASK-012 | Definir ruta piloto Balbanera-Pallatanga-Bucay | Product Manager Agent | completada |
| TASK-013 | Definir protocolo de captura de video | Data Engineering Agent | completada |
| TASK-014 | Redactar docs/protocolo_captura.md | Data Engineering Agent | completada |



## Fase 2: Datos y visión computacional

| ID | Tarea | Responsable | Estado |
|---|---|---|---|
| TASK-020 | Definir clases del modelo | Computer Vision Agent | completada |
| TASK-021 | Crear script de extracción de frames | Computer Vision Agent | completada |
| TASK-022 | Diseñar estructura del dataset | Data Engineering Agent | completada |
| TASK-023 | Crear script base de entrenamiento YOLO | Computer Vision Agent | completada |
| TASK-024 | Crear script de validación del modelo | Computer Vision Agent | completada |
| TASK-025 | Crear script de generación de reportes | Data Engineering Agent | completada |


## Fase 3: Dashboard web

| ID | Tarea | Responsable | Estado |
|---|---|---|---|
| TASK-030 | Crear app Next.js en apps/web-dashboard | Frontend Dashboard Agent | completada |
| TASK-031 | Crear layout principal | Frontend Dashboard Agent | completada |
| TASK-032 | Crear mapa de eventos | Frontend Dashboard Agent | completada |
| TASK-033 | Crear tarjetas KPI | Frontend Dashboard Agent | completada |
| TASK-034 | Preparar despliegue en Vercel | Frontend Dashboard Agent | completada |

"@ | Set-Content TASKS.md -Encoding UTF8