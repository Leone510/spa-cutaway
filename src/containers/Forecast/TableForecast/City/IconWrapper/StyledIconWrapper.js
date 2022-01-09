import styled from 'styled-components';
import { device } from '../../../../../data/breakpoints';

export const StyledIconWrapper = styled.div`
   display: none;

   @media ${device.laptop} {
      display: flex;
      flex: 0 0 300px;
   }
`