import styled from  'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';


export const Nav = styled.nav`
    background: var(--color-tertiary);
    position: sticky;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    margin-top: -80px;
    font-size: 1rem;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    max-width: 1100px;
    padding: 0 24px;
    z-index: 1;
`;

export const NavbarLogo = styled(LinkRouter)`
    display: flex;
    align-items: center;
    justify-self: flex-start;
    cursor: pointer;
    
    .diabetes-logo{
        width: 150px;
        height: 60px;
    }
`;

export const MobileIcon = styled.div`
   display: none;
   color: var(--color-bg);

   @media screen and (max-width: 768px){
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
   }
`;

export const NavbarMenu = styled.ul`
   display: flex;
   align-items: center;
   text-align: center;
   margin-right: -22px;
   list-style: none;

   @media screen and (max-width: 768px){
    display: none;
   }
`;


export const NavbarItem = styled.li`
    height: 80px;
`;

export const NavbarLinks = styled(LinkScroll)`
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    padding: 0 1rem;
    color: var(--color-bg);
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    
    &:hover{
        color: var(--color-primary);
    }

    &.active{
        border-bottom: 4px solid var(--color-primary);
    }
`;

export const NavbarButton = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
       display: none;
    }
`;


export const NavbarButtonLink = styled(LinkRouter)`
    background: var(--color-bg);
    border-radius: 50px;
    white-space: nowrap;
    color: var(--color-tertiary);
    font-size: 16px;
    font-weight: 500;
    outline: none;
    border: none;
    text-decoration: none;
    padding: 8px 18px;
    cursor: pointer;
    transform: scale(.9);
    transition: all 0.3s ease-in-out;


    &:hover{
      background: var(--color-primary);
      color: var(--color-white);
      transform: scale(1);
      transition: all 0.3s ease-in-out;
    }
`