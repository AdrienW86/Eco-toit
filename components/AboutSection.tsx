// components/AboutSection.tsx
"use client";

import Image from "next/image";
import { ShieldCheck, Leaf, HardHat, CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white" id="a-propos">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Bloc Image / Visuel (Gauche) */}
          <div className="lg:col-span-5 relative h-[450px] sm:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/image1.jpg" // À ajouter dans public/images/ (une photo d'artisan ou de chantier en cours)
              alt="Artisan Éco Couverture sur un chantier de toiture"
              fill
              sizes="(max-w-7xl) 40vw, 100vw"
              className="object-cover"
            />
            {/* Petit badge d'expérience superposé sur l'image */}
            <div className="absolute bottom-6 left-6 bg-emerald-600 text-white p-4 rounded-xl shadow-lg backdrop-blur-sm bg-emerald-600/95 flex items-center gap-3 border border-emerald-500">
              <HardHat size={28} />
              <div>
                <p className="text-xl font-black leading-none">Artisanat</p>
                <p className="text-xs font-medium text-emerald-200 mt-1">Local & Qualifié</p>
              </div>
            </div>
          </div>

          {/* Bloc Contenu Texte (Droite) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-emerald-600 font-extrabold mb-3">
                Qui sommes-nous ?
              </h2>
              <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Éco Couverture : Votre Partenaire de Confiance pour un Habitat Durable
              </p>
            </div>

            <p className="text-slate-600 font-medium leading-relaxed">
              Basée au cœur de notre région, <strong > Éco Couverture </strong> est une entreprise artisanale spécialisée dans l’entretien, la rénovation et la protection des toitures et des façades. Nous rayonnons quotidiennement sur toute la <strong>Loire-Atlantique</strong>, la <strong>Vendée</strong>, le <strong>Maine-et-Loire</strong> et le secteur de <strong>Cholet</strong> pour apporter des solutions durables aux propriétaires exigeants.
            </p>

            <p className="text-slate-600 font-medium leading-relaxed">
              Notre philosophie repose sur l'alliance parfaite entre le <strong>savoir-faire traditionnel du couvreur</strong> et l’utilisation de techniques modernes <strong>éco-responsables</strong>. Qu'il s'agisse d'un nettoyage de tuiles sans agression, de l'application d'une peinture de toiture isolante ou de travaux de zinguerie complexes, nous traitons chaque chantier avec la même rigueur.
            </p>

            {/* Grille des engagements / arguments clés */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-emerald-100 text-emerald-600 p-1.5 rounded-lg flex-shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Garantie Décennale</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Tous nos travaux de couverture et structure sont couverts pendant 10 ans.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-emerald-100 text-emerald-600 p-1.5 rounded-lg flex-shrink-0">
                  <Leaf size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Démarche Éco-Responsable</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Produits certifiés, gestion rigoureuse des déchets et solutions hydrofuges vertes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-emerald-100 text-emerald-600 p-1.5 rounded-lg flex-shrink-0">
                  <CheckCircle size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Proximité & Réactivité</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Déplacements rapides pour les diagnostics et interventions d&apos;urgence fuite.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-emerald-100 text-emerald-600 p-1.5 rounded-lg flex-shrink-0">
                  <CheckCircle size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Devis 100% Gratuit</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Étude personnalisée sur site, transparente et sans engagement sous 48h.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}