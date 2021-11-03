import React ,{useEffect,useState} from 'react';
import {FaBars} from 'react-icons/fa';
import logo from '../../images/logo.png'
import logo1 from '../../images/vanguard.png'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll,Link } from 'react-scroll';

import {

  Nav,
  NavLink,

  NavMenu,
  NavBtn,
  NavBtnLink,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,

} from './BottomBarElements';

const BottomBar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);
  // const changeNav = ()=> {
  //   if(window.scrollY >= 100) {
  //     setScrollNav(true)
  //   }
  //   else{
  //     setScrollNav(false)
  //   }
  // }
  // useEffect(()=>{
  //   window.addEventListener('scroll',changeNav)
  // },[]);
  const   toggleHome =() => {
    scroll.scrollToTop();
  }
  return (
    <>
   
      <Nav scrollNav={scrollNav}>
        
        <NavLogo to='/' onClick={toggleHome} >
 
        <h3 className="text-left text-gray-200 font-bold text-6xl">BIG-RIG</h3>
        </NavLogo>
        
        
        {/* <Bars onClick={toggle}/> */}
        <NavMenu>
          <NavItem>
           
          <NavLinks  to='/' onClick={toggleHome}>
          <Link to='/' >Home</Link>
          </NavLinks>
          </NavItem>
          
          <NavItem>
            <NavLinks to='/About' onClick={toggleHome}> 
            <Link to='/About' 
          >About</Link>
            </NavLinks>
            
            </NavItem>
          <NavItem>
            
            <NavLinks  to='/Product' onClick={toggleHome}>
            <Link to='/Product' >Product</Link>
          </NavLinks></NavItem>
          <NavItem>
            
            <NavLinks to='/Contact' onClick={toggleHome}>
            <Link to='/Contact' >Contact</Link>
          </NavLinks></NavItem>
          {/* <NavItem>
            
          <NavLinks >
          <Link to='ContactUs' smooth={true} duration={500} spy={true} exact={true} offset={-80}>Contact Us</Link>
          </NavLinks>
          </NavItem> */}
          
          <MobileIcon onClick={toggle}>
          {/* <FaBars/> */}
        </MobileIcon>
          
          
          
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
       
          <h3 className="text-left text-gray-200 font-bold text-1xl">@ Copyright Finsweet 2021</h3>
        </NavBtn>
        {/* <MobileIcon onClick={toggle}>
          <FaBars/>
        </MobileIcon> */}
        
        
      </Nav>
    
    </>
  );
};

export default BottomBar;
