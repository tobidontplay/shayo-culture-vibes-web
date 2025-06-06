#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/events/midnight-all-day-june-2024

# Convert HEIC images to optimized JPG format
convert "/Users/tobi/Documents/Midnight All day/IMG_8255.HEIC" -resize '1200x1200>' -quality 85 -background none -gravity center -extent 1200x1200 "public/images/events/midnight-all-day-june-2024/image1.jpg"
convert "/Users/tobi/Documents/Midnight All day/IMG_8339.HEIC" -resize 1200x1200\> -quality 85 "public/images/events/midnight-all-day-june-2024/image2.jpg"
convert "/Users/tobi/Documents/Midnight All day/IMG_8514.HEIC" -resize 1200x1200\> -quality 85 "public/images/events/midnight-all-day-june-2024/image3.jpg"
convert "/Users/tobi/Documents/Midnight All day/IMG_8580.HEIC" -resize 1200x1200\> -quality 85 "public/images/events/midnight-all-day-june-2024/image4.jpg"
convert "/Users/tobi/Documents/Midnight All day/IMG_8686.HEIC" -resize 1200x1200\> -quality 85 "public/images/events/midnight-all-day-june-2024/image5.jpg"

# Create thumbnails (smaller, optimized versions)
convert "/Users/tobi/Documents/Midnight All day/IMG_8255.HEIC" -resize 400x400\> -quality 85 "public/images/events/midnight-all-day-june-2024/thumbnail.jpg"

# Add additional images from the folder
convert "/Users/tobi/Documents/Midnight All day/IMG_8124.HEIC" -resize 1200x1200\> -quality 85 "public/images/events/midnight-all-day-june-2024/image6.jpg"
convert "/Users/tobi/Documents/Midnight All day/IMG_8130.HEIC" -resize 1200x1200\> -quality 85 "public/images/events/midnight-all-day-june-2024/image7.jpg"
convert "/Users/tobi/Documents/Midnight All day/IMG_8369.HEIC" -resize 1200x1200\> -quality 85 "public/images/events/midnight-all-day-june-2024/image8.jpg"
convert "/Users/tobi/Documents/Midnight All day/IMG_8598.HEIC" -resize 1200x1200\> -quality 85 "public/images/events/midnight-all-day-june-2024/image9.jpg"
convert "/Users/tobi/Documents/Midnight All day/IMG_8700.HEIC" -resize 1200x1200\> -quality 85 "public/images/events/midnight-all-day-june-2024/image10.jpg"

echo "Images converted successfully!"
