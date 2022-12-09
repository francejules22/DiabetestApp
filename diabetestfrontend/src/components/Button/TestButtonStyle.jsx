import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Button = styled(LinkRouter)`
    padding: .5rem 2rem;
    font-size: .8rem;
    font-weight: 400;
    border: 1px solid var(--color-bg);
    border-radius: 4px;
    outline: none;
    background: transparent;
    cursor: pointer;
    color: var(--color-white);
    margin-top: 12px;
    width: 10rem;


    &:hover{
        transform: scale(1);
        color: var(--color-white);
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
        transition-duration: 0.5s;
        font-weight: 400; 
        cursor: pointer;
    }
`