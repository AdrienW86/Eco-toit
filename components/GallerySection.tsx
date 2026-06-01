// components/GallerySection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, ChevronsLeftRight } from "lucide-react";

// Données des chantiers avec des visuels cohérents pour chaque thématique
const CHANTIERS = [
  {
    title: "Nettoyage et Démoussage Éco",
    category: "nettoyage",
    location: "Nantes (44)",
    // AVANT : Toiture ancienne recouverte de mousse et de traces sombres
    before: "/avant2.png",
    // APRÈS : Toiture en tuiles parfaitement nettoyée, propre et éclatante
    after: "/apres2.png",
    desc: "Élimination des mousses et application d'un hydrofuge éco-responsable."
  },
  {
    title: "Rénovation complète de toiture",
    category: "couverture",
    location: "Cholet (49)",
    // AVANT : Charpente brute et tuiles anciennes en cours de dépose
    before: "/couverture-avant.png",
    // APRÈS : Couverture moderne neuve et finitions impeccables
    after: "/couverture-apres.png",
    desc: "Dépose de l'ancienne couverture en tuiles et réfection complète de l'étanchéité."
  },
  {
    title: "Ravalement & Nettoyage Façade",
    category: "facades",
    location: "La Roche-sur-Yon (85)",
    // AVANT : Mur extérieur en briques/crépi ancien, poussiéreux ou fatigué
    before: "facade-avant.png",
    // APRÈS : Façade moderne, propre, lisse et lumineuse après ravalement
    after: "facade-apres.png",
    desc: "Nettoyage basse pression et traitement anti-fongique des murs extérieurs."
  }
];

// Composant interne pour gérer le curseur glissant Avant/Après
function BeforeAfterCard({ chantier }: { chantier: typeof CHANTIERS[0] }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMove = (clientX: number, currentTarget: HTMLDivElement) => {
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col h-full">
      {/* Zone interactive du comparateur visuel */}
      <div 
        className="relative h-[280px] w-full select-none cursor-ew-resize overflow-hidden"
        onMouseMove={(e) => handleMove(e.clientX, e.currentTarget)}
        onTouchMove={(e) => {
          if (e.touches[0]) handleMove(e.touches[0].clientX, e.currentTarget);
        }}
      >
        {/* Image APRÈS (En fond total) */}
        <Image
          src={chantier.after}
          alt={`Après : ${chantier.title}`}
          fill
          unoptimized
          className="object-cover pointer-events-none"
        />
        <span className="absolute bottom-3 right-3 bg-emerald-600/95 text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md z-10 backdrop-blur-sm">
          Après
        </span>

        {/* Image AVANT (Coupée dynamiquement par la position du slider) */}
        <div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={chantier.before}
            alt={`Avant : ${chantier.title}`}
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        <span className="absolute bottom-3 left-3 bg-slate-900/95 text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md z-10 backdrop-blur-sm">
          Avant
        </span>

        {/* Ligne de séparation et bouton central du curseur */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-xl"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white border-2 border-emerald-600 text-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
            <ChevronsLeftRight size={16} />
          </div>
        </div>
      </div>

      {/* Infos du Chantier */}
      <div className="p-5 flex-grow flex flex-col justify-between bg-white">
        <div>
          <div className="flex justify-between items-start gap-2 mb-2">
            <h3 className="text-lg font-bold text-slate-950 leading-snug group-hover:text-emerald-600">
              {chantier.title}
            </h3>
            <span className="text-[11px] font-extrabold text-slate-500 bg-slate-100 px-2 py-1 rounded-md flex-shrink-0">
              {chantier.location}
            </span>
          </div>
          <p className="text-slate-600 text-xs font-medium leading-relaxed">
            {chantier.desc}
          </p>
        </div>
        
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
          <Eye size={14} />
          <span>Glissez sur l&apos;image pour comparer</span>
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredChantiers = activeFilter === "all" 
    ? CHANTIERS 
    : CHANTIERS.filter(c => c.category === activeFilter);

  return (
    <section className="py-20 bg-slate-50" id="photos">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs uppercase tracking-widest text-emerald-600 font-extrabold mb-3">
            Nos Réalisations
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Découvrez Nos Chantiers Avant / Après
          </p>
          <p className="mt-4 text-slate-600 font-medium text-sm sm:text-base">
            Le savoir-faire de nos artisans en images. Utilisez le curseur central pour visualiser instantanément la qualité de nos interventions de nettoyage et de rénovation.
          </p>
        </div>

        {/* Boutons de Filtres de Catégories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "all", label: "Tous nos chantiers" },
            { id: "couverture", label: "Couverture" },
            { id: "nettoyage", label: "Nettoyage & Démoussage" },
            { id: "facades", label: "Façades" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/10"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grille Interactive */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredChantiers.map((chantier, index) => (
            <BeforeAfterCard key={index} chantier={chantier} />
          ))}
        </div>

      </div>
    </section>
  );
}