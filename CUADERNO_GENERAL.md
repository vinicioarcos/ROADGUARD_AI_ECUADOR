# Cuaderno General del Proyecto

## Proyecto

RoadGuard AI Ecuador

## Descripción

Sistema inteligente para detección temprana, registro y visualización de baches y daños viales usando visión computacional, GPS y dashboard web.

## Problema

Las carreteras con baches, hundimientos, grietas, piedras o deterioro generan daños en vehículos, riesgos para pasajeros y altos costos de mantenimiento.

## Solución propuesta

Convertir vehículos comunes en sensores móviles capaces de capturar video, detectar daños viales, registrar coordenadas GPS y alimentar un mapa de riesgo vial.

## Ruta piloto

Balbanera - Pallatanga - Bucay.

## Usuarios objetivo

- Cooperativas de transporte.
- Empresas de carga.
- GAD municipales.
- Prefecturas.
- MTOP.
- Aseguradoras.
- Talleres y empresas de neumáticos.
- Investigadores en movilidad e infraestructura vial.

## MVP

El MVP debe permitir:

1. Capturar videos de la vía.
2. Extraer frames.
3. Etiquetar baches.
4. Entrenar modelo YOLO.
5. Registrar eventos con GPS.
6. Mostrar eventos en dashboard.
7. Generar reporte técnico.

## Estado actual

Prototipo funcional inicial. Las fases documental, scripts base y dashboard están creados. La integración operativa usa eventos locales normalizados como puente hacia Supabase.

## Decisiones iniciales

- El entrenamiento del modelo se realizará fuera del vehículo.
- El vehículo inicialmente funcionará como capturador de datos.
- La inferencia en tiempo real será una fase posterior.
- El dashboard web será desplegable en Vercel.
- Supabase será considerado como backend inicial.
- YOLO será el modelo base de detección.
- Los eventos del MVP se publicarán como JSON versionable hasta activar Supabase.

## Riesgos

- Baja calidad de video.
- Sombras confundidas con baches.
- GPS impreciso.
- Costos de hardware.
- Baja precisión en lluvia o noche.
- Exceso de alcance en el MVP.
- Responsabilidad legal si se promete seguridad absoluta.

## Principio rector

El sistema es un asistente de alerta y monitoreo vial, no un sistema autónomo de conducción.
