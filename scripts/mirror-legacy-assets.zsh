#!/bin/zsh
set -euo pipefail

site_root=${1:-github-pages-dist}
source_base=https://sites.cs.ucsb.edu/~lingqi

assets=$(rg -o 'src="[^"]+"|href="(?:css|vendor)/[^"]+"' "$site_root/index.html" \
  | sed -E 's/^(src|href)="//; s/"$//' \
  | rg -v '^(https?:|//|/|data:)' \
  | sort -u)

for asset in "${(@f)assets}"; do
  destination="$site_root/$asset"
  mkdir -p "${destination:h}"
  if ! curl --fail --location --silent --show-error "$source_base/$asset" --output "$destination" </dev/null; then
    rm -f "$destination"
    print -u2 "Skipped unavailable legacy asset: $asset"
  fi
done
