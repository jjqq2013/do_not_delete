#!/bin/bash

in=$1
outd=$2
convert "$in" -resize 58 "$outd/AppIcon29@2x.png"
convert "$in" -resize 87 "$outd/AppIcon29@3x.png"
convert "$in" -resize 80 "$outd/AppIcon40@2x.png"
convert "$in" -resize 120 "$outd/AppIcon40@3x.png"
convert "$in" -resize 120 "$outd/AppIcon60@2x.png"
convert "$in" -resize 180 "$outd/AppIcon60@3x.png"
convert "$in" -resize 76 "$outd/AppIcon76@1x.png"
convert "$in" -resize 152 "$outd/AppIcon76@2x.png"
convert "$in" -resize 167 "$outd/AppIcon83.5@2x.png"
