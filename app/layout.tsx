import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lingqi Yan: Research Homepage",
  description: "Research homepage of Lingqi Yan.",
  icons: { icon: "https://sites.cs.ucsb.edu/~lingqi/images/eye-regular.png" },
  openGraph: {
    title: "Lingqi Yan: Research Homepage",
    description: "Research homepage of Lingqi Yan.",
    type: "website",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Lingqi Yan Research Homepage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lingqi Yan: Research Homepage",
    description: "Research homepage of Lingqi Yan.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
