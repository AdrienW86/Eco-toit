// app/services/peinture-isolante/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Paintbrush, ShieldAlert, ThermometerSun, ChevronRight, Phone } from "lucide-react";

export const metadata = {
  title: "Peinture de Toiture Rénovation Vallet | Éco Couverture",
  description: "Application de résine hydrofuge colorée et peinture isolante thermique pour tuiles à Vallet, Nantes et Cholet.",
};

export default function PeintureIsolantePage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Entête héro asymétrique */}
        <div className="grid md:grid-cols-2 gap-8 items-center border-b border-slate-100 pb-12 mb-12">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <ThermometerSun size={12} /> Protection Thermique
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Peinture de Toiture Isolante & Colorée
            </h1>
            <p className="text-slate-600 font-medium leading-relaxed">
              Une alternative économique au changement complet de vos tuiles. Notre résine hydrofuge colorée redonne de l&apos;éclat à votre toit tout en améliorant l&apos;isolation de vos combles.
            </p>
          </div>
          <div className="relative h-72 w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <Image 
              src="/peinture.png" 
              alt="Application de peinture sur tuiles de toiture"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Section 2 : Les bénéfices présentés sous forme de cartes d'icônes horizontales */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
            <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-bold">€</div>
            <h3 className="font-bold text-slate-900">Économique</h3>
            <p className="text-xs text-slate-500 font-medium">Jusqu&apos;à 70% moins cher qu&apos;une réfection complète de couverture en tuiles.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
            <Paintbrush className="text-emerald-600" size={32} />
            <h3 className="font-bold text-slate-900">Esthétique</h3>
            <p className="text-xs text-slate-500 font-medium">Rendu moderne immédiat. Grand choix de coloris (ardoise, tuile, anthracite).</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
            <ShieldAlert className="text-emerald-600" size={32} />
            <h3 className="font-bold text-slate-900">Imperméable</h3>
            <p className="text-xs text-slate-500 font-medium">Bloque la porosité de la tuile et empêche les infiltrations d&apos;eau futures.</p>
          </div>
        </div>

        {/* Section 3 : Notre Processus Unique (Timeline verticale) */}
        <div className="space-y-8 mb-16">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Le protocole d&apos;application en 3 étapes :</h2>
          
          <div className="border-l-2 border-emerald-500 pl-6 ml-4 space-y-8 relative">
            <div className="relative">
              <span className="absolute -left-[35px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow" />
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Étape 1 : Préparation & Nettoyage</h4>
              <p className="text-slate-600 text-sm font-medium mt-1">Lavage intégral basse pression pour éliminer les impuretés, mousses et anciennes pellicules de poussière. Changement des tuiles cassées.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[35px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow" />
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Étape 2 : Primaire de fixation</h4>
              <p className="text-slate-600 text-sm font-medium mt-1">Application d&apos;un fixateur de fond qui pénètre la tuile pour durcir le support et garantir l&apos;accroche de la résine colorée.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[35px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow" />
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Étape 3 : Double couche de résine hydrofuge</h4>
              <p className="text-slate-600 text-sm font-medium mt-1">Pulvérisation croisée en deux passes de la peinture acrylique technique. Protection longue durée garantie.</p>
            </div>
          </div>
        </div>

        {/* Section de bloc d'action directe (CTA bas de page) */}
        <div className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-black">Redonnez vie à vos tuiles fatiguées</h3>
            <p className="text-xs text-slate-400 font-medium mt-1">Étude de porosité et devis gratuit partout autour de Vallet.</p>
          </div>
          <Link href="/#devis" className="bg-emerald-600 hover:bg-emerald-700 font-extrabold uppercase tracking-wider text-xs py-4 px-6 rounded-xl flex items-center gap-2 transition-all">
            Faire chiffrer mon projet <ChevronRight size={14} />
          </Link>
        </div>

      </div>
    </main>
  );
}