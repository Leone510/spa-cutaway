import styled from 'styled-components';

export const StyledFlex = styled.div`
   width: ${({width}) => width || "100%"};
   height: ${({height}) => height || "100%"};
   display: flex;
   flex-direction: ${({direction}) => direction || "row"};
   justify-content: ${({justify}) => justify || "space-around"};
   align-items: ${({align}) => align || "center"};

   ${props => props.flex &&`
      flex: ${props.flex};
   `}

   ${props => props.padding &&`
      padding: ${props.padding};
      box-sizing: border-box;
   `}

   ${props => props.background &&`
      background: ${props.background};
   `}

   ${props => props.border &&`
      border: ${props.border};
      box-sizing: border-box;
   `}
`


