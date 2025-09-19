'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './simpleBanner.module.css';

export default function SimpleBannerVideo({ url }) {

    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0.0 });

  return (
    <div className={styles.banner}>
      <video
        className={styles.bannerVideo}
        src={url}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* <a href="tel:0650729588" className={styles.callButton}>
        📞 Réserver au 06 50 72 95 88
      </a> */}
       <div className={styles.btnContainer}>
            <motion.a 
              className={styles.btn} 
              href="/contact"
              ref={ref1}  
              initial={{ opacity: 0, x: -50 }} 
              animate={{
                opacity: inView1 ? 1 : 0,
                x: inView1 ? 0 : -50,
              }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            > 
              Réserver 
            </motion.a>
            <motion.a 
              className={styles.btn} 
              href="/pictures"
              ref={ref2}  
              initial={{ opacity: 0, x: 50 }} 
              animate={{
                opacity: inView2 ? 1 : 0,
                x: inView2 ? 0 : 50,
              }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            > 
              Voir toutes les photos 
            </motion.a>
           
        </div>
    </div>
  );
}
