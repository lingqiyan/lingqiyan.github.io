import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const repository = process.env.GITHUB_REPOSITORY ?? "lingqiyan/lingqiyan.github.io";
const releaseTag = process.env.UCSB_RELEASE_TAG ?? "ucsb-archive";
const manifestPath = process.argv[2] ?? "migration/ucsb-assets.tsv";
const files = process.argv.slice(3);

if (files.length === 0) {
  throw new Error("Usage: node scripts/rewrite-ucsb-links.mjs <manifest> <file...>");
}

const manifest = await readFile(manifestPath, "utf8");
const replacements = manifest
  .trim()
  .split("\n")
  .map((line) => line.split("\t"))
  .map(([kind, source, destination]) => [
    source,
    kind === "release"
      ? `https://github.com/${repository}/releases/download/${releaseTag}/${encodeURIComponent(destination)}`
      : kind === "repo"
        ? `/${destination}`
        : destination,
  ]);

for (const file of files) {
  const filePath = path.resolve(file);
  let contents = await readFile(filePath, "utf8");
  for (const [source, destination] of replacements) {
    contents = contents.replaceAll(source, destination);
  }
  await writeFile(filePath, contents);
}
