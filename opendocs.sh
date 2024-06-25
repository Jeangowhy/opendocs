#!/usr/bin/env bash
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")

doc_view="vim"
if ! [[ -z $DOC_VIEW ]]; then
    doc_view=$DOC_VIEW
fi

function opendocs()
{
    doc=`find "$basedir/" | fzf`
    if [[ $? == 0 ]]; then
        doc_jump "$doc"
    fi
}

function doc_jump()
{
    file=$1
    local fl='s/^ \+\([0-9]\+\).*/\1/p'
    local ft='/^ \+[0-9]\+\s[A-Za-z[/]/{p}'
    #  "Filter for Markdown Title"
    if [[ $file =~ ".md" ]]; then
        ft='/^ \+[0-9]\+\s#/{p}'
    fi

    local line=`nl -ba "$file" | sed -n "$ft" | fzf | sed -n "$fl"`

    if [[ -z "$line" ]]; then
        line="1"
    fi
    echo "$doc_view [$?] $file @$line"

    if [[ $? == 0 ]]; then
        if [[ "$doc_view" == "vim" ]]; then
            "$doc_view" -p "$file" +$line
        elif [[ "$doc_view" == "subl" ]]; then
            "$doc_view" "$file:$line"
        else
            echo "Unknown doc viewer [$?]: $doc_view"
        fi
    fi
}

if [[ -z $1 ]]; then
    opendocs
else
    doc_jump "$1"
fi
