# Protocolo de Captura de Video - RoadGuard AI Ecuador

Este documento establece las directrices técnicas y operativas para la recolección de datos visuales en campo, asegurando la calidad necesaria para el entrenamiento e inferencia de los modelos de visión computacional.

## 1. Equipamiento Recomendado

### 1.1 Cámara
- **Resolución Mínima:** 1080p (Full HD). Recomendado 2K o 4K para mayor detalle en grietas finas.
- **FPS (Cuadros por segundo):** Mínimo 30 FPS. Recomendado 60 FPS para reducir el desenfoque por movimiento (*motion blur*).
- **Ángulo de Visión (FOV):** Entre 120° y 140° para capturar tanto el carril actual como las bermas.
- **Estabilización:** Electrónica (EIS) o Óptica (OIS) obligatoria.

### 1.2 GPS
- **Frecuencia de Muestreo:** Mínimo 1Hz (una lectura por segundo). Recomendado 5Hz o 10Hz.
- **Sincronización:** El dispositivo debe permitir la incrustación de coordenadas en los metadatos del video o la generación de un archivo `.gpx` / `.csv` sincronizado por timestamp.

## 2. Instalación en el Vehículo

- **Posición:** Parte superior central del parabrisas (detrás del retrovisor) o montada sobre el capó.
- **Orientación:** Mirada hacia el frente con una ligera inclinación hacia abajo (aprox. 15°-20°) para priorizar la superficie de rodadura.
- **Obstrucciones:** Asegurarse de que las plumillas del limpiaparabrisas no bloqueen la visión y que el vidrio esté limpio.

## 3. Condiciones de Operación

### 3.1 Iluminación y Clima
- **Horario Óptimo:** 09:00 AM a 04:00 PM (Luz solar cenital que reduce sombras largas).
- **Clima:** Preferiblemente despejado o parcialmente nublado.
- **Restricciones:** 
    - Evitar lluvia fuerte (las gotas en el vidrio distorsionan la imagen).
    - Evitar conducción directa hacia el sol (efecto *lens flare*).
    - No capturar de noche para el MVP inicial (requiere iluminación especial).

### 3.2 Velocidad del Vehículo
- **Rango Recomendado:** 40 km/h a 70 km/h.
- **Impacto:** A mayores velocidades, aumenta el riesgo de *motion blur*, dificultando la detección de grietas pequeñas.

## 4. Procedimiento de Captura

1. **Checklist Pre-Salida:**
    - Limpiar lente de cámara y parabrisas.
    - Verificar espacio en tarjeta SD (mínimo 64GB).
    - Sincronizar reloj de la cámara con hora GPS (UTC).
2. **Durante el Trayecto:**
    - Mantener velocidad constante.
    - Evitar maniobras bruscas.
    - Registrar manualmente (opcional) puntos de referencia conocidos.
3. **Post-Captura:**
    - Respaldar videos inmediatamente.
    - Nombrar archivos con el formato: `FECHA_RUTA_SENTIDO_ID.mp4` (Ej: `20260512_Pallatanga-Bucay_Subida_001.mp4`).

## 5. Calidad de Datos (QA)

Antes de pasar a la fase de extracción de frames, el equipo debe validar:
- Que no haya vibración excesiva.
- Que la carretera ocupe al menos el 60% del encuadre inferior.
- Que el video no esté sobreexpuesto o subexpuesto.
