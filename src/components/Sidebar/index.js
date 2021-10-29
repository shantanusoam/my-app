import React from 'react'
import { CloseIcon,Icon, SlidebarContainer,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute } from './SlidebarElement'
import { animateScroll as scroll,Link } from 'react-scroll';
const Sidebar = ({isOpen,toggle}) => {
    return (
        <SlidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon  onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink   >
                    <Link onClick={toggle} to='About' 
          smooth={true} duration={500} spy={true} exact={true} offset={-80}>About</Link>
                    </SidebarLink>
                    <SidebarLink  >
                    <Link  onClick={toggle} to='/Home' smooth={true} duration={500} spy={true} exact={true} offset={-80}>Products</Link>
                    </SidebarLink>
                    <SidebarLink  >
                    <Link  onClick={toggle} to='/Product' smooth={true} duration={500} spy={true} exact={true} offset={-80}>Advantages</Link>
                    </SidebarLink>
                    <SidebarLink  >
                    <Link  onClick={toggle} to='/Contact' smooth={true} duration={500} spy={true} exact={true} offset={-80}>Contact Us</Link>
                    </SidebarLink>
                </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/Contact'><Link to='/Contact' smooth={true} duration={500} spy={true} exact={true} offset={-80}>Contact Us</Link></SidebarRoute>
            </SideBtnWrap>
            </SidebarWrapper>
        </SlidebarContainer>
    )
}

export default Sidebar
