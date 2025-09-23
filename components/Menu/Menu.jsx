import React from 'react'
import Link from 'next/link'
import styles from './menu.module.css'

export default function Menu({ title, intro, title2, items, title3, whyUs, backgroundImage }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.h2}>{title}</h2>
      <p className={styles.p}>{intro}</p>

      <section
        className={styles.background}
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${backgroundImage}')` }}
      >
        <h3 className={styles.h3}>{title2}</h3>
        <ul className={styles.ul}>
          {items.map((item, idx) => (
            <li key={idx} className={styles.li}>{item}</li>
          ))}
        </ul>

        <h3 className={styles.h3}>{title3}</h3>
        <ul className={styles.ul}>
          {whyUs.map((item, idx) => (
            <li key={idx} className={styles.li}>{item}</li>
          ))}
        </ul>
      </section>

      <p className={styles.p3}>
        Avec Eco Toit, vous bénéficiez d’un savoir-faire reconnu et d’une zinguerie 
        parfaitement intégrée à votre toiture
      </p>

      <div className={styles.boxBtn}>
        <Link href="tel:0651368373" className={styles.btn2}>Nous appeler</Link>
        <Link href="/contact" className={styles.btn}>Devis gratuit</Link>
      </div>

      <p className={styles.p2}>
        Contactez-nous dès aujourd’hui pour un devis gratuit et découvrez nos offres de zinguerie 
        adaptées à vos besoins et à votre budget.
      </p>
    </section>
  )
}
