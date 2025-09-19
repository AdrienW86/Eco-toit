import React from 'react'
import styles from './intro.module.css'

export default function Intro() {
  return (
    <section className={styles.container}>
      <h2 className={styles.h2}> Notre expertise à votre service</h2>
        <p className={styles.intro}>
          Depuis plusieurs années, nous prenons soin de vos toits avec savoir-faire
          et professionnalisme. Que ce soit pour la pose, la rénovation ou l’entretien
          de votre toiture, nous mettons notre expertise à votre service pour garantir 
          durabilité et sécurité.
          Nous proposons une gamme complète de services :
    </p>
    </section>
  )
}
