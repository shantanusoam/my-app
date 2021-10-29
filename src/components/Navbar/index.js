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

} from './NavbarElements';

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = ()=> {
    if(window.scrollY >= 100) {
      setScrollNav(true)
    }
    else{
      setScrollNav(false)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',changeNav)
  },[]);
  const   toggleHome =() => {
    scroll.scrollToTop();
  }
  return (
    <>
    <IconContext.Provider value={{ color: '#fff', size: '1em' }}>
      <Nav scrollNav={scrollNav}>
        
        <NavLogo to='/' onClick={toggleHome} >
 
          <img src={logo} alt='logo' height="72px"/>
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
          <FaBars/>
        </MobileIcon>
          
          
          
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <img src={logo1} alt='logo' height="72px"/>
          <h3 className="text-left text-black font-bold text-1xl">Authorized Dealer</h3>
        </NavBtn>
        {/* <MobileIcon onClick={toggle}>
          <FaBars/>
        </MobileIcon> */}
        
        
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
