import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const siteRoot = path.resolve(process.argv[2] ?? "github-pages-dist");
const sourceBase = "https://sites.cs.ucsb.edu/~lingqi/";
const html = await readFile(path.join(siteRoot, "index.html"), "utf8");
const assets = new Set();

for (const match of html.matchAll(/(?:src="([^"]+)"|href="((?:css|vendor)\/[^"]+)")/g)) {
  const asset = match[1] ?? match[2];
  if (!/^(?:https?:|\/\/|\/|data:)/.test(asset)) assets.add(asset);
}

for (const asset of assets) {
  const destination = path.join(siteRoot, asset);
  await mkdir(path.dirname(destination), { recursive: true });
  const response = await fetch(new URL(asset, sourceBase));
  if (!response.ok) {
    await rm(destination, { force: true });
    console.warn(`Skipped unavailable legacy asset: ${asset} (${response.status})`);
    continue;
  }
  await writeFile(destination, Buffer.from(await response.arrayBuffer()));
}

console.log(`Mirrored ${assets.size} legacy rendering assets.`);
