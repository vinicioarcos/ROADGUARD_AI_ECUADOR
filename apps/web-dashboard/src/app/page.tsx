"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import {
  AlertCircle,
  BarChart3,
  Download,
  Filter,
  LayoutDashboard,
  Map as MapIcon,
  Navigation,
  Search,
} from "lucide-react";
import { EventDetailModal } from "@/components/EventDetailModal";
import { EventTable } from "@/components/EventTable";
import { KpiCard } from "@/components/KpiCard";
import { getDashboardKpis, ROAD_EVENTS, ROUTES, RoadEvent, RoadEventSeverity } from "@/lib/data";

const EventMap = dynamic(() => import("@/components/EventMap").then((module) => module.EventMap), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500">
      Cargando mapa...
    </div>
  ),
});

const severities: Array<"Todas" | RoadEventSeverity> = ["Todas", "Crítica", "Alta", "Media", "Baja"];

export default function DashboardPage() {
  const [selectedEvent, setSelectedEvent] = useState<RoadEvent | null>(null);
  const [filterRoute, setFilterRoute] = useState("Todas");
  const [filterSeverity, setFilterSeverity] = useState<(typeof severities)[number]>("Todas");
  const [search, setSearch] = useState("");

  const filteredEvents = useMemo(() => {
    return ROAD_EVENTS.filter((event) => {
      const matchesRoute = filterRoute === "Todas" || event.route === filterRoute;
      const matchesSeverity = filterSeverity === "Todas" || event.severity === filterSeverity;
      const matchesSearch =
        search.trim().length === 0 ||
        `${event.route} ${event.type} ${event.severity} ${event.id}`.toLowerCase().includes(search.toLowerCase());

      return matchesRoute && matchesSeverity && matchesSearch;
    });
  }, [filterRoute, filterSeverity, search]);

  const kpis = getDashboardKpis(filteredEvents);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b bg-white px-6">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-700 p-2 text-white">
            <AlertCircle size={24} />
          </div>
          <h1 className="text-xl font-bold text-gray-900">
            RoadGuard AI <span className="text-blue-700">Ecuador</span>
          </h1>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <button type="button" className="text-sm font-medium text-gray-600 hover:text-blue-700">
            Documentación
          </button>
          <button type="button" className="text-sm font-medium text-gray-600 hover:text-blue-700">
            Soporte
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
            V
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 pb-12 pt-24">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Dashboard de monitoreo</h2>
            <p className="mt-1 text-gray-500">Gestión de daños viales para rutas piloto en Ecuador.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              <Download size={18} />
              Exportar PDF
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-blue-800"
            >
              <MapIcon size={18} />
              Ver mapa
            </button>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            title="Total eventos"
            value={kpis.totalEvents}
            icon={LayoutDashboard}
            description="Eventos filtrados"
            color="blue"
          />
          <KpiCard
            title="Baches críticos"
            value={kpis.criticalEvents}
            icon={AlertCircle}
            description="Requieren atención prioritaria"
            color="red"
          />
          <KpiCard
            title="Rutas activas"
            value={kpis.activeRoutes}
            icon={Navigation}
            description="Tramos con eventos"
            color="green"
          />
          <KpiCard
            title="Eventos validados"
            value={kpis.validatedEvents}
            icon={BarChart3}
            description="Confirmados por revisión"
            color="yellow"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2">
                  <Filter size={18} className="text-gray-400" />
                  <h3 className="font-bold text-gray-800">Filtros de búsqueda</h3>
                </div>
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="search"
                    placeholder="Buscar evento..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    className="w-full rounded-lg bg-gray-50 py-2 pl-10 pr-4 text-sm ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 md:w-64"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <select
                  className="rounded-lg bg-gray-50 p-3 text-sm ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={filterRoute}
                  onChange={(event) => setFilterRoute(event.target.value)}
                >
                  <option value="Todas">Todas las rutas</option>
                  {ROUTES.map((route) => (
                    <option key={route} value={route}>
                      {route}
                    </option>
                  ))}
                </select>
                <select
                  className="rounded-lg bg-gray-50 p-3 text-sm ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={filterSeverity}
                  onChange={(event) => setFilterSeverity(event.target.value as (typeof severities)[number])}
                >
                  {severities.map((severity) => (
                    <option key={severity} value={severity}>
                      {severity === "Todas" ? "Todas las severidades" : severity}
                    </option>
                  ))}
                </select>
                <select className="rounded-lg bg-gray-50 p-3 text-sm ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Todos los tipos</option>
                  <option>Bache</option>
                  <option>Hueco</option>
                  <option>Grieta</option>
                  <option>Desnivel</option>
                </select>
              </div>
            </div>

            <EventTable events={filteredEvents} onViewDetails={setSelectedEvent} />
          </div>

          <div className="space-y-6">
            <div className="flex h-[420px] flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 flex items-center gap-2 font-bold text-gray-800">
                <MapIcon size={18} className="text-blue-700" />
                Mapa de eventos
              </h3>
              <div className="min-h-0 flex-1 overflow-hidden rounded-lg border border-gray-200">
                <EventMap events={filteredEvents} />
              </div>
            </div>

            <div className="rounded-lg bg-blue-800 p-6 text-white shadow-sm">
              <h3 className="mb-2 text-lg font-bold">Estado del piloto</h3>
              <p className="mb-4 text-sm leading-relaxed text-blue-100">
                Ruta Pallatanga - Bucay conectada a eventos locales normalizados.
              </p>
              <div className="h-2 w-full overflow-hidden rounded-full bg-blue-950/50">
                <div className="h-full w-[65%] bg-white" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {selectedEvent ? <EventDetailModal event={selectedEvent} onClose={() => setSelectedEvent(null)} /> : null}
    </div>
  );
}
