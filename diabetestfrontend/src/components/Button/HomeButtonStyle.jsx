import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
    padding: .5rem 2rem;
    font-size: 1rem;
    border: 1px solid var(--color-primary);
    border-radius: 4px;
    outline: none;
    background: transparent;
    cursor: pointer;
    color: var(--color-primary);
    margin-top: 12px;
    font-weight: 400;
    width: 10rem;




    &:hover{
        transform: scale(1);
        background-color: var(--color-tertiary);
        border: 1px solid var(--color-tertiary);
        transition-duration: 0.5s;
        font-weight: 400; 
        cursor: pointer;
        color: var(--color-white);
    }
`