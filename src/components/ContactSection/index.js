import React from 'react'
import {ContactContainer, ContactForm,ContactImage,

  FotterNav,

  FotterContact,
  FotterContactlist,
  FotterContactNo,
  FotterContactName,
  Heading
 } from './ContactSEctionElements'

const ContactSection = ({isOpen,toggle}) => {
    return (
      <ContactContainer id="ContactUs">
        
          <ContactForm >
            <Heading>Get in touch with our experts</Heading>
          <div data-aidaform-widget="form-2019-12" data-url="https://shantanu.aidaform.com/bigrig" data-width="100%" data-height="500px" data-do-resize></div>
          
          </ContactForm>
          
          <ContactImage>
          <footerMobileContainer>
        <FotterNav>
        <FotterContact>
          <FotterContactlist>
            
            <FotterContactName>Address</FotterContactName>
            <FotterContactNo>NH 234   Public Square San Francisco  65368</FotterContactNo>
          </FotterContactlist>
        </FotterContact>
        {/* <hr align="left" width="100%"></hr> */}
        <FotterContact>
          <FotterContactlist>
           
            <FotterContactName>Contact  Details</FotterContactName>
            <FotterContactNo>1800 265 24 52
Finsweet@gmail.com</FotterContactNo>
          </FotterContactlist>
        </FotterContact>
        {/* <hr align="left" width="100%"></hr> */}
        <FotterContact>
          <FotterContactlist>
            
            <FotterContactName>
            Opening Hours</FotterContactName>
            <FotterContactNo>
            Monday to Friday 9:00 AM to  10:00  AM
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
          </ContactImage>
          
      </ContactContainer>
      
    )
}

export default ContactSection