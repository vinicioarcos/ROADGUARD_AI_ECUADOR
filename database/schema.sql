create extension if not exists pgcrypto;

create table if not exists routes (
    id uuid primary key default gen_random_uuid(),
    name text not null unique,
    description text,
    origin text,
    destination text,
    province text,
    length_km numeric,
    created_at timestamptz not null default now()
);

create table if not exists model_versions (
    id uuid primary key default gen_random_uuid(),
    model_name text not null,
    version text not null,
    dataset_version text,
    precision_score numeric,
    recall_score numeric,
    map50_score numeric,
    map50_95_score numeric,
    notes text,
    created_at timestamptz not null default now(),
    unique (model_name, version)
);

create table if not exists capture_sessions (
    id uuid primary key default gen_random_uuid(),
    route_id uuid references routes(id) on delete set null,
    started_at timestamptz not null,
    ended_at timestamptz,
    vehicle_id text,
    camera_id text,
    gps_source text,
    weather text,
    direction text,
    operator_notes text,
    created_at timestamptz not null default now()
);

create table if not exists road_events (
    id uuid primary key default gen_random_uuid(),
    external_id text unique,
    route_id uuid references routes(id) on delete set null,
    capture_session_id uuid references capture_sessions(id) on delete set null,
    model_version_id uuid references model_versions(id) on delete set null,
    event_type text not null check (event_type in ('Bache', 'Hueco', 'Grieta', 'Desnivel')),
    severity text not null check (severity in ('Baja', 'Media', 'Alta', 'Crítica')),
    confidence numeric not null check (confidence >= 0 and confidence <= 1),
    latitude numeric not null check (latitude >= -90 and latitude <= 90),
    longitude numeric not null check (longitude >= -180 and longitude <= 180),
    detected_at timestamptz not null,
    image_url text,
    video_url text,
    frame_number integer,
    source_vehicle text,
    direction text,
    status text not null default 'pendiente' check (status in ('pendiente', 'validado', 'descartado', 'reparado')),
    notes text,
    created_at timestamptz not null default now()
);

create index if not exists idx_road_events_detected_at on road_events (detected_at desc);
create index if not exists idx_road_events_route_id on road_events (route_id);
create index if not exists idx_road_events_severity on road_events (severity);
create index if not exists idx_road_events_location on road_events (latitude, longitude);
