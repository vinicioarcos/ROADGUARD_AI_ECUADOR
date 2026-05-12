import events from "../../public/data/events.json";

export type RoadEventType = "Bache" | "Hueco" | "Grieta" | "Desnivel";
export type RoadEventSeverity = "Baja" | "Media" | "Alta" | "Crítica";
export type RoadEventStatus = "pendiente" | "validado" | "descartado" | "reparado";

export interface RoadEvent {
  id: string;
  timestamp: string;
  route: string;
  type: RoadEventType;
  severity: RoadEventSeverity;
  confidence: number;
  lat: number;
  lng: number;
  imageUrl: string;
  status?: RoadEventStatus;
  notes?: string;
}

export const ROAD_EVENTS = events as RoadEvent[];

export const ROUTES = Array.from(new Set(ROAD_EVENTS.map((event) => event.route)));

export function getDashboardKpis(eventsForView: RoadEvent[] = ROAD_EVENTS) {
  const criticalEvents = eventsForView.filter((event) => event.severity === "Crítica").length;
  const activeRoutes = new Set(eventsForView.map((event) => event.route)).size;
  const validatedEvents = eventsForView.filter((event) => event.status === "validado").length;

  return {
    totalEvents: eventsForView.length,
    criticalEvents,
    activeRoutes,
    validatedEvents,
  };
}
