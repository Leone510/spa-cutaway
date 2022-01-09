import { StyledButton } from "../../../../components/Button/StyledButton"
import { HiRefresh } from "react-icons/hi";

export const RefreshBtn = (props) => {

   return (
      
      <StyledButton
         {...props}
         height={"40px"}
         color={"#DAD871"}
         margin={"5px"}
      >

         <HiRefresh  size="2em" color="MidnightBlue"/>

      </StyledButton>
   )
}