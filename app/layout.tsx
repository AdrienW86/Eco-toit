// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Éco Couverture | Artisan Couvreur Certifié — Cholet",
  description:
    "Rénovation de toiture, nettoyage, isolation thermique et zinguerie dans les Pyrénées-Orientales. Devis & déplacement gratuits sous 2 heures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className="scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <body
        className={`${inter.className} antialiased bg-slate-50 text-slate-900`}
      >
        <Header />

        <main className="pt-[110px] md:pt-[120px]">
          {children}
        </main>

        <Footer />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}