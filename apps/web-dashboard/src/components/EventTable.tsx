"use client";

import { Eye } from "lucide-react";
import { RoadEvent } from "@/lib/data";

interface EventTableProps {
  events: RoadEvent[];
  onViewDetails: (event: RoadEvent) => void;
}

const severityClass: Record<RoadEvent["severity"], string> = {
  Baja: "bg-green-100 text-green-800",
  Media: "bg-yellow-100 text-yellow-800",
  Alta: "bg-orange-100 text-orange-800",
  Crítica: "bg-red-100 text-red-800",
};

export function EventTable({ events, onViewDetails }: EventTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-500">Fecha</th>
            <th className="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-500">Ruta</th>
            <th className="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-500">Daño</th>
            <th className="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-500">Severidad</th>
            <th className="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-500">Confianza</th>
            <th className="px-5 py-3 text-right text-xs font-semibold uppercase text-gray-500">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {events.map((event) => (
            <tr key={event.id} className="hover:bg-gray-50">
              <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-600">
                {new Date(event.timestamp).toLocaleString("es-EC")}
              </td>
              <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-gray-900">{event.route}</td>
              <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-600">{event.type}</td>
              <td className="whitespace-nowrap px-5 py-4">
                <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${severityClass[event.severity]}`}>
                  {event.severity}
                </span>
              </td>
              <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-600">
                {(event.confidence * 100).toFixed(1)}%
              </td>
              <td className="whitespace-nowrap px-5 py-4 text-right text-sm font-medium">
                <button
                  type="button"
                  onClick={() => onViewDetails(event)}
                  className="ml-auto inline-flex items-center gap-2 text-blue-700 hover:text-blue-900"
                >
                  <Eye size={16} />
                  Ver detalle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
