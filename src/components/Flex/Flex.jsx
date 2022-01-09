import { StyledFlex } from "./StyledFlex"

export const Flex = ({children, ...props}) => {
   return (
      <StyledFlex {...props}>
         {children}
      </StyledFlex>
   )
}