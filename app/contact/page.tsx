// app/contact/page.tsx
import { Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contactez Éco Couverture | Artisan Couvreur Vallet",
  description: "Contactez Éco Couverture pour toute demande de devis toiture, nettoyage ou maçonnerie à Vallet, Nantes et Cholet.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">Contactez nos experts</h1>
          <p className="text-slate-600 font-medium text-lg">Un projet de rénovation ? Une question technique ? Nous sommes à votre écoute.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-black text-slate-950">Informations de contact</h3>
              <div className="space-y-4">
                <a href="tel:0651368373" className="flex items-center gap-4 text-slate-700 hover:text-emerald-600 transition-colors">
                  <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600"><Phone size={18} /></div>
                  <span className="font-bold text-lg">06 51 36 83 73</span>
                </a>
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-500"><MapPin size={18} /></div>
                  <span className="font-medium">Basé à Vallet, intervention dans le vignoble Nantais, Nantes et Cholet.</span>
                </div>
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-500"><Clock size={18} /></div>
                  <span className="font-medium">Réponse sous 24h ouvrées.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire unifié et lisible */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-black text-slate-950 mb-6">Demander mon devis gratuit</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 ml-1">Nom complet</label>
                <input type="text" className="w-full p-3 bg-white border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 text-sm" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 ml-1">Adresse email</label>
                <input type="email" className="w-full p-3 bg-white border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 text-sm" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 ml-1">Votre projet</label>
                <textarea rows={4} className="w-full p-3 bg-white border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 text-sm" required />
              </div>
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-wider text-sm py-4 rounded-xl transition-all shadow-lg mt-2">
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}