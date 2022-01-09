import styled from 'styled-components';
import { device } from '../../data/breakpoints';

export const StyledBurger = styled.div`
   margin-right: 10px;
   width: 40px;
   height: 40px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   position: relative;
   overflow: hidden;
   transition: 0.5s;

   :before {
      content: '';
      width: 100%;
      height: 7px;
      position: absolute;
      top: 0;
      left: 0;
      background: ${({color}) => color || "white"};
      transition: 0.5s;

      ${props => props.active &&`
      transform: rotate(45deg);
      top: 42%;
      `}
   }

   span {
      width: 100%;
      height: 7px;
      display: inline-block;
      background: ${({color}) => color || "white"};
      position: relative;

      ${props => props.active &&`
      left: -60px;
      `}
   }

   :after {
      content: '';
      width: 100%;
      height: 7px;
      position: absolute;
      bottom: 0;
      left: 0;
      background: ${({color}) => color || "white"};
      transition: 0.5s;

      ${props => props.active &&`
      transform: rotate(-45deg);
      bottom: 40%;
      `}
   }

   @media ${device.laptop} {
      display: none;
   }
`