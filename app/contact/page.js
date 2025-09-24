import React from 'react'
import Form from '@/components/Form/Form'
import Zone from '@/components/Zone/Zone'
import Map from '@/components/Map/Map'

export default function page() {
  return (
    <section style={{ marginTop: "0px" }}>
      <Form />
      <Map />
      <Zone />
    </section>
  )
}
