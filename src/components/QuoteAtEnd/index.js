import React from 'react'
import {WWOCArd,WWOCardContent,WWOCCHeading,WWOCCParagraph,WWOCCButton,CButton} from './QuoteAtEndElements'
import { animateScroll as scroll,Link } from 'react-scroll';
import WWO3 from '../../images/WWO2.png'
const QuoteAtEnd = ({isOpen,toggle}) => {
    return (
    
          
              <WWOCArd>
                  
                  <WWOCardContent>
                      <WWOCCHeading>Are you in United States? We have all what you need</WWOCCHeading>
                      <WWOCCParagraph>From multipurpose themes to niche templates,you’ll always find something that catches your eye.</WWOCCParagraph>
                     <CButton><WWOCCButton to='/Contact'>Contact Us</WWOCCButton>
                     <WWOCCParagraph to={{ pathname: "https://kaltrailers.com" }} target="_blank">or see our portfolio</WWOCCParagraph></CButton> 
                  </WWOCardContent>
              </WWOCArd>
             
        
    )
}

export default QuoteAtEnd