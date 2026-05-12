import json
import csv
import argparse
import os
from datetime import datetime

def generate_report(input_file, output_file=None):
    """
    Generates a technical summary from detected events.
    """
    if not os.path.exists(input_file):
        print(f"Error: Input file {input_file} not found.")
        return

    events = []
    if input_file.endswith('.json'):
        with open(input_file, 'r') as f:
            events = json.load(f)
    elif input_file.endswith('.csv'):
        with open(input_file, 'r') as f:
            reader = csv.DictReader(f)
            events = [row for row in reader]

    if not events:
        print("No events to process.")
        return

    total_events = len(events)
    by_severity = {}
    by_type = {}

    for event in events:
        sev = event.get('severity', 'Desconocida')
        etype = event.get('type', 'Desconocido')
        
        by_severity[sev] = by_severity.get(sev, 0) + 1
        by_type[etype] = by_type.get(etype, 0) + 1

    report = [
        "========================================",
        "      ROADGUARD AI ECUADOR REPORT       ",
        "========================================",
        f"Fecha del Reporte: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
        f"Archivo de Origen: {os.path.basename(input_file)}",
        "----------------------------------------",
        f"Total de Eventos Detectados: {total_events}",
        "",
        "Resumen por Severidad:",
    ]
    
    for sev, count in sorted(by_severity.items()):
        report.append(f"  - {sev}: {count}")

    report.append("\nResumen por Tipo de Daño:")
    for etype, count in sorted(by_type.items()):
        report.append(f"  - {etype}: {count}")

    report.append("----------------------------------------")
    report.append("RoadGuard AI - Pallatanga Pilot Project")
    report.append("========================================")

    final_report = "\n".join(report)
    print(final_report)

    if output_file:
        with open(output_file, 'w') as f:
            f.write(final_report)
        print(f"\nReport saved to {output_file}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate technical report from detected events.")
    parser.add_argument("--input", type=str, required=True, help="Path to events JSON or CSV.")
    parser.add_argument("--output", type=str, help="Path to save text report.")
    
    args = parser.parse_args()
    generate_report(args.input, args.output)
