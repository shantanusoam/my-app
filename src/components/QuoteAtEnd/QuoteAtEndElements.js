import { FaBars } from 'react-icons/fa';
import {  Link as LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import styled from 'styled-components';
import bgimage from '../../images/QuoteAtEnd.png';
export const WWOCArd = styled.div`
background: transparent url(${bgimage}) no-repeat center center;
display:flex;
padding: 0px 0px 0px 50px;
flex-direction: column;
align-items: flex-start;
justify-content : center;
width: 100%;
height: 50vh;
@media screen and (max-width: 768px) {
  height: 30vh;
}
`

export const WWOCardContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

`
export const WWOCardimage = styled.div`
background-image: url();
`

export const WWOCCHeading = styled.h2`
padding: 25px;
z-index: 10;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 42px;
text-align: start;
width: 100%;
color: #ffff;

@media screen and (max-width: 768px) {
    font-size: 20px;
}
@media screen and (max-width: 480px) {
    font-size: 15px;
}
`
export const CButton = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row;
align-items: center;
`
export const WWOCCParagraph = styled.p`

padding: 20px;
margin-top: 4px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 21px;

text-align: start;

color: #fff;


max-width: 60rem;
@media screen and (max-width: 768px) {
    font-size: 14px;
}
@media screen and (max-width: 480px) {
    font-size: 10px;
}

`
export const WWOCCButton = styled(LinkR)`
padding: 25px;
display: block;
  
  background: #93CC00;
  padding: 10px 22px;
  white-space: nowrap;
  padding: 20px 92px;
  font-size: 16px;
  color: #fff;
  outline: none;
  border: none;
  
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
  @media screen and (max-width: 768px) {
    display: none;
}
`;