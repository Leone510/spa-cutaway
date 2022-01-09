import styled from 'styled-components';
import { device } from '../../data/breakpoints';

export const StyledForecust = styled.div`
   width: 100%;
   height: calc(100vh - 100px);

   @media ${device.tablet} {
      height: calc(100vh - 150px);
   }
`  