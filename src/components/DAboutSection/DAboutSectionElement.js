import { FaBars } from 'react-icons/fa';
import {  Link as LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import styled from 'styled-components';

export const AboutContainer = styled.div`
 background: #fff;
display:flex;
flex-direction: row;
position: relative;   
align-items: center;
justify-content: space-around;
width: auto;
min-height: 65vh;
height:auto;
`
export const AboutContainerContent = styled.div`
background: #277DBD;


display: flex;
flex-wrap: nowrap;
flex-direction: row;

justify-content: center;
align-items: center;
padding-right: -30px;
width: 70%;
@media screen and (max-width: 2068px) {
  
    width: 50%;
   
}
margin: 0px 90px 0px 200px; 
@media screen and (max-width: 968px) {
    flex-direction: column;
    width: 100%;
    margin: 0px ;
}

`
export const SpaceTruck = styled.div`
display: flex;
width: 300px;
`
export const AboutContainerTextContent = styled.div`
display: flex;
padding: 55px 0px 55px 55px;
width:40%;
flex-direction: column;
align-items: flex-start;
justify-content: center;  
@media screen and (max-width: 768px) {
    width:100%;
}
@media screen and (max-width: 1920px) {
    width:30%;
}


`
export const AboutTireHolder = styled.div`
display: flex;
flex-direction: row;
align-items: center;

`
export const ATHSectionInfo = styled.div`
display:flex;
flex-direction: column;

align-items: flex-start
`
export const AboutContainerImageContent = styled.div`

position: absolute;
top: 30;
left: 280px;

background-size: cover;
  z-index: 6;
    background-blend-mode: screen;


    border-top-left-radius: 3px;
    border-top-right-radius: 3px; 
  
`
export const AboutContainerImageContent2 = styled.div`

position: absolute;

display: block;




width: 60%;

/* padding-right: 200px;
position: absolute;
margin-left: 50%;
margin-top: -8%; */
background-size: cover;
    height: 18rem;
    background-blend-mode: screen;
    margin-bottom: 20px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px; 
    @media screen and (max-width: 768px) {
    display: none;
}
  
`
export const AboutContainerHeading = styled.div`

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 16px;


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
font-size: 56px;


color: #ffff;

@media screen and (max-width: 768px) {
    font-size: 28px;
}
@media screen and (max-width: 480px) {
    font-size: 20px;
}
`
export const AboutContainerPara = styled.p`
margin-top: 4px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
align-items: stretch;
text-align: justify;
width: 100%;
padding: 25px 25px 25px 0px;
color: #F2F2F2;


max-width: 60rem;
@media screen and (max-width: 768px) {
    font-size: 20px;
}
@media screen and (max-width: 480px) {
    font-size: 18px;
}

`
export const AboutContainerButton = styled(LinkR)`
display : block;
  border-radius: 12px;
  background: #93CC00;
  padding: 20px 32px;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 26px;
  color: #fff;
  outline: none;
  border: none;
  
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  @media screen and (max-width: 768px) {
    display : none;
}

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;