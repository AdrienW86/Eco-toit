"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  User,
  Wrench,
  AlertTriangle,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    service: "",
    urgency: "normal",
    name: "",
    phone: "",
    email: "",
    postalCode: "",
    city: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSubmitting) return;

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

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.error || "Impossible d'envoyer votre demande."
        );
      }

      setSubmitted(true);

      setFormData({
        service: "",
        urgency: "normal",
        name: "",
        phone: "",
        email: "",
        postalCode: "",
        city: "",
        description: "",
      });
    } catch (err) {
      console.error("Erreur formulaire contact :", err);

      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue lors de l'envoi."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex min-h-[650px] flex-col items-center justify-center bg-white p-8 text-center sm:p-12">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 size={38} strokeWidth={2.5} />
        </div>

        <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
          Message envoyé
        </p>

        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
          Demande bien reçue !
        </h2>

        <p className="mt-4 max-w-md text-sm font-medium leading-6 text-slate-500">
          Merci pour votre demande. Éco Couverture reviendra vers vous dès que
          possible pour échanger sur votre projet.
        </p>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setError("");
          }}
          className="mt-8 cursor-pointer rounded-xl bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
        >
          Envoyer une nouvelle demande
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-7 sm:p-10 lg:p-12">
      {/* TITRE */}
      <div className="mb-8">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
          Demande de devis
        </p>

        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
          Parlez-nous de votre projet
        </h2>

        <p className="mt-3 text-sm font-medium leading-6 text-slate-500">
          Quelques informations nous permettront de mieux comprendre votre
          besoin et de vous recontacter rapidement.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-7">
        {/* PROJET */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <Wrench size={16} />
            </div>

            <h3 className="text-sm font-black uppercase tracking-wider text-slate-800">
              Votre projet
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* PRESTATION */}
            <div>
              <label
                htmlFor="service"
                className="mb-2 block text-sm font-extrabold text-slate-700"
              >
                Type de prestation *
              </label>

              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-950 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
              >
                <option value="">Sélectionnez un service...</option>
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

            {/* URGENCE */}
            <div>
              <label
                htmlFor="urgency"
                className="mb-2 block text-sm font-extrabold text-slate-700"
              >
                Degré d&apos;urgence *
              </label>

              <div className="relative">
                <AlertTriangle
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <select
                  id="urgency"
                  name="urgency"
                  required
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-4 pl-11 pr-4 text-sm font-medium text-slate-950 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                >
                  <option value="normal">
                    Standard — Projet à moyen terme
                  </option>
                  <option value="urgent">
                    Urgent — Infiltration / Fuite suspectée
                  </option>
                  <option value="immediat">
                    Dès que possible / Sinistre
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* SÉPARATEUR */}
        <div className="h-px bg-slate-100" />

        {/* COORDONNÉES */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <User size={16} />
            </div>

            <h3 className="text-sm font-black uppercase tracking-wider text-slate-800">
              Vos coordonnées
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* NOM */}
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-extrabold text-slate-700"
              >
                Nom complet *
              </label>

              <div className="relative">
                <User
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom et prénom"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-4 pl-11 pr-4 text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>
            </div>

            {/* TÉLÉPHONE */}
            <div>
              <label
                htmlFor="contact-phone"
                className="mb-2 block text-sm font-extrabold text-slate-700"
              >
                Téléphone *
              </label>

              <div className="relative">
                <Phone
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="06 00 00 00 00"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-4 pl-11 pr-4 text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="sm:col-span-2">
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-extrabold text-slate-700"
              >
                Adresse email *
              </label>

              <div className="relative">
                <Mail
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-4 pl-11 pr-4 text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>
            </div>

            {/* CODE POSTAL */}
            <div>
              <label
                htmlFor="contact-postal"
                className="mb-2 block text-sm font-extrabold text-slate-700"
              >
                Code postal *
              </label>

              <div className="relative">
                <MapPin
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="contact-postal"
                  name="postalCode"
                  type="text"
                  required
                  inputMode="numeric"
                  autoComplete="postal-code"
                  maxLength={5}
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Ex : 44330"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-4 pl-11 pr-4 text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>
            </div>

            {/* VILLE */}
            <div>
              <label
                htmlFor="contact-city"
                className="mb-2 block text-sm font-extrabold text-slate-700"
              >
                Ville *
              </label>

              <div className="relative">
                <MapPin
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="contact-city"
                  name="city"
                  type="text"
                  required
                  autoComplete="address-level2"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Ex : Vallet"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-4 pl-11 pr-4 text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SÉPARATEUR */}
        <div className="h-px bg-slate-100" />

        {/* DESCRIPTION */}
        <div>
          <label
            htmlFor="contact-description"
            className="mb-2 block text-sm font-extrabold text-slate-700"
          >
            Description des travaux
            <span className="ml-1 font-medium text-slate-400">
              (optionnel)
            </span>
          </label>

          <div className="relative">
            <MessageSquareText
              size={18}
              className="pointer-events-none absolute left-4 top-4 text-slate-400"
            />

            <textarea
              id="contact-description"
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              placeholder="Décrivez votre projet : travaux souhaités, état actuel de la toiture, surface approximative..."
              className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 text-sm font-medium leading-6 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
            />
          </div>
        </div>

        {/* ERREUR */}
        {error && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
          >
            {error}
          </div>
        )}

        {/* BOUTON */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="group flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-emerald-600 px-6 py-4 text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={19} className="animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              Envoyer ma demande
              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-2 text-center text-[11px] font-medium leading-5 text-slate-400">
          <CheckCircle2 size={14} className="shrink-0 text-emerald-500" />
          Vos informations sont utilisées uniquement pour répondre à votre
          demande.
        </div>
      </form>
    </div>
  );
}