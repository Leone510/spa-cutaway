import styled from 'styled-components';
import { device } from '../../../data/breakpoints';
import { StyledCutawayBtn } from '../CutawayBtn/StyledCutawayBtn';

export const StyledUpBtn = styled(StyledCutawayBtn)`
   width: 40px;
   height: 40px;
   position: fixed;
   bottom: 20px;
   right: 20px;
   border-radius: 20%;

   &:hover {
      opacity: 1;
   }

   ${props => props.hide &&`
      display: none;
   `}

  @media ${device.tablet} {
     width: 50px;
     height: 50px;
  }

  @media ${device.laptop} {
     width: 70px;
     height: 70px;
     opacity: 0.3;
  }
`