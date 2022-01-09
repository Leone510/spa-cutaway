import { StyledButton } from "../../../../components/Button/StyledButton"
import { MdSortByAlpha } from "react-icons/md";

export const SortBtn = (props) => {

   return (
      <StyledButton
         {...props}
         height={"40px"}
         color={"#DAD871"}
         margin={"5px"}
      >
         <MdSortByAlpha size="2em" color="MidnightBlue"/>
      </StyledButton>
   )
}