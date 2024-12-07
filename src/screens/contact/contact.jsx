import React from 'react'
import Navbar from "../../Components/Navbar/Navbar";
import EmailForm from '../../Components/Contact/EmailForm';
import Footer from '../../Components/Footer/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <EmailForm />
      <Footer />
    </div>
  )
}

export default Contact