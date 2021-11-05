import React from 'react';

import ProductBottom from '../components/ProductBottom';
import ProductTop from '../components/ProductTop';




const Product = () => {
  

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