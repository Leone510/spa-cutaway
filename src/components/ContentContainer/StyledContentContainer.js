import styled from 'styled-components';
import { device } from '../../data/breakpoints';

export const StyledContentContainer = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: space-around;
   align-items: center;
   box-sizing: border-box;
   background: ${({background}) => background || "white"};
   background-size: ${({bgFit}) => bgFit || "unset"};

   ${props => props.bottom &&`
      border-bottom: 5px solid #5b5643;
   `}

   ${props => props.flexible &&`
      height: auto;
   `}

   @media ${device.tablet} {
      height: ${({unnecessary}) => unnecessary ? `calc(100vh - ${unnecessary})` : "100vh"};
   }
`

