import sys
from rembg import remove
from PIL import Image

input_path = 'd:/New folder (3)/barun/public/barun.png'
output_path = 'd:/New folder (3)/barun/public/barun-transparent.png'

print("Opening image...")
try:
    input_img = Image.open(input_path)
    print("Removing background...")
    output_img = remove(input_img)
    print("Saving image...")
    output_img.save(output_path)
    print("Done!")
except Exception as e:
    print(f"Error: {e}")
