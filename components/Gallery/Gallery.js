'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './gallery.module.css';

export default function Gallery() {
  const images = [
    { src: '/image1.jpg', alt: 'Image 1' },
    { src: '/image2.jpg', alt: 'Image 2' },
    { src: '/image3.jpg', alt: 'Image 3' },
    { src: '/image4.jpg', alt: 'Image 4' },
    { src: '/image5.jpg', alt: 'Image 5' },
    { src: '/image6.jpg', alt: 'Image 1' },
    { src: '/image7.jpg', alt: 'Image 2' },
    { src: '/image8.jpg', alt: 'Image 3' },
    { src: '/image9.jpg', alt: 'Image 4' },
    { src: '/image10.jpg', alt: 'Image 5' },
    { src: '/image11.jpg', alt: 'Image 1' },
    { src: '/image12.jpg', alt: 'Image 2' },
    { src: '/image13.jpg', alt: 'Image 3' },
    { src: '/image14.jpg', alt: 'Image 4' },
    { src: '/image15.jpg', alt: 'Image 5' },
    { src: '/image16.jpg', alt: 'Image 1' },
    { src: '/image17.jpg', alt: 'Image 2' },
    { src: '/image18.jpg', alt: 'Image 3' },
    { src: '/image19.jpg', alt: 'Image 4' },
    { src: '/image20.jpg', alt: 'Image 5' },
    { src: '/image21.jpg', alt: 'Image 1' },
    { src: '/image22.jpg', alt: 'Image 2' },
    { src: '/image23.jpg', alt: 'Image 3' },
    { src: '/image24.jpg', alt: 'Image 4' },
    { src: '/image25.jpg', alt: 'Image 5' },
    { src: '/image26.jpg', alt: 'Image 1' },
    { src: '/image27.jpg', alt: 'Image 2' },
    { src: '/image28.jpg', alt: 'Image 3' },
    { src: '/image29.jpg', alt: 'Image 4' },
    { src: '/image30.jpg', alt: 'Image 5' },
    { src: '/image31.jpg', alt: 'Image 1' },
    { src: '/image32.jpg', alt: 'Image 2' },
    { src: '/image33.jpg', alt: 'Image 3' },
    { src: '/image34.jpg', alt: 'Image 4' },
    { src: '/image35.jpg', alt: 'Image 5' },
    { src: '/image36.jpg', alt: 'Image 1' },
    { src: '/image37.jpg', alt: 'Image 2' },
    { src: '/image38.jpg', alt: 'Image 3' },
    { src: '/image39.jpg', alt: 'Image 4' },
    { src: '/image40.jpg', alt: 'Image 5' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Ouvrir la lightbox
  const openLightbox = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsOpen(true);
  };

  // Fermer la lightbox
  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div className={styles.imageWrapper} key={index} onClick={() => openLightbox(image.src)}>
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <div className={styles.lightboxContent}>
            <img src={currentImage} alt="Lightbox" className={styles.lightboxImage} />
          </div>
        </div>
      )}
    </div>
  );
}


