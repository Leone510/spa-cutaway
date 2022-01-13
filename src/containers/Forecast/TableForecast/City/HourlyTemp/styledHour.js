import styled from "styled-components";

export const StyledHour = styled.div`
   width: 50px;
   position: absolute;
   display: flex;
   justify-content: space-around;
   align-items: center;
   border: 1px solid #000000;
   border-radius: 5px;
   box-sizing: border-box;
   font-size: small;
   
   ${props => {
      return (`
         height: ${props.coord.height}px;
         bottom: ${props.coord.y}px;
         left: ${props.coord.x}px;
         background: rgba(
            ${props.coord.color.r}, 
            ${props.coord.color.g}, 
            ${props.coord.color.b}, 
            .5
         );

      `)
   }}
`


// x
// y
// height