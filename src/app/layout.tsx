import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gobigai.org"),
  title: "goBIGai • Neo-Brutalist Data & AI Portfolio",
  description:
    "Anirudh Voruganti crafts neo-brutalist AI systems, data platforms, and agentic workflows for goBIGai clients.",
  openGraph: {
    title: "goBIGai • Anirudh Voruganti",
    description:
      "Portfolio of Anirudh Voruganti – Data Lumina certified consultant building agentic AI, RAG systems, and scalable data stacks.",
    url: "https://gobigai.org",
    siteName: "goBIGai",
  },
  twitter: {
    card: "summary_large_image",
    title: "goBIGai – Anirudh Voruganti",
    description:
      "Data engineer turned AI consultant delivering agentic workflows, RAG, and production data platforms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${grotesk.variable} ${jetBrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
