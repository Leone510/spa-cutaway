import { StyledTitle } from "./StyledTitle"

export const Title = ({children, ...props}) => {

   return (
      <StyledTitle {...props}>
         {children}
      </StyledTitle>
   )
}