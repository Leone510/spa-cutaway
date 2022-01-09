import styled from "styled-components";
import { device } from '../../../data/breakpoints';

export const StyledMenuItem = styled.li`
   margin: 10px 0px 30px 0;
   width: 70%;
   height: 50px;
   position: relative;
   display: inline-flex;
   justify-content: center;
   align-items: center;
   border-radius: 5px;
   z-index: 1;
   overflow: hidden;
   background: radial-gradient(circle, rgba(26,25,24,1) 25%, rgba(26,25,24,0) 100%);
   border-left: 3px solid #d5921a;
   border-bottom: 1px solid #d5921a;
   box-sizing: border-box;
   cursor: pointer;
   color: #f9f4e6;

   h4 {
      display: inline-block;
      z-index: 2;
      transition: all 0.8s ease-in-out;
   }

   &:before {
      content: "";
      width: 150px;
      height: 30px;
      position: absolute;
      z-index:0;
      left: -150px;
      background: #d5921a;
      transition: all 0.8s ease-in-out;
   }

   @media ${device.laptop} {
      &:hover {
         color: #1a1918;
      }

      &:hover:before {
         left: 0;
         
      }
   }

   

   @media ${device.laptop} {
      margin: 10px 0px;
      width: 150px;
      height: 30px;
      border-bottom: none;
   }
`