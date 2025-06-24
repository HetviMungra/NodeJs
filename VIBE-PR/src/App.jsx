import React from 'react'

import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import LatestDrops from './components/LatestDrops'
import ShopVibe from './components/ShopVibe'
import OurStory from './components/OurStory'
import CommunityHub from './components/CommunityHub'
import LimitedEdition from './components/LimitedEdition'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <LatestDrops />
      <ShopVibe />
      <OurStory />
      <CommunityHub />
      <LimitedEdition />
      <Footer/>
    </>
  )
}

export default App
