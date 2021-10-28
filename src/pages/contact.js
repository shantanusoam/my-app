import React, {useState} from 'react';
import ContactSection from '../components/ContactSection';
import MapSection from '../components/MapSection';




const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <ContactSection></ContactSection>
    <MapSection></MapSection>
    </>
      
    
  )
};

export default Contact;
