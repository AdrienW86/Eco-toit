// components/Header.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ShieldCheck, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const phoneLink = "tel:0240XXXXXX";

  // Liste de tes services spécifiques
  const services = [
    { name: "Travaux de couverture", href: "/services/couverture" },
    { name: "Zinguerie", href: "/services/zinguerie" },
    { name: "Nettoyage de toiture & façades", href: "/services/nettoyage" },
    { name: "Peinture de toiture isolante", href: "/services/peinture-isolante" },
    { name: "Rénovation de façades", href: "/services/facades" },
    { name: "Petite maçonnerie", href: "/services/petite-maconnerie" },
  ];

  // Fermer le dropdown si on clique à l'extérieur
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 shadow-md border-b border-slate-100 bg-white">
      
      {/* TOPBAR */}
      <div className="bg-[#0f172a] text-white text-xs py-2 px-4 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold tracking-wide">
            <ShieldCheck size={14} />
            <span>Artisan Couvreur — Interventions Loire-Atlantique (44) & Cholet</span>
          </div>
          <div className="text-slate-300 text-[11px] font-medium">
            Devis & Déplacement Gratuits
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="px-4 py-3 min-[1200px]:py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <div className="flex-shrink-0">
                <Image 
                src="/logo.png" // Assure-toi de placer ton fichier logo.png dans le dossier /public
                alt="Éco Couverture Logo" 
                width={48} // Équivalent à w-12 pour une hauteur/largeur harmonieuse
                height={48}
                priority // Force le chargement prioritaire (très important pour le logo dans le header)
                className="w-11 h-11 md:w-12 md:h-12 object-contain"
                />
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-slate-950 leading-none">
                ÉCO <span className="text-emerald-600">COUVERTURE</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mt-1">
                Rénovation & Toiture
                </span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden min-[1200px]:flex items-center gap-8 font-bold text-slate-900 text-sm">
            <Link href="/" className="hover:text-emerald-600 transition-colors py-2">
              Accueil
            </Link>

            {/* DROPDOWN SERVICES */}
            <div 
              className="relative py-2"
              ref={dropdownRef}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1 hover:text-emerald-600 transition-colors font-bold text-slate-900 focus:outline-none cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Nos Services
                <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? "rotate-180 text-emerald-600" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-emerald-600 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/photos" className="hover:text-emerald-600 transition-colors py-2">
              Photos
            </Link>
            <Link href="/contact" className="hover:text-emerald-600 transition-colors py-2">
              Contact
            </Link>
          </div>

          {/* Double CTA Desktop */}
          <div className="hidden min-[1200px]:flex items-center gap-3">
            <a 
              href={phoneLink} 
              className="bg-rose-600 hover:bg-rose-700 text-white font-extrabold px-4 py-2.5 rounded-xl text-sm flex items-center gap-2 transition-all shadow-md"
            >
              <Phone size={15} fill="currentColor" />
              <span>Urgence Fuite</span>
            </a>
            <Link 
              href="/contact" 
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-4 py-2.5 rounded-xl text-sm transition-all shadow-md border border-amber-400"
            >
              Devis Gratuit
            </Link>
          </div>

          {/* Burger Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="min-[1200px]:hidden p-2 text-slate-950 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MENU MOBILE */}
        {isOpen && (
          <div className="min-[1200px]:hidden mt-3 pt-3 border-t border-slate-200 flex flex-col gap-1 bg-white">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="p-3 font-bold text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
            >
              Accueil
            </Link>

            {/* ACCORDÉON SERVICES MOBILE */}
            <div className="flex flex-col">
              <div className="p-3 font-bold text-slate-900 flex justify-between items-center bg-slate-50/50 rounded-xl">
                <span>Nos Services</span>
              </div>
              <div className="pl-4 flex flex-col gap-0.5 border-l-2 border-emerald-500 my-1">
                {services.map((service, index) => (
                  <Link 
                    key={index}
                    href={service.href} 
                    onClick={() => setIsOpen(false)}
                    className="p-2.5 text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              href="/photos" 
              onClick={() => setIsOpen(false)}
              className="p-3 font-bold text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
            >
              Photos
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="p-3 font-bold text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
            >
              Contact
            </Link>
            
            {/* CTAs Mobile */}
            <div className="grid grid-cols-2 gap-3 mt-4 pt-2 border-t border-slate-100">
              <a 
                href={phoneLink} 
                className="bg-rose-600 text-white font-black p-3 rounded-xl text-center text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <Phone size={16} fill="currentColor" />
                Urgence
              </a>
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="bg-amber-500 text-slate-950 font-black p-3 rounded-xl text-center text-sm flex items-center justify-center shadow-md border border-amber-400"
              >
                Devis Gratuit
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}