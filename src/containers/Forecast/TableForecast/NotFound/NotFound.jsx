import { useDispatch } from "react-redux";
import { Button } from "../../../../components/Button/Button";
import { Flex } from "../../../../components/Flex/Flex";
import { forecastActions } from "../../../../store/forecast/actionTypes";
import { StyledInnerTable } from "../StyledInnerTable";

export const NotFound = () => {
   const dispatch = useDispatch();

   return (
      <StyledInnerTable>
         <Flex flex="1 1 100%">
            <h2><b>The requested city was not found</b></h2>
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