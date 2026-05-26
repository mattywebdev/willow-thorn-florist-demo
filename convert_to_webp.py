from pathlib import Path
from PIL import Image

image_folder = Path("core/static/core/images")

for image_path in image_folder.glob("*"):
    if image_path.suffix.lower() in [".jpg", ".jpeg", ".png"]:
        img = Image.open(image_path).convert("RGB")
        webp_path = image_path.with_suffix(".webp")
        img.save(webp_path, "WEBP", quality=80)
        print(f"Converted: {image_path.name} -> {webp_path.name}")