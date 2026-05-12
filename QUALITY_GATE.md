# QUALITY_GATE.md

## Calidad documental

Antes de cerrar una fase debe estar actualizado:

- README.md
- TASKS.md
- CHANGELOG.md
- DECISION_LOG.md
- CUADERNO_GENERAL.md

## Calidad del código

- El código debe ejecutarse sin errores críticos.
- No debe haber credenciales expuestas.
- No debe haber rutas absolutas personales.
- Los scripts deben tener instrucciones básicas de uso.
- Las variables de entorno deben documentarse.

## Calidad del modelo IA

Antes de usar un modelo en pruebas reales debe existir:

- Dataset identificado.
- Clases documentadas.
- Métricas básicas.
- Video de prueba.
- Registro de falsos positivos y falsos negativos.
- Versión del modelo.

## Calidad del dashboard

Antes de desplegar en Vercel:

- La app debe compilar correctamente.
- El mapa debe cargar.
- Los eventos deben visualizarse.
- Los filtros principales deben funcionar.
- No debe haber errores visibles en consola.

## Seguridad

El sistema no debe presentarse como conducción autónoma ni como garantía de prevención de accidentes. Es un asistente de monitoreo y alerta vial.
