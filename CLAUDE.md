# CLAUDE.md

Instrucciones para Claude Code o Claude Design en el proyecto RoadGuard AI Ecuador.

## Contexto

RoadGuard AI Ecuador es un MVP para detectar baches, huecos y daños viales usando visión computacional. El sistema captura video desde vehículos, procesa imágenes, detecta eventos viales y los muestra en un dashboard georreferenciado.

## Reglas

1. Leer primero README.md, AGENTS.md, CUADERNO_GENERAL.md y TASKS.md.
2. No modificar la estructura principal sin justificarlo.
3. No crear funcionalidades fuera del MVP sin registrarlas como propuesta.
4. Mantener el código simple, modular y mantenible.
5. Documentar cambios en CHANGELOG.md.
6. Registrar decisiones relevantes en DECISION_LOG.md.
7. Marcar tareas modificadas en TASKS.md.

## Stack

- Next.js para dashboard web.
- Supabase como backend inicial.
- Python + OpenCV + YOLO para visión computacional.
- Vercel para despliegue web.
- GitHub como repositorio principal.

## Prioridad del MVP

Primero:

- Dashboard web.
- Modelo de datos.
- Carga de eventos.
- Visualización en mapa.
- Protocolo de captura.
- Scripts de procesamiento.

Después:

- Inferencia en tiempo real.
- Alertas al conductor.
- Integración con Jetson.
- Reportes automáticos avanzados.

## Advertencia

El sistema no es conducción autónoma. Es un asistente de monitoreo y alerta vial.
