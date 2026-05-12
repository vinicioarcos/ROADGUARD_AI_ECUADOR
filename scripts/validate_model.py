import cv2
import argparse
import os
from ultralytics import YOLO
from pathlib import Path

def validate(model_path, source, output_dir='runs/val_results'):
    """
    Runs inference on a source (image or video) and saves results.
    """
    if not os.path.exists(model_path):
        print(f"Error: Model file {model_path} not found.")
        return

    model = YOLO(model_path)
    
    print(f"Running inference on {source}...")
    results = model.predict(
        source=source,
        save=True,
        project=output_dir,
        name='exp',
        exist_ok=True,
        conf=0.25
    )
    
    print(f"Inference complete. Results saved in {output_dir}/exp")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Validate/Test YOLO model on images or videos.")
    parser.add_argument("--model", type=str, required=True, help="Path to trained model (.pt).")
    parser.add_argument("--source", type=str, required=True, help="Path to images or video file/folder.")
    parser.add_argument("--output", type=str, default="reports/tecnico/validation", help="Directory to save results.")
    
    args = parser.parse_args()
    validate(args.model, args.source, args.output)
