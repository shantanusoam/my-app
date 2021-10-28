import React from "react";

import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";


import { GrMapLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import {
  FooterContainer,
  SocialMediaActions,
  FooterLogo,
  FotterNav,
  FotterNavH,
  FotterContactN,
  FotterContact,
  FotterContactlist,
  FotterContactNo,
  FotterContactName,
  SocialMediaActionsContainer,
  FotterSocialMedia,
  footerMobileContainer,
  FotterHName
} from "./FooterSectionElements";
import logo from "../../images/logo.png";
const FooterSection = ({ isOpen, toggle }) => {
  return (
    <FooterContainer id="Footertag">
      <FooterLogo>
      <FotterHName>Get in touch with us for your  service</FotterHName>
      
        <SocialMediaActionsContainer>
        <SocialMediaActions>
             <FaFacebook/>
            </SocialMediaActions>
            <SocialMediaActions>
             <FaTwitter/>
            </SocialMediaActions>
            <SocialMediaActions>
             <FaInstagram/>
            </SocialMediaActions>
            <SocialMediaActions>
             <FaLinkedin/>
            </SocialMediaActions>
          </SocialMediaActionsContainer>
        
      </FooterLogo>
      <footerMobileContainer>
        <FotterNav>
        <FotterContact>
          <FotterContactlist>
            
            <FotterContactName> Help line Number</FotterContactName>
            <FotterContactNo>1800 265 24 52</FotterContactNo>
          </FotterContactlist>
        </FotterContact>
        {/* <hr align="left" width="100%"></hr> */}
        <FotterContact>
          <FotterContactlist>
           
            <FotterContactName>Address</FotterContactName>
            <FotterContactNo>NH 234   Public Square San Francisco  65368</FotterContactNo>
          </FotterContactlist>
        </FotterContact>
        {/* <hr align="left" width="100%"></hr> */}
        <FotterContact>
          <FotterContactlist>
            
            <FotterContactName>
            We are open</FotterContactName>
            <FotterContactNo>
            Monday to Friday 9:00 AM to  10:00  AM
            </FotterContactNo>
          </FotterContactlist>
        </FotterContact>
          {/* <SocialMediaActions>
            <FaFacebookF/>
            </SocialMediaActions> */}
          {/* <FotterNavH>Email</FotterNavH> */}
          {/* <FotterNavH>Company</FotterNavH>
                <FotterNavH>Advantages</FotterNavH>
                <FotterNavH>Products</FotterNavH>
                <FotterNavH>Contact</FotterNavH> */}
        </FotterNav>
        
      </footerMobileContainer>

      {/* <FotterSocialMedia>
            <SocialMediaActions>
            <FaFacebookF/>
            </SocialMediaActions>
            <SocialMediaActions>
                <FaTwitter/>
            </SocialMediaActions>
            <SocialMediaActions>
                <FaInstagram/>
            </SocialMediaActions>
          </FotterSocialMedia> */}
      {/* <FotterContactN>
        © Kal Tires Inc, 2021 All rights reserved.{" "}
      </FotterContactN> */}
    </FooterContainer>
  );
};

export default FooterSection;
