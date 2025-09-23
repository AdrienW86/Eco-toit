import React from 'react'
import SecondBanner from '@/components/SecondBanner/SecondBanner'
import Menu from '@/components/Menu/Menu'

export default function Page() {
  return (
    <section>
      <SecondBanner 
        url="/facade.jpg"
        txt="Faites appel à un expert pour la réfection de vos façades"
      />
      <Menu 
        title="Réfection de façades"
        intro="Chez Eco Toit, nous proposons des services de réfection et d’entretien de façades à Vallet et dans tout le vignoble nantais. Nos interventions garantissent une protection durable, une esthétique soignée et une valorisation de votre patrimoine immobilier."
        title2="Nos services de réfection de façades comprennent :"
        items={[
          "Ravalement complet de façades pour protéger votre maison des intempéries.",
          "Nettoyage, réparation et traitement des fissures ou dégradations.",
          "Application de peintures et enduits adaptés pour un rendu esthétique durable.",
          "Isolation thermique par l’extérieur pour améliorer le confort et les performances énergétiques."
        ]}
        title3="Pourquoi choisir Eco Toit ?"
        whyUs={[
          "Une équipe qualifiée et expérimentée en ravalement et réfection de façades.",
          "Des matériaux et peintures de haute qualité pour durer dans le temps.",
          "Un accompagnement personnalisé, du devis gratuit à la réalisation des travaux.",
          "Une intervention rapide à Vallet, Clisson, Le Loroux-Bottereau, et dans tout le secteur."
        ]}
        backgroundImage="/facade.jpg"
      />
    </section>
  )
}
