import React from 'react'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <section className={styles.container}>
        <h2 className={styles.h2}> Service de zinguerie à Vallet et ses environs
             <br/> Eco Toit, votre couvreur expert 
        </h2>
        <p className={styles.p}>
            Chez Eco Toit, spécialiste de la couverture et de la zinguerie
            à Vallet et dans tout le vignoble nantais, nous proposons des 
            solutions sur-mesure pour assurer la longévité et l’étanchéité de 
            votre toiture.
            Nos prestations en zinguerie garantissent une protection 
            optimale contre les infiltrations d’eau et valorisent 
            l’esthétique de votre maison 
        </p>
        <section className={styles.background}>
             <h3 className={styles.h3}> Nos services de zinguerie comprennent : </h3>
            <ul className={styles.ul}>
                <li className={styles.li}> 
                    Pose de gouttières en zinc, aluminium ou cuivre pour un 
                    écoulement des eaux de pluie efficace.
                </li>
                <li className={styles.li}> 
                    Habillage de rives et de cheminées, assurant une protection 
                    durable et élégante.
                </li>
                <li className={styles.li}> 
                   Réalisation de noues et chéneaux, adaptés aux spécificités 
                   de votre toiture. 
                </li>
                <li className={styles.li}> 
                    Réparations et entretien pour prolonger la durée de vie de 
                    vos installations.
                </li>
            </ul>
        <h3 className={styles.h3}> Pourquoi choisir Eco Toit ? </h3>
             <ul className={styles.ul}>
                <li className={styles.li}>  
                    Une équipe locale de couvreurs-zingueurs qualifiés et réactifs.
                </li>
                <li className={styles.li}>  
                    Des matériaux robustes et durables pour résister aux intempéries.
                </li>
                <li>
                   Un accompagnement personnalisé, du devis gratuit à la réalisation des travaux.
                </li>
                <li className={styles.li}> 
                    Une intervention rapide à Vallet, Clisson, Le Loroux-Bottereau, et dans tout le secteur.
                </li>
            </ul>
        </section>
            <p className={styles.p3}>
                Avec Eco Toit, vous bénéficiez d’un savoir-faire reconnu et d’une zinguerie 
                parfaitement intégrée à votre toiture
            </p>
                <div className={styles.boxBtn}>
                    <button className={styles.btn2}> Nous appeler </button>
                    <button className={styles.btn}> Devis gratuit </button>
                </div>
            <p className={styles.p2}>
                Contactez-nous dès aujourd’hui pour un devis gratuit et découvrez nos offres de zinguerie 
                adaptées à vos besoins et à votre budget.
            </p>
    </section>
  )
}
