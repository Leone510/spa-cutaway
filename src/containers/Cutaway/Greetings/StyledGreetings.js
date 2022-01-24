import styled from 'styled-components';
import { device } from '../../../data/breakpoints';

export const StyledGreetings = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;

   @media ${device.tablet} {
      flex-direction: row;
   }

   @media ${device.landscape}{
      flex-direction: row;
   }
`