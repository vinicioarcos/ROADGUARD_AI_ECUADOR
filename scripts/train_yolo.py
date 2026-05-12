from ultralytics import YOLO
import os
import argparse

def train_model(data_yaml, epochs=50, imgsz=640, model_type='yolov8n.pt'):
    """
    Trains a YOLO model using the specified data configuration.
    """
    if not os.path.exists(data_yaml):
        print(f"Error: Data config {data_yaml} not found.")
        return

    print(f"Loading base model: {model_type}...")
    model = YOLO(model_type)

    print(f"Starting training for {epochs} epochs...")
    results = model.train(
        data=data_yaml,
        epochs=epochs,
        imgsz=imgsz,
        plots=True,
        device='cpu' # Change to '0' for GPU if available
    )
    
    print("Training complete. Model saved in 'runs/detect/train'")
    return results

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Train YOLO model for RoadGuard AI.")
    parser.add_argument("--data", type=str, required=True, help="Path to data.yaml file.")
    parser.add_argument("--epochs", type=int, default=50, help="Number of training epochs.")
    parser.add_argument("--imgsz", type=int, default=640, help="Image size.")
    parser.add_argument("--model", type=str, default="yolov8n.pt", help="Base model type.")
    
    args = parser.parse_args()
    train_model(args.data, args.epochs, args.imgsz, args.model)
