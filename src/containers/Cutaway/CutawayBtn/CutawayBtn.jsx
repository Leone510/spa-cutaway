import { StyledCutawayBtn } from "./StyledCutawayBtn";

export const CutawayBtn = ({children, ...props}) => {

   return (
      <StyledCutawayBtn {...props}>
         {children}
      </StyledCutawayBtn>
   )
}