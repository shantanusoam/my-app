import { FaBars } from 'react-icons/fa';
import {  Link as LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import styled from 'styled-components';

export const FooterContainer = styled.div`
 background: #2F7DBD;
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
height: 50vh;
@media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    display: none;
  }
`

export const SocialMediaActionsContainer = styled.div`
   display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: left;
margin-right: -20px;
    width: 50%;
    justify-content: start;
@media screen and (max-width: 768px) {
  
    flex-wrap: wrap;
    align-items: flex-start;
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


color: #FFFFFF;

opacity: 0.6;

line-height: 42px;

color: #fff;

@media screen and (max-width: 768px) {
    font-size: 20px;
}
@media screen and (max-width: 480px) {
    font-size: 16px;
}
`
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

color: #ffff;

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

color: #FFFFFF;
padding: 20px 0px 0px 0px ;
color: #fff;

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
export const SocialMediaActions = styled.div`
display: flex;
padding-top: 30px;
padding-right: 20px;

/* padding: 0px 20px 0px 20px; */
right: 0;
top: 0;

font-size: 2rem ; 
cursor: pointer;
color: #fff;
&.active{
    color: #93CC00;
  }
&:hover{
    color: #93CC00;
}
`;