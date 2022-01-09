import styled from 'styled-components';
import { device } from '../../../data/breakpoints';

export const StyledPolaroid = styled.div`
   width: 95%;
   height: auto;
   display: flex;
   justify-content: space-around;
   align-items: center;

   @media ${device.tablet} {
      width:50%;
   }
`

