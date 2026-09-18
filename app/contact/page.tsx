import type { Metadata } from "next";
import {
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import ContactForm from "@/components/Form";

export const metadata: Metadata = {
  title: "Contactez Éco Couverture | Artisan Couvreur Vallet",
  description:
    "Contactez Éco Couverture pour toute demande de devis toiture, nettoyage ou maçonnerie à Vallet, Nantes et Cholet.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 px-4 pb-32 pt-20 sm:pt-24">
        {/* Décoration */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Parlons de votre projet
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Un projet de toiture ?
            <span className="block text-emerald-400">
              Échangeons simplement.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-7 text-slate-400 sm:text-lg">
            Décrivez-nous votre besoin en quelques lignes. Nous étudions votre
            demande et revenons vers vous pour organiser la suite.
          </p>
        </div>
      </section>

      {/* CARTE PRINCIPALE */}
      <section className="relative z-10 -mt-20 px-4 pb-24">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 lg:grid-cols-[0.85fr_1.15fr]">
          
          {/* COLONNE GAUCHE */}
          <div className="relative overflow-hidden bg-emerald-700 p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-white/5" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full border-[50px] border-white/5" />

            <div className="relative">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-emerald-200">
                Éco Couverture
              </p>

              <h2 className="text-3xl font-black tracking-tight">
                Besoin d’un conseil ou d’un devis ?
              </h2>

              <p className="mt-4 max-w-md text-sm font-medium leading-6 text-emerald-50/80">
                Contactez-nous directement ou laissez-nous les informations
                concernant votre projet.
              </p>

              <div className="mt-10 space-y-7">
                <a
                  href="tel:0651368373"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white transition group-hover:bg-white group-hover:text-emerald-700">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                      Téléphone
                    </p>
                    <p className="mt-1 text-lg font-black">
                      06 51 36 83 73
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                      Zone d’intervention
                    </p>
                    <p className="mt-1 text-sm font-bold leading-6">
                      Vallet, vignoble Nantais,
                      <br />
                      Nantes et Cholet
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <Clock size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                      Délai de réponse
                    </p>
                    <p className="mt-1 text-sm font-bold">
                      Sous 24h ouvrées
                    </p>
                  </div>
                </div>
              </div>

              {/* Petit encart */}
              <div className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                <div className="flex gap-3">
                  <ShieldCheck
                    size={22}
                    className="mt-0.5 shrink-0 text-emerald-200"
                  />

                  <div>
                    <p className="text-sm font-black">
                      Votre demande reste confidentielle
                    </p>
                    <p className="mt-1 text-xs leading-5 text-emerald-50/70">
                      Vos coordonnées sont utilisées uniquement pour répondre à
                      votre demande.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-emerald-100">
                <CheckCircle2 size={15} />
                Demande de devis gratuite
              </div>
            </div>
          </div>

          {/* FORMULAIRE */}
          <ContactForm />
        </div>
      </section>
    </main>
  );
}