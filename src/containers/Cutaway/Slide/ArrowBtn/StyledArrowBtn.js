import styled from 'styled-components';

export const StyledArrowBtn = styled.button`
   width: 30px;
   height: 100%;
   padding: ${({padding}) => padding || "0px"};
   box-sizing: border-box;
   background: white;
   opacity: 0.5;
   cursor: pointer;

   &:hover {
      opacity: 1;
   }
`