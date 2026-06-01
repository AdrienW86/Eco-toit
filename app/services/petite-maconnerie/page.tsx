// app/services/petite-maconnerie/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Hammer, ShieldCheck, Construction, AlertCircle, Phone, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Petite Maçonnerie de Toiture Vallet | Éco Couverture",
  description: "Réfection de faîtages maçonnés, scellement de tuiles de rive, solins de cheminée et réparations de toiture à Vallet, Cholet et Nantes.",
};

export default function PetiteMaconneriePage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 space-y-16">
        
        {/* Section 1 : Titre et accroche commerciale */}
        <div className="border-l-4 border-emerald-600 pl-6 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-emerald-600 text-xs font-black uppercase tracking-widest">
            <Construction size={14} /> Solidité Structurelle
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Petite Maçonnerie de Toiture & Réparations
          </h1>
          <p className="text-slate-600 font-medium text-base max-w-3xl leading-relaxed">
            Le renfort au mortier traditionnel pour bloquer les éléments instables de votre toit. Nous consolidons les points stratégiques de votre couverture pour garantir la sécurité et l'étanchéité de votre bâtiment.
          </p>
        </div>

        {/* Section 2 : Grille d'expertises avec mise en page asymétrique */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Bloc texte technique & SEO (3 colonnes) */}
          <div className="lg:col-span-3 space-y-6 text-slate-600 font-medium text-sm leading-relaxed">
            <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <Hammer size={20} className="text-emerald-600" /> Consolider avant la prochaine tempête
            </h2>
            <p>
              La maçonnerie de toiture concerne toutes les pièces de finition et de jonction fixées à l'aide de mortier. Avec les années, les assauts du vent, le gel et les écarts de température finissent par fissurer les joints en ciment. Les tuiles se désolidarisent, créant un double risque immédiat : des voies d'eau massives lors des pluies et la chute dangereuse d'éléments lourds.
            </p>
            <p>
              L'entreprise Éco Couverture réalise tous les travaux de scellement nécessaires sur vos toits à Vallet, Nantes, Cholet et dans les communes limitrophes. Nous utilisons des mortiers techniques enrichis en résine, spécifiquement formulés pour l'extérieur, offrant une flexibilité face aux variations thermiques et une étanchéité absolue.
            </p>

            {/* Bloc Warning de vente */}
            <div className="bg-rose-50 border border-rose-100 p-5 rounded-2xl flex items-start gap-4">
              <AlertCircle className="text-rose-600 flex-shrink-0 mt-0.5" size={20} />
              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-950 text-xs uppercase tracking-wide">Un point de vigilance crucial</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Un faîtage ou une rive fissurée permet à l'eau de s'infiltrer directement sous la couverture. Les plaques de plâtre de vos plafonds et vos isolants professionnels se gorgent d'eau bien avant que la fuite ne soit visible dans vos pièces de vie.
                </p>
              </div>
            </div>
          </div>

          {/* Grille de fiches prestations visuelles (2 colonnes) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-56 w-full rounded-2xl overflow-hidden shadow-md">
              <Image 
                src="/maconnerie.png" 
                alt="Travaux de rénovation et maçonnerie sur une toiture"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4 shadow-xl">
              <h3 className="font-black text-sm uppercase tracking-wide text-emerald-400">Nos interventions ciblées :</h3>
              <ul className="space-y-3 text-xs font-semibold text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Réfection intégrale ou réparation de faîtages maçonnés</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Scellement et cimentage des tuiles de rives latérales</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Réparation des enduits fissurés sur souches de cheminée</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Réalisation de solins traditionnels et joints d'étanchéité</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Section 3 : Zone de conversion épurée en bas de page */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="bg-white p-3 rounded-xl border shadow-sm text-emerald-600 hidden sm:block">
              <ShieldCheck size={26} />
            </div>
            <div className="space-y-0.5">
              <h4 className="font-black text-slate-950 text-sm">Tranquillité garantie pendant 10 ans</h4>
              <p className="text-xs text-slate-500 font-medium">Nos interventions de maçonnerie sont couvertes par notre assurance décennale.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a 
              href="tel:0651368373" 
              className="bg-white hover:bg-slate-100 text-slate-900 border font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center flex items-center justify-center gap-2 transition-all"
            >
              <Phone size={14} /> 06 51 36 83 73
            </a>
            <Link 
              href="/#devis" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <span>Demander un examen gratuit</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}