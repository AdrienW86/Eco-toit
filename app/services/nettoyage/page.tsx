// app/services/nettoyage/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ShieldCheck, CheckCircle2, AlertTriangle, Phone } from "lucide-react";

export const metadata = {
  title: "Nettoyage & Démoussage Toiture Façade Vallet | Éco Couverture",
  description: "Démoussage de tuiles, traitement anti-mousse et nettoyage de façade à Vallet, Cholet et Nantes. Améliorez la longévité de votre toit.",
};

export default function NettoyagePage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        
        {/* Section 1 : Hero Header avec disposition verticale centrée */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Sparkles size={12} /> Entretien Éco-Responsable
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Nettoyage, Démoussage & Hydrofuge
          </h1>
          <p className="text-slate-600 font-medium text-base sm:text-lg max-w-2xl mx-auto">
            Redonnez l'aspect du neuf à vos tuiles et crépis tout en prolongeant leur durée de vie. Un traitement professionnel complet pour éliminer les lichens et stopper la porosité.
          </p>
        </div>

        {/* Section 2 : Grande image d'illustration */}
        <div className="relative h-64 sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200">
          <Image 
            src="/nettoyage.png" 
            alt="Artisan en train de nettoyer et démousser une toiture"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Section 3 : Le danger des mousses (Bloc d'alerte vendeur pour créer le besoin) */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 grid md:grid-cols-4 gap-6 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-amber-700">
              <AlertTriangle size={28} />
            </div>
          </div>
          <div className="md:col-span-3 space-y-2 text-center md:text-left">
            <h3 className="font-black text-slate-900 text-lg">Pourquoi attendre est une erreur coûteuse ?</h3>
            <p className="text-sm font-medium text-slate-600 leading-relaxed">
              Dans notre région (Loire-Atlantique, Maine-et-Loire), l'humidité nourrit les mousses et lichens. Leurs racines s'enfoncent dans la tuile et la rendent poreuse. Dès les premières gelées d'hiver, l'eau piégée dans le matériau se dilate, provoquant des micro-fissures, des cassures et de futures infiltrations d'eau au cœur de votre charpente.
            </p>
          </div>
        </div>

        {/* Section 4 : Le protocole en 4 étapes clés (Contenu riche pour le SEO) */}
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Notre méthode d'entretien pour un résultat longue durée
            </h2>
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-wide mt-1">
              Pas de nettoyeur haute pression agressif qui détruit la couche de protection de vos tuiles.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-2">
              <div className="text-xs font-bold text-slate-400">01 / PRÉPARATION</div>
              <h4 className="font-extrabold text-slate-900 text-base">Inspection et grattage manuel</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Nous vérifions l'état global du toit et remplaçons les tuiles cassées. Nous éliminons ensuite mécaniquement les gros paquets de mousse et débris pour dégager la surface avant le traitement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-2">
              <div className="text-xs font-bold text-slate-400">02 / PULVÉRISATION</div>
              <h4 className="font-extrabold text-slate-900 text-base">Traitement fongicide et algicide</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Application d'un produit professionnel éco-responsable (sans chlore ni javel) qui détruit les racines microscopiques incrustées dans la pierre, les façades ou les tuiles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-2">
              <div className="text-xs font-bold text-slate-400">03 / NETTOYAGE</div>
              <h4 className="font-extrabold text-slate-900 text-base">Rinçage basse pression controlée</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Élimination des impuretés résiduelles et des traces de pollution sans jamais altérer les supports ou les crépis de façade. Nettoyage complet et vidage des gouttières en fin de chantier.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-2">
              <div className="text-xs font-bold text-slate-400">04 / PROTECTION</div>
              <h4 className="font-extrabold text-slate-900 text-base">Hydrofuge de surface effet perlant</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                L'étape indispensable. Nous appliquons un traitement hydrofuge incolore qui imperméabilise la surface. L'eau de pluie glisse et emporte les poussières, empêchant le retour des végétaux pendant des années.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5 : Les garanties Éco Couverture (Réassurance client) */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="text-emerald-400"><CheckCircle2 size={24} /></div>
            <h4 className="font-bold text-base">Esthétique valorisée</h4>
            <p className="text-xs text-slate-400 font-medium leading-relaxed">Une maison propre augmente immédiatement sa valeur immobilière sur le marché en cas de vente.</p>
          </div>
          <div className="space-y-2">
            <div className="text-emerald-400"><ShieldCheck size={24} /></div>
            <h4 className="font-bold text-base">Respect des matériaux</h4>
            <p className="text-xs text-slate-400 font-medium leading-relaxed">Aucun produit corrosif dangereux pour vos gouttières métalliques ou vos plantations environnantes.</p>
          </div>
          <div className="space-y-2">
            <div className="text-emerald-400"><CheckCircle2 size={24} /></div>
            <h4 className="font-bold text-base">Secteur d'intervention</h4>
            <p className="text-xs text-slate-400 font-medium leading-relaxed">Déplacements et diagnostics gratuits à Vallet, Cholet, Nantes et l'ensemble du vignoble nantais.</p>
          </div>
        </div>

        {/* Section 6 : Call to action double (Téléphone + Formulaire) */}
        <div className="border border-slate-200 bg-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-black text-slate-950 text-lg">Besoin de faire vérifier votre toiture ?</h3>
            <p className="text-xs text-slate-500 font-medium">Nous étudions la porosité de vos tuiles gratuitement et sans engagement.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a 
              href="tel:0651368373" 
              className="bg-slate-100 hover:bg-slate-200 text-slate-900 font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center flex items-center justify-center gap-2 transition-all"
            >
              <Phone size={14} /> Appeler
            </a>
            <Link 
              href="/#devis" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl text-center shadow-lg transition-all"
            >
              Obtenir mon devis gratuit
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}