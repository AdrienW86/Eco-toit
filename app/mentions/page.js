import React from 'react'
import styles from './mentions.module.css'

export default function MentionsLegales() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Mentions légales</h1>

      <h2 className={styles.h2}>Éditeur du site</h2>
      <p className={styles.p}>Nom de l’entreprise : Éco Toit</p>
      <p className={styles.p}>Dénomination commerciale : éco couverture</p>
      <p className={styles.p}>Dirigeant : MOUCHE KYLLIAN</p>
      <p className={styles.p}>Forme juridique : Entrepreneur individuel</p>
      <p className={styles.p}>SIREN : 847 839 669</p>
      <p className={styles.p}>Siret : 84783966900029</p>
      <p className={styles.p}>Code APE / APRM : 8122Z - Autres activités de nettoyage des bâtiments et nettoyage industriel</p>
      <p className={styles.p}>Adresse : 6 BIS RUE de bel air, 44330 Vallet, France</p>
      <p className={styles.p}>Date de début d’activité : 04/06/2025</p>
      <p className={styles.p}>Date d’immatriculation au RNE : 13/06/2025</p>
      <p className={styles.p}>Email : <a href="mailto:ecotoit44330@gmail.com" className="text-blue-600 underline">ecotoit44330@gmail.com</a></p>
      <p className={styles.p}>Téléphone : 06 51 36 83 73</p>

      <h2 className={styles.h2}>Hébergement du site</h2>
      <p className={styles.p}>Nom : Vercel</p>
      <p className={styles.p}>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>

      <h2 className={styles.h2}>Directeur de la publication</h2>
      <p className={styles.p}>MOUCHE KYLLIAN</p>

      <h2 className={styles.h2}>Politique de confidentialité</h2>
      <p className={styles.p}>Éco Toit peut collecter : nom, prénom, email, téléphone et informations nécessaires pour établir un devis ou fournir la prestation.</p>
      <p className={styles.p}>Ces données sont utilisées uniquement pour répondre aux demandes des clients et assurer le suivi des prestations.</p>
      <p className={styles.p}>Les données sont conservées de manière sécurisée et ne sont jamais transmises à des tiers sans consentement préalable.</p>
      <p className={styles.p}>Conformément au RGPD, vous pouvez accéder, rectifier ou demander la suppression de vos données en contactant <a href="mailto:ecotoit44330@gmail.com" className="text-blue-600 underline">ecotoit44330@gmail.com</a>.</p>
    </section>
  )
}
