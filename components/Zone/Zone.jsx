import React from 'react'
import styles from './zone.module.css'

export default function Zone() {
  return (
    <section className={styles.container}>
        <h2 className={styles.h2}>  Zone d'intervention </h2>
            <div className={styles.intervention}>            
                <p className={styles.p}>
                    Nous intervenons rapidement et efficacement dans toute la région
                    Pays de la Loire et Poitou-Charentes :</p>
                <table border="1" cellPadding="10" cellSpacing="0">
                    <thead>
                    <tr>
                        <th className={styles.th}>Département</th>
                        <th className={styles.th}>Villes principales desservies</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={styles.region}>Loire-Atlantique (44)</td>
                        <td className={styles.td}>Nantes, Saint-Nazaire, Clisson, Saint-Herblain, Rezé, Châteaubriant, Ancenis, Pornic, Saint-Sébastien-sur-Loire, Vertou, La Baule-Escoublac, Guérande, Savenay, Pontchâteau, Orvault, Carquefou, Vallet </td>
                    </tr>
                    <tr>
                        <td className={styles.region}>Vendée (85)</td>
                        <td className={styles.td}>La Roche-sur-Yon, Les Sables-d’Olonne, Challans, Fontenay-le-Comte, Montaigu, Pouzauges, Saint-Gilles-Croix-de-Vie, Luçon, Herbiers, Chantonnay, Talmont-Saint-Hilaire, Mareuil-sur-Lay-Dissais</td>
                    </tr>
                    <tr>
                        <td className={styles.region}>Maine-et-Loire (49)</td>
                        <td className={styles.td}>Angers, Cholet, Saumur, Segré, Beaupréau, Chemillé, Doué-en-Anjou, Baugé-en-Anjou, Les Ponts-de-Cé, Trélazé, Avrillé, Chalonnes-sur-Loire</td>
                    </tr>
                    <tr>
                        <td className={styles.region}>Deux-Sèvres (79)</td>
                        <td className={styles.td}>Niort, Parthenay, Bressuire, Thouars, Cerizay, Airvault, La Mothe-Saint-Héray, Saint-Maixent-l’École, Frontenay-Rohan-Rohan, Coulonges-sur-l’Autize</td>
                    </tr>
                    </tbody>
                </table>
            </div>
     </section>
  )
}