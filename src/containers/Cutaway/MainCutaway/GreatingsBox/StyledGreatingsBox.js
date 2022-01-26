import styled from 'styled-components';
import { device } from '../../../../data/breakpoints';

export const StyledGreatingsBox = styled.div`
   width: 73%;
   height: 60%;
   position: absolute;
   top: 35%;
   left: 12%;

   @media ${device.landscape} {
   top: 30%;
   left: 12%;
   }

   @media ${device.mobile} {
   font-size: 1.5em;
   }

   h1 {
   font-size: 1.5em;
   }

   h2 {
   font-size: 1em;
   }
`