import styled, {css} from 'styled-components';

export const StyledContentWrapper = styled.div`
   height: 100%;
   width: ${({width}) => width || "100%"};
   display: flex;
   justify-content: space-around;
   align-items: center;

   ${props => props.padding && css`
      padding: ${props => props.padding || "0"};
      box-sizing: border-box;
   `}
`


