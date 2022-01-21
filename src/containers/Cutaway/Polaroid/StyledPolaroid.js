import styled from 'styled-components';
import { device } from '../../../data/breakpoints';

export const StyledPolaroid = styled.div`
   /* width: 95%; */
   height: 50%;
   display: flex;
   justify-content: space-around;
   align-items: center;
   /* flex: 0 0 45%; */

   @media ${device.tablet} {
      width:50%;
   }
`

