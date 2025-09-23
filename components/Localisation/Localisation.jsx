import React from 'react'
import styles from './localisation.module.css'

export default function Localisation() {
  return (
    <section className={styles.localisation}>
        <h2 className={styles.h2}> Localisation</h2>
         <div style={{ width: '100%', height: '0', paddingBottom: '56%', position: 'relative' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.678993682153!2d-1.2728233843829037!3d47.18284867915421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ec3e92d20d45%3A0xe70329081d1b12e9!2s6%20Bis%20Rue%20de%20Bel%20Air%2C%2044330%20Vallet%2C%20France!5e0!3m2!1sfr!2sus!4v1695461223456!5m2!1sfr!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map - Eco toit"
            ></iframe>
        </div>
        <div className={styles.description}>
            Chez <span className={styles.span}> Éco Toit </span>, nous intervenons rapidement et efficacement
            pour tous vos travaux de toiture, zinguerie, nettoyage de façades 
            et dallages dans les départements de <strong className={styles.strong}>
            Loire-Atlantique </strong> (44), <strong className={styles.strong}>Vendée</strong> (85), <strong className={styles.strong}>Maine-et-Loire </strong> (49) 
            et <strong className={styles.strong}>Deux-Sèvres </strong> (79). <br /> Que vous soyez à <strong className={styles.strong}> Nantes, Saint-Nazaire, Clisson, 
            La Roche-sur-Yon, Angers, Cholet, Niort </strong>   
            ou dans les communes environnantes, notre équipe de couvreurs et 
            spécialistes du nettoyage de bâtiments met tout son savoir-faire à 
            votre service.
            Nous assurons des prestations sur-mesure adaptées à chaque type
            de toiture et façade, en utilisant des matériaux durables et des 
            techniques respectueuses de l’environnement. Avec <span className={styles.span}> Éco Toit </span>, 
            bénéficiez d’une intervention rapide, de qualité et d’un suivi 
            personnalisé dans l’ensemble de la région Pays de la Loire et 
            Poitou-Charentes.
        </div>
    </section>
  )
}
