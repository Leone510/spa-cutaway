import styled from 'styled-components';
import { device } from '../../../data/breakpoints';

export const StyledPolaroid = styled.div`
   width: min(500px, 90vw);
   height: 50%;
   display: flex;
   justify-content: space-around;
   align-items: center;

   @media ${device.tablet} {
      width:50%;
   }
`

