import Image from "next/image";
import Banner from '@/components/Banner/Banner'
import Intro from "@/components/Intro/Intro";
import Equipment from "@/components/Equipment/Equipment";
import styles from './page.module.css'

export default function Home() {
  return ( 
    <>
      <Banner />
      <Intro />
      <Equipment />
    </>                   
  );
}
