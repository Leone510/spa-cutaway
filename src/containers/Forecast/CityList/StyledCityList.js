import styled from 'styled-components';
import { device } from '../../../data/breakpoints';

export const StyledCityList = styled.section`
   height: 100%;
   display: flex;
   flex: 0 0 100%;
   flex-direction: column;
   background: rgba(93, 118, 203, 0.5);
   overflow-y: auto;
   box-sizing: border-box;

   @media ${device.tablet} {
      flex: 0 0 300px;
   }
`