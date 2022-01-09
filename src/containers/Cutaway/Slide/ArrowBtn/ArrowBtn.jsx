import { StyledArrowBtn } from "./StyledArrowBtn";

export const ArrowBtn = ({children, ...props}) => {

   return (
      <StyledArrowBtn {...props}>
         {children}
      </StyledArrowBtn>
   )
}