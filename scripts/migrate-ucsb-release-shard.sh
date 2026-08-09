#!/usr/bin/env bash
set -euo pipefail

manifest=${1:-migration/ucsb-assets.tsv}
shard=${2:?shard index required}
shards=${3:?shard count required}
tag=${UCSB_RELEASE_TAG:-ucsb-archive}
temp_root=$(mktemp -d)
trap 'rm -rf "$temp_root"' EXIT

existing="$temp_root/existing.txt"
gh release view "$tag" --json assets --jq '.assets[].name' > "$existing"

awk -F '\t' -v shard="$shard" -v shards="$shards" '
  $1 == "release" { if ((index++ % shards) == shard) print $2 "\t" $3 }
' "$manifest" | while IFS=$'\t' read -r url name; do
  if grep -Fqx "$name" "$existing"; then
    echo "Already archived: $name"
    continue
  fi
  destination="$temp_root/$name"
  curl --fail --location --retry 4 --retry-all-errors --connect-timeout 30 \
    --output "$destination" "$url"
  gh release upload "$tag" "$destination"
  rm -f "$destination"
done
