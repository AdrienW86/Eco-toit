"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0); // pour mémoriser la position du scroll

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 🔒 Bloquer le scroll avec position: fixed
  useEffect(() => {
    if (isMenuOpen) {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      document.body.style.position = "fixed";
      document.body.style.top = `-${currentScroll}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%"; // éviter un petit shift horizontal
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY); // revenir à la position initiale
    }
    // nettoyage si le composant est démonté
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [isMenuOpen, scrollY]);

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0.0 });

  return (
    <header className={styles.header}>
      <Link href="/">
        <motion.img
          ref={ref1}
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: inView1 ? 1 : 0,
            x: inView1 ? 0 : -100,
          }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={styles.logo}
          src="/logo.png"
          alt="logo de l'entreprise"
          width={150}
          height={150}
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>   
      <div className={styles.h1_container}>
        <motion.h1 
          className={styles.h1}
          ref={ref2}  
          initial={{ opacity: 0, x: 100 }} 
          animate={{
            opacity: inView2 ? 1 : 0,
            x: inView2 ? 0 : 100,
          }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          Entreprise certifiée RGE
        </motion.h1>
      </div>
      <div className={styles.buttonBox}> 
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.open : styles.close}`} 
          onClick={handleMenuToggle} 
          aria-label="hamburger button"
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </button>
      </div>
      {isMenuOpen && 
        <section className={styles.menu}>
          <Link href="/">
            <Image
              className={styles.logo2}
              src="/logo.png"
              alt="logo de l'entreprise"
              width={200}
              height={200}
              sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </Link>   
          <ul className={styles.ul}>
            <li><Link className={styles.li} href="/" onClick={handleMenuToggle}>Accueil</Link></li>
            <li><Link className={styles.li} href="/pictures" onClick={handleMenuToggle}>Photos</Link></li>
            <li><Link className={styles.li} href="/couverture" onClick={handleMenuToggle}>Travaux de couverture</Link></li>
            <li><Link className={styles.li} href="/façades" onClick={handleMenuToggle}>Rénovation de façades</Link></li>
            <li><Link className={styles.li} href="/zinguerie" onClick={handleMenuToggle}>Zinguerie</Link></li>
            <li><Link className={styles.li} href="/maçonnerie" onClick={handleMenuToggle}>Petite maçonnerie</Link></li>
            <li><Link className={styles.li} href="/peinture" onClick={handleMenuToggle}>Peinture de toiture isolante</Link></li>
            <li><Link className={styles.li} href="/nettoyage" onClick={handleMenuToggle}>Nettoyage de toiture et façades</Link></li>
            <li><Link className={styles.li} href="/contact" onClick={handleMenuToggle}>Contact</Link></li>
          </ul>
        </section>
      }
    </header>
  )
}
