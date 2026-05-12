# Informe Piloto - Pallatanga - Bucay

## Estado del piloto

El piloto se concentra en el tramo Balbanera - Pallatanga - Bucay, con prioridad operativa en Pallatanga - Bucay por criticidad vial y valor de validación para el MVP.

## Objetivo

Validar que el flujo completo pueda:

- Capturar evidencia visual de la vía.
- Detectar daños viales mediante visión computacional.
- Asociar cada evento con coordenadas GPS.
- Publicar eventos normalizados en el dashboard.
- Generar un reporte técnico útil para priorizar mantenimiento.

## Alcance inicial

- Tipos de daño: bache, hueco, grieta y desnivel.
- Severidad: baja, media, alta y crítica.
- Fuente de datos del dashboard: `apps/web-dashboard/public/data/events.json`.
- Backend definitivo: pendiente de conexión con Supabase.

## Indicadores mínimos

- Total de eventos detectados.
- Eventos críticos.
- Rutas activas.
- Eventos validados.
- Evidencia visual disponible por evento.

## Riesgos observados

- Variación de iluminación en carretera.
- Sombras confundidas con daños.
- Precisión limitada de GPS comercial.
- Falta de dataset real suficiente para afirmar métricas de producción.

## Próximo paso recomendado

Ejecutar una captura controlada en ruta, etiquetar una muestra representativa y comparar detecciones del modelo con revisión humana.
