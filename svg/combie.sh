#! /usr/bin/env bash
while read -r line
do 
    url="http://tavmjong.free.fr/INKSCAPE/MANUAL/html/$line"
    printf "\n%.0s" {1..2}
    echo $url
    printf "=%.0s" {1..56}
    printf "\n%.0s" {1..2}
    curl -s $url | node /c/kotlin/html2md/index.js
done << EOF
`sed -n '/Table of Contents/,$ { s/.*(\([^:]*\?\))/\1/p }' /c/opendocs/svg/inkscape_guide.md | grep -v '#'`
EOF

