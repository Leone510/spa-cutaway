import { HiOutlineX } from "react-icons/hi";
import { StyledButton } from "../../../../../components/Button/StyledButton";

export const CloseBtn = (props) => {

   return (
      <StyledButton 
         {...props}
         width={"40px"}
         height={"40px"}
         margin={"5px"}
         color={"#B03F35"}
      >

         <HiOutlineX size="3em" color="MidnightBlue"/>

      </StyledButton>
   )
}