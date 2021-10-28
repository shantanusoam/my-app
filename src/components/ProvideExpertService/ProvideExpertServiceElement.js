import { FaBars } from 'react-icons/fa';
import {  Link as LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import styled from 'styled-components';

export const Conatainer = styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
height: 90vh;
@media screen and (max-width: 768px) {
  height: 50vh;
}
`
export const ImageContainer  = styled.div`

`
export const ContentContainer  = styled.div`
display:flex;
flex-direction: column;
justify-content: start;
align-items:flex-start;
`
export const ContentHeadingContainer  = styled.div`
padding: 0px 50px 30px 0px;
`
export const Heading  = styled.div`
padding: 5px;
z-index: 10;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 46px;


width: 35rem;
color: #010101;

@media screen and (max-width: 768px) {
    font-size: 20px;
}
@media screen and (max-width: 480px) {
    font-size: 15px;
}
`
export const SubHeading  = styled.div`
padding: 5px;
z-index: 10;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;


width: 35rem;
color: #232536;

@media screen and (max-width: 768px) {
    font-size: 20px;
}
@media screen and (max-width: 480px) {
    font-size: 15px;
}
`
export const ContentStepsContainer  = styled.div`
display:flex;
flex-direction: row;
justify-content: start;
`
export const StepNoContainer  = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
align-items : center;
`
export const NoContainer  = styled.div`

border-radius: 50%;
text-align: center;
padding-top: 10px;
margin: 25px;
width:  45PX;
height: 45PX;

background: #93CC00;
z-index: 5;
`
export const StarightLine  = styled.div`
 border:1px dashed #93CC00;
  color:#fff;
  background-color:#fff;
  height:10%;
  width:0%;


z-index: 5;
`
export const StepNoContentContainer  = styled.div`
display:flex;
flex-direction: column;
justify-content: start;

`
export const SteapHeadingContainer  = styled.div`
display:flex;
margin: 25px;
flex-direction: column;
justify-content: start;
`
export const StepHeading  = styled.div`
padding: 5px;
z-index: 10;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 26px;


width: 35rem;
color: #010101;

@media screen and (max-width: 768px) {
    font-size: 20px;
}
@media screen and (max-width: 480px) {
    font-size: 15px;
}
`
export const StepSubheading  = styled.div`
padding: 5px;
z-index: 10;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 12px;


width: 35rem;
color: #232536;

@media screen and (max-width: 768px) {
    font-size: 20px;
}
@media screen and (max-width: 480px) {
    font-size: 15px;
}
`