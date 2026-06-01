// app/services/facades/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckSquare, ShieldCheck, Mail } from "lucide-react";

export const metadata = {
  title: "Ravalement & Nettoyage Façade Vallet | Éco Couverture",
  description: "Entretien des murs extérieurs, traitement des traces rouges et application d'enduits de ravalement autour de Vallet et Cholet.",
};

export default function FacadesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Bannière de tête de page */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-12 relative overflow-hidden grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-4 z-10">
            <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest bg-emerald-950 px-3 py-1 rounded-md">Entretien Murs Extérieurs</span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-none">Ravalement & Nettoyage de Façade</h1>
            <p className="text-slate-300 font-medium text-sm sm:text-base">Protégez votre habitation contre les agressions climatiques et éliminez définitivement les vilaines traces rouges et noires sur vos enduits.</p>
          </div>
          <div className="lg:col-span-2 relative h-56 lg:h-64 w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/facade.jpg" alt="Façade de maison propre et rénovée" fill className="object-cover" />
          </div>
        </div>

        {/* Section Technique : Les Pathologies traitées */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2"><Sparkles className="text-emerald-600" size={20} /> Vos murs extérieurs sont-ils sains ?</h2>
            <p className="text-sm font-medium text-slate-600 leading-relaxed">
              La façade est le premier rempart de protection de votre intérieur. L&apos;apparition d&apos;algues rouges ou de mousses retient l&apos;humidité sur le mur, ce qui peut engendrer des micro-fissures à cause des variations thermiques et dégrader votre isolation globale.
            </p>
            <p className="text-sm font-medium text-slate-600 leading-relaxed">
              Notre équipe diagnostique l&apos;origine de l&apos;encrassement pour proposer le bon traitement (curatif ou rénovation de surface).
            </p>
          </div>

          <div className="bg-white border p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-lg font-black text-slate-900">Nos interventions sur vos façades :</h3>
            <div className="grid gap-3">
              {["Nettoyage doux pour éliminer traces de pollution et lichens", "Application d'anti-mousse et anti-fongique sur crépis", "Traitement imperméabilisant hydrofuge transparent", "Peinture de ravalement D2 ou D3 pour un changement de look"].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <CheckSquare size={16} className="text-emerald-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bloc d'assurance locale */}
        <div className="border border-slate-200 bg-white p-6 sm:p-8 rounded-2xl text-center max-w-2xl mx-auto space-y-4 shadow-sm">
          <ShieldCheck size={40} className="text-emerald-600 mx-auto" />
          <h3 className="text-lg font-black text-slate-950">Garantie & Sérénité</h3>
          <p className="text-xs font-medium text-slate-600 leading-relaxed max-w-md mx-auto">Toutes nos interventions lourdes de rénovation de façade sont couvertes par notre garantie décennale. Nous n&apos;utilisons aucun produit javellisé agressif pour vos végétaux.</p>
          <div className="pt-2">
            <Link href="/#devis" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold uppercase tracking-wider text-[11px] py-3.5 px-6 rounded-xl transition-all">
              <Mail size={14} /> Demander une inspection gratuite de mes murs
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}