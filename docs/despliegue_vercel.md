# Guía de Despliegue en Vercel - RoadGuard AI Ecuador

Este documento describe los pasos para desplegar el dashboard web en Vercel considerando la estructura de monorepo del proyecto.

## 1. Configuración del proyecto en Vercel

Al importar el repositorio en Vercel, usa estos ajustes:

- **Framework Preset:** Next.js.
- **Root Directory:** `apps/web-dashboard`.
- **Build Command:** `next build`.
- **Output Directory:** `.next`.
- **Install Command:** `npm install`.

## 2. Variables de entorno

Para el MVP local no se requieren variables obligatorias.

Variables preparadas para la fase Supabase:

- `NEXT_PUBLIC_SUPABASE_URL`: URL del proyecto Supabase.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: clave anónima de Supabase.
- `NEXT_TELEMETRY_DISABLED`: `1`, opcional para desactivar telemetría de Next.js.

## 3. Datos del dashboard

El dashboard consume eventos desde:

```text
apps/web-dashboard/public/data/events.json
```

Para actualizarlo desde un CSV o JSON operativo:

```bash
python scripts/upload_events.py --input data/eventos_piloto.csv
```

El archivo de entrada debe incluir, como mínimo:

- `id`
- `timestamp`
- `route`
- `type`
- `severity`
- `confidence`
- `lat`
- `lng`

## 4. Consideraciones de monorepo

Vercel soporta monorepos de forma nativa. Si aparecen problemas de rutas, confirma que el `Root Directory` apunte a `apps/web-dashboard`.

## 5. Despliegue manual con CLI

```bash
npm install -g vercel
vercel login
vercel link
vercel deploy --prod
```

## 6. Imágenes y fuentes

El dashboard usa evidencias locales dentro de `public/evidence/` y fuentes del sistema operativo. Esto evita fallos de compilación por descarga de recursos externos.
