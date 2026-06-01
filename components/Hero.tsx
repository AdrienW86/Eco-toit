// components/HeroVideoCarousel.tsx
"use client";

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Phone, ShieldCheck, Leaf, HardHat } from "lucide-react";

const videos = [
  '/video1.mp4',
  '/video2.mp4',
  '/video3.mp4',
];

export default function HeroVideoCarousel({ fadeDuration = 1.5, clipDuration = 7 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, (clipDuration - fadeDuration) * 1000); 

    return () => clearInterval(interval);
  }, [clipDuration, fadeDuration]);

  useEffect(() => {
    const activeVideo = videoRefs.current[currentIndex];
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch(() => {});
    }
  }, [currentIndex]);

  const { ref: btnRef1, inView: btnInView1 } = useInView({ triggerOnce: false, threshold: 0 });
  const { ref: btnRef2, inView: btnInView2 } = useInView({ triggerOnce: false, threshold: 0 });

  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden bg-slate-950 flex items-center justify-center">
      
      {/* CONTENEUR TEXTE ET CARTE DE RÉASSURANCE */}
      <div className="relative z-20 w-[90%] max-w-[700px] bg-slate-950/70 border border-slate-800 backdrop-blur-md rounded-2xl p-6 sm:p-10 text-white shadow-2xl flex flex-col justify-between gap-6 mx-4">
        
        {/* En-tête avec Titre et Macaron Garantie Décennale */}
        <div className="relative flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
              ÉCO <span className="text-emerald-400">COUVERTURE</span>
            </h1>
            <p className="text-emerald-400 font-extrabold text-sm sm:text-base tracking-wide uppercase mt-1 flex items-center gap-1.5">
              <Leaf size={16} className="animate-pulse" />
              Artisan Couvreur Éco-Responsable
            </p>
          </div>
          
          {/* Badge Garantie Décennale repositionné proprement */}
          <div className="absolute -top-12 -right-8 sm:-right-12 bg-amber-500 text-slate-950 font-black px-3 py-2 rounded-xl text-xs shadow-lg shadow-amber-500/20 flex flex-col items-center justify-center border border-amber-400 rotate-6 transform hover:rotate-0 transition-transform duration-300">
            <ShieldCheck size={20} />
            <span className="text-[10px] uppercase tracking-tighter mt-0.5">Garantie</span>
            <span className="text-sm font-black leading-none">10 ANS</span>
          </div>
        </div>

        {/* Description & Piliers */}
        <div className="space-y-4">
          <p className="text-sm sm:text-base font-medium text-slate-200 leading-relaxed">
            Spécialiste de proximité dans la <span className="text-white font-bold underline decoration-emerald-400">couverture</span>, la <span className="text-white font-bold underline decoration-emerald-400">rénovation de toiture</span> et la <span className="text-white font-bold underline decoration-emerald-400">zinguerie</span>. Nous intervenons rapidement pour protéger durablement votre habitat.
          </p>
          
          {/* Rappel discret des secteurs d'activité */}
          <p className="text-xs text-slate-400 font-semibold tracking-wide uppercase bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/60">
            📍 Secteurs : Loire-Atlantique (44), Vendée (85), Maine-et-Loire (49) & Deux-Sèvres (79)
          </p>
        </div>

        {/* Boutons d'Action (CTAs) */}
        <div className="flex flex-col sm:flex-row gap-4 w-full mt-2">
          <motion.a
            href="/contact"
            ref={btnRef1}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: btnInView1 ? 1 : 0, x: btnInView1 ? 0 : -30 }}
            transition={{ duration: 0.4 }}
            className="w-full sm:w-1/2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black h-14 rounded-xl flex items-center justify-center text-base shadow-lg shadow-amber-500/10 border border-amber-400 transition-all hover:scale-[1.03]"
          >
            Demander un devis gratuit
          </motion.a>

          <motion.a
            href="tel:0651368373"
            ref={btnRef2}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: btnInView2 ? 1 : 0, x: btnInView2 ? 0 : 30 }}
            transition={{ duration: 0.4 }}
            className="w-full sm:w-1/2 bg-rose-600 hover:bg-rose-700 text-white font-extrabold h-14 rounded-xl flex items-center justify-center gap-2 text-base shadow-lg shadow-rose-600/20 transition-all hover:scale-[1.03]"
          >
            <Phone size={18} fill="currentColor" />
            <span>Appeler : 06 51 36 83 73</span>
          </motion.a>
        </div>

      </div>

      {/* BACKGROUND : CARROUSEL DE VIDÉOS AVEC FADE TRANSITION */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {videos.map((video, index) => (
          <video
            key={index}
            ref={(el) => { videoRefs.current[index] = el; }}
            src={video}
            muted
            loop={false}
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity pointer-events-none"
            style={{
              opacity: index === currentIndex ? 0.35 : 0, // Opacité réduite à 0.35 pour un rendu sombre ultra-pro
              transition: `opacity ${fadeDuration}s ease-in-out`,
            }}
          />
        ))}
        {/* Voile sombre pour lier le tout et s'assurer que le texte ressort parfaitement */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>
      </div>

    </section>
  );
}