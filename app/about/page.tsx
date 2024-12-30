import React from 'react';
import AboutComponent from '../components/common/AboutComponent';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/Navbar';

const About: React.FC = () => {
  return (
  <>
  <NavBar/>

  <AboutComponent/>
  <Footer/>
  </>
    
  )
}

export default About;
