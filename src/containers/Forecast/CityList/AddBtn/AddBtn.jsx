import { StyledButton } from "../../../../components/Button/StyledButton"
import { HiOutlineZoomIn } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { forecastActions } from "../../../../store/forecast/actionTypes";

export const AddBtn = (props) => {
   const dispatch = useDispatch();

   return (
      
      <StyledButton
         {...props}
         height={"40px"}
         color={"#00693E"}
         margin={"5px"}
         onClick={() => dispatch(forecastActions.setTableShow("addCity"))}
      >

         <HiOutlineZoomIn  size="2em" color="MidnightBlue"/>

      </StyledButton>
   )
}