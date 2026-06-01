// app/mentions-legales/page.tsx
export default function MentionsLegales() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-20 bg-white text-slate-800">
      <h1 className="text-3xl font-black text-slate-900 mb-8 border-b pb-4">
        Mentions Légales
      </h1>
      
      <div className="space-y-8 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. Édition du site</h2>
          <p>
            Le site internet <strong>Éco Couverture</strong> est édité par l'entreprise individuelle de 
            <strong> M. Kyllian MOUCHE</strong>, immatriculée au Registre national des entreprises (RNE).
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Forme juridique :</strong> Entrepreneur individuel</li>
            <li><strong>SIREN :</strong> 847 839 669</li>
            <li><strong>SIRET (Siège) :</strong> 847 839 669 00029</li>
            <li><strong>Code APE :</strong> 8122Z - Autres activités de nettoyage des bâtiments et nettoyage industriel</li>
            <li><strong>Siège social :</strong> 6 BIS RUE de bel air, 44330 Vallet, FRANCE</li>
            <li><strong>Directeur de la publication :</strong> Kyllian MOUCHE</li>
            <li><strong>Contact :</strong> contact@eco-couverture.fr | 06 51 36 83 73</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. Hébergement</h2>
          <p>
            Le site est hébergé par la société <strong>Vercel Inc.</strong>, située au 340 S Lemon Ave #4133, 
            Walnut, CA 91789, États-Unis. site internet officiel : https://vercel.com.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site (textes, design, structure, logos) relève de la législation française et internationale 
            sur le droit d'auteur et la propriété intellectuelle. Toute reproduction ou représentation, intégrale ou partielle, 
            du site ou de l'un de ses éléments, sans l'autorisation expresse de l'éditeur, est interdite.
          </p>
        </section>
      </div>
    </main>
  );
}