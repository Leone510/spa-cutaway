import { useHistory } from "react-router";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { StyledButton } from "../../../../components/Button/StyledButton";

export const BackBtn = () => {
   const history = useHistory();

   return (
      <StyledButton 
         width={"40px"}
         height={"40px"}
         margin={"5px"}
         color={"#B03F35"}
         onClick={() => history.push('/cuaway')}
      >

         <HiChevronDoubleLeft size="3em" color="MidnightBlue"/>

      </StyledButton>
   )
}