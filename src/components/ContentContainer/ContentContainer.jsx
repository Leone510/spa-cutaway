import { StyledContentContainer } from "./StyledContentContainer"

export const ContentContainer = ({children, ...props}) => {
   return (
      <StyledContentContainer {...props}>
         {children}
      </StyledContentContainer>
   )
}