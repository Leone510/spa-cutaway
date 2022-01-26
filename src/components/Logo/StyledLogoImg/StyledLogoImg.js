import styled from 'styled-components';
import { device } from '../../../data/breakpoints';

export const StyledLogoIdmg = styled.div`
   width: 45px;
      height: 45px;
      display: inline-block;
      border-radius: 50%;
      overflow: hidden;
      background: $primaryOrange;

      @media ${device.tablet} {
        margin-left: 20px;
        height: 70px;
        width: 70px;
      }
`