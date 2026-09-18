"use client";

import { useState } from "react";
import {
  Send,
  Calendar,
  HardHat,
  Phone,
  Mail,
  User,
  MapPin,
} from "lucide-react";

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
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        postalCode: "",
        city: "",
        service: "",
        urgency: "normal",
        description: "",
      });
    } catch (error) {
      console.error(error);

      setError(
        "Une erreur est survenue lors de l'envoi. Vous pouvez nous contacter directement par téléphone."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-white py-20" id="devis">
      <div className="mx-auto max-w-4xl px-4">
        {/* En-tête */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-3 text-xs font-extrabold uppercase tracking-widest text-emerald-600">
            Étude Gratuite
          </h2>

          <p className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Demandez Votre Devis Gratuit sous 48h
          </p>

          <p className="mt-4 text-sm font-medium text-slate-600 sm:text-base">
            Des projets de rénovation ou un besoin d&apos;entretien urgent ?
            Remplissez ce formulaire. Notre équipe vous recontacte rapidement
            pour convenir d&apos;un rendez-vous sur site.
          </p>
        </div>

        {/* Formulaire Card */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 p-6 shadow-xl sm:p-10">
          {submitted ? (
            /* Message de succès */
            <div className="animate-fade-in space-y-4 py-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-inner">
                <Send size={28} />
              </div>

              <h3 className="text-2xl font-black text-slate-900">
                Demande bien reçue !
              </h3>

              <p className="mx-auto max-w-md font-medium text-slate-600">
                Merci pour votre confiance. Votre artisan étudie votre demande
                et vous recontacte par téléphone sous 48 heures maximum.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setError("");
                }}
                className="mt-4 cursor-pointer text-sm font-bold text-emerald-600 hover:underline"
              >
                Faire une nouvelle demande
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Étape 1 : Le besoin */}
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-slate-400">
                  <HardHat size={16} />
                  1. Votre Projet
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Prestation */}
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-700"
                    >
                      Type de prestation *
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-950 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    >
                      <option value="">
                        Sélectionnez un service...
                      </option>
                      <option value="couverture">
                        Travaux de couverture / Toiture
                      </option>
                      <option value="zinguerie">
                        Zinguerie & Gouttières
                      </option>
                      <option value="nettoyage">
                        Nettoyage & Démoussage Toiture
                      </option>
                      <option value="peinture">
                        Peinture de toiture isolante
                      </option>
                      <option value="facades">
                        Rénovation & Ravalement Façade
                      </option>
                      <option value="maconnerie">
                        Petite maçonnerie de toiture
                      </option>
                    </select>
                  </div>

                  {/* Urgence */}
                  <div>
                    <label
                      htmlFor="urgency"
                      className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-700"
                    >
                      Degré d&apos;urgence *
                    </label>

                    <select
                      id="urgency"
                      name="urgency"
                      required
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-950 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    >
                      <option value="normal">
                        Standard (Projet à moyen terme)
                      </option>
                      <option value="urgent">
                        Urgent (Infiltration / Fuite suspectée)
                      </option>
                      <option value="immediat">
                        Dès que possible / Sinistre
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Étape 2 : Coordonnées */}
              <div className="space-y-4 border-t border-slate-200/60 pt-4">
                <h3 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-slate-400">
                  <User size={16} />
                  2. Vos Coordonnées
                </h3>

                <div className="grid gap-4 sm:grid-cols-3">
                  {/* Nom */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-700"
                    >
                      Nom complet *
                    </label>

                    <div className="relative">
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="M. ou Mme..."
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm font-medium text-slate-950 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />

                      <User
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-700"
                    >
                      Téléphone *
                    </label>

                    <div className="relative">
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        autoComplete="tel"
                        placeholder="06 00 00 00 00"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm font-medium text-slate-950 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />

                      <Phone
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-700"
                    >
                      Adresse Email *
                    </label>

                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm font-medium text-slate-950 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />

                      <Mail
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Code postal */}
                  <div>
                    <label
                      htmlFor="postalCode"
                      className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-700"
                    >
                      Code Postal *
                    </label>

                    <div className="relative">
                      <input
                        id="postalCode"
                        type="text"
                        name="postalCode"
                        required
                        inputMode="numeric"
                        autoComplete="postal-code"
                        maxLength={5}
                        placeholder="Ex : 44000"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm font-medium text-slate-950 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />

                      <MapPin
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Ville */}
                  <div>
                    <label
                      htmlFor="city"
                      className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-700"
                    >
                      Ville *
                    </label>

                    <div className="relative">
                      <input
                        id="city"
                        type="text"
                        name="city"
                        required
                        autoComplete="address-level2"
                        placeholder="Ex : Nantes, Cholet..."
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm font-medium text-slate-950 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />

                      <MapPin
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Étape 3 : Description */}
              <div className="space-y-4 border-t border-slate-200/60 pt-4">
                <label
                  htmlFor="description"
                  className="block text-xs font-bold uppercase tracking-wide text-slate-700"
                >
                  Description des travaux (Optionnel)
                </label>

                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Précisez votre demande : surface estimée en m², accès au toit, type de tuiles, année de construction si connue..."
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-950 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              {/* Message d'erreur */}
              {error && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                >
                  {error}
                </div>
              )}

              {/* Bouton */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-emerald-600 px-6 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Calendar size={18} />
                    <span>Valider ma demande de devis gratuit</span>
                  </>
                )}
              </button>

              <p className="text-center text-[11px] font-medium text-slate-400">
                * En validant ce formulaire, vous acceptez que vos données
                soient utilisées pour l&apos;établissement de votre étude
                technique. Aucun démarchage abusif.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}