import { useDispatch } from "react-redux";
import { Button } from "../../../../components/Button/Button";
import { Flex } from "../../../../components/Flex/Flex";
import { forecastActions } from "../../../../store/forecast/actionTypes";
import { StyledInnerTable } from "../StyledInnerTable";
import { StyledModalMessage } from "../StyledModalMessage";

export const ExistCity = () => {
   const dispatch = useDispatch();

   return (
      <StyledInnerTable>
         <Flex flex="1 1 100%">
            <StyledModalMessage><b>This city is already exist in your city list</b></StyledModalMessage>
         </Flex>

         <Flex flex="0 0 200px">
            <Button 
               onClick={() => dispatch(forecastActions.setTableShow("addCity"))}
               color="#00693E"
            >
               <b>Ok</b>
            </Button>
         </Flex>
      </StyledInnerTable>
   )
}