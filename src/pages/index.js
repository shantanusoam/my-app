import React, {useState} from 'react';
import ContactSection from '../components/ContactSection';
import DAboutSection from '../components/DAboutSection';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import QuoteAtEnd from '../components/QuoteAtEnd';
import Sidebar from '../components/Sidebar';
import TestimonialSection from '../components/TestimonialSection';
import UAboutSection from '../components/UAboutSection';
import WCUSection from '../components/WCUSection';
import WWOSection from '../components/WWOSection';
import FooterSection from '../components/FooterSection';
import ProvideExpertService from '../components/ProvideExpertService';
import MapSection from '../components/MapSection';
import TrailerList from '../components/TrailersList';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <>
  
    <HeroSection></HeroSection>
    {/* <UAboutSection></UAboutSection> */}
    <DAboutSection></DAboutSection>
    <ProvideExpertService></ProvideExpertService>
    {/* <TestimonialSection></TestimonialSection> */}
    {/* <WWOSection></WWOSection> */}
    {/* <WCUSection></WCUSection> */}
    <QuoteAtEnd></QuoteAtEnd>
    <TrailerList></TrailerList>
    <ContactSection></ContactSection>
    <MapSection></MapSection>
    

    </>
      
    
  )
};

export default Home;
