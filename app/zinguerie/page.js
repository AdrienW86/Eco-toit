import React from 'react'
import SecondBanner from '@/components/SecondBanner/SecondBanner'
import Menu from '@/components/Menu/Menu'

export default function Page() {
  return (
    <section>
      <SecondBanner 
        url= "/image19.jpg"
        txt= "Faites appel à un expert pour vos travaux de zinguerie"
      />
      <Menu />
    </section>
  )
}