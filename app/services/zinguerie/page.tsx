// app/services/zinguerie/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Droplet, Shield, Phone, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Travaux de Zinguerie & Gouttières Vallet | Éco Couverture",
  description: "Pose de gouttières en zinc et alu, étanchéité de cheminée et réparation de descentes de toit à Vallet, Cholet et Nantes par Éco Couverture.",
};

export default function ZingueriePage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* En-tête de page moderne avec fond discret */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl mb-12 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
              <Droplet size={14} /> Étanchéité Métallique
            </span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
              Zinguerie et Évacuation des Eaux Pluviales
            </h1>
            <p className="text-slate-300 font-medium text-sm sm:text-base leading-relaxed">
              La zinguerie est l'élément clé pour assurer l'étanchéité totale de votre habitation. Nous concevons, posons et réparons tous vos systèmes d'évacuation d'eau pour protéger vos murs extérieurs et vos fondations.
            </p>
          </div>
          <div className="md:col-span-1 relative h-48 md:h-full min-h-[200px] w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <Image 
              src="/zinguerie.jpg"
              alt="Pose et finitions de zinguerie sur le toit"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Section technique : L'importance d'une bonne zinguerie */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <div className="space-y-4 text-slate-600 font-medium text-sm leading-relaxed">
            <h2 className="text-xl font-black text-slate-900 tracking-tight">
              Protéger votre façade contre les infiltrations
            </h2>
            <p>
              Des gouttières percées, obstruées ou mal dimensionnées provoquent inévitablement des débordements. À terme, l'eau de pluie ruisselle sur vos crépis, favorisant l'apparition de traces rouges, de mousses, et créant parfois des infiltrations d'eau directes dans vos murs intérieurs.
            </p>
            <p>
              L'entreprise Éco Couverture intervient sur tout le secteur de Vallet, Nantes et Cholet pour diagnostiquer l'état de vos évacuations. Nous maîtrisons la pose traditionnelle en zinc avec soudures à l'étain, ainsi que les installations modernes en aluminium.
            </p>
          </div>

          {/* Liste des compétences sous forme de bloc visuel distinct */}
          <div className="bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-2xl shadow-sm">
            <h3 className="font-extrabold text-slate-950 text-base mb-4 tracking-tight">
              Nos prestations sur ce poste :
            </h3>
            <div className="space-y-3.5">
              {[
                "Pose et remplacement de gouttières (zinc, cuivre, alu)",
                "Installation de descentes d'eaux pluviales et collecteurs",
                "Étanchéité périphérique de cheminée et fenêtres de toit",
                "Pose de noues, chéneaux et couloirs d'évacuation",
                "Habillage de bandeaux et planches de rives"
              ].map((travail, index) => (
                <div key={index} className="flex items-start gap-3 text-xs font-semibold text-slate-700">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-1.5 flex-shrink-0" />
                  <span>{travail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bannière de réassurance locale et action */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="bg-white p-3 rounded-xl border shadow-sm text-emerald-600 hidden sm:block">
              <Shield size={24} />
            </div>
            <div>
              <h4 className="font-black text-slate-950 text-sm">Intervention rapide après sinistre</h4>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Une fuite sur une gouttière ? Nous nous déplaçons rapidement pour réparer.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a 
              href="tel:0651368373" 
              className="bg-white hover:bg-slate-100 text-slate-900 border font-extrabold text-xs uppercase tracking-wider py-3.5 px-5 rounded-xl text-center flex items-center justify-center gap-2 transition-all"
            >
              <Phone size={14} /> 06 51 36 83 73
            </a>
            <Link 
              href="/#devis" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-5 rounded-xl text-center flex items-center justify-center gap-1 shadow-md shadow-emerald-600/10 transition-all"
            >
              <span>Demander un devis</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}