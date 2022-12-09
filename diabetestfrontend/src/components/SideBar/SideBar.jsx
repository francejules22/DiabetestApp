import React from 'react';
import { SidebarContainer, 
    SidebarIcon, 
    CloseIcon, 
    SidebarBoxWrapper, 
    SidebarMenu, 
    SidebarLink,
    SidebarButtonWrap,
    SidebarButtonRoute } from './SidebarStyleElements';

const Sidebar = ({ isOpen, toggle }) => {
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <SidebarIcon onClick={toggle}>
                <CloseIcon />
            </SidebarIcon>

            <SidebarBoxWrapper>
                <SidebarMenu>
                    <SidebarLink to='home' onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='process' onClick={toggle}>Process</SidebarLink>
                    <SidebarLink to='test' onClick={toggle}>Test</SidebarLink>
                    <SidebarLink to='tips' onClick={toggle}>Tips</SidebarLink>
                </SidebarMenu>
                <SidebarButtonWrap>
                    <SidebarButtonRoute to="/taketest">Take the test</SidebarButtonRoute>
                </SidebarButtonWrap>
            </SidebarBoxWrapper>

        </SidebarContainer>
    );
}
export default Sidebar;
