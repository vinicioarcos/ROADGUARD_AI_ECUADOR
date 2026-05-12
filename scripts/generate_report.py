import argparse
import csv
import json
import os
from datetime import datetime


def generate_report(input_file, output_file=None):
    """
    Genera un resumen técnico a partir de eventos detectados.
    """
    if not os.path.exists(input_file):
        print(f"Error: no existe el archivo de entrada {input_file}.")
        return

    events = []
    if input_file.endswith(".json"):
        with open(input_file, "r", encoding="utf-8") as file:
            events = json.load(file)
    elif input_file.endswith(".csv"):
        with open(input_file, "r", encoding="utf-8-sig", newline="") as file:
            reader = csv.DictReader(file)
            events = [row for row in reader]

    if not events:
        print("No hay eventos para procesar.")
        return

    total_events = len(events)
    by_severity = {}
    by_type = {}

    for event in events:
        severity = event.get("severity", "Desconocida")
        event_type = event.get("type", event.get("event_type", "Desconocido"))

        by_severity[severity] = by_severity.get(severity, 0) + 1
        by_type[event_type] = by_type.get(event_type, 0) + 1

    report = [
        "========================================",
        "      ROADGUARD AI ECUADOR REPORT       ",
        "========================================",
        f"Fecha del reporte: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
        f"Archivo de origen: {os.path.basename(input_file)}",
        "----------------------------------------",
        f"Total de eventos detectados: {total_events}",
        "",
        "Resumen por severidad:",
    ]

    for severity, count in sorted(by_severity.items()):
        report.append(f"  - {severity}: {count}")

    report.append("\nResumen por tipo de daño:")
    for event_type, count in sorted(by_type.items()):
        report.append(f"  - {event_type}: {count}")

    report.append("----------------------------------------")
    report.append("RoadGuard AI - Piloto Pallatanga")
    report.append("========================================")

    final_report = "\n".join(report)
    print(final_report)

    if output_file:
        with open(output_file, "w", encoding="utf-8") as file:
            file.write(final_report)
        print(f"\nReporte guardado en {output_file}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Genera un reporte técnico desde eventos detectados.")
    parser.add_argument("--input", type=str, required=True, help="Ruta a eventos JSON o CSV.")
    parser.add_argument("--output", type=str, help="Ruta para guardar el reporte de texto.")

    args = parser.parse_args()
    generate_report(args.input, args.output)
