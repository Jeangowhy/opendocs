#!/usr/bin/env bash
slash=${0//\\//}
root=$(realpath "${slash%/*}/shell-scripts" )
pushd "$root" >/dev/null

UPARROW=$'\x1b[A'
DOWNARROW=$'\x1b[B'
LEFTARROW=$'\x1b[D'
RIGHTARROW=$'\x1b[C'

STTYSIZE=($(stty size))
ROWS=$((${STTYSIZE[0]} - 1))
COLUMNS=${STTYSIZE[1]}
FINALWAIT=1

count=0
listbegin=0
declare -a scripts
scripts[0]="Select script file to execute (q to quit)."

while read filepath; do
    # Sub-process (subshell) will make a perference bottle neck.
    # Refs to Bash Manual 3.5.4 Command Substitution
    # file=$( echo "$filepath" | awk '{ print $1 }' )

    if [ -f "$filepath" ] && [[ "$filepath" =~ .*\.(sh|ps1|vbs|js) ]]
    then
        echo "Script file: $filepath" >/nul
        ((count+=1))
        scripts[$count]=$filepath
    elif [ -f "$filepath" ]
    then
        echo "Regulare file: $filepath" >/nul
    else 
        echo "Not a regulare file: $filepath" >/nul
    fi
done <<<$(tree -f "$(realpath .)" | sed -n "{s|.*shell-scripts|$root|gp}")

count=${#scripts[@]}

while $true
do
    if [[ $listbegin -le $[1 - ROWS] ]]
    then
        listbegin=$(($count - ROWS))
    elif [[ $listbegin -lt 0 ||  $listbegin -gt $count ]]
    then
        listbegin=0
    fi

    id=0
    for it in "${scripts[@]}"
    do
        if [[ $id -ge $listbegin && $id -lt $[$listbegin + ROWS] ]]
        then
            echo "$id. ${it##*/}"
        fi
        ((id+=1))
    done

    read -r -s -n 1 serial
    while read -r -s -n 1 -t 0.5 key
    do
        # if timeout pass $?
        if [[ $? -eq 142 ]]; then break; fi
        serial=$serial$key
    done

    if [[ $serial == "q" || -z $serial ]]
    then 
        echo "BYE"
        break; 
    else
        case "$serial" in
        UPARROW)
            ((listbegin-=ROWS))
            continue
            ;;
        DOWNARROW)
            ((listbegin+=ROWS))
            continue
            ;;
        LEFTARROW)
            ((listbegin-=ROWS))
            continue
            ;;
        RIGHTARROW)
            ((listbegin+=ROWS))
            continue
            ;;
        esac
    fi
    echo

    id=0

    if [[ $serial =~ ^[0-9]+$ ]]
    then
        ((id=$serial))
        if [[ $id -eq 0 ]]
        then
            echo "Create an new bash session."
            bash
            continue
        fi
    fi

    if [[ $id -lt 1 || $id -ge $count ]]
    then 
        echo "======================================================"
        echo "Wrong choice, retry again please [$id,  $serial]" 
    elif [[ ${scripts[$id]} =~ \.vbs$ ]]
    then
        cscript >/nul 2>&1
        if [[ 0 -ne $? ]]; then continue; fi
        echo "===================VBScript==========================="
        cscript ${scripts[$id]}
        echo "======================================================"
        sleep $FINALWAIT
    else
        echo "======================================================"
        ${scripts[$id]}
        echo "======================================================"
        sleep $FINALWAIT
    fi
done

# for it in {000..030}; do touch "test$it.sh"; done