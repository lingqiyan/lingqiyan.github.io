#!/usr/bin/env bash
set -euo pipefail

manifest=${1:-migration/ucsb-assets.tsv}
shard=${2:?shard index required}
shards=${3:?shard count required}
tag=${UCSB_RELEASE_TAG:-ucsb-archive}
repo=${GITHUB_REPOSITORY:?GITHUB_REPOSITORY is required}
temp_root=$(mktemp -d)
trap 'rm -rf "$temp_root"' EXIT

existing="$temp_root/existing.txt"
gh release view "$tag" --repo "$repo" --json assets --jq '.assets[].name' > "$existing"

record_failure() {
  local stage=$1
  local name=$2
  local details=$3
  gh release edit "$tag" --repo "$repo" \
    --notes "Migration diagnostic ($stage, $name): $details" || true
}

awk -F '\t' -v shard="$shard" -v shards="$shards" '
  $1 == "release" { if ((index++ % shards) == shard) print $2 "\t" $3 }
' "$manifest" | while IFS=$'\t' read -r url name; do
  if grep -Fqx "$name" "$existing"; then
    echo "Already archived: $name"
    continue
  fi
  destination="$temp_root/$name"
  echo "Downloading: $url"
  if ! download_error=$(curl --fail --location --retry 6 --retry-all-errors --connect-timeout 30 \
    --output "$destination" "$url" 2>&1); then
    record_failure download "$name" "$download_error"
    exit 1
  fi
  echo "Uploading: $name"
  uploaded=false
  for attempt in 1 2 3 4 5; do
    if gh release upload "$tag" "$destination" --repo "$repo"; then
      uploaded=true
      break
    fi
    echo "Upload attempt $attempt failed for $name; retrying" >&2
    sleep $((attempt * 5))
  done
  if [[ "$uploaded" != true ]]; then
    record_failure upload "$name" "gh release upload failed after 5 attempts"
    echo "Failed to upload $name after 5 attempts" >&2
    exit 1
  fi
  rm -f "$destination"
done
