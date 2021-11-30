import { render } from '@testing-library/react';
import React from 'react';

import ProductBottom from '../components/ProductBottom';
import ProductTop from '../components/ProductTop';




export default class Products extends React.Component {
  componentDidMount() {
    document.title = "BigRig Product"
  }
  
  render(){
    console.log(this.props.location.state.id);
  return (
    <>
 <ProductTop id={this.props.location.state.id}></ProductTop>
 <ProductBottom id={this.props.location.state.id}></ProductBottom>
    </>
      
    
  )
  }
}

