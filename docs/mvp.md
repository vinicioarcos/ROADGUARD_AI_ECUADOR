# Alcance Funcional del MVP - RoadGuard AI Ecuador

Este documento define las capacidades, límites y objetivos del producto mínimo viable para el sistema de detección de daños viales.

## 1. Visión del producto

Proveer a autoridades viales, GAD, prefecturas y cooperativas una herramienta basada en IA para identificar y priorizar el mantenimiento de carreteras de forma objetiva.

## 2. Objetivos del MVP

- Detectar al menos cuatro tipos de daños viales con confianza superior al 70%.
- Georreferenciar cada daño con precisión de GPS comercial.
- Visualizar eventos de la ruta Balbanera - Pallatanga - Bucay en un entorno web.
- Generar un reporte técnico consolidado para toma de decisiones.

## 3. Requerimientos funcionales

## 3.1 Módulo de visión

- Detección multiclase de baches, huecos, grietas y desniveles.
- Procesamiento de archivos `.mp4` capturados según el protocolo.
- Clasificación de severidad basada en tipo de daño, tamaño relativo y validación posterior.

## 3.2 Gestión de datos

- Extracción de evidencia visual del frame donde se detectó el daño.
- Asociación de coordenadas latitud/longitud a cada detección.
- Exportación de eventos como CSV o JSON.
- Normalización de eventos para alimentar el dashboard.

## 3.3 Dashboard web

- Mapa interactivo con puntos por severidad.
- Tarjetas KPI con total de eventos, eventos críticos, rutas activas y eventos validados.
- Filtros por ruta, severidad y búsqueda.
- Vista de detalle con evidencia visual y metadatos técnicos.

## 4. Requerimientos no funcionales

- Acceso desde dispositivos móviles y desktop.
- Arquitectura preparada para añadir más rutas.
- Despliegue en Vercel.
- Build reproducible sin depender de fuentes externas.

## 5. Fuera de alcance

Para mantener el foco del MVP, no se incluye:

- Conducción autónoma o asistencia al conductor.
- Frenado automático ante obstáculos.
- Entrenamiento del modelo en tiempo real dentro del vehículo.
- Integración directa con maquinaria de reparación.
- Predicción avanzada de deterioro futuro.

## 6. Ruta piloto

- Tramo prioritario: Balbanera - Pallatanga - Bucay.
- Extensión aproximada: 60 a 80 km de monitoreo.
