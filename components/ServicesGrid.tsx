// components/ServicesGrid.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Paintbrush, Hammer, Droplets, ShieldAlert, Layers, BrickWall } from "lucide-react";

const SERVICES = [
  {
    title: "Travaux de couverture",
    description: "Pose, rénovation et réparation de toitures (tuiles, ardoises, zinc). Étanchéité garantie.",
    href: "/services/couverture",
    icon: Hammer,
    image: "/couverture.jpg", // Mets tes images dans public/images/
  },
  {
    title: "Zinguerie & Gouttières",
    description: "Installation et nettoyage de gouttières, chéneaux et pliages en zinc pour l'évacuation des eaux.",
    href: "/services/zinguerie",
    icon: Layers,
    image: "/zinguerie.jpg",
  },
  {
    title: "Nettoyage Toiture & Façades",
    description: "Démoussage éco-responsable et traitement hydrofuge pour redonner l'aspect du neuf sans agresser.",
    href: "/services/nettoyage",
    icon: Droplets,
    image: "/nettoyage.png",
  },
  {
    title: "Peinture de toiture isolante",
    description: "Application de résine thermique réflectrice pour réduire la chaleur sous les combles en été.",
    href: "/services/peinture-isolante",
    icon: Paintbrush,
    image: "/peinture.png",
  },
  {
    title: "Rénovation de façades",
    description: "Nettoyage, ravalement léger et traitement des murs extérieurs pour valoriser votre patrimoine.",
    href: "/services/facades",
    icon: ShieldAlert,
    image: "/facade.jpg",
  },
  {
    title: "Petite maçonnerie",
    description: "Réparation de cheminées, solins, murets et travaux de cimenterie liés à la toiture.",
    href: "/services/petite-maconnerie",
    icon: BrickWall,
    image: "/maconnerie.png",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-emerald-600 font-extrabold mb-3">
            Notre Savoir-Faire
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Nos Prestations en Rénovation de Toiture & Habitat
          </p>
          <p className="mt-4 text-slate-600 font-medium text-base sm:text-lg">
            Découvrez nos services d&apos;artisanat durable pour protéger et entretenir votre maison de la couverture à la façade.
          </p>
        </div>

        {/* Grille des cartes avec images en background */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-slate-900 rounded-2xl h-[350px] overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-end p-6 sm:p-8"
              >
                {/* L'IMAGE DE FOND OPTIMISÉE */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-w-7xl) 33vw, 50vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay sombre de base, qui s'ajuste subtilement au survol pour révéler la photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/40 transition-opacity duration-300 group-hover:from-slate-950 group-hover:via-slate-950/70"></div>
                </div>

                {/* CONTENU DE LA CARTE (Au-dessus de l'image grâce au z-10) */}
                <div className="relative z-10 w-full">
                  
                  {/* Petite icône discrète en haut à gauche de la zone de texte */}
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-md backdrop-blur-sm bg-emerald-600/90">
                    <IconComponent size={20} />
                  </div>

                  {/* Titre */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description (hauteur max contrôlée pour éviter les chevauchements) */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 font-medium line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {service.description}
                  </p>

                  {/* Bouton d'action style "Lien" */}
                  <Link 
                    href={service.href}
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider hover:text-white transition-colors pt-3 border-t border-slate-800 w-full"
                  >
                    <span>Découvrir le service</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}