import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import React from "react";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-serif",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://salvatorebottiglieri.com"),
  title: {
    default: "Salvatore Bottiglieri, Software AI Engineer",
    template: "%s | Salvatore Bottiglieri",
  },
  description:
    "Agent infrastructure, runtimes, orchestration, tool boundaries, and evaluation. Two years shipping agents in production.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      it: "/it",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["it_IT"],
    siteName: "Salvatore Bottiglieri",
    title: "Salvatore Bottiglieri, Software AI Engineer",
    description:
      "Agent infrastructure, runtimes, orchestration, tool boundaries, and evaluation.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexSerif.variable} ${plexMono.variable}`}
    >
      <body className="bg-[#EEF1F0] font-plex-sans text-[#1B1F1E] antialiased">
        {children}
      </body>
    </html>
  );
}
