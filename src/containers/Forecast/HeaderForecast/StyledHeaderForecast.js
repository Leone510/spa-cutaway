import styled from 'styled-components';
import { device } from '../../../data/breakpoints';

export const StyledHeaderForecast = styled.header`
   width: 100%;
   height: 50px;
   background: #6A5ACD;
   border-bottom: 1px solid black;

   @media ${device.tablet} {
      height: 100px;
   }
`