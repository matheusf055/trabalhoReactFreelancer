import React from 'react'
import Navbar from "../../Components/Navbar/Navbar";
import Mission from '../../Components/Mission-value/Mission';
import Stats from '../../Components/Stats/Stats';
import Partners from '../../Components/Partners/Partners';
import Enterprise from '../../Components/Enterprise/Enterprise';
import Footer from '../../Components/Footer/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <Enterprise />
      <Stats />
      <Mission />
      <Partners />
      <Footer />
    </div>
  )
}

export default About