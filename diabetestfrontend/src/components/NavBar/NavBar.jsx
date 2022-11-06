import React from 'react';
import DiabetesLogo from '../../images/mainLogo.png';
import { Nav, 
    NavbarContainer, 
    NavbarLogo, 
    MobileIcon, 
    NavbarMenu, 
    NavbarItem, 
    NavbarLinks,
    NavbarButton,
    NavbarButtonLink } 
    from './NavBarStyleElements';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll'; 


const Navbar = ({ toggle }) => {

   const toggleHome = () => {
    scroll.scrollToTop();
   }

    return(
        <>
           <Nav>
              <NavbarContainer>
                 <NavbarLogo to="/" onClick={toggleHome}><img src={DiabetesLogo} alt="Diabetes Logo" className="diabetes-logo" /></NavbarLogo>
                 <MobileIcon onClick={toggle}>
                     <FaBars />
                 </MobileIcon>
                 <NavbarMenu>
                    <NavbarItem>
                        <NavbarLinks to="home" smooth={true} duration={300} spy={true} exact='true' offset={-80}>Home</NavbarLinks>
                    </NavbarItem>

                    <NavbarItem>
                        <NavbarLinks to="about"  smooth={true} duration={300} spy={true} exact='true' offset={-80}>About</NavbarLinks>
                    </NavbarItem>

                    <NavbarItem>
                        <NavbarLinks to="process"  smooth={true} duration={300} spy={true} exact='true' offset={-80}>Process</NavbarLinks>
                    </NavbarItem>

                    <NavbarItem>
                        <NavbarLinks to="test"  smooth={true} duration={300} spy={true} exact='true' offset={-80}>Test</NavbarLinks>
                    </NavbarItem>
                 </NavbarMenu>
                 <NavbarButton>
                      <NavbarButtonLink to="/taketest">Take the test</NavbarButtonLink>
                 </NavbarButton>
              </NavbarContainer>
           </Nav>
        </>
    );
}
export default Navbar;
