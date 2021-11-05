import Styled from 'styled-components';
import bgimage from '../../images/Bg.png';
import {  Link as LinkR } from 'react-router-dom';
export const HeroContainer = Styled.div`
background: transparent url(${bgimage}) no-repeat center center;
overflow: hidden;

display: flex;  
justify-content: space-between;
align-items: center;
margin: 0;
padding: 0;

width: 100vw;
position: relative;
height: 100vh;
background-size: cover;
background-repeat: no-repeat;
background-position: top center;
z-index: 0;
`;
// export const HeroBg = Styled.div`

// position: absolute;
// z-index: 2;
// top: 0;
// left: 0;
// bottom: 0;
// right: 0;
// overflow: hidden;
// width: 100vw;
// height: 100vh;    
// `
export const WWOCardContainer = Styled.div`
display: flex;
flex-wrap: wrap;
align-items: flex-start;
justify-content: center;
padding-bottom: 90px;
`

export const WWOCArd = Styled.div`
  flex: 0 0 200px;
    margin: 10px;
    width: 200%;
    width: 500px;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.01);
z-index: 5;
background-color: #FFFFFF;

flex-direction: column;
align-items: center;
transition: 0.3s all ease;
&:hover{
   
    box-shadow: 2px 5px 6px 0px  rgba(0,0,6,0.2);
}
`

export const WWOCardContent = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 200px;

`
export const WWOCardimage = Styled.div`
display: flex;
width: 100%;
height: 100%;
`

// export const BgImage = Styled.div`
// width: 100%;
// height: 100%;
// background-image: url(../../images/Bg.png);
// -o-object-fit: cover;
// object-fit: cover;
// // background: #232a34;

// `
export const VideoBg = Styled.video`

width: 100%;

height: 100%;

-o-object-fit: cover;

object-fit: cover;


`
export const HeroContent = Styled.div`
padding: 0px 0px 0px 100px;
z-index: 2;

position: absolute;
width: 100%;

flex-wrap: wrap;
display: flex;
justify-content: space-between;
flex-direction: row;

align-items: center;
margin-top: -200px;

div{
    width: 55%;
    display: block;
    align-items: right;
    margin-right: -300px;
    @media screen and (max-width: 768px) {
    display: none;
    
    }
    @media screen and (min-device-width: 1024px) {
    display: block;
    align-items: right;
    
    }
    @media screen and (max-width: 480px) {
    display: none;
    
    }
 
    
}

    


@media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0px 0px 0px 0px;
    }
@media screen and (max-width: 480px) {
    padding: 200px 0px 0px 0px;
    
    flex-direction: column;
    font-size: 32px;
    align-items: center;
    justify-content: center;
}
`
export const PCENTER = Styled.p`
display: none;
    @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
    margin: 0px;
    padding: 0px;
    }
`
export const HeroH1 = Styled.h1`

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 42px;
text-align: center;
z-index: 2;
color: #ED1C24;

@media screen and (max-width: 768px) {
    font-size: 40px;
}
@media screen and (max-width: 480px) {
    font-size: 32px;
}
`
export const HeroP = Styled.p`
margin-top: 24px;
font-family: poppins;
font-style: normal;
font-weight: 800;
font-size: 120px;
line-height: 89.69%;
text-align: left;
width: 36%;
z-index: 2;
color: #FFFFFF;

@media screen and (max-width: 768px) {
    font-size: 54px;
    width: 55%;
    text-align: center; 
}
/* @media screen and (max-width: 1024px) {
    font-size: 40px;
    width: 36%;
    text-align: center; 
} */
@media screen and (max-width: 375px) {
    font-size: 42px;
    width: 50%;
  
    text-align: center; 
}
`
export const CardHeading = Styled.button`

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 25px;
width: 100%;
padding: 25px 80px 25px 0px;
text-align: start;
z-index: 2;
color: #FFFFFF;
max-width: 60rem;
@media screen and (max-width: 768px) {
    font-size: 24px;
}
@media screen and (max-width: 480px) {
    font-size: 22px;
}
`
export const CardPara = Styled.button`

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;

text-align: center;
z-index: 2;
color: #FFFFFF;
max-width: 60rem;
@media screen and (max-width: 768px) {
    font-size: 24px;
}
@media screen and (max-width: 480px) {
    font-size: 22px;
}

`
export const HeroBtnWrapper = Styled.div`
margin-top: 32px;
display: flex;
z-index: 2;
flex-direction: column;
align-items: center;
`
export const HeroPromoContainer = Styled.div`
z-index: 10;
display: flex;

margin-top: 40%;
margin-left: 35%;
justify-content: center;
z-index: 2;
flex-direction: row;
align-items: center;
@media screen and (max-width: 768px) {
    display: none;
}
`
export const HeroPromo = Styled.div`
margin-top: 32px;
display: flex;
z-index: 2;
flex-direction: row;
align-items: flex-end

`
export const SocialMediaActions = Styled.div`
display: flex;

padding-right: 20px;

/* padding: 0px 20px 0px 20px; */
right: 0;
top: 0;

font-size: 3rem ; 
cursor: pointer;
color: #94CD01;
&.active{
    color: #2F7DBD;
  }
&:hover{
    color: #2F7DBD;
}
`;
export const HomeContactContent = Styled.div`
margin-top: 32px;
display: flex;
z-index: 2;
flex-direction: column;
align-items: start;
`
export const Callinfo = Styled.p`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;

text-align: center;

color: #FFFFFF;
max-width: 60rem;
@media screen and (max-width: 768px) {
    font-size: 24px;
}
@media screen and (max-width: 480px) {
    font-size: 22px;
}
`
export const Info = Styled.div`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;

text-align: center;
z-index: 2;
color: #FFFFFF;
max-width: 60rem;
@media screen and (max-width: 768px) {
    font-size: 24px;
}
@media screen and (max-width: 480px) {
    font-size: 22px;
}
`
export const WWOCCButtonM = Styled(LinkR)`
display: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #93CC00;
    color: #010606;
  }
  @media screen and (max-width: 768px) {
   padding: 25px;
display: block;
  display: flex;
    justify-content: center;
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
  margin-top: 44px;
}
`
export const WWOCCButton = Styled(LinkR)`
padding: 25px;
display: block;
  display: flex;
    justify-content: center;
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
    background: #93CC00;
    color: #010606;
  }
  @media screen and (max-width: 768px) {
    display: none;
}
`;