import styled from 'styled-components';

export const StyledForm = styled.form`
   width: ${({width}) => width || "100%"};
   height: ${({height}) => height || "100%"};
   padding: ${({padding}) => padding || "5px"};
   box-sizing: border-box;
   display: ${({display}) => display || "flex"};
   flex-direction: ${({direction}) => direction || "column"};
   justify-content: ${({justify}) => justify || "space-around"};
   align-items: ${({align}) => align || "center"};
   border: 2px solid black;
   border-radius: 5px;
   background: #ffffff;
`