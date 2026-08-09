import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lingqi Yan: Research Homepage",
  description: "Research homepage of Lingqi Yan, presented in a compact Steam-inspired interface.",
};

export default function Home() {
  return (
    <main className="site-shell">
      <iframe
        className="research-page"
        src="/research?v=20260809-publication-author-links-images"
        title="Lingqi Yan: Research Homepage"
      />
    </main>
  );
}
