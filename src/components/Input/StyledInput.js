import styled from 'styled-components';

export const StyledInput = styled.input`
   width: ${({width}) => width || "200px"};
   height: ${({height}) => height || "30px"};
   border-radius: ${({radius}) => radius || "5px"};
   background: ${({background}) => background || "#ffffff"};

   ${props => props.flex &&`
      flex: ${props.flex};
   `}
`