import cv2
import os
import argparse
from datetime import datetime
from pathlib import Path

def extract_frames_from_video(video_path, output_root, interval_seconds=1):
    """
    Extracts frames from a single video file.
    """
    video_path = Path(video_path)
    video_name = video_path.stem
    output_dir = Path(output_root) / video_name
    
    if not output_dir.exists():
        output_dir.mkdir(parents=True)

    cap = cv2.VideoCapture(str(video_path))
    if not cap.isOpened():
        print(f"Error: Could not open video {video_path}")
        return

    fps = cap.get(cv2.CAP_PROP_FPS)
    if fps == 0:
        print(f"Error: FPS is 0 for {video_path}")
        return
        
    interval_frames = int(fps * interval_seconds)
    
    count = 0
    saved_count = 0
    
    print(f"Processing: {video_name}...")
    
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
            
        if count % interval_frames == 0:
            frame_name = f"{video_name}_f{saved_count:05d}.jpg"
            cv2.imwrite(str(output_dir / frame_name), frame)
            saved_count += 1
            
        count += 1
        
    cap.release()
    print(f"  Done. {saved_count} frames saved to {output_dir}")

def process_directory(input_dir, output_root, interval_seconds=1):
    """
    Processes all videos in a directory.
    """
    input_path = Path(input_dir)
    video_extensions = ['.mp4', '.avi', '.mov', '.mkv']
    
    videos = [f for f in input_path.iterdir() if f.suffix.lower() in video_extensions]
    
    if not videos:
        print(f"No videos found in {input_dir}")
        return

    print(f"Found {len(videos)} videos. Starting batch extraction...")
    for video in videos:
        extract_frames_from_video(video, output_root, interval_seconds)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Batch extract frames from a directory of videos.")
    parser.add_argument("--input", type=str, required=True, help="Directory containing video files.")
    parser.add_argument("--output", type=str, default="datasets/extracted_frames", help="Root output directory.")
    parser.add_argument("--interval", type=float, default=1.0, help="Interval in seconds between frames.")
    
    args = parser.parse_args()
    process_directory(args.input, args.output, args.interval)
