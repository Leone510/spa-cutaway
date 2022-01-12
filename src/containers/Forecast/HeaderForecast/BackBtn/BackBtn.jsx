import { useHistory } from "react-router";
import { ImExit } from "react-icons/im";
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

         <ImExit size="3em" color="MidnightBlue"/>

      </StyledButton>
   )
}