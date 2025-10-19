#!/usr/bin/bash

echo "Press a key to see its keycode: "
while read -s -N1
do
    hexadecimal=$(echo -en $REPLY | xxd | awk '{$1=""; print $0}')
    echo -e "\rPress a key: $hexadecimal"
done
