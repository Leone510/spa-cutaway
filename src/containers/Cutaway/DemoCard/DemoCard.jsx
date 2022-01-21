import { useHistory } from "react-router";
import { CutawayBtn } from "../CutawayBtn/CutawayBtn";
import { StyledDemoBtnWrapper } from "./StyledDemoBtnWrapper";
import { StyledDemoCard } from "./StyledDemoCard";

export const DemoCard = ({img, page}) => {
   const history = useHistory();

   return (
     <StyledDemoCard img={img}>

         <StyledDemoBtnWrapper>

            <CutawayBtn onClick={() => history.push(page)
            }>
               <p>Go to work...</p>
            </CutawayBtn>
            
         </StyledDemoBtnWrapper>

     </StyledDemoCard>
   )
}