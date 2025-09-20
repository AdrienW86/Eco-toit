"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    }
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

  // Variantes Framer Motion pour le menu et les li
  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.1 }
    },
    exit: { opacity: 0, y: "-100%" }
  };

  const liVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  const menuItems = [
    { href: "/", label: "Accueil" },
    { href: "/pictures", label: "Photos" },
    { href: "/couverture", label: "Travaux de couverture" },
    { href: "/façades", label: "Rénovation de façades" },
    { href: "/zinguerie", label: "Zinguerie" },
    { href: "/maçonnerie", label: "Petite maçonnerie" },
    { href: "/peinture", label: "Peinture de toiture isolante" },
    { href: "/nettoyage", label: "Nettoyage de toiture et façades" },
    { href: "/contact", label: "Contact" },
  ];

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

      <AnimatePresence>
        {isMenuOpen && (
          <motion.section
            className={styles.menu}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
          
            <ul className={styles.ul}>
              {menuItems.map((item, index) => (
                <motion.li key={index} variants={liVariants}>
                  <Link className={styles.li} href={item.href} onClick={handleMenuToggle}>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        )}
      </AnimatePresence>
    </header>
  );
}
