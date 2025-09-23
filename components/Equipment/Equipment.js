import React from 'react'
import Card from '../Card/Card'
import styles from './equipment.module.css'

const data = [
  {
    title: "Travaux de couverture",
    src: "/couverture.jpg",
    url: "/couverture",
    alt: "Illustration couverture de toit"
  },
  {
    title: "Nettoyage écologique de toiture et façades",
    src: "/nettoyage2.png",
    url: "/nettoyage",
    alt: "Illustration balai vapeur"
  },
  {
    title: "Peinture de toiture isolante",
    src: "/peinture.png",
    url: "/peinture",
    alt: "Illustration lingettes microfibres",
  },
   {
    title: "Rénovation de façades",
    src: "/facade.jpg",
    url: "/facades",
    alt: "Illustration rénovation de façade"
  },
  {
    title: "Travaux de zinguerie",
    src: "/zinguerie.jpg",
    url: "/zinguerie",
    alt: "Illustration balai vapeur"
  },
  {
    title: "Petite maçonnerie",
    src: "/maconnerie2.png",
    url: "/maconnerie",
    alt: "Illustration lingettes microfibres"
  }
]

export default function Equipment() {
  return (
    <section className={styles.container}>
      {data.map((item, index) => (
        <Card 
          key={index}
          title={item.title}
          url={item.url}
          description={item.description}
          src={item.src}
          alt={item.alt}
        />
      ))}
    </section>
  )
}
