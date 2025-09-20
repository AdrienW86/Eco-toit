import React from 'react'
import Card from '../Card/Card'
import styles from './equipment.module.css'

const data = [
  {
    title: "Travaux de couverture",
    src: "/couverture.jpg",
    alt: "Illustration couverture de toit"
  },
  {
    title: "Nettoyage écologique de toiture et façades",
     src: "/facade.jpg",
    alt: "Illustration balai vapeur"
  },
  {
    title: "Peinture de toiture isolante",
    src: "/facade.jpg",
    alt: "Illustration lingettes microfibres",
    link: "/peinture-isolante"
  },
   {
    title: "Rénovation de façades",
    src: "/facade.jpg",
    alt: "Illustration rénovation de façade"
  },
  {
    title: "Travaux de zinguerie",
    src: "/zinguerie.jpg",
    alt: "Illustration balai vapeur"
  },
  {
    title: "Petite maçonnerie",
     src: "/facade.jpg",
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
          description={item.description}
          src={item.src}
          alt={item.alt}
        />
      ))}
    </section>
  )
}
