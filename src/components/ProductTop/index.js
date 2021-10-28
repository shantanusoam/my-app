import React from 'react'
import {AboutContainer,TextContaner ,WWOCCParagraph,WWOCCButton,CButton} from './PtoductTopElement'
import whitetruck from '../../images/ProductTop.png';
import { animateScroll as scroll,Link } from 'react-scroll';
const ProductTop = ({isOpen,toggle}) => {
    return (
      <AboutContainer id="About">
          <img src={whitetruck} alt="" />
        <TextContaner>
            <h3 className="text-left text-black font-bold text-3xl pb-8">Trailer numer #</h3>
            <p className="text-left text-gray-800 pb-8">Super fast, easy control trailer </p>
            <h1 className="text-left text-black font-bold text-5xl pb-8">$ 4.500,00 </h1>
            <h4 className="text-left text-gray-800 pb-8 text-2xl font-bold">Trailer features: </h4>
            <p className="text-left text-gray-800 pb-8">- Feature 1</p>
            <p className="text-left text-gray-800 pb-8">- Feature 2</p>
            <p className="text-left text-gray-800 pb-8">- Feature 3</p>
            <p className="text-left text-gray-800 pb-8">- Feature 4</p>
            <CButton><WWOCCButton><Link to='Footertag' smooth={true} duration={500} spy={true} exact={true} offset={-80}>Contact Us</Link></WWOCCButton><WWOCCParagraph>or see our portfolio</WWOCCParagraph></CButton> 
        </TextContaner>
        
      </AboutContainer>
      
    )
}

export default ProductTop