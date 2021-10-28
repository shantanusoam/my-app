import React, {useState} from 'react'
import {HeroContainer, HeroH1,WWOCArd,WWOCardimage, HeroP, HeroContent, HeroBg,HeroPromoContainer,HeroPromo,WWOCardContent,CardHeading,CardPara,SocialMediaActions,HomeContactContent,Info,callinfo} from './HeroElements'
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
const HeroSection = () => {
  const [hover, setHover]= useState(false)
  const onHover = () => {
    setHover(!hover )
  }
    return (
        <HeroContainer id="Home">
          <HeroBg></HeroBg>
         <HeroContent>
           {/* <HeroH1>KAL TIRES</HeroH1> */}
           <HeroP>BEST
TRAILERS
IN CANADA</HeroP>
           <WWOCArd>
                  {/* <WWOCardimage>
                  <img src="https://www.sttc.com/wp-content/uploads/2019/02/HUB_6936-1024x547.jpg" alt="" height="250px" />
                  </WWOCardimage> */}
                  
                  
                      <CardHeading>High-Quality Trailers for you</CardHeading>
                      <CardPara>Our furniture is made from selected and best quality materials that are suitable for your dream home</CardPara>
                      {/* <WWOCCButton>See More</WWOCCButton> */}
                 
              </WWOCArd>
         </HeroContent>
          <HeroPromoContainer>
            <HeroPromo><SocialMediaActions><FiPhoneCall></FiPhoneCall></SocialMediaActions><HomeContactContent><Info>(604) 864 3100</Info><callinfo>call</callinfo></HomeContactContent></HeroPromo>
            <HeroPromo><SocialMediaActions><AiOutlineMail></AiOutlineMail></SocialMediaActions><HomeContactContent><Info>trailers@bigrigcanada</Info><callinfo>Email</callinfo></HomeContactContent></HeroPromo>
            <HeroPromo><SocialMediaActions><GoLocation></GoLocation></SocialMediaActions><HomeContactContent><Info>Canada</Info><callinfo>Location</callinfo></HomeContactContent></HeroPromo>
            
          </HeroPromoContainer>
    
                
           
        
          
        </HeroContainer>
    )
}

export default HeroSection
 