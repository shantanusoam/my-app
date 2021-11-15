import React, {useState} from 'react';
import ContactSection from '../components/ContactSection';
import DAboutSection from '../components/DAboutSection';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import QuoteAtEnd from '../components/QuoteAtEnd';

import ProvideExpertService from '../components/ProvideExpertService';
import MapSection from '../components/MapSection';
import TrailerList from '../components/TrailersList';

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Lol = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () =>{
    setIsOpen(!isOpen)
  };

  return (
    
    
    <>
     {/* <EmblaCarousel slides={slides} /> */}
  {/* <Herosection></Herosection> */}
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

class Home extends React.Component {
  
  componentDidMount() {
    document.title = "BigRig"
  }
  
  render() {
   

    return (
      <Lol />
    )
  }
}
export default Home;
