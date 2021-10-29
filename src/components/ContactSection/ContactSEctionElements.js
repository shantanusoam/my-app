import { FaBars } from 'react-icons/fa';
import {  Link as LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import styled from 'styled-components';
import bgimage from '../../images/ContactTire.png';
export const ContactContainer = styled.div`
 background: #fff;
display:flex;
flex-direction: row;
align-items: center;
padding: 50px;
width: 100%;
padding-top: 200px;
justify-content: flex-end;
height: 60vh;
&:active{
    
}
`

export const ContactForm = styled.div`
/* display: flex;
flex-direction: column;
align-items: flex-start; */

width: 50%;
@media screen and (max-width: 768px) {
    width: 100%;
  
}
`
export const ContactImage = styled.div`
display: flex;
width: 40%;
@media screen and (max-width: 768px) {
  
  display: none;
}
`
export const AboutContainerHeading = styled.div`

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 42px;

color: #ED1C24;

@media screen and (max-width: 768px) {
    font-size: 20px;
}
@media screen and (max-width: 480px) {
    font-size: 15px;
}
`
export const AboutContainerSubHeading = styled.h2`

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 42px;

color: #010101;

@media screen and (max-width: 768px) {
    font-size: 20px;
}
@media screen and (max-width: 480px) {
    font-size: 15px;
}
`
export const footerMobileContainer = styled.div`
   display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: center;
@media screen and (max-width: 768px) {
  
    flex-wrap: wrap;
    align-items: flex-start;
}
`
export const FooterLogo = styled.div`
padding-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
`
export const FotterNav = styled.div`
display: flex;
padding: 25px;
flex-direction: column;
align-items: center;
@media screen and (max-width: 768px) {
    flex: 0 0 200px;
    flex-direction: column;
}
`
export const FotterNavH = styled.div`


z-index: 2;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 42px;
padding: 20px;
padding-right: 50px;
padding-left: 50px;
color: #fff;

@media screen and (max-width: 768px) {
    font-size: 20px;
}
@media screen and (max-width: 480px) {
    font-size: 18px;
}
`

export const FotterContact = styled.div`
display: flex;
width: 35rem;
padding: 0px 70px 0px 70px;
flex-direction: column;
align-items: center;
@media screen and (max-width: 768px) {
    flex: 0 0 200px;
    flex-direction: column;
}
`
export const FotterContactlist = styled.div`
padding: 10px;
padding-right: 80px;
padding-left: 80px;
width: 150%;
display: flex;
flex-direction: column;
align-items: flex-start;

`
export const FotterContactName = styled.div`
padding: 20px 0px 0px 0px ;
display: flex;
flex-direction: row;
align-items: flex-start;
z-index: 10;
justify-content: center;
font-family: Roboto;
font-weight: bold;

font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 175%;
/* identical to box height, or 31px */


color: #1E1B1B;

opacity: 0.6;

line-height: 42px;

color: #1E1B1B;

@media screen and (max-width: 768px) {
    font-size: 20px;
}
@media screen and (max-width: 480px) {
    font-size: 16px;
}
`
export const Heading = styled.div`
padding: 20px 0px 0px 60px ;
display: flex;
flex-direction: row;
align-items: center;
width: 60%;
justify-content: center;
z-index: 0;
font-family: Roboto;
font-weight: bold;

font-size: 60px;
line-height: 70px;

color: #000;

@media screen and (max-width: 768px) {
    font-size: 20px;
}
@media screen and (max-width: 480px) {
    font-size: 16px;
}`
export const FotterHName = styled.div`
padding: 20px 0px 20px 80px ;
display: flex;
flex-direction: row;
align-items: center;
width: 68.21%;
justify-content: center;
z-index: 10;
font-family: Roboto;
font-weight: bold;

font-size: 40px;
line-height: 70px;

color: #1E1B1B;

@media screen and (max-width: 768px) {
    font-size: 20px;
}
@media screen and (max-width: 480px) {
    font-size: 16px;
}
`
export const FotterContactNo = styled.div`
display: flex;
text-align: flex-start;
justify-content: center;
z-index: 10;

font-family: Roboto;
font-style: normal;
font-weight: bold;

font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
/* identical to box height, or 150% */

letter-spacing: -0.03em;

color: #1E1B1B;
padding: 20px 0px 0px 0px ;
color: #1E1B1B;

@media screen and (max-width: 768px) {
    font-size: 20px;
}
@media screen and (max-width: 480px) {
    font-size: 17px;
}
`

export const FotterContactN = styled.div`

z-index: 10;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 12px;
padding: 60px 0px 0px 0px ;
color: #fff;

@media screen and (max-width: 768px) {
    font-size: 20px;
}
@media screen and (max-width: 480px) {
    font-size: 17px;
}
`
export const FotterSocialMedia = styled.div`
display: flex;
padding: 40px;
margin-left: 20px;
flex-direction: row;
align-items: center;
justify-content: center;
`