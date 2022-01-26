import { StyledGreatingsBox } from "./StyledGreatingsBox"

export const GreatingsBox = ({children}) => {

   return (
      <StyledGreatingsBox>
         {children}
      </StyledGreatingsBox>
   )
}