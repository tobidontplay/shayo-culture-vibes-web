#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/events/detty-december-2024

# Convert HEIC images to optimized JPG format - ensuring no cropping
# The '>' in resize means only resize if larger than specified dimensions
magick "/Users/tobi/Documents/MAD -Detty December /IMG_5789.HEIC" -auto-orient -quality 85 "public/images/events/detty-december-2024/image1.jpg"
magick "/Users/tobi/Documents/MAD -Detty December /ZMBL1281.HEIC" -auto-orient -quality 85 "public/images/events/detty-december-2024/image2.jpg"
magick "/Users/tobi/Documents/MAD -Detty December /ZMBL1472.HEIC" -auto-orient -quality 85 "public/images/events/detty-december-2024/image3.jpg"
magick "/Users/tobi/Documents/MAD -Detty December /IMG_4574.HEIC" -auto-orient -quality 85 "public/images/events/detty-december-2024/image4.jpg"
magick "/Users/tobi/Documents/MAD -Detty December /ZMBL1308.HEIC" -auto-orient -quality 85 "public/images/events/detty-december-2024/image5.jpg"
magick "/Users/tobi/Documents/MAD -Detty December /ZMBL1294.HEIC" -auto-orient -quality 85 "public/images/events/detty-december-2024/image6.jpg"
magick "/Users/tobi/Documents/MAD -Detty December /ZMBL1257.HEIC" -auto-orient -quality 85 "public/images/events/detty-december-2024/image7.jpg"
magick "/Users/tobi/Documents/MAD -Detty December /IMG_4810.HEIC" -auto-orient -quality 85 "public/images/events/detty-december-2024/image8.jpg"
magick "/Users/tobi/Documents/MAD -Detty December /IMG_4579.HEIC" -auto-orient -quality 85 "public/images/events/detty-december-2024/image9.jpg"
magick "/Users/tobi/Documents/MAD -Detty December /IMG_5928.HEIC" -auto-orient -quality 85 "public/images/events/detty-december-2024/image10.jpg"

# Create thumbnail (using the first image)
magick "/Users/tobi/Documents/MAD -Detty December /IMG_5789.HEIC" -auto-orient -quality 85 "public/images/events/detty-december-2024/thumbnail.jpg"

echo "Detty December images converted successfully - no cropping applied!"
