insert into routes (name, description, origin, destination, province, length_km)
values
    (
        'Balbanera - Pallatanga',
        'Tramo inicial de la ruta piloto RoadGuard AI Ecuador.',
        'Balbanera',
        'Pallatanga',
        'Chimborazo',
        42.0
    ),
    (
        'Pallatanga - Bucay',
        'Tramo prioritario para validación operativa del MVP.',
        'Pallatanga',
        'Bucay',
        'Chimborazo / Guayas',
        65.0
    )
on conflict (name) do nothing;

insert into model_versions (
    model_name,
    version,
    dataset_version,
    precision_score,
    recall_score,
    map50_score,
    map50_95_score,
    notes
)
values (
    'yolo-roadguard',
    'mvp-local-0.1',
    'dataset-piloto-0.1',
    null,
    null,
    null,
    null,
    'Versión placeholder para eventos locales del MVP. No representa un modelo validado para producción.'
)
on conflict (model_name, version) do nothing;

insert into capture_sessions (
    route_id,
    started_at,
    ended_at,
    vehicle_id,
    camera_id,
    gps_source,
    weather,
    direction,
    operator_notes
)
select
    routes.id,
    '2026-05-12T10:00:00Z',
    '2026-05-12T12:30:00Z',
    'vehiculo-piloto-001',
    'camara-frontal-001',
    'gps-comercial',
    'despejado',
    'Pallatanga hacia Bucay',
    'Sesión semilla para pruebas locales del esquema.'
from routes
where routes.name = 'Pallatanga - Bucay'
on conflict do nothing;

insert into road_events (
    external_id,
    route_id,
    capture_session_id,
    model_version_id,
    event_type,
    severity,
    confidence,
    latitude,
    longitude,
    detected_at,
    image_url,
    status,
    notes
)
select
    'EVT-20260512-001',
    routes.id,
    capture_sessions.id,
    model_versions.id,
    'Bache',
    'Crítica',
    0.98,
    -2.0012,
    -78.9876,
    '2026-05-12T10:30:00Z',
    '/evidence/event-001.svg',
    'pendiente',
    'Daño profundo en carril derecho.'
from routes
cross join model_versions
left join capture_sessions on capture_sessions.route_id = routes.id
where routes.name = 'Pallatanga - Bucay'
  and model_versions.model_name = 'yolo-roadguard'
  and model_versions.version = 'mvp-local-0.1'
on conflict (external_id) do nothing;
