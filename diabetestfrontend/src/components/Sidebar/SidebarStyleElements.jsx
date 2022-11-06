import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa'; 
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';


export const SidebarContainer = styled.aside`
    position: fixed;
    display: grid;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: var(--color-tertiary);
    z-index: 999;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '95%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const SidebarIcon = styled.div`
    position: absolute;
    background: transparent;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 2rem;
    outline: none;
    cursor: pointer;
`;


export const CloseIcon = styled(FaTimes)`
    color: var(--color-bg);
`;


export const SidebarBoxWrapper = styled.div`
    color: #fff;
`;


export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
      grid-template-rows: repeat(6, 80px);
    }
`;

export const SidebarLink = styled(LinkScroll)`
   display: flex;
   align-items: center;
   justify-content: center;
   color: var(--color-bg);
   font-weight: 500;
   font-size: 1.5rem;
   list-style: none;
   text-decoration: none;
   transition: 0.3s ease-in-out;
   cursor: pointer; 

   &:hover{
    color: var(--color-primary);
    transition: 0.3s ease-in-out;
   }
`;


export const SidebarButtonWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarButtonRoute = styled(LinkRouter)`
    background: var(--color-bg);
    border-radius: 50px;
    white-space: nowrap;
    color: var(--color-tertiary);
    font-size: 18px;
    font-weight: 600;
    outline: none;
    border: none;
    text-decoration: none;
    padding: 14px 32px;
    cursor: pointer;
    transform: scale(1);
    transition: all 0.3s ease-in-out;


    &:hover{
      background: var(--color-primary);
      color: var(--color-white);
      transition: all 0.3s ease-in-out;
      transform: scale(1.1);
    }
`