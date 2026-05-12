# Arquitectura - RoadGuard AI Ecuador

Este documento resume la arquitectura operativa del MVP.

## Vista general

RoadGuard AI Ecuador funciona como un flujo de captura, procesamiento, validación y visualización de daños viales.

1. El vehículo captura video frontal y coordenadas GPS.
2. Los scripts extraen frames y preparan datos para entrenamiento o inferencia.
3. El modelo YOLO detecta daños viales sobre imágenes o video.
4. Los eventos detectados se normalizan como JSON operativo.
5. El dashboard web muestra mapa, filtros, KPIs y evidencia visual.
6. En una fase posterior, Supabase/PostgreSQL reemplazará el archivo JSON local como fuente principal.

## Componentes

### Captura en vehículo

- Cámara frontal.
- Registro GPS externo o del dispositivo de captura.
- Almacenamiento temporal de video.
- Inferencia en borde diferida para una fase posterior.

### Procesamiento y visión computacional

- `scripts/extract_frames.py`: extracción de frames desde video.
- `scripts/train_yolo.py`: entrenamiento base con Ultralytics YOLO.
- `scripts/validate_model.py`: validación de métricas del modelo.
- `scripts/generate_report.py`: generación de reportes técnicos.

### Datos

- `database/schema.sql`: esquema relacional previsto para Supabase/PostgreSQL.
- `scripts/upload_events.py`: normalización de eventos CSV/JSON.
- `apps/web-dashboard/public/data/events.json`: fuente local versionable para el MVP.

### Dashboard web

- Next.js, React y Tailwind CSS.
- Despliegue previsto en Vercel.
- Mapa interactivo con eventos, severidad y evidencia visual.

## Decisiones vigentes

- El MVP usa entrenamiento fuera del vehículo.
- El dashboard vive dentro del monorepo en `apps/web-dashboard`.
- Los eventos locales versionables son un puente hasta activar Supabase.
- El sistema es un asistente de monitoreo y alerta vial, no un sistema de conducción autónoma.
