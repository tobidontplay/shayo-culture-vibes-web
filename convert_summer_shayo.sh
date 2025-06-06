#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/events/summer-shayo-august-2024

# Convert HEIC images to optimized JPG format
convert "/Users/tobi/Documents/Summer Shayo/10.HEIC" -resize 1200x1200\> -quality 85 "public/images/events/summer-shayo-august-2024/image1.jpg"
convert "/Users/tobi/Documents/Summer Shayo/11.HEIC" -resize 1200x1200\> -quality 85 "public/images/events/summer-shayo-august-2024/image2.jpg"
convert "/Users/tobi/Documents/Summer Shayo/12.HEIC" -resize 1200x1200\> -quality 85 "public/images/events/summer-shayo-august-2024/image3.jpg"
convert "/Users/tobi/Documents/Summer Shayo/160.HEIC" -resize 1200x1200\> -quality 85 "public/images/events/summer-shayo-august-2024/image4.jpg"
convert "/Users/tobi/Documents/Summer Shayo/167.HEIC" -resize 1200x1200\> -quality 85 "public/images/events/summer-shayo-august-2024/image5.jpg"
convert "/Users/tobi/Documents/Summer Shayo/3.HEIC" -resize 1200x1200\> -quality 85 "public/images/events/summer-shayo-august-2024/image6.jpg"
convert "/Users/tobi/Documents/Summer Shayo/31.HEIC" -resize 1200x1200\> -quality 85 "public/images/events/summer-shayo-august-2024/image7.jpg"
convert "/Users/tobi/Documents/Summer Shayo/DSC00310.HEIC" -resize 1200x1200\> -quality 85 "public/images/events/summer-shayo-august-2024/image8.jpg"
convert "/Users/tobi/Documents/Summer Shayo/DSC00663.HEIC" -resize 1200x1200\> -quality 85 "public/images/events/summer-shayo-august-2024/image9.jpg"
convert "/Users/tobi/Documents/Summer Shayo/IMG_1343.HEIC" -resize 1200x1200\> -quality 85 "public/images/events/summer-shayo-august-2024/image10.jpg"

# Create thumbnail (using the first image)
convert "/Users/tobi/Documents/Summer Shayo/10.HEIC" -resize 400x400\> -quality 85 "public/images/events/summer-shayo-august-2024/thumbnail.jpg"

echo "Summer Shayo images converted successfully!"
