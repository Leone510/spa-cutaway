import styled from 'styled-components';

export const StyledCityCard = styled.div`
   width: 100%;
   height: 40px;
   border: 2px solid black;
   border-radius: 5px;
   background: #A6BDD7;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   cursor: pointer;
   transition: 0.6s;
   overflow: hidden;

   &:hover {
      height: 150px;
   }

`