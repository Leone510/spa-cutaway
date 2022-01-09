import styled from 'styled-components';
import { device } from '../../../data/breakpoints';

export const StyledHeaderCutaway = styled.header`
   height: 50px;
   width: 100%;
   background: #1a1918;
   display: flex;
   justify-content: space-around;
   align-items: center;

   @media ${device.tablet} {
      height: 100px;
   }
`