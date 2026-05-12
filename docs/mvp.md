# Alcance Funcional del MVP - RoadGuard AI Ecuador

Este documento define las capacidades, límites y objetivos del Producto Mínimo Viable (MVP) para el sistema de detección de daños viales.

## 1. Visión del Producto
Proveer a las autoridades viales (GADs, Prefecturas, Cooperativas) de una herramienta basada en IA para identificar y priorizar el mantenimiento de carreteras de forma objetiva y eficiente.

## 2. Objetivos del MVP
- Detectar al menos 4 tipos de daños viales con una confianza superior al 70%.
- Georreferenciar cada daño con precisión de GPS comercial.
- Visualizar la severidad de la ruta Pallatanga - Bucay en un entorno web.
- Generar un reporte técnico consolidado para toma de decisiones.

## 3. Requerimientos Funcionales

### 3.1 Módulo de Visión (IA)
- **Detección Multi-clase:** Identificación de baches, huecos, grietas y desniveles.
- **Inferencia en Video:** Capacidad de procesar archivos de video `.mp4` capturados según el protocolo.
- **Clasificación de Severidad:** Basada en el tamaño relativo del daño en el frame y el tipo de evento.

### 3.2 Gestión de Datos
- **Extracción de Evidencia:** Recorte automático del frame donde se detectó el daño.
- **Sincronización GPS:** Asociación de coordenadas latitud/longitud a cada detección.
- **Exportación:** Generación de archivos CSV/JSON con el listado de eventos.

### 3.3 Dashboard Web
- **Mapa Interactivo:** Visualización de pines con colores por severidad (Rojo: Crítica, Naranja: Alta, Amarillo: Media).
- **Tarjetas KPI:** Resumen de total de eventos, baches críticos y kilómetros analizados.
- **Filtros:** Navegación por ruta, fecha y nivel de daño.
- **Vista de Detalle:** Visualización de la foto de evidencia y metadatos técnicos.

## 4. Requerimientos No Funcionales
- **Portabilidad:** El dashboard debe ser accesible desde dispositivos móviles y desktop.
- **Escalabilidad:** Arquitectura preparada para añadir más rutas en el futuro.
- **Disponibilidad:** Despliegue en Vercel para acceso 24/7.

## 5. Fuera de Alcance (Out of Scope)
Para mantener el foco en el MVP, **NO** se incluirá:
- Conducción autónoma o asistencia al conductor.
- Frenado automático ante obstáculos.
- Entrenamiento del modelo en tiempo real dentro del vehículo.
- Integración directa con maquinaria de reparación (asfaltadoras).
- Predicción de deterioro futuro (análisis predictivo avanzado).

## 6. Ruta Piloto (Fase 1)
- **Tramo prioritario:** Balbanera - Pallatanga - Bucay.
- **Extensión:** Aproximadamente 60-80 km de monitoreo.
