import styled from 'styled-components';
import { device } from '../../../data/breakpoints';

export const StyledTableForecast = styled.section`
   width: 95%;
   height: 95%;
   background: none;
   position: absolute;
   display: ${({hide}) => hide === "plug" ? "none" : "block"};
   z-index: 5;

   @media ${device.tablet} {
      height: 100%;
      padding: 10px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      flex: 0 1 100%;
      background: rgba(166, 189, 215, 0.5);
   }
`