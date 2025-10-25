import Banner from '@/components/Banner/Banner'
import Intro from "@/components/Intro/Intro";
import Equipment from "@/components/Equipment/Equipment";
import Localisation from '@/components/Localisation/Localisation';
import Zone from '@/components/Zone/Zone';
import Form from '@/components/Form/Form'

export const metadata = {
  title: "Eco Couverture | Travaux de toiture en Loire-Atlantique, Vendée et Deux-Sèvres",
  description: "Eco Couverture, spécialiste de la toiture en Loire-Atlantique, Vendée et Deux-Sèvres. Couverture, rénovation, nettoyage et zinguerie de qualité.",
};

export default function Home() {
  return ( 
    <>
      <Banner />
      <Intro />
      <Equipment />
      <Localisation />
      <Zone />
      <Form />
    </>                   
  );
}
