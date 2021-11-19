import React, { useState } from "react";
import {
  HeroContainer,
  WWOCCButtonM,
  PCENTER,
  HeroP,
  HeroContent,
  WWOCCButton,

  HeroPromoContainer,
  HeroPromo,
 
  SocialMediaActions,
  HomeContactContent,
  Info,
  Callinfo,
} from "./HeroElements";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { animateScroll as scroll, Link } from "react-scroll";

import EmblaCarousel from "./EmblaCarousel";
const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());
const HeroSection = () => {
  function sendEmail() 
{
    window.location.assign("mailto:trailers@bigrigcanada.com?subject=Your Query&body=Description");
}
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (

    <HeroContainer id="Home">
      
      {/* <HeroBg>
        
      </HeroBg> */}
      <HeroContent>
      
        <HeroP>BEST TRAILERS IN CANADA

</HeroP>

        <PCENTER class="text-gray-600 p-8">
        One-stop-shop for all your trucking needs. We are an authorized dealer for Vanguard trailers servicing in British Columbia, Canada. We are an established retailer of pre-owned trucks and trailers as well. {" "}
        </PCENTER>
        
        <WWOCCButtonM className="p-8">
          <Link
            to="Footertag"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-80}
          >
            Contact Us
          </Link>
        </WWOCCButtonM>

        <div class="pl-4 w-90  md:max-w-9  ">
          <div class="p-8 bg-white  rounded shadow-md bg-opacity-75 ">
            <h2 class="text-3xl font-bold text-gray-800 p-4 md:" >
            TRUCKS, DRY VANS, REEFERS AND MORE
            </h2>
            <p class="text-gray-600 p-4 text-1xl">
            One-stop-shop for all your trucking needs. We are an authorized dealer for Vanguard trailers servicing in British Columbia, Canada. We are an established retailer of pre-owned trucks and trailers as well. {" "}
            </p>

            <WWOCCButton className="m-4" to="/Contact">
              
                Contact Us
              
            </WWOCCButton>
          </div>
        </div>
        
      </HeroContent>
      <HeroPromoContainer>
        <HeroPromo>
          <SocialMediaActions>
            <FiPhoneCall></FiPhoneCall>
          </SocialMediaActions>
          <HomeContactContent>
            <Info>(604) 864 3100</Info>
            <Callinfo>call</Callinfo>
          </HomeContactContent>
        </HeroPromo>
        <HeroPromo  onclick="sendEmail();">
          <SocialMediaActions>
            <AiOutlineMail></AiOutlineMail>
          </SocialMediaActions>
          <HomeContactContent>
            <Info>trailers@bigrigcanada</Info>
            <Callinfo>Email</Callinfo>
          </HomeContactContent>
        </HeroPromo>
        <HeroPromo>
          <SocialMediaActions>
            <GoLocation></GoLocation>
          </SocialMediaActions>
          <HomeContactContent>
            <Info>Canada</Info>
            <Callinfo>1225 Riverside Rd, Abbotsford, BC V2S 7P1</Callinfo>
          </HomeContactContent>
        </HeroPromo>
      </HeroPromoContainer>
    </HeroContainer>
  );
};

export default HeroSection;
