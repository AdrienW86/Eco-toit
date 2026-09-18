// app/contact/page.tsx

import type { Metadata } from "next";
import { Phone, MapPin, Clock } from "lucide-react";
import QuoteForm from "@/components/Form";

export const metadata: Metadata = {
  title: "Contactez Éco Couverture | Artisan Couvreur Vallet",
  description:
    "Contactez Éco Couverture pour toute demande de devis toiture, nettoyage ou maçonnerie à Vallet, Nantes et Cholet.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Contactez nos experts
          </h1>

          <p className="text-slate-600 font-medium text-lg">
            Un projet de rénovation ? Une question technique ? Nous sommes à
            votre écoute.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-black text-slate-950">
                Informations de contact
              </h2>

              <div className="space-y-4">
                <a
                  href="tel:0651368373"
                  className="flex items-center gap-4 text-slate-700 hover:text-emerald-600 transition-colors"
                >
                  <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                    <Phone size={18} />
                  </div>

                  <span className="font-bold text-lg">06 51 36 83 73</span>
                </a>

                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-500 shrink-0">
                    <MapPin size={18} />
                  </div>

                  <span className="font-medium">
                    Basé à Vallet, intervention dans le vignoble Nantais,
                    Nantes et Cholet.
                  </span>
                </div>

                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-500 shrink-0">
                    <Clock size={18} />
                  </div>

                  <span className="font-medium">
                    Réponse sous 24h ouvrées.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <QuoteForm />
        </div>
      </div>
    </main>
  );
}