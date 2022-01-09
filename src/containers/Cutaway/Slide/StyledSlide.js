import styled, { keyframes } from 'styled-components';
import { device } from '../../../data/breakpoints';

const showSlide = keyframes`
   0% {
      width: 0;
   }
   100% {
      width: 100%
   }
`

export const StyledSlide = styled.div`
   width: 100%;
   height: 100%;
   background: ${({img}) => img || "#5b5643"};
   background-size: cover;
   transition: all 0.5s ease-out;

   animation: ${showSlide} 0.5s ease-in-out;

   @media ${device.tablet} {
     height:70%;
  }
`