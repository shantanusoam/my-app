import React, { useState } from "react";
import {
  HeroContainer,
  WWOCCButtonM,
  PCENTER,
  HeroP,
  HeroContent,
  WWOCCButton,
  HeroBg,
  HeroPromoContainer,
  HeroPromo,
  WWOCardContent,
  CardHeading,
  CardPara,
  SocialMediaActions,
  HomeContactContent,
  Info,
  callinfo,
} from "./HeroElements";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { animateScroll as scroll, Link } from "react-scroll";

import EmblaCarousel from "./EmblaCarousel";
const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="Home">
      
      {/* <HeroBg>
        
      </HeroBg> */}
      <HeroContent>
      
        <HeroP>BEST TRAILERS IN CANADA</HeroP>

        <PCENTER class="text-gray-600 p-8">
          Our furniture is made from selected and best quality materials that
          are suitable for your dream home{" "}
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

        <div class="p-4 w-20 self-end">
          <div class="p-16 bg-white rounded shadow-md bg-opacity-75 ">
            <h2 class="text-6xl font-bold text-gray-800 p-8">
              High-Quality Trailers for you
            </h2>
            <p class="text-gray-600 p-8">
              Our furniture is made from selected and best quality materials
              that are suitable for your dream home{" "}
            </p>

            <WWOCCButton className="p-8">
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
            <callinfo>call</callinfo>
          </HomeContactContent>
        </HeroPromo>
        <HeroPromo>
          <SocialMediaActions>
            <AiOutlineMail></AiOutlineMail>
          </SocialMediaActions>
          <HomeContactContent>
            <Info>trailers@bigrigcanada</Info>
            <callinfo>Email</callinfo>
          </HomeContactContent>
        </HeroPromo>
        <HeroPromo>
          <SocialMediaActions>
            <GoLocation></GoLocation>
          </SocialMediaActions>
          <HomeContactContent>
            <Info>Canada</Info>
            <callinfo>Location</callinfo>
          </HomeContactContent>
        </HeroPromo>
      </HeroPromoContainer>
    </HeroContainer>
  );
};

export default HeroSection;
