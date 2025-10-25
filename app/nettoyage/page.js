import React from 'react'
import SecondBanner from '@/components/SecondBanner/SecondBanner'
import Menu from '@/components/Menu/Menu'

export const metadata = {
  title: "Nettoyage de toiture et façades | Entretien complet - Eco Couverture",
  description: "Nettoyage complet de toiture et façades avec Eco Couverture : éliminez mousses et salissures durablement dans la Loire-Atlantique et régions voisines.",
};

export default function Page() {
  return (
    <section>
      <SecondBanner 
        url="/nettoyage2.png"
        txt="Redonnez vie à votre toiture"
      />
      <Menu 
        title="Nettoyage et démoussage de toiture"
        intro="Chez Eco Couverture, nous assurons le nettoyage et le démoussage de vos toitures à Vallet et dans tout le vignoble nantais. Nos interventions permettent de préserver l’étanchéité, la durabilité et l’esthétique de votre toiture tout en empêchant la prolifération des mousses et lichens."
        title2="Nos services de nettoyage et démoussage comprennent :"
        items={[
          "Nettoyage complet de votre toiture pour éliminer mousses, lichens et salissures.",
          "Application de traitements anti-mousse pour prévenir la réapparition.",
          "Inspection de la toiture pour détecter et réparer les zones fragilisées.",
          "Entretien régulier pour prolonger la durée de vie de votre couverture."
        ]}
        title3="Pourquoi choisir Eco Couverture ?"
        whyUs={[
          "Une équipe spécialisée et expérimentée dans le nettoyage de toitures.",
          "Des produits efficaces et respectueux de l’environnement.",
          "Un accompagnement personnalisé, du devis gratuit à la réalisation des travaux.",
          "Une intervention rapide à Vallet, Clisson, Le Loroux-Bottereau, et dans tout le secteur."
        ]}
        backgroundImage="/nettoyage3.png"
      />
    </section>
  )
}
