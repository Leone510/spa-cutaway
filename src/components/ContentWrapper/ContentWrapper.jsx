import { StyledContentWrapper } from "./StyledContentWrapper"

export const ContentWrapper = ({children, ...props}) => {
   return (
      <StyledContentWrapper {...props} >
         {children}
      </StyledContentWrapper>
   )
}