@"
create table if not exists routes (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    description text,
    origin text,
    destination text,
    created_at timestamp with time zone default now()
);

create table if not exists road_events (
    id uuid primary key default gen_random_uuid(),
    route_id uuid references routes(id),
    event_type text not null,
    severity text not null,
    confidence numeric,
    latitude numeric not null,
    longitude numeric not null,
    detected_at timestamp with time zone not null,
    image_url text,
    video_url text,
    source_vehicle text,
    direction text,
    notes text,
    created_at timestamp with time zone default now()
);

create table if not exists model_versions (
    id uuid primary key default gen_random_uuid(),
    model_name text not null,
    version text not null,
    dataset_version text,
    precision_score numeric,
    recall_score numeric,
    map_score numeric,
    notes text,
    created_at timestamp with time zone default now()
);
"@ | Set-Content database\schema.sql -Encoding UTF8