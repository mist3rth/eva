# FFmpeg optimization script for Eva Architecte
# This script converts the main video to optimized MP4 and WebM formats, and generates a blurred poster.

$videoSrc = "public/video-tennis.mp4"
$videoWebm = "public/video-tennis.webm"
$videoMp4Optim = "public/video-tennis-optim.mp4"
$posterWebp = "public/assets/images/tennis-club-poster.webp"

Write-Host "--- 1. Generating Optimized WebM (Best for Chrome/Firefox) ---"
# crf 30 is a good balance between quality and size for WebM
# -an removes audio for background videos
ffmpeg -i $videoSrc -c:v libvpx-vp9 -crf 30 -b:v 0 -an -vf "scale=1280:-1" $videoWebm

Write-Host "--- 2. Generating Optimized MP4 (H.264 for Safari fallback) ---"
# crf 23 is standard for h264
ffmpeg -i $videoSrc -c:v libx264 -crf 23 -profile:v baseline -level 3.0 -pix_fmt yuv420p -an -vf "scale=1280:-1" $videoMp4Optim

Write-Host "--- 3. Generating Blurred Poster (WebP) ---"
# Extract first frame, scale down, and blur
ffmpeg -i $videoSrc -frames:v 1 -vf "scale=20:-1,boxblur=10:1" -c:v libwebp -lossless 0 -q:v 75 $posterWebp

Write-Host "Optimization Complete."
