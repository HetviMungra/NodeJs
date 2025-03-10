import React from 'react'
import Hero from '../components/Hero'
import LatestCollectiom from '../components/LatestCollectiom'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsSletterBox from '../components/NewsSletterBox'

export default function Home() {
  return (
    <div>
        <Hero/>
        <LatestCollectiom/>
        <BestSeller/>
        <OurPolicy/>
        <NewsSletterBox/>
    </div>
  )
}
