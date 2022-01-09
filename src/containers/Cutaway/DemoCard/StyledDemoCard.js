import styled from "styled-components";

export const StyledDemoCard = styled.div`
   width: 90%;
   height: 90%;
   border: 2px solid black;
   border-radius: 5px;
   box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.6);
   display: flex;
   justify-content: space-around;
   align-items: center;
   background: ${(props => props.img ? props.img : "Sienna")};
   background-size: cover;
`