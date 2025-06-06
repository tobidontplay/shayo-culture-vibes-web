#!/bin/bash

# Source directory containing HEIC images
SOURCE_DIR="/Users/tobi/Documents/Love & Lust "

# Target directory for converted images
TARGET_DIR="/Users/tobi/Downloads/shayo-culture-vibes-web/public/images/events/love-and-lust-april-2025"

# Create target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Counter for naming files
counter=1

# Convert selected images (adjust the number as needed)
for file in "$SOURCE_DIR"/*.HEIC; do
  if [ $counter -le 10 ]; then
    echo "Converting $file to $TARGET_DIR/image$counter.jpg"
    
    # Convert using ImageMagick with auto-orient and high quality
    magick "$file" -auto-orient -resize "1200x1200>" -strip -quality 85 "$TARGET_DIR/image$counter.jpg"
    
    # Create thumbnail if it's the first image
    if [ $counter -eq 1 ]; then
      echo "Creating thumbnail from $file"
      magick "$file" -auto-orient -resize "600x600>" -strip -quality 85 "$TARGET_DIR/thumbnail.jpg"
    fi
    
    counter=$((counter + 1))
  else
    break
  fi
done

echo "Conversion complete. $((counter - 1)) images have been converted."
