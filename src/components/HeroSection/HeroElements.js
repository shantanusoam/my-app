import Styled from 'styled-components';
import bgimage from '../../images/Bg.png';
export const HeroContainer = Styled.div`
background: 
background: transparent;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 30px;
height: 100vh;
width: 100%;
position: relative;
z-index: 1;
`;
export const HeroBg = Styled.div`
background: transparent url(${bgimage}) no-repeat center center;
position: absolute;
z-index: 2;
top: 0;
left: 0;
bottom: 0;
right: 0;
width: 100%;
height: 100%;

overflow: hidden;

`
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

background: #232a34;
`
export const HeroContent = Styled.div`
padding: 0px 0px 0px 100px;
z-index: 2;
max-width: 1200px;
position: absolute;
width: 100%;


display: flex;
justify-content: space-between;
flex-direction: row;

align-items: center;
margin-top: -200px;



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
font-family: Roboto;
font-style: normal;
font-weight: 800;
font-size: 120px;
line-height: 89.69%;
text-align: left;
width: 70%;
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
font-size: 15px;

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
    color: #ed1d25;
  }
&:hover{
    color: #ed1d25;
}
`;
export const HomeContactContent = Styled.div`
margin-top: 32px;
display: flex;
z-index: 2;
flex-direction: column;
align-items: start;
`
export const callinfo = Styled.p`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 15px;

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
font-size: 15px;

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