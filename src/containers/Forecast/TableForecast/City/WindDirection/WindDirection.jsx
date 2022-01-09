import { HiOutlineArrowUp } from "react-icons/hi";
import { StyledWindDirection } from "./StyledWindDirection";

export const WindDirection = ({degrees}) => {

   return (
      <StyledWindDirection degrees={degrees}>
         <HiOutlineArrowUp />
      </StyledWindDirection>
   )
}