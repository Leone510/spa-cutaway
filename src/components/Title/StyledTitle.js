import styled from 'styled-components';
import { device } from '../../data/breakpoints';

export const StyledTitle = styled.div`
   margin: ${({margin}) => margin || "0 0 0 10px"};
   display: inline-flex;
   align-items: center;
   color: ${({color}) => color || "black"};
   font-size: 1em;

   @media ${device.tablet} {
      font-size: 1.6em;
   }
`