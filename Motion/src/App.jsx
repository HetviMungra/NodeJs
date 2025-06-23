import React from 'react'
import Hero from './componentsss/Hero';
import Presenting from './componentsss/Presenting';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
// import Learning from './componentsss/Learning';
import Seminar from './componentsss/Seminar';
import Contact from './componentsss/Contact';
import Footer from './componentsss/Footer';

export default function App() {
  return (
    <div>
      <Hero/>
      <Presenting/>
      {/* <Learning/> */}
      <Seminar/>
      <Contact/>
      <Footer/>
      
      


    </div>
  )
}
