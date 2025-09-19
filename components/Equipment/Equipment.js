import React from 'react'
import Image from 'next/image'
import styles from "./equipment.module.css"

export default function Equipment() {
  return (
    <section className={styles.container}>
      <div className={styles.column}>
        <div className={styles.box}>
                <Image
                    src="/parking.png"
                    alt="logo parking"
                    width={20}
                    height={20}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <p className={styles.txt}> Travaux de couverture </p>
            </div>
            <div className={styles.box}>
                <Image
                    src="/nettoyage.png"
                    alt="illustration nettoyage"
                    width={20}
                    height={20}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <p className={styles.txt}> Nettoyage de toiture et façades </p>
            </div>
            <div className={styles.box}>
                <Image
                    src="/pool.png"
                    alt="logo pisicne"
                    width={20}
                    height={20}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <p className={styles.txt}> Peinture de toiture isolante </p>
            </div>
        </div>
        <div className={styles.column}>
        <div className={styles.box}>
                <Image
                    src="/bar2.png"
                    alt="logo bar"
                    width={20}
                    height={20}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <p className={styles.txt}> Rénovation de façades </p>
            </div>
            <div className={styles.box}>
                <Image
                    src="/zinguerie.png"
                    alt="illustration d'une gouttière"
                    width={20}
                    height={20}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <p className={styles.txt}> Travaux de zinguerie </p>
            </div>
            <div className={styles.box}>
                <Image
                    src="/maconnerie.png"
                    alt="illustration maçonnerie"
                    width={20}
                    height={20}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <p className={styles.txt}> Petite maçonnerie </p>
            </div>
        </div>
    </section>
  )
}
