import { StyledHeaderBtns } from "./StyledHeaderBtns";
import { Button } from "../../../../components/Button/Button";
import { HiRefresh, HiChevronDoubleLeft } from "react-icons/hi";
import { BackBtn } from "./BackBtn/BackBtn";

export const HeaderBtns = () => {

   return (
      <StyledHeaderBtns>
         <Button
            width={"40px"}
            height={"40px"}
            color={"#00693E"}
            margin={"5px"}
         >

            <HiRefresh  size="3em" color="MidnightBlue"/>

         </Button>

         <BackBtn>
            <HiChevronDoubleLeft size="3em" color="MidnightBlue"/>
         </BackBtn>

      </StyledHeaderBtns>
   )
}