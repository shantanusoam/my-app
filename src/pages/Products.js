import React, {useState} from 'react';
import ContactSection from '../components/ContactSection';
import MapSection from '../components/MapSection';
import ProductBottom from '../components/ProductBottom';
import ProductTop from '../components/ProductTop';




const Products = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <>
 <ProductTop></ProductTop>
 <ProductBottom></ProductBottom>
    </>
      
    
  )
};

export default Products;