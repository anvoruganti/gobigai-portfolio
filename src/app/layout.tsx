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
  title: "goBIGai • AI Consulting & Data Systems",
  description:
    "Anirudh Voruganti runs an AI consulting firm crafting production-grade agents, data platforms, and GTM automation.",
  openGraph: {
    title: "goBIGai • AI Consulting & Data Systems",
    description:
      "AI consulting studio led by Anirudh Voruganti delivering agentic systems, RAG, and enterprise-grade data stacks.",
    url: "https://gobigai.org",
    siteName: "goBIGai",
  },
  twitter: {
    card: "summary_large_image",
    title: "goBIGai – AI Consulting",
    description:
      "AI consultant delivering agentic workflows, RAG, and production data platforms for revenue and data leaders.",
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
