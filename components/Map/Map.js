'use client';

import React from 'react';
import styles from './map.module.css';

export default function GoogleMap() {
  return (
    <section className={styles.container}>
       <h2 className={styles.h2}> Localisation </h2>
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
    </section>
  );
}
