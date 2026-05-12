# Modelo de Datos - RoadGuard AI Ecuador

Este documento define el modelo mínimo de datos para registrar rutas, sesiones de captura, versiones de modelo y eventos viales detectados.

## Entidades principales

## `routes`

Representa una ruta o tramo monitoreado.

Campos principales:

- `id`: identificador único.
- `name`: nombre legible del tramo, por ejemplo `Pallatanga - Bucay`.
- `origin`: punto de inicio.
- `destination`: punto final.
- `province`: provincia principal asociada.
- `length_km`: longitud aproximada en kilómetros.

## `capture_sessions`

Agrupa una jornada o recorrido de captura.

Campos principales:

- `id`: identificador único.
- `route_id`: ruta monitoreada.
- `started_at`: fecha y hora de inicio.
- `ended_at`: fecha y hora de fin.
- `vehicle_id`: identificador operativo del vehículo.
- `camera_id`: cámara usada.
- `gps_source`: origen de las coordenadas.
- `weather`: condición climática observada.
- `direction`: sentido del recorrido.

## `model_versions`

Registra qué versión del modelo generó o validó detecciones.

Campos principales:

- `model_name`: nombre del modelo.
- `version`: versión operativa.
- `dataset_version`: versión del dataset usado.
- `precision_score`, `recall_score`, `map50_score`, `map50_95_score`: métricas de validación.

## `road_events`

Representa un daño vial detectado.

Campos principales:

- `external_id`: identificador estable si el evento viene de CSV, JSON o sistema externo.
- `route_id`: ruta asociada.
- `capture_session_id`: sesión de captura asociada.
- `model_version_id`: modelo que produjo la detección.
- `event_type`: `Bache`, `Hueco`, `Grieta` o `Desnivel`.
- `severity`: `Baja`, `Media`, `Alta` o `Crítica`.
- `confidence`: confianza entre `0` y `1`.
- `latitude`, `longitude`: coordenadas GPS.
- `detected_at`: timestamp de detección.
- `image_url`: evidencia visual.
- `video_url`: video fuente opcional.
- `frame_number`: número de frame opcional.
- `status`: `pendiente`, `validado`, `descartado` o `reparado`.

## Flujo MVP

1. El vehículo captura video y GPS.
2. Los scripts extraen frames y ejecutan inferencia.
3. Las detecciones se exportan como CSV o JSON.
4. `scripts/upload_events.py` normaliza esos eventos.
5. El dashboard consume `apps/web-dashboard/public/data/events.json`.
6. En la fase siguiente, el mismo formato alimentará Supabase/PostgreSQL.

## Formato JSON operativo

```json
[
  {
    "id": "EVT-20260512-001",
    "timestamp": "2026-05-12T10:30:00Z",
    "route": "Pallatanga - Bucay",
    "type": "Bache",
    "severity": "Crítica",
    "confidence": 0.98,
    "lat": -2.0012,
    "lng": -78.9876,
    "imageUrl": "/evidence/event-001.svg",
    "status": "pendiente"
  }
]
```

## Criterios de calidad

- Toda detección debe tener coordenadas válidas.
- `confidence` debe estar entre `0` y `1`.
- `severity` debe usar una de las cuatro categorías permitidas.
- El dashboard no debe depender de datos mock embebidos cuando exista `public/data/events.json`.
