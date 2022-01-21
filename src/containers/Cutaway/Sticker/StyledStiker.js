import styled from 'styled-components';
import { device } from '../../../data/breakpoints';

export const StyledStiker = styled.div`
   height: 50%;
   max-width: 94%;
   padding: 10px;
   box-sizing: border-box;
   object-fit: contain;
   position: relative;
   transform: rotate(3deg);
   overflow: hidden;

   @media ${device.tablet} {
      width:45%;
   }
`