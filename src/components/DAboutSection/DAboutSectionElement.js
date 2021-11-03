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

@media screen and (max-width: 2068px) {
  flex-direction: column-reverse;
   
   
}
`
export const AboutContainerContent = styled.div`
background: #277DBD;


display: flex ;
flex-wrap: nowrap;
flex-direction: row;
justify-content: flex-end
@media screen and (max-width: 768px) {
    width:100%;
    height:100%;
}
`


export const SpaceTruck = styled.div`
display: flex;
width: 300px;

`
export const SpaceContainer = styled.div`
flex-grow: 2;
@media screen and (max-width: 768px) {
    display: none;
    
}
`
export const AboutContainerTextContent = styled.div`
display: flex;
padding: 55px 0px 55px 55px;
width:40%;
flex-direction: column;
align-items: flex-start;
justify-content: center; 
flex-grow:1;
@media screen and (max-width: 768px) {
    width:100%;
    flex-direction: column;
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

    img{
        width: 500px;
        @media screen and (max-width: 768px) {
    position: relative;
    
    width:100%;
   
}
    }
@media screen and (max-width: 768px) {
    position: relative;
    width:100%;
    left: 0;
    flex-direction: column;
}
   
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
    line-height: 60px;
    font-size: 68px;
    width: 20%;
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
    font-size: 30px;
    line-height: 30px;
    width: 80%;
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
    display : block;
}

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
