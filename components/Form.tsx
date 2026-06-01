// components/QuoteForm.tsx
"use client";

import { useState } from "react";
import { Send, Calendar, HardHat, Phone, Mail, User, MapPin } from "lucide-react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postalCode: "",
    city: "",
    service: "",
    urgency: "normal",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi (ici tu pourras brancher ton API, Resend ou Supabase)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    // Reset du formulaire
    setFormData({ name: "", email: "", phone: "", postalCode: "", city: "", service: "", urgency: "normal", description: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 bg-white" id="devis">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* En-tête */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs uppercase tracking-widest text-emerald-600 font-extrabold mb-3">
            Étude Gratuite
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Demandez Votre Devis Gratuit sous 48h
          </p>
          <p className="mt-4 text-slate-600 font-medium text-sm sm:text-base">
            Des projets de rénovation ou un besoin d&apos;entretien urgent ? Remplissez ce formulaire. Notre équipe vous recontacte rapidement pour convenir d&apos;un rendez-vous sur site.
          </p>
        </div>

        {/* Formulaire Card */}
        <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          {submitted ? (
            /* Message de succès */
            <div className="text-center py-12 space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <Send size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Demande bien reçue !</h3>
              <p className="text-slate-600 font-medium max-w-md mx-auto">
                Merci pour votre confiance. Votre artisan étudie votre demande et vous recontacte par téléphone sous 48 heures maximum.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm font-bold text-emerald-600 hover:underline cursor-pointer"
              >
                Faire une nouvelle demande
              </button>
            </div>
          ) : (
            /* Formulaire Réel */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Étape 1 : Le Besoin */}
              <div className="space-y-4">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <HardHat size={16} /> 1. Votre Projet
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Type de prestation *</label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    >
                      <option value="">Sélectionnez un service...</option>
                      <option value="couverture">Travaux de couverture / Toiture</option>
                      <option value="zinguerie">Zinguerie & Gouttières</option>
                      <option value="nettoyage">Nettoyage & Démoussage Toiture</option>
                      <option value="peinture">Peinture de toiture isolante</option>
                      <option value="facades">Rénovation & Ravalement Façade</option>
                      <option value="maconnerie">Petite maçonnerie de toiture</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Degré d&apos;urgence *</label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    >
                      <option value="normal">Standard (Projet à moyen terme)</option>
                      <option value="urgent">Urgent (Infiltration / Fuite suspectée)</option>
                      <option value="immediat">Dès que possible / Sinistre</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Étape 2 : Coordonnées et Localisation */}
              <div className="space-y-4 pt-4 border-t border-slate-200/60">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <User size={16} /> 2. Vos Coordonnées
                </h3>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Nom complet *</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="M. ou Mme..."
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-900 text-sm font-medium focus:outline-none focus:border-emerald-500"
                      />
                      <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Téléphone *</label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="06 00 00 00 00"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-900 text-sm font-medium focus:outline-none focus:border-emerald-500"
                      />
                      <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Adresse Email *</label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-900 text-sm font-medium focus:outline-none focus:border-emerald-500"
                      />
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Code Postal *</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="postalCode"
                        required
                        maxLength={5}
                        placeholder="Ex: 44000, 49300..."
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-900 text-sm font-medium focus:outline-none focus:border-emerald-500"
                      />
                      <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Ville *</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="city"
                        required
                        placeholder="Ex: Nantes, Cholet..."
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-900 text-sm font-medium focus:outline-none focus:border-emerald-500"
                      />
                      <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Étape 3 : Détails supplémentaires */}
              <div className="space-y-4 pt-4 border-t border-slate-200/60">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Description des travaux (Optionnel)</label>
                <textarea
                  name="description"
                  rows={4}
                  placeholder="Précisez votre demande (ex: surface estimée en m², accès au toit, type de tuiles, année de construction si connue...)"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 resize-none"
                ></textarea>
              </div>

              {/* Bouton de Soumission */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold uppercase tracking-wider py-4 px-6 rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer text-sm"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Analyse et envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Calendar size={18} />
                    <span>Valider ma demande de devis gratuit</span>
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-slate-400 font-medium">
                * En validant ce formulaire, vous acceptez que vos données soient utilisées pour l&apos;établissement de votre étude technique. Aucun démarchage abusif.
              </p>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}