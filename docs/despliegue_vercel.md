# Guía de Despliegue en Vercel - RoadGuard AI Ecuador

Este documento describe los pasos para desplegar el dashboard web en Vercel, considerando la estructura de monorepo del proyecto.

## 1. Configuración del Proyecto en Vercel

Al importar el repositorio en Vercel, utiliza los siguientes ajustes:

- **Framework Preset:** Next.js
- **Root Directory:** `apps/web-dashboard`
- **Build Command:** `next build`
- **Output Directory:** `.next`
- **Install Command:** `npm install` (Vercel detectará el `package.json` en el root del monorepo si se configura correctamente).

## 2. Variables de Entorno

Configura las siguientes variables en el dashboard de Vercel:

### 2.1 Supabase (Futuro)
- `NEXT_PUBLIC_SUPABASE_URL`: URL de tu proyecto Supabase.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Clave anónima de Supabase.

### 2.2 Configuración de Next.js
- `NEXT_TELEMETRY_DISABLED`: `1` (Opcional, para desactivar telemetría).

## 3. Consideraciones de Monorepo

Vercel soporta monorepos de forma nativa. Si tienes problemas con las dependencias compartidas en `packages/`, asegúrate de que el "Root Directory" esté apuntando a `apps/web-dashboard` y que la opción "Include source files outside of the Root Directory in the Build Step" esté activada (activada por defecto en monorepos conocidos).

## 4. Despliegue Manual (CLI)

Si prefieres usar la CLI de Vercel:

```bash
npm install -g vercel
vercel login
vercel link
vercel deploy --prod
```

## 5. Optimización de Imágenes

Next.js en Vercel optimiza imágenes automáticamente. Para el MVP, estamos usando imágenes de Unsplash, las cuales deben estar permitidas en `next.config.ts`.

```typescript
// apps/web-dashboard/next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};
```
