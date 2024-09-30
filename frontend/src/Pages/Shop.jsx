import React from 'react'
import Hero from '../Components/Hero/Hero'
import { SitePopular } from '../Components/Popular/SitePopular'
import Offers from '../Components/Offers/Offers'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <SitePopular />
        <Offers />
    </div>
  )
}

export default Shop