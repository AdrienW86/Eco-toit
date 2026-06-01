// components/Footer.tsx
"use client";

import Link from "next/link";
import { Hammer, Phone, Mail, MapPin, Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Colonne 1 : Infos Entreprise */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <div className="bg-emerald-600 p-2 rounded-lg text-white">
              <Hammer size={20} />
            </div>
            <span className="text-xl font-black tracking-tight">Éco Couverture</span>
          </div>
          <p className="text-sm font-medium leading-relaxed text-slate-400">
            Artisan couvreur de confiance. Spécialiste de l'entretien, du démoussage et de la rénovation de toitures et façades.
          </p>
          <p className="text-xs font-bold text-emerald-500 uppercase tracking-wider flex items-center gap-2">
            <Shield size={14} /> Garantie Décennale
          </p>
        </div>

        {/* Colonne 2 : Liens Rapides */}
        <div className="space-y-4">
          <h3 className="text-xs uppercase tracking-widest text-slate-200 font-extrabold">
            Navigation
          </h3>
          <ul className="space-y-2.5 text-sm font-medium">
            <li>
              <a href="#services" className="hover:text-emerald-400 transition-colors">Nos Services</a>
            </li>
            <li>
              <a href="#a-propos" className="hover:text-emerald-400 transition-colors">Qui sommes-nous ?</a>
            </li>
            <li>
              <a href="#photos" className="hover:text-emerald-400 transition-colors">Réalisations</a>
            </li>
            <li>
              <a href="#devis" className="hover:text-emerald-400 transition-colors">Demander un Devis</a>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Zone d'intervention (SEO Local) */}
        <div className="space-y-4">
          <h3 className="text-xs uppercase tracking-widest text-slate-200 font-extrabold">
            Secteurs d'intervention
          </h3>
          <p className="text-sm font-medium leading-relaxed">
            Nous nous déplaçons rapidement dans les départements suivants :
          </p>
          <div className="flex flex-wrap gap-1.5">
            {["Loire-Atlantique (44)", "Maine-et-Loire (49)", "Vendée (85)", "Cholet", "Nantes"].map((zone, idx) => (
              <span key={idx} className="text-[11px] font-bold bg-slate-800 text-slate-300 px-2 py-1 rounded-md">
                {zone}
              </span>
            ))}
          </div>
        </div>

        {/* Colonne 4 : Contact Direct */}
        <div className="space-y-4">
          <h3 className="text-xs uppercase tracking-widest text-slate-200 font-extrabold">
            Contact
          </h3>
          <ul className="space-y-3 text-sm font-medium">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-emerald-500 flex-shrink-0" />
              <a href="tel:0651368373" className="hover:text-white transition-colors">06 51 36 83 73</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-emerald-500 flex-shrink-0" />
              <a href="mailto:contact@eco-toit.com" className="hover:text-white transition-colors">contact@eco-toit.com</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-emerald-500 flex-shrink-0" />
              <span>Secteur Cholet & Environs</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Barre de Copyright Basse */}
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-slate-800 text-xs font-medium flex flex-col lg:flex-row items-center justify-between gap-4 text-slate-500">
        <p>© {currentYear} Éco Couverture. Tous droits réservés.</p>
        
        {/* Liens Légaux et Crédits */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Link href="/mentions-legales" className="hover:text-slate-300 transition-colors">
              Mentions Légales
            </Link>
            <span>•</span>
            <Link href="/cgu" className="hover:text-slate-300 transition-colors">
              CGU
            </Link>
            <span>•</span>
            <Link href="/politique-de-confidentialite" className="hover:text-slate-300 transition-colors">
              Confidentialité
            </Link>
          </div>
          
          <span className="hidden sm:inline text-slate-700">|</span>
          
          <p>
            Propulsé par{" "}
            <a 
              href="https://code-v.fr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-500 font-bold hover:text-emerald-400 hover:underline transition-all"
            >
              Codev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}