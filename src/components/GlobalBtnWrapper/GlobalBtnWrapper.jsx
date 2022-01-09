import { FaArrowCircleUp } from "react-icons/fa";
import { Button } from "../Button/Button";
import { Flex } from "../Flex/Flex";
import { StyledGlobalBtnWrapper } from "./StyledGlobalBtnWrapper";

export const GlobalBtnWrapper = () => {

   return (
      <StyledGlobalBtnWrapper>
         <Flex className="globalBtn" justify="flex-end" align="flex-end">
            <Button>
               <FaArrowCircleUp/>
            </Button>
         </Flex>
      </StyledGlobalBtnWrapper>
   )
}