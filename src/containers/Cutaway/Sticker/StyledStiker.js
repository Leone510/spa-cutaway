import styled from 'styled-components';
import { device } from '../../../data/breakpoints';

export const StyledStiker = styled.div`
   max-width: 94%;
   padding: 10px;
   box-sizing: border-box;
   display: flex;
   align-items: center;
   object-fit: contain;
   flex: 0 0 35%;
   position: relative;
   transform: rotate(3deg);
   overflow: hidden;

   @media ${device.mobile} {
      width:94%;
      flex: 0 0 50%;
   }

   @media ${device.tablet} {
      height: 50%;
      flex: 0 0 44%;
      font-size: 1rem;
   }
`