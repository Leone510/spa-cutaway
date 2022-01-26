import { StyledLogo } from "../../components/Logo/StyledLogo.js";

export const Logo = ({children}) => {

   return (
      <StyledLogo>
         {children}
      </StyledLogo>
   )
}