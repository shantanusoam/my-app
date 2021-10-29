import { FaBars } from 'react-icons/fa';
import {  Link as LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.nav`
background-color: ${({scrollNav})=>(scrollNav?'#fff':'transparent')}; 
  
  height: 100px;
//  margin-top:-80px
width : 100%;
margin-top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: fixed;

  top:0;
  z-index: 29;
  // padding: 0.5rem calc((100vw - 1000px) / 2);
  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    margin-top: 0px;
  }

  /* Third Nav */
  /* justify-content: flex-start; */
`;
export const NavbarContainer = styled.div`
display : flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;    
max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
color : #000;
justify-self: flex-start;
cursor: pointer;
padding: 25px;
justify-content: start;
font-size: 1.5\rem;
display: flex;
align-items: flex-start;
margin-left: 2px;
font-weight: bold;
text-decoration: none;
&.active{
    color: #ffff;
  }
`;
export const NavLink = styled(LinkR)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  &.active{
    color: #fff;
  }
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover{
    color: #900;
  };
  &.active {
    color: #15cdfc;
  };
  @media screen and (max-width: 768px) {
  dispaly: none;
}
`;
export const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 768px) { 
   display : block; 

postion: absolute;
right: 0;
top: 0;
transform: translate(-100%, 60%);
font-size: 1.8rem ; 
cursor: pointer;
color: #000;
&.active{
    color: #fff;
  }
}
`;
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -1px;
@media screen and (max-width: 768px) {
  dispaly: none;
}
` 

export const NavItem = styled.li`
display: block;
    height: 80px;
    &:hover{
      
    color: #900;
  };
  @media screen and (max-width: 768px) {
    display: none;
}
  
`
export const NavLinks = styled(LinkR)`
color: #000;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active{
    color: #900;
  }
&:hover{
    color: #900;
  };
&.active {
 border-bottom: 3px solid #15cdfc;
}

`
export const Bars = styled(FaBars)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    &.active{
    color: #fff;
  }
  }
`;

// export const NavMenu = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: -24px;

//   /* Second Nav */
//   /* margin-right: 24px; */

//   /* Third Nav */
//   /* width: 100vw;
//   white-space: nowrap; */

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

export const NavBtn = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
 

 padding: 25px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #ED1C24;
  padding: 10px 22px;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 16px;
  color: #000;
  outline: none;
  border: none;
  
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #fff;
  }
`;
