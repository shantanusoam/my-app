import React from 'react'
import {AboutContainer,CardListRow} from './PartnerCompnayElements'
import KalT from '../../images/kalTire.png';
import KalTL from '../../images/KalTrailerandLeasing.png';
import KalF from '../../images/KalFreight.png';
import { animateScroll as scroll,Link } from 'react-scroll';

const PartnerCompnay = ({isOpen,toggle}) => {
    return (
      <AboutContainer id="About">
         
        
         <CardListRow>
         <a href="https://www.kaltires.com/"><img src={KalT} alt="Kaltire website link" /></a>
         <a href="https://kaltrailers.com/" ><img src={KalTL} alt="kaltrailers website link" /></a>
         <a  href="https://kalpartz.com/" ><img src={KalF} alt="kalparts website link" /></a>
         
         
             
         </CardListRow>
         


      </AboutContainer>
      
    )
}

export default PartnerCompnay