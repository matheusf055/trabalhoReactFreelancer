import React from 'react'
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import Hero from '../../Components/Hero/Hero';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Footer from '../../Components/Footer/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default HomePage