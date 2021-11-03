import React, {useState} from 'react';
import ContactSection from '../components/ContactSection';
import MapSection from '../components/MapSection';
import ProductBottom from '../components/ProductBottom';
import ProductTop from '../components/ProductTop';




const Product = () => {
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
class Products extends React.Component {
  
  componentDidMount() {
    document.title = "BigRig Product"
  }
  
  render() {
    const PageComponent = this.props.component

    return (
      <Product />
    )
  }
}

export default Products;