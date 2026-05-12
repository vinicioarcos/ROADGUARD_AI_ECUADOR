# MVP RoadGuard AI Ecuador

## Objetivo

Validar un sistema mínimo capaz de detectar baches y daños viales, registrar eventos con GPS y visualizarlos en un dashboard web.

## Funciones principales

1. Captura de video desde vehículo.
2. Extracción de frames.
3. Detección de baches con IA.
4. Registro GPS del evento.
5. Visualización en mapa.
6. Reporte técnico del corredor.

## Funciones excluidas del MVP

- Frenado automático.
- Conducción autónoma.
- Medición exacta de profundidad.
- App pública masiva.
- Integración con sistema interno del vehículo.
- Aprendizaje automático dentro del auto.

## Flujo operativo

```text
Auto graba video
  ↓
Video se descarga al llegar al destino
  ↓
Se extraen frames
  ↓
Se etiquetan baches
  ↓
Se entrena modelo YOLO
  ↓
Se validan resultados
  ↓
Se registran eventos
  ↓
Dashboard muestra mapa de daños