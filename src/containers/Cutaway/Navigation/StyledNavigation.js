import styled from 'styled-components';
import {device} from '../../../data/breakpoints';

export const StyledNavigation = styled.ul`
   width: 100%;
   height: calc(100vh - 50px);
   position: absolute;
   top: 50px;
   left: ${({active}) => active ? "0px" : "-100vw"};
   display: flex;
   flex-direction: column;
   align-items: center;
   overflow: auto;
   background: rgba(26, 25, 24, 0.9);
   z-index: 5;
   transition: 0.5s;

   @media ${device.tablet} {
      width:50%;
      top: 100px;
      height: calc(100vh - 100px);
   }

   @media ${device.laptop} {
      height:100%;
      width: 800px;
      position: static;
      display: inline-flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      flex: 0.5px;
  }
`