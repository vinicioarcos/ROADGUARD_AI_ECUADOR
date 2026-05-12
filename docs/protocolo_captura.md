# Protocolo de Captura de Video - RoadGuard AI Ecuador

Este documento establece las directrices técnicas y operativas para recolectar datos visuales en campo con calidad suficiente para entrenamiento e inferencia de modelos de visión computacional.

## 1. Equipamiento recomendado

## 1.1 Cámara

- **Resolución mínima:** 1080p. Se recomienda 2K o 4K para capturar grietas finas.
- **FPS:** mínimo 30 FPS. Se recomienda 60 FPS para reducir desenfoque por movimiento.
- **Ángulo de visión:** entre 120° y 140°.
- **Estabilización:** electrónica u óptica.

## 1.2 GPS

- **Frecuencia de muestreo:** mínimo 1 Hz. Se recomienda 5 Hz o 10 Hz.
- **Sincronización:** el dispositivo debe permitir coordenadas en metadatos del video o un archivo `.gpx` / `.csv` sincronizado por timestamp.

## 2. Instalación en el vehículo

- **Posición:** parte superior central del parabrisas o montaje firme sobre capó.
- **Orientación:** mirada frontal con inclinación ligera hacia abajo, aproximadamente 15° a 20°.
- **Obstrucciones:** revisar que plumillas, reflejos o suciedad no bloqueen la visión.

## 3. Condiciones de operación

## 3.1 Iluminación y clima

- **Horario óptimo:** 09:00 a 16:00.
- **Clima:** despejado o parcialmente nublado.
- **Restricciones:** evitar lluvia fuerte, conducción directa contra el sol y capturas nocturnas para el MVP inicial.

## 3.2 Velocidad del vehículo

- **Rango recomendado:** 40 km/h a 70 km/h.
- A mayor velocidad, mayor riesgo de desenfoque y menor calidad para grietas pequeñas.

## 4. Procedimiento de captura

1. Limpiar lente de cámara y parabrisas.
2. Verificar espacio disponible en almacenamiento.
3. Sincronizar reloj de cámara con hora GPS.
4. Mantener velocidad constante durante el trayecto.
5. Respaldar videos inmediatamente después de la captura.
6. Nombrar archivos con formato `FECHA_RUTA_SENTIDO_ID.mp4`, por ejemplo `20260512_Pallatanga-Bucay_Subida_001.mp4`.

## 5. Calidad de datos

Antes de extraer frames, validar:

- Que no exista vibración excesiva.
- Que la carretera ocupe al menos el 60% del encuadre inferior.
- Que el video no esté sobreexpuesto ni subexpuesto.
- Que exista sincronización suficiente entre video y GPS.
