import React from 'react'
import SecondBanner from '@/components/SecondBanner/SecondBanner'
import Menu from '@/components/Menu/Menu'

export default function Page() {
  return (
    <section>
      <SecondBanner 
        url="/peinture.png"
        txt="Protégez et isolez votre toiture avec notre peinture isolante"
      />
      <Menu 
        title="Peinture isolante pour toiture"
        intro="Chez Eco Toit, nous appliquons des peintures isolantes sur vos toitures à Vallet et dans tout le vignoble nantais. Ce procédé permet de protéger votre toit, d’améliorer l’isolation thermique et de prolonger la durée de vie de votre couverture."
        title2="Nos services de peinture isolante comprennent :"
        items={[
          "Application de peintures isolantes adaptées à tous types de toitures.",
          "Protection contre les intempéries et les variations de température.",
          "Amélioration de l’efficacité énergétique de votre habitation.",
          "Inspection et préparation complète de la toiture avant application pour un rendu durable."
        ]}
        title3="Pourquoi choisir Eco Toit ?"
        whyUs={[
          "Une équipe spécialisée dans les toitures et les peintures isolantes.",
          "Des produits de qualité pour une isolation efficace et durable.",
          "Un accompagnement complet, du devis gratuit à la réalisation des travaux.",
          "Une intervention rapide à Vallet, Clisson, Le Loroux-Bottereau, et dans tout le secteur."
        ]}
        backgroundImage="/peinture2.png"
      />
    </section>
  )
}
