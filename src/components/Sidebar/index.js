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
                    <SidebarLink  to='/'  >
                    <a to='/' onClick={toggle}  
         >Home</a>
                    </SidebarLink>
                    <SidebarLink to='/About' >
                    <a  onClick={toggle} to='/About' >About</a>
                    </SidebarLink>
                   
                    <SidebarLink to='/Product' >
                    <a href='/Product' onClick={toggle}>Product</a>
                    </SidebarLink>
                   
                    
                    
                </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/Contact'><Link to='/Contact' smooth={true} duration={500} spy={true} exact={true} offset={-80}>Contact</Link></SidebarRoute>
            </SideBtnWrap>
            </SidebarWrapper>
        </SlidebarContainer>
    )
}

export default Sidebar
