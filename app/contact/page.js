import React from 'react'
import Form from '@/components/Form/Form'
import Zone from '@/components/Zone/Zone'
import Map from '@/components/Map/Map'

export const metadata = {
  title: "Contact | Devis gratuit pour vos travaux de toiture - Eco Couverture",
  description: "Contactez Eco Couverture pour vos travaux de toiture, façade et zinguerie en Loire-Atlantique, Vendée et Deux-Sèvres. Devis gratuit et rapide.",
};

export default function page() {
  return (
    <section style={{ marginTop: "0px" }}>
      <Form />
      <Map />
      <Zone />
    </section>
  )
}
