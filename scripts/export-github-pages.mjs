import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const sourceHtml = process.argv[2];
if (!sourceHtml) throw new Error("Usage: node scripts/export-github-pages.mjs <rendered-html>");

const output = path.join(root, "github-pages-dist");
await mkdir(output, { recursive: true });

let html = await readFile(sourceHtml, "utf8");
html = html
  .replaceAll("http://localhost:3000/", "/")
  .replaceAll("http://127.0.0.1:3000/", "/")
  .replace('<base href="https://sites.cs.ucsb.edu/~lingqi/">', '<base href="/">')
  .replace(/src="(?![a-z]+:|\/|data:)([^"]+)"/gi, (_full, src) => {
    return `src="https://sites.cs.ucsb.edu/~lingqi/${src}"`;
  })
  .replace(/href="(?![a-z]+:|\/|#|mailto:|javascript:)([^"]+)"/gi, (full, href) => {
    return `href="https://sites.cs.ucsb.edu/~lingqi/${href}"`;
  })
  .replace("<head>", '<head><meta name="generator" content="Lingqi Yan academic homepage">');

await writeFile(path.join(output, "index.html"), html);
await writeFile(path.join(output, ".nojekyll"), "");

try {
  const manifest = await readFile(path.join(root, "migration", "ucsb-assets.tsv"), "utf8");
  const repository = "lingqiyan/lingqiyan.github.io";
  for (const line of manifest.trim().split("\n")) {
    const [kind, source, destination] = line.split("\t");
    const replacement = kind === "release"
      ? `https://github.com/${repository}/releases/download/ucsb-archive/${encodeURIComponent(destination)}`
      : kind === "repo"
        ? `/${destination}`
        : destination;
    html = html.replaceAll(source, replacement);
  }
  await writeFile(path.join(output, "index.html"), html);
} catch (error) {
  if (error?.code !== "ENOENT") throw error;
}

const localAssets = new Set(
  [...html.matchAll(/(?:src|href)="\/(?!\/)([^"?#]+)/g)].map((match) => match[1]),
);
for (const asset of localAssets) {
  const source = path.join(root, "public", asset);
  const destination = path.join(output, asset);
  await mkdir(path.dirname(destination), { recursive: true });
  await copyFile(source, destination);
}

console.log(`Exported GitHub Pages site to ${output}`);
