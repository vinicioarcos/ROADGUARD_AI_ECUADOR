import type { Metadata } from "next";
import "./globals.css";
import "leaflet/dist/leaflet.css";

export const metadata: Metadata = {
  title: "RoadGuard AI | Dashboard de Gestión Vial",
  description:
    "Detección inteligente de daños viales mediante visión computacional para GAD y Prefecturas del Ecuador.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
