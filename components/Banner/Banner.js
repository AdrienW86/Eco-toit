'use client';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import styles from './banner.module.css';

const videos = [
  '/video1.mp4',
  '/video2.mp4',
  '/video3.mp4',
  
];

export default function VideoCarousel({ fadeDuration = 1.5, clipDuration = 7 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, (clipDuration - fadeDuration) * 1000); 

    return () => clearInterval(interval);
  }, [clipDuration, fadeDuration]);

  // Forcer la lecture de la vidéo active
  useEffect(() => {
    const activeVideo = videoRefs.current[currentIndex];
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch(() => {});
    }
  }, [currentIndex]);

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0 });

  return (
    <div className={styles.carousel}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.h1}> Couverture Eco Toit </h1>
          <Image 
            className={styles.garantie}
            src='/garantie.png'
            height={120}
            width={120}
        />       
        </div>
          <p className= {styles.subtitle}> Artisan couvreur professionnel </p>
          <p className={styles.p}> Artisan spécialisé dans la couverture, <br/>
            la rénovation de toiture et la zinguerie sur toute la Loire-Atlantique, la Vendée, 
            la Maine-et-Loire et les Deux-Sèvres</p>
          <div className={styles.btnContainer}>
            <motion.a
              className={styles.btn}
              href="/contact"
              ref={ref1}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : -50 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              Devis gratuit
            </motion.a>
            <motion.a
              className={styles.btn}
              href="tel:0651368373"
              ref={ref2}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : 50 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              Appeler maintenant
            </motion.a>

          </div>
      </div>

      <div className={styles.carouselInner}>
        {videos.map((video, index) => (
          <video
            key={index}
            ref={(el) => (videoRefs.current[index] = el)}
            src={video}
            muted
            loop={false}
            playsInline
            preload="auto"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              transition: `opacity ${fadeDuration}s ease-in-out`,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '85vh',
              objectFit: 'cover',
            }}
          />
        ))}
      </div>
    </div>
  );
}
