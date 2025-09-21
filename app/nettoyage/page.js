import React from 'react'
import SecondBanner from '@/components/SecondBanner/SecondBanner'
import Menu from '@/components/Menu/Menu'

export default function Page() {
  return (
    <section>
      <SecondBanner 
        url="/image12.jpg"
        txt="Confiez le nettoyage de votre toiture à des experts"
      />
      <Menu 
        title="Nettoyage de toiture"
        intro="Chez Eco Toit, nous proposons des services professionnels de nettoyage de toiture à Vallet et dans tout le vignoble nantais. Nous éliminons mousses, lichens et débris pour prolonger la durée de vie de votre toit et préserver son étanchéité."
        title2="Nos prestations de nettoyage comprennent :"
        items={[
          "Nettoyage manuel ou à haute pression pour éliminer mousses, lichens et saletés.",
          "Application de traitements hydrofuges pour protéger durablement votre toiture.",
          "Contrôle et réparation des éléments endommagés après nettoyage.",
          "Entretien régulier pour maintenir l’aspect et la performance de votre toit."
        ]}
        title3="Pourquoi choisir Eco Toit ?"
        whyUs={[
          "Une équipe expérimentée spécialisée dans le nettoyage de tous types de toitures.",
          "Des produits et techniques respectueux de l’environnement et de votre maison.",
          "Un service rapide et fiable, adapté à votre planning et vos besoins.",
          "Une intervention sécurisée pour protéger votre toiture et votre sécurité."
        ]}
      />
    </section>
  )
}
