import React from 'react'
import {WWOCArd,WWOCardContent,WWOCCHeading,WWOCCParagraph,WWOCCButton,CButton} from './QuoteAtEndElements'
import { animateScroll as scroll,Link } from 'react-scroll';
import WWO3 from '../../images/WWO2.png'
const QuoteAtEnd = ({isOpen,toggle}) => {
    return (
    
          
              <WWOCArd>
                  
                  <WWOCardContent>
                      <WWOCCHeading>ARE YOU IN UNITED STATES? WE GOT YOUR BACK</WWOCCHeading>
                      <WWOCCParagraph>Big rig Canada extended its reach to distribution warehouses located California, Texas, Indiana, North Carolina, and New Jersey</WWOCCParagraph>
                     <CButton><WWOCCButton to='/Contact'>Contact Us</WWOCCButton>
                     <WWOCCParagraph to={{ pathname: "https://kaltrailers.com" }} target="_blank">or see our portfolio</WWOCCParagraph></CButton> 
                  </WWOCardContent>
              </WWOCArd>
             
        
    )
}

export default QuoteAtEnd