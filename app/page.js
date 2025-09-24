import Banner from '@/components/Banner/Banner'
import Intro from "@/components/Intro/Intro";
import Equipment from "@/components/Equipment/Equipment";
import Localisation from '@/components/Localisation/Localisation';
import Zone from '@/components/Zone/Zone';
import Form from '@/components/Form/Form'

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
