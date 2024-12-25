import React from 'react';
import Heading from '../components/common/Heading';
import { GoArrowUpRight } from 'react-icons/go';
import AboutComponent from '../components/common/AboutComponent';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/Navbar';

const About: React.FC = () => {
  return (
  <>
  <NavBar/>
  <br></br>
  <AboutComponent/>
  <Footer/>
  </>
    
  )
}

export default About;
