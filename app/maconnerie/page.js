import React from 'react'
import SecondBanner from '@/components/SecondBanner/SecondBanner'
import Menu from '@/components/Menu/Menu'

export default function Page() {
  return (
    <section>
      <SecondBanner 
        url="/maconnerie2.png"
        txt="Faites appel à un expert pour vos travaux de petite maçonnerie"
      />
      <Menu 
        title="Petite maçonnerie"
        intro="Chez Eco Toit, nous réalisons tous vos travaux de petite maçonnerie à Vallet et dans tout le vignoble nantais. Nos interventions garantissent solidité, esthétisme et durabilité pour vos constructions et aménagements extérieurs."
        title2="Nos services de petite maçonnerie comprennent :"
        items={[
          "Construction et rénovation de murets, bordures et escaliers extérieurs.",
          "Réparation et consolidation de petits murs et structures endommagées.",
          "Pose de dallages, terrasses et cheminements en pierre ou béton.",
          "Travaux d’aménagements extérieurs sur-mesure pour votre jardin ou cour."
        ]}
        title3="Pourquoi choisir Eco Toit ?"
        whyUs={[
          "Une équipe expérimentée en travaux de petite maçonnerie.",
          "Des matériaux durables et adaptés à chaque projet.",
          "Un accompagnement complet, du devis gratuit à la réalisation des travaux.",
          "Une intervention rapide à Vallet, Clisson, Le Loroux-Bottereau, et dans tout le secteur."
        ]}
        backgroundImage="/maconnerie3.png"
      />
    </section>
  )
}
