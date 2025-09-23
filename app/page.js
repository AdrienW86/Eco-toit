import Banner from '@/components/Banner/Banner'
import Intro from "@/components/Intro/Intro";
import Equipment from "@/components/Equipment/Equipment";
import Localisation from '@/components/Localisation/Localisation';

export default function Home() {
  return ( 
    <>
      <Banner />
      <Intro />
      <Equipment />
      <Localisation />
    </>                   
  );
}
