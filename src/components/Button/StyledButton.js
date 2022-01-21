import styled from 'styled-components';

export const StyledButton = styled.button`
   width: ${({width}) => width || "150px"};
   height: ${({height}) => height || "40px"};
   margin: ${({margin}) => margin || "none"};
   border-radius: 5px;
   background: ${(({color}) => color || "white")};
   border: 1px solid ${(({border}) => border || "black")};
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;

   ${props => props.flex &&`
      width: unset;
      flex: ${props.flex};
   `}

   ${props => props.padding &&`
      padding: ${props.padding};
      box-sizing: border-box;
   `}
`