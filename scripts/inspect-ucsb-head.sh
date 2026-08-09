#!/bin/sh
url=$1
headers=$(curl -sSIL --max-time 30 "$url" 2>/dev/null)
code=$(printf "%s" "$headers" | awk 'toupper($1) ~ /^HTTP\// {value=$2} END {print value+0}')
length=$(printf "%s" "$headers" | awk 'tolower($1)=="content-length:" {gsub(/\r/,"",$2); value=$2} END {print value+0}')
printf "%s\t%s\t%s\n" "$code" "$length" "$url"
