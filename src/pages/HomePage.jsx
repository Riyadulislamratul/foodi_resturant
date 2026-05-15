import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import ChooseUs from '../components/ChooseUs'
import HowWorks from '../components/HowWorks'
import Testimonial from '../components/Testimonial'
import PartofFoodi from '../components/PartofFoodi'
import FAQ from '../components/FAQ'
import InfoBar from '../components/InfoBar'
import BalancedDiet from '../components/BalancedDiet'
import PopularFoods from '../components/PopularFoods'

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <ChooseUs />
      <HowWorks />
      <Testimonial />
      <PartofFoodi />
      <FAQ />
      <BalancedDiet />
      <InfoBar />
      <PopularFoods />
    </>
  )
}

export default HomePage