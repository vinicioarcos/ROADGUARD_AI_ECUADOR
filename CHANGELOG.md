# CHANGELOG.md

## [0.2.0] - 2026-05-12

### Agregado

- Modelo de datos operativo en `docs/modelo_datos.md`.
- Esquema SQL ampliado para rutas, sesiones de captura, eventos y versiones de modelo.
- Script `scripts/upload_events.py` para normalizar eventos CSV/JSON y publicarlos en el dashboard.
- Archivo `apps/web-dashboard/public/data/events.json` como fuente local versionable del MVP.
- Evidencias visuales locales para eventos del dashboard.
- Mapa interactivo de eventos en el dashboard.

### Cambiado

- El dashboard consume eventos locales normalizados en lugar de datos mock embebidos.
- Se eliminó la dependencia de Google Fonts durante el build.
- Se corrigió la codificación UTF-8 en documentos principales y textos visibles del dashboard.

## [0.1.0] - 2026-05-12

### Agregado

- Estructura inicial del proyecto.
- Definición de agentes.
- Documentación base.
- Alcance inicial del MVP en `docs/mvp.md`.
- Ruta piloto Balbanera - Pallatanga - Bucay.
- Módulo edge-inference inicializado.
- Web dashboard configurado con Next.js y Tailwind CSS.
- Suite de scripts de visión computacional: extracción, entrenamiento, validación y reportes.
- Protocolo de captura de video en `docs/protocolo_captura.md`.
- Guía de despliegue en Vercel en `docs/despliegue_vercel.md`.
