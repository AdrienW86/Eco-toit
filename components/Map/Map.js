'use client';

import React from 'react';
import styles from './map.module.css';

export default function GoogleMap() {
  const address = {
    name: "Château de Projan",
    email: "chateaudeprojandirection@gmail.com",
    phone: "05 62 09 46 21",
    fullAddress: "500 route du Château, 32400 Projan France",
  };

  return (
    <div className={styles.mapWrapper}>
       <div className={styles.addressDetails}>
        <h2 className={styles.name}>{address.name}</h2>
        <p className={styles.span}>
          <strong 
          >Adresse :</strong> {address.fullAddress}
        </p>
        <p className={styles.span}>
          <strong>Téléphone :</strong> {address.phone}
        </p>
        <p className={styles.span}>
          <strong>Email :</strong> {address.email}
        </p>
      </div>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2889.5988680735036!2d-0.2383792876035123!3d43.59407097098454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m5!1s0xd5613cc5dad8d9f%3A0xadb3f4be53519209!2s500%20Rte%20du%20Ch%C3%A2teau%2C%2032400%20Projan!3m2!1d43.594071!2d-0.23579899999999998!4m0!5e0!3m2!1sfr!2sfr!4v1738106059993!5m2!1sfr!2sfr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
     
    </div>
  );
}
