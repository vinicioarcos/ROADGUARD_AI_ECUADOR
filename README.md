# RoadGuard AI Ecuador

Sistema inteligente para detección, georreferenciación y monitoreo de baches, huecos y daños viales mediante visión computacional.

## Objetivo del MVP

Construir un producto mínimo viable capaz de:

1. Capturar video frontal desde vehículos en carretera.
2. Detectar baches y daños visibles usando modelos de visión computacional.
3. Registrar eventos con GPS, fecha, hora, severidad e imagen.
4. Visualizar puntos críticos en un dashboard web.
5. Generar reportes técnicos para cooperativas, GAD, prefecturas o entidades viales.

## Ruta piloto

Latacunga - Ambato - Riobamba - Colta - Balbanera - Pallatanga - Bucay.

Zona prioritaria:

Balbanera - Pallatanga - Bucay.

## Arquitectura general

Vehículo:

- Cámara frontal.
- GPS.
- Captura de video.
- Inferencia opcional.

Laboratorio / nube:

- Procesamiento de video.
- Extracción de frames.
- Etiquetado.
- Entrenamiento YOLO.
- Validación del modelo.

Dashboard web:

- Mapa de eventos.
- Filtros por ruta, fecha y severidad.
- Evidencia visual.
- Reportes PDF / Excel.

## Stack propuesto

Frontend:

- Next.js
- React
- Tailwind CSS
- Vercel

Backend:

- Supabase
- PostgreSQL
- Supabase Storage

IA:

- Python
- OpenCV
- Ultralytics YOLO
- PyTorch

## Estado

MVP en prototipo funcional inicial. La documentación base, los scripts de visión computacional y el dashboard están creados. El dashboard consume eventos locales versionables mientras se prepara la conexión definitiva con Supabase.
