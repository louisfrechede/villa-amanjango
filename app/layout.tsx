import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "Villa AmanJango — Villa d'exception à Seignosse, Landes",
  description:
    "Villa contemporaine de 600 m² au cœur des Landes : 7 chambres, piscine à débordement, terrasse de 400 m², à 1 km de l'océan Atlantique et du Golf de Seignosse. Hossegor à 4 km.",
  openGraph: {
    title: "Villa AmanJango — Seignosse, Landes",
    description:
      "Une villa contemporaine d'exception à Seignosse, entre forêt de pins, plages atlantiques et golfs prestigieux.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-anthracite">
        {children}
      </body>
    </html>
  );
}
