"use client";

import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import { RoadEvent, RoadEventSeverity } from "@/lib/data";

interface EventMapProps {
  events: RoadEvent[];
}

const severityColors: Record<RoadEventSeverity, string> = {
  Baja: "#16a34a",
  Media: "#ca8a04",
  Alta: "#ea580c",
  Crítica: "#dc2626",
};

export function EventMap({ events }: EventMapProps) {
  const center: [number, number] = events.length
    ? [events[0].lat, events[0].lng]
    : [-2.0012, -78.9876];

  return (
    <MapContainer center={center} zoom={10} scrollWheelZoom={false} className="rounded-lg">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {events.map((event) => (
        <CircleMarker
          key={event.id}
          center={[event.lat, event.lng]}
          radius={10}
          pathOptions={{
            color: severityColors[event.severity],
            fillColor: severityColors[event.severity],
            fillOpacity: 0.72,
            weight: 2,
          }}
        >
          <Popup>
            <div className="space-y-1">
              <p className="font-semibold text-gray-900">{event.type}</p>
              <p className="text-sm text-gray-700">{event.route}</p>
              <p className="text-sm text-gray-700">Severidad: {event.severity}</p>
              <p className="text-xs text-gray-500">Confianza: {(event.confidence * 100).toFixed(1)}%</p>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
