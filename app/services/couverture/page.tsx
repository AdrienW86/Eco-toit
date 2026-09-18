// app/services/couverture/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Home, Flame, Phone, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Travaux de Couverture & Toiture Vallet | Éco Couverture",
  description: "Rénovation de toitures, pose de tuiles et ardoises, et réparation urgente de fuites de toit à Vallet, Nantes et Cholet.",
};

export default function CouverturePage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 space-y-16">
        
        {/* Section 1 : Introduction accrocheuse */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-black text-emerald-600 uppercase tracking-widest bg-emerald-100/60 px-3 py-1 rounded-md inline-block">
            Cœur de Métier
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Rénovation & Réparation de Toitures
          </h1>
          <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed">
            Votre toit est la protection principale de votre patrimoine. Que ce soit pour le remplacement complet d'une couverture vieillissante ou pour une intervention d'urgence après une tempête, nous assurons la solidité et l'étanchéité de votre toit.
          </p>
        </div>

        {/* Section 2 : Présentation asymétrique (Image gauche / Texte droite) */}
        <div className="grid md:grid-cols-12 gap-8 items-center">
          
          {/* Image (5 colonnes) */}
          <div className="md:col-span-5 relative h-72 md:h-[380px] w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200">
            <Image 
              src="/couverture.jpg" 
              alt="Pose de tuiles sur une toiture en rénovation"
              fill
              className="object-cover"
            />
          </div>

          {/* Contenu textuel et SEO (7 colonnes) */}
          <div className="md:col-span-7 space-y-6 text-slate-600 font-medium text-sm leading-relaxed">
            <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <Home size={20} className="text-emerald-600" /> Une expertise complète sur tous types de matériaux
            </h2>
            <p>
              Chaque type de couverture possède ses propres spécificités techniques. Éco Couverture intervient à Vallet, Nantes, Cholet et dans l'ensemble du vignoble nantais pour travailler aussi bien la tuile en terre cuite traditionnelle (romane, plate, mécanique) que l'ardoise ou les plaques de fibrociment.
            </p>
            <p>
              Avant chaque projet de réfection complète, nos techniciens réalisent une vérification approfondie de l'état de votre charpente, de vos liteaux et des voliges. Cette rigueur nous permet de vous proposer une solution durable qui respecte l'architecture de notre région.
            </p>

            {/* Badges de matériaux pour enrichir le SEO sémantique */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Tuiles Terre Cuite", "Ardoises Naturelles", "Écrans sous-toiture HPV", "Isolation des combles"].map((badge, i) => (
                <span key={i} className="bg-white border border-slate-200 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Section 3 : Les prestations majeures sous forme de lignes épurées */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <h3 className="text-lg font-black text-slate-950 tracking-tight border-b pb-3">
            Nos domaines d'intervention en couverture :
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Remplacement de tuiles déplacées, cassées ou poreuses",
              "Recherche de fuite immédiate et bâchage d'urgence suite à sinistre",
              "Rénovation complète ou partielle de couvertures de toit",
              "Pose de fenêtres de toit et isolation thermique associée",
              "Installation d'écrans de sous-toiture haute performance (HPV)",
              "Remaniement complet de toitures anciennes"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100/50">
                <CheckCircle size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs font-bold text-slate-800 leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4 : Bloc d'urgence et CTA commercial */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 grid md:grid-cols-4 gap-6 items-center">
          <div className="md:col-span-3 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs uppercase tracking-wider">
              <Flame size={14} /> Fuite ou infiltration d'eau constatée ?
            </div>
            <h4 className="font-black text-xl tracking-tight">Une intervention rapide pour sécuriser votre intérieur</h4>
            <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-2xl">
              N'attendez pas que les taches d'humidité apparaissent sur vos plafonds. Nous intervenons rapidement autour de Vallet pour localiser la source de la fuite et mettre votre habitation hors d'eau sous garantie décennale.
            </p>
          </div>
          
          <div className="md:col-span-1 flex flex-col gap-2.5 w-full">
            <a 
              href="tel:0651368373" 
              className="bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl text-center flex items-center justify-center gap-2 transition-all"
            >
              <Phone size={14} /> 06 51 36 83 73
            </a>
            <Link 
              href="/#devis" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl text-center flex items-center justify-center gap-1 shadow-md transition-all"
            >
              <span>Devis Gratuit</span>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}