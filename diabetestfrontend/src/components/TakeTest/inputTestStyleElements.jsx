import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom';


export const TestLogo = styled(LinkRouter)`
    position: fixed;
    display: flex;
    align-items: center;
    justify-self: flex-start;
    cursor: pointer;
    padding: 1rem 0 0 1rem;
    
    .diabetes-logo{
        width: 150px;
        height: 60px;

    }

    @media screen and (max-width: 500px){
        position: none;
    }
`;