import argparse
import csv
import json
from pathlib import Path


VALID_TYPES = {"Bache", "Hueco", "Grieta", "Desnivel"}
VALID_SEVERITIES = {"Baja", "Media", "Alta", "Crítica"}


def _first(row, *keys, default=""):
    for key in keys:
        value = row.get(key)
        if value not in (None, ""):
            return value
    return default


def _read_events(input_path):
    if input_path.suffix.lower() == ".json":
        with input_path.open("r", encoding="utf-8") as file:
            data = json.load(file)
        if not isinstance(data, list):
            raise ValueError("El archivo JSON debe contener una lista de eventos.")
        return data

    if input_path.suffix.lower() == ".csv":
        with input_path.open("r", encoding="utf-8-sig", newline="") as file:
            return list(csv.DictReader(file))

    raise ValueError("Formato no soportado. Usa .json o .csv.")


def _normalize_event(row, index):
    event_type = _first(row, "type", "event_type", "damage_type")
    severity = _first(row, "severity", "level")

    if event_type not in VALID_TYPES:
        raise ValueError(f"Evento {index}: tipo inválido '{event_type}'.")
    if severity not in VALID_SEVERITIES:
        raise ValueError(f"Evento {index}: severidad inválida '{severity}'.")

    confidence = float(_first(row, "confidence", "score", default=0))
    lat = float(_first(row, "lat", "latitude"))
    lng = float(_first(row, "lng", "lon", "longitude"))

    if not 0 <= confidence <= 1:
        raise ValueError(f"Evento {index}: confidence debe estar entre 0 y 1.")
    if not -90 <= lat <= 90 or not -180 <= lng <= 180:
        raise ValueError(f"Evento {index}: coordenadas GPS inválidas.")

    return {
        "id": str(_first(row, "id", "external_id", default=f"EVT-{index:05d}")),
        "timestamp": str(_first(row, "timestamp", "detected_at")),
        "route": str(_first(row, "route", "route_name")),
        "type": event_type,
        "severity": severity,
        "confidence": confidence,
        "lat": lat,
        "lng": lng,
        "imageUrl": str(_first(row, "imageUrl", "image_url", default="/evidence/event-placeholder.svg")),
        "status": str(_first(row, "status", default="pendiente")),
        "notes": str(_first(row, "notes", default="")),
    }


def publish_events(input_file, output_file):
    input_path = Path(input_file)
    output_path = Path(output_file)

    if not input_path.exists():
        raise FileNotFoundError(f"No existe el archivo de entrada: {input_path}")

    raw_events = _read_events(input_path)
    events = [_normalize_event(row, index + 1) for index, row in enumerate(raw_events)]

    output_path.parent.mkdir(parents=True, exist_ok=True)
    with output_path.open("w", encoding="utf-8") as file:
        json.dump(events, file, ensure_ascii=False, indent=2)
        file.write("\n")

    print(f"Eventos publicados: {len(events)}")
    print(f"Salida: {output_path}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Normaliza eventos viales y los publica para el dashboard.")
    parser.add_argument("--input", required=True, help="Archivo CSV o JSON con eventos detectados.")
    parser.add_argument(
        "--output",
        default="apps/web-dashboard/public/data/events.json",
        help="Ruta de salida para el JSON consumido por el dashboard.",
    )

    args = parser.parse_args()
    publish_events(args.input, args.output)
