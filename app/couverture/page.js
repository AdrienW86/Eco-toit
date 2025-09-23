import React from 'react'
import SecondBanner from '@/components/SecondBanner/SecondBanner'
import Menu from '@/components/Menu/Menu'

export default function Page() {
  return (
    <section>
      <SecondBanner 
        url="/image18.jpg"
        txt="Faites appel à un expert pour vos travaux de couverture"
      />
      <Menu 
        title="Couverture de toiture"
        intro="Chez Eco Toit, spécialiste de la couverture à Vallet et dans tout le vignoble nantais, nous proposons des solutions sur-mesure pour protéger et embellir votre toiture. Nos prestations garantissent étanchéité, durabilité et valorisation esthétique de votre habitation."
        title2="Nos services de couverture comprennent :"
        items={[
          "Pose et rénovation de tuiles, ardoises et autres matériaux adaptés à votre toiture.",
          "Réparation de fuites et traitement des infiltrations pour protéger votre maison.",
          "Installation et remplacement de toitures complètes avec matériaux de qualité.",
          "Entretien et inspection régulière pour prolonger la durée de vie de votre toiture."
        ]}
        title3="Pourquoi choisir Eco Toit ?"
        whyUs={[
          "Une équipe locale de couvreurs qualifiés et expérimentés.",
          "Des matériaux robustes et durables pour résister aux intempéries.",
          "Un accompagnement personnalisé, du devis gratuit à la réalisation des travaux.",
          "Une intervention rapide à Vallet, Clisson, Le Loroux-Bottereau, et dans tout le secteur."
        ]}
        backgroundImage="/couverture.jpg"
      />
    </section>
  )
}
