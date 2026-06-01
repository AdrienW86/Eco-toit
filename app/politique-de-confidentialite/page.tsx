// app/politique-de-confidentialite/page.tsx
export default function PolitiqueConfidentialite() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-20 bg-white text-slate-800">
      <h1 className="text-3xl font-black text-slate-900 mb-8 border-b pb-4">
        Politique de Confidentialité
      </h1>
      
      <div className="space-y-8 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. Collecte des données</h2>
          <p>
            Lorsque vous utilisez notre formulaire de demande de devis, nous collectons les données personnelles 
            que vous nous fournissez volontairement : Nom complet, adresse e-mail, numéro de téléphone, 
            code postal, ville et description des travaux.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. Utilisation des données</h2>
          <p>
            Ces données sont exclusivement destinées à l'entreprise <strong>Éco Couverture</strong>. Elles sont utilisées 
            uniquement pour :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Étudier votre demande technique et établir un chiffrage ou devis précis.</li>
            <li>Vous recontacter par téléphone ou par e-mail afin de convenir d'un rendez-vous sur site.</li>
          </ul>
          <p className="bg-amber-50 border border-amber-200 p-3 rounded-xl text-amber-900 font-medium">
            ⚠️ <strong>Opposition à la prospection :</strong> Conformément au paragraphe 2 de l'article 21 du RGPD, 
            l'entreprise s'oppose formellement à toute réutilisation de ses propres données à des fins de prospection commerciale.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Conservation et Sécurité</h2>
          <p>
            Vos données de contact sont conservées pendant la durée nécessaire à la gestion de la relation commerciale 
            (au maximum 3 ans après le dernier contact). Nous mettons en œuvre les mesures de sécurité standard de l'industrie 
            pour protéger vos informations contre tout accès non autorisé.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">4. Vos Droits (RGPD)</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données, vous disposez d'un droit d'accès, de rectification, 
            de suppression et d&'opposition concernant vos données personnelles. Pour exercer ce droit, écrivez-nous simplement à : 
            <strong> contact@eco-couverture.fr</strong>.
          </p>
        </section>
      </div>
    </main>
  );
}