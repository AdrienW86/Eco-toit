// app/cgu/page.tsx
export default function CGU() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-20 bg-white text-slate-800">
      <h1 className="text-3xl font-black text-slate-900 mb-8 border-b pb-4">
        Conditions Générales d'Utilisation
      </h1>
      
      <div className="space-y-8 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. Objet du site</h2>
          <p>
            Le site internet <strong>Éco Couverture</strong> a pour objet de présenter les activités artisanales 
            de couverture, zinguerie, charpente ainsi que le nettoyage de façades et de toitures de l'entreprise, 
            et de permettre la soumission de demandes d'étude technique (devis).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. Demandes de Devis en ligne</h2>
          <p>
            Les informations, estimations de délais ou conseils prodigués via le site internet ou suite à l'envoi 
            du formulaire n'ont qu'une valeur indicative. Un devis n'engage fermement l'entreprise qu'après 
            visite technique obligatoire de l'artisan sur les lieux du chantier et signature finale du document papier ou numérique contractuel.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Responsabilité</h2>
          <p>
            L'éditeur s'efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu 
            responsable des omissions ou des inexactitudes dans les mises à jour. L'utilisateur navigue sur le site sous sa propre responsabilité.
          </p>
        </section>
      </div>
    </main>
  );
}