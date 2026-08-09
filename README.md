# Lingqi Yan Academic Homepage

This repository contains both:

- the published static GitHub Pages site (`index.html`, `images/`, `fonts/`); and
- the editable vinext/TypeScript source (`app/`, `scripts/`, configuration files, and `public/`).

The public site is available at <https://lingqiyan.github.io/>.

## Continue editing on another computer

Requirements: Node.js 22.13 or newer and pnpm.

```bash
git clone https://github.com/lingqiyan/lingqiyan.github.io.git
cd lingqiyan.github.io
pnpm install
pnpm dev
```

Open <http://localhost:3000/>. The main transformation and Steam-inspired styling live in
`app/research/route.ts`.

## Publish updates

1. Open the local `/research` page and save its rendered HTML.
2. Run `scripts/export-github-pages.mjs` with that HTML file as its argument.
3. Copy the resulting `github-pages-dist/index.html` and referenced local assets to the repository root.
4. Commit and push the updated files to `main`.

GitHub Pages serves the repository root. The `.nojekyll` file must remain present.

## Preserved source material

`source-snapshot/ucsb-original.html` is a frozen copy of the UCSB homepage used as the source for the
redesign. It preserves the text and publication markup needed to rebuild the page if the UCSB server
is unavailable in the future. Existing paper, supplemental-material, and video links may still point
to the UCSB server; those large files are intentionally not mirrored here.

All images created or selected for the redesigned profile and the 2025/2026 publications are stored
locally under `public/images/` and are also present in the paths used by the published static site.
