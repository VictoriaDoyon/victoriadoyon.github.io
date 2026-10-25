import type { Metadata } from "next";
import { Inter, Geist_Mono, Cormorant_Garamond, Special_Elite, Playwrite_BR } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});

const specialElite = Special_Elite ({
  variable: "--font-special-elite",
  subsets: ["latin"],
  weight: "400"
});

const playwriteBrasil = Playwrite_BR ({
  variable: "--font-playwrite-brasil",
  fallback: ["--font-special-elite"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Victoria Doyon — AI Systems Engineer & Researcher",
  description: "Building and studying AI systems for the real world. Explore Victoria Doyon's research interests, publications, and engineering experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${cormorantGaramond.variable} ${specialElite.variable} ${playwriteBrasil.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
