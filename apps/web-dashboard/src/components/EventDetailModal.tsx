"use client";

import Image from "next/image";
import { Activity, Calendar, MapPin, ShieldCheck, X } from "lucide-react";
import { RoadEvent } from "@/lib/data";

interface EventDetailModalProps {
  event: RoadEvent;
  onClose: () => void;
}

export function EventDetailModal({ event, onClose }: EventDetailModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b p-6">
          <h2 className="text-2xl font-bold text-gray-800">Detalle de evento: {event.id}</h2>
          <button type="button" onClick={onClose} className="rounded-full p-2 transition-colors hover:bg-gray-100">
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="relative aspect-video overflow-hidden rounded-lg border bg-gray-100 shadow-inner">
              <Image src={event.imageUrl} alt={`Evidencia de ${event.type}`} fill className="object-cover" />
            </div>

            <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-4">
              <Activity className="mt-1 text-blue-600" size={20} />
              <div>
                <h4 className="font-semibold text-blue-900">Análisis del modelo</h4>
                <p className="text-sm text-blue-700">
                  Detectado con una confianza del {(event.confidence * 100).toFixed(2)}%.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border bg-gray-50 p-4">
                <div className="mb-1 flex items-center gap-2 text-gray-500">
                  <Calendar size={16} />
                  <span className="text-xs font-medium uppercase">Fecha y hora</span>
                </div>
                <p className="font-semibold text-gray-900">{new Date(event.timestamp).toLocaleString("es-EC")}</p>
              </div>

              <div className="rounded-lg border bg-gray-50 p-4">
                <div className="mb-1 flex items-center gap-2 text-gray-500">
                  <ShieldCheck size={16} />
                  <span className="text-xs font-medium uppercase">Severidad</span>
                </div>
                <p className={`font-semibold ${event.severity === "Crítica" ? "text-red-600" : "text-gray-900"}`}>
                  {event.severity}
                </p>
              </div>
            </div>

            <div className="rounded-lg border bg-gray-50 p-4">
              <div className="mb-1 flex items-center gap-2 text-gray-500">
                <MapPin size={16} />
                <span className="text-xs font-medium uppercase">Ubicación y ruta</span>
              </div>
              <p className="font-semibold text-gray-900">{event.route}</p>
              <p className="mt-1 text-sm text-gray-500">
                Coordenadas: {event.lat}, {event.lng}
              </p>
            </div>

            <div className="border-t pt-4">
              <h4 className="mb-4 text-xs font-bold uppercase text-gray-800">Protocolo sugerido</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Verificar daño en inspección visual de campo.
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Priorizar reparación según severidad y tráfico del tramo.
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Registrar evidencia después de la intervención.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
