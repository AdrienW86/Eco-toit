import React from 'react'
import SecondBanner from '@/components/SecondBanner/SecondBanner'
import Menu from '@/components/Menu/Menu'

export default function Page() {
  return (
    <section>
      <SecondBanner 
        url="/image19.jpg"
        txt="Faites appel à un expert pour vos travaux de zinguerie"
      />
      <Menu 
        title="Zinguerie"
        intro="Chez Eco Toit, spécialiste de la couverture et de la zinguerie à Vallet et dans tout le vignoble nantais, nous proposons des solutions sur-mesure pour assurer la longévité et l’étanchéité de votre toiture. Nos prestations en zinguerie garantissent une protection optimale contre les infiltrations d’eau et valorisent l’esthétique de votre maison."
        title2="Nos services de zinguerie comprennent :"
        items={[
          "Pose de gouttières en zinc, aluminium ou cuivre pour un écoulement des eaux de pluie efficace.",
          "Habillage de rives et de cheminées, assurant une protection durable et élégante.",
          "Réalisation de noues et chéneaux, adaptés aux spécificités de votre toiture.",
          "Réparations et entretien pour prolonger la durée de vie de vos installations."
        ]}
        title3="Pourquoi choisir Eco Toit ?"
        whyUs={[
          "Une équipe locale de couvreurs-zingueurs qualifiés et réactifs.",
          "Des matériaux robustes et durables pour résister aux intempéries.",
          "Un accompagnement personnalisé, du devis gratuit à la réalisation des travaux.",
          "Une intervention rapide à Vallet, Clisson, Le Loroux-Bottereau, et dans tout le secteur."
        ]}
      />
    </section>
  )
}