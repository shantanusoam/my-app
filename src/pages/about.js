import React, {useState} from 'react';

import Navbar from '../components/Navbar';

import Sidebar from '../components/Sidebar';

import FooterSection from '../components/FooterSection';
import AboutMain from '../components/AboutMain';
import QuoteAtEnd from '../components/QuoteAtEnd';
import AboutMain2 from '../components/AboutMain2';


const About = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <>
    <AboutMain></AboutMain>
    <AboutMain2></AboutMain2>
    </>
      
    
  )
};

export default About;
