import styled from 'styled-components';
import { device } from '../../data/breakpoints';

export const StyledLogo = styled.div`
   width: 200px;
   height: 45px;
   display: inline-flex;
   flex-wrap: wrap;

   @media ${device.tablet} {
   height: 70px;
   }
`