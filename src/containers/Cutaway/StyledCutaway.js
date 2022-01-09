import styled from "styled-components";
import { device } from "../../data/breakpoints";

export const StyledCutaway = styled.div`
   width: 100%;
   height: 100vh;

   ${props => props.menuActive &&`
      overflow: hidden;
   `}

   @media ${device.laptop} {
      overflow: visible;
   }
`