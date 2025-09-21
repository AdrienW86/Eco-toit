import Image from "next/image"
import Link from "next/link"
import styles from './card.module.css'

export default function Card(props) {
  
  return (
    <Link 
      href={props.url}
      className={styles.card}>
      <h3 className={styles.txt}>{props.title}</h3>
      <Image
        src={props.src}
        alt={props.alt}
        width={300}
        height={300}
        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
      /> 
    </Link>
  )
}
