#!/usr/bin/env bash
pushd 'C:\dl\pl\bash\examples' >/dev/null
ls -lh "."
# tree -fh "." | sed -n 's/\xa0/ /gp'
while read line; do
    # Sub-process (subshell) will make a perference bottle neck.
    # Refs to Bash Manual 3.5.4 Command Substitution
    # file=$( echo "$line" | awk '{ print $1 }' )
    # file=`echo "$line" | awk '{ print $1 }'`
    echo "$line" | awk '{ print $1 }'
    file=$line
    if [ -f "$file" ]; then
        echo "Regulare file $file"
    else 
        echo "not a regulare file $line"
    fi
done <<<$(cat INDEX.txt | awk '{ print $1 }')
exit