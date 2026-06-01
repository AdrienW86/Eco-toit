// app/services/realisations/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Camera, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Nos Réalisations Toiture & Façade Vallet | Éco Couverture",
  description: "Découvrez en images nos chantiers de rénovation, démoussage, zinguerie et couverture réalisés autour de Vallet, Nantes et Cholet.",
};

export default function RealisationsPage() {
  // Liste des chantiers (tu peux remplacer les URLs par tes propres images)
  const gallery = [
    { title: "Rénovation Toiture", category: "Couverture", src: "/couverture.jpg" },
    { title: "Démoussage Pro", category: "Nettoyage", src: "/nettoyage.png " },
    { title: "Peinture Isolante", category: "Rénovation", src: "/peinture.png" },
    { title: "Ravalement Façade", category: "Façade", src: "/facade.jpg" },
    
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Entête de page */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">
            <Camera size={14} /> Nos chantiers en images
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">Nos Réalisations</h1>
          <p className="text-slate-600 font-medium text-base">La preuve par l'image de notre savoir-faire artisanal.</p>
        </div>

        {/* Grille de photos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500">
              {/* Image avec zoom au survol */}
              <div className="relative h-80 w-full">
                <Image 
                  src={item.src} 
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Overlay d'information */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider">{item.category}</span>
                <h3 className="text-white font-black text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Section finale */}
        <div className="mt-20 bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl font-black text-slate-950 tracking-tight">Besoin d'un résultat similaire ?</h3>
          <p className="text-slate-600 font-medium text-sm max-w-lg mx-auto">
            Chaque chantier est unique. Contactez-nous pour une étude gratuite de votre projet. Nos experts se déplacent pour vous conseiller.
          </p>
          <Link 
            href="/#devis" 
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-wider text-xs py-4 px-8 rounded-xl transition-all shadow-lg"
          >
            Demander mon devis <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </main>
  );
}