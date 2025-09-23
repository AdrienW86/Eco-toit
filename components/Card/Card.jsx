import Image from "next/image"
import Link from "next/link"
import styles from './card.module.css'

export default function Card({ url, title, src, alt }) {
  return (
    <>
       <Link href={url} className={styles.card}>
      <h3 className={styles.h3}>{title} → </h3>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        sizes="100vw"
        className={styles.image}
      />
    </Link>
    </>
   
  )
}
