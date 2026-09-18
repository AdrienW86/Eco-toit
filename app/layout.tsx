// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Éco Couverture | Artisan Couvreur Certifié — Perpignan & 66",
  description:
    "Rénovation de toiture, nettoyage, isolation thermique et zinguerie dans les Pyrénées-Orientales. Devis & déplacement gratuits sous 2 heures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-slate-50 text-slate-900`}
      >
        <Header />

        {/* Padding top pour compenser la navbar fixed */}
        <main className="pt-[110px] md:pt-[120px]">
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}